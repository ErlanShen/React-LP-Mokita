import { Fraunces, Nunito } from "next/font/google";
import SalesProvider from "@/components/SalesProvider";
import SocialProofToast from "@/components/SocialProofToast";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Capuchas, orejas y detalles — Tu primer proyecto de cosplay amigable",
  description:
    "Aprende a transformar una hoodie básica en tu primer proyecto de cosplay: una capucha con orejas y detalles de personaje, con patrones listos e instrucciones claras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${nunito.variable}`}>
        <SalesProvider>
          {children}
          <SocialProofToast />
        </SalesProvider>
      </body>
    </html>
  );
}
