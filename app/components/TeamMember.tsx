export default function TeamMember({name, role}: {name: string, role: string}) {
    return (
    <div>
        <h3 className="font-sub-head font-black text-lg text-fuchsia-500">{name}</h3>
        <p className="font-body text-xs">{role}</p>
    </div>
    );
}