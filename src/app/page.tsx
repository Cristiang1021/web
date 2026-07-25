import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Plans } from "@/components/Plans";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Plans />
        <Benefits />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
