import Image from "next/image";
import logoApp from "@/public/logo.png";
import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";
export default function Home() {
  return (
    <main className="w-screen my-0 mx-auto min-h-screen text-white">
      <header className="fixed top-0 z-50 w-screen my-0 mx-auto py-0  bg-gray-500 px-36">
        <nav className="flex justify-between items-center">
          <div>
            <Link href="#">
              <Image alt="" src={logoApp} width={150}></Image>
            </Link>
          </div>
          <ul className="flex justify-center items-center gap-6 font-[500]">
            <li>
              <Link href="#" className="hover:text-red-600">Início</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-600">Sobre</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-600">Serviços</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-600">Legislação</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-600">Suporte</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-600">Contactos</Link>
            </li>
            <li className="flex justify-center items-center gap-4">
              <Link href="#" className="hover:text-blue-600">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-red-600">
                <Youtube />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
