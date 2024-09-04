export default function FeatureCard(
    {title, description}: {title: string, description: string}
) {
    return (
    <div className="bg-white p-6">
        <h3 className="font-sub-head font-black text-fuchsia-500 text-md">
            {title}
        </h3>
        <p className="font-alt-body text-xs">
            {description}
        </p>
    </div>
    )
}