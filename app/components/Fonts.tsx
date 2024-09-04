import {charge, cruiser, cyber, mylodon, nostromo} from "@/app/fonts/fonts"

export default function Fonts() {
    return (
        <ul>
            <li className={charge.className}>charge</li>
            <li className={cruiser.className}>cruiser</li>
            <li className={cyber.className}>cyber</li>
            <li className={mylodon.className}>mylodon</li>
            <li className={nostromo.className}>nostromo</li>
        </ul>
    )
}