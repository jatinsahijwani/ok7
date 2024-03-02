import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl mt-10 md:mt-14 lg:mt-18 lg:text-7xl text-white font-bold inter-var text-center">
        OK7 Technical Services
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Of the <code>Devs</code>, By the <code>Devs</code>, For the <code>Devs</code>.
      </p>
    </WavyBackground>
    </main>
  );
}
