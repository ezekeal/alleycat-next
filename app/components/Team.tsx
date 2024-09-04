import Image from "next/image";
import { cyber } from "@/app/fonts/fonts"
import TeamMember from "@/app/components/TeamMember"

export default function Team() {
    return (
        <section id="section-team" className="w-full bg-cyan-400 grid grid-cols-1 p-6">
            <h2 className={`${cyber.className} text-violet-700 text-xl my-4 justify-self-center`}>Team Members</h2>
            <div className="bg-white grid sm:grid-cols-2 p-6 mb-6 gap-4">
                <TeamMember name="Elli Furedy" role="Development & Engineering" />
                <TeamMember name="Andrea Furedy" role="Creative Director" />
                <TeamMember name="Ariella Yendler" role="Set Design & Architecture Lead" />
                <TeamMember name="Zach Koch" role="Server Programming & Web Dev" />
                <TeamMember name="Kenton Miscoe" role="Event Coordination & Accommodation Management" />
                <TeamMember name="Evelynne Walker" role="Programming & Development" />
                <TeamMember name="Philip Danger" role="Set Design & Merch Design Lead" />
                <TeamMember name="Ting Anderson" role="Fabrication and Electronics Design Assistant" />
                <TeamMember name="Corey Jenkins" role="Visual Design Consultant" />
            </div>
            <Image alt="team" src="/images/team.png" width={938} height={963}/>
        </section>
    );
}