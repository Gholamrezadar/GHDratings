import { Inter } from "next/font/google";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="font-inter">
      hi
    </div>
  );
}
