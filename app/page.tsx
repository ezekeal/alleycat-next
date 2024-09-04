import Header from "@/app/components/Header"
import Video from "@/app/components/Video";
import AboutGame from "@/app/components/AboutGame";
import Fonts from "@/app/components/Fonts";
import Features from "@/app/components/Features";
import AboutUs from "@/app/components/AboutUs";
import Team from "@/app/components/Team";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Home() {
  return (
    <main>
        <Header />
        <Video />
        <AboutGame />
        <Features />
        <AboutUs />
        <Team />
        <Contact />
        <Footer />
    </main>
  );
}
