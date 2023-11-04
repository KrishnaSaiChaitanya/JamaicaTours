import { Inter } from "next/font/google";
import LoginPage from "@/components/LoginPage";
import HomePage from "@/components/Home";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
