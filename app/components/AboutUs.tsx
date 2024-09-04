import Image from "next/image";
import { cyber } from "@/app/fonts/fonts"

export default function AboutUs() {
    return (
        <section id="section-about-us" className="w-full bg-white grid sm:grid-cols-2 gap-2 items-center p-4">
            <div className="text-sm pr-4">
                <h2 className={`${cyber.className} text-violet-700 text-xl my-4`}>About Us</h2>
                <p className="mb-4">
                    We are Alleycat Asset Acquisitions aka Triple A. We believe in transforming your cyberpunk live-action role-playing (LARP) experience into an immersive adventure that transcends the ordinary.
                </p>
                <p className="mb-4">
                    Our mission is to offer players a chance to step into an immersive cyberpunk world, where every interaction and every piece of technology allows participants  to fully embody their characters and the world they inhabit.
                </p>
                <p>
                    Our focus on innovation and attention to detail ensures that each event is more than just a game – it’s a memorable journey.
                </p>
            </div>
            <div>
                <Image alt="alleycat sign" src="/images/aboutus.png" width={628} height={420} />
            </div>
        </section>
    );
}