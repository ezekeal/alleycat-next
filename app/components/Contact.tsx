'use client'
import { useFormStatus, useFormState } from 'react-dom'
import { createMessage, MessageState } from "@/app/lib/actions";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { cyber } from "@/app/fonts/fonts"

export default function Contact() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}>
            <ContactForm />
        </GoogleReCaptchaProvider>
    )
}

function ContactForm() {
    const initialState: MessageState = { message: null, errors: {}};
    const [state, formAction] = useFormState(addRecaptcha, initialState);
    const { executeRecaptcha } = useGoogleReCaptcha();

    async function addRecaptcha(prevState: MessageState, formData: FormData) {
        let gRecaptchaToken = ''
        if (executeRecaptcha) {
            gRecaptchaToken = await executeRecaptcha('contactMessage');
        }
        formData.set('captcha', gRecaptchaToken);

        return createMessage(prevState, formData)
    }

    return (
        <section id="section-contact" className="bg-violet-800 text-yellow-300 p-6 grid grid-cols-1 justify-items-center">
            <h2 className={cyber.className}>Get In Touch</h2>
            <form action={formAction}>
                <label className="font-sub-head text-yellow grid w-full mt-4">
                    Name
                    <input
                        className="rounded-md text-black font-alt-body"
                        type="text"
                        name="name"
                        aria-describedby="name-error"
                    />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                </label>

                <label className="font-sub-head text-yellow grid w-full mt-4">
                    E-mail
                    <input
                        className="rounded-md text-black font-alt-body"
                        type="email"
                        name="email"
                        aria-describedby="email-error"
                    />
                    <div id="email-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.email &&
                            state.errors.email.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                </label>

                <label className="font-sub-head text-yellow grid w-full mt-4">
                    Message
                    <textarea
                        className="rounded-md text-black font-alt-body"
                        name="message"
                        aria-describedby="message-error"
                    />
                    <div id="message-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.message &&
                            state.errors.message.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                                {error}
                            </p>
                        ))}
                    </div>
                </label>
                <div id="captcha-error" aria-live="polite" aria-atomic="true">
                    {state.errors?.captcha &&
                        state.errors.captcha.map((error: string) => (
                        <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                        </p>
                    ))}
                </div>
                <div className="mt-4 w-full">
                {state.sent ?
                    <p className="w-full">Message Sent</p> :
                    <SubmitButton />}
                </div>
            </form>
        </section>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus()
  
    return (
      <button
        className="bg-orange-400 text-gray-800 w-full rounded-md"
        type="submit"
        disabled={pending}>
        {pending ? 'Sending...' : 'Send Message'}
      </button>
    )
  }