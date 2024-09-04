import Image from "next/image";

export default function Footer() {
    return (
        <footer id="footer" className="grid grid-cols-1 justify-items-center p-4 mb-5">
        <div className="inline-grid grid-cols-3 gap-4 m-4 w-48 items-baseline">
            <a href="https://www.facebook.com/profile.php?id=61552863437428">
                <Image className="w-8" alt="facebook" src="/images/facebook.svg" width={16} height={18}/>
            </a>
            <a href="https://l.instagram.com/?u=https%3A%2F%2Fdiscord.com%2Finvite%2F6XGTCbKkUy&e=AT2QQc5LXE70_Jv_UnKBv8MQFlRhd0k-sY1zSng4FE2Y8G2hG5hwQhGusJMp1KVk1RBkw-Wg5vd_yEXESixl32gvrHuf_ZXOby0wW8pYUYQMJwbyqOjj">
                <Image className="w-8" alt="discord" src="/images/discord.svg" width={16} height={16}/>
            </a>
            <a href="https://www.instagram.com/alleycatassetacquisitions">
                <Image className="w-8" alt="instagram" src="images/instagram.svg" width={16} height={18}/>
            </a>
        </div>
        <span className="text-fuchsia-500 text-xs">© 2024 Alleycat Asset Acquisitions. All Rights Reserved.</span>
        </footer>
    );
}