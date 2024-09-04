export default function Video() {
    return (
        <section className="relative" style={{paddingBottom: "56.25%"}}>
            <iframe
                className="block"
                title="vimeo-player"
                src="https://player.vimeo.com/video/854493115?h=dc3d06a84b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allowFullScreen
                style={{position: "absolute", top: 0, left: 0}}
                height="100%"
                width="100%"
            ></iframe>
        </section>
    )
}