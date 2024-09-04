import Image from "next/image";
import { cyber } from "@/app/fonts/fonts"

export default function Header() {
    return (
        <header className={`${cyber.className} flex flex-col sm:flex-row text-xs text-fuchsia-500 justify-between items-end m-2 mb-1 gap-4`}>
            <h1 className="flex items-end gap-2">
                <Image
                    className="self-end w-10"
                    src="/images/aaalogo.png"
                    alt="Alleycat Logo"
                    width={48}
                    height={48}
                    priority
                />
                <span className="min-w-80" >Alleycat Asset Acquisitions LLC</span>
            </h1>
            <nav>
                <ul className="flex gap-1 sm:gap-4">
                    <li><a href="/#section-about-game">About Game</a></li>
                    <li><a href="/#section-about-us">About Us</a></li>
                    <li><a href="/#section-team">Triple A Team</a></li>
                    <li><a href="/#footer">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}