import Image from "next/image";
import { cyber } from "@/app/fonts/fonts"

export default function AboutGame() {
    return (
        <section id="section-about-game" className="w-full bg-white grid sm:grid-cols-2">
        <div className="p-4 text-sm">
          <h2 className={`${cyber.className} text-violet-700 text-lg my-4`}>About The Game</h2>
          <p>
            Set in a Real Life dystopian future setting of Neotropolis, the Cyberpunk Bounty Hunter game immerses players in a high-tech, low-life world where they must navigate through a city teeming with danger.
          </p>
          <br />
          <p>
            Players take on the role of Bounty Hunters and Volunteer Bounties to clash in a real life high-stakes game of survival and strategy.
          </p>
          <br />
          <p>
            As a Bounty Hunter, your mission is to track and eliminate your targets using cutting-edge cyberpunk weaponry, swift reflexes, and strategic cunning. Volunteer Bounties, on the other hand, must evade capture and outsmart the hunters.
          </p>
          <br />
        </div>
        <div className="grid grid-cols-1 items-center">
            <Image alt="scoreboard" src="/images/about.png" width={615} height={403}/>
        </div>
      </section>
    );
}