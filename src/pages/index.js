import { Inter } from "next/font/google";
import LoginPage from "@/components/LoginPage";
import HomePage from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HomePage />

      {/* <LoginPage /> */}
    </main>
  );
}
