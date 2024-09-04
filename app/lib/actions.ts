'use server';
import { z } from 'zod';

const MessageFormSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).min(1, { message: "Name must contain at least one character"}),
    email: z.string().email(),
    message: z.string({
        required_error: "Message is required",
        invalid_type_error: "Messge must be a string",
    }).min(1, { message: "Message must contain at least one character"}),
    captcha: z.boolean().refine((valid) => valid, { message: 'Captcha failed' }),
}).required();

export type MessageState = {
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
        captcha?: string[];
    };
    message?: string | null;
    sent?: boolean;
}

async function validateCaptcha(captchaToken: string): Promise<boolean> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const captchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
    const res = await captchaResponse.json();
    return res.success;
}

export async function createMessage(prevState: MessageState, formData: FormData) {
    const validateFields = await MessageFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        captcha: await validateCaptcha(formData.get('captcha') as string),
    });
    
    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Invalid Fields. Failed to Send Message.'
        }
    }

    sendToDiscord(validateFields.data);
    return { sent: true};
};


function sendToDiscord({name, email, message}: {name: string, email: string, message: string}) {
    const webhookUrl = process.env.DISCORD_MESSAGE_URL ?? '';
    const payload = {
        content: message,
        embeds: [
            {
                color: 65280,
                fields: [
                    {
                        name: "Name",
                        value: name,
                        inline: true
                    },
                    {
                        name: "E-mail",
                        value: email,
                        inline: true
                    }
                ],
                timestamp: new Date().toISOString()
            }
        ]
    };

    const body = JSON.stringify(payload);

    return fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body
    })
    .then(response => {
        if (!response.ok) {
            console.log('throwing error')
            throw new Error(`Error: ${response.statusText}`);
        }
        return response.text();
    })
    .then(() => null)
    .catch(error => error);
}