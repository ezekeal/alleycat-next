import Image from "next/image";
import { cyber } from "@/app/fonts/fonts"
import FeatureCard from "@/app/components/FeatureCard";

export default function Features() {
    return (
        <section id="section-game-features" className="w-full bg-cyan-400 grid grid-cols-1 p-6">
        <h2 className={`${cyber.className} text-violet-700  text-xl my-4 justify-self-center`}>Game Features</h2>
        <div className="grid sm:grid-cols-4 gap-6 mb-6">
            <FeatureCard
                title="Immersive Environment" 
                description="Add a Interactive and intense video game like adventure to Neotropolis."
            />
            <FeatureCard
                title="Real-time Strategy" 
                description="Plan your moves and outsmart your enemies with real-time strategic gameplay."
            />
            <FeatureCard
                title="Cyberpunk Weapons" 
                description="Equip yourself with a PDN (Personal Data Node) real-time duels, tracking, and hacking."
            />
            <FeatureCard
                title="PvP & Pve Modes" 
                description="Join forces with friends, compete against other players, and Hack hidden caches."
            />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 items-center gap-4">
            <Image
                alt="PDNs" src="/images/features 1.png"
                width={480} height={395} />
            <Image
                alt="bounty boards" src="/images/features 2.png"
                width={480} height={365} />
            <Image
                className="col-start-2 row-start-1 row-span-2"
                alt="office" src="/images/features 3.png"
                width={664} height={781} />
        </div>
      </section>
    );
}