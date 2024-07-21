'use client'
import Image from "next/image";
import logoApp from "@/public/logo.png";
import CarImage from "@/public/car.png";
import Link from "next/link";
import { ChevronDown, Facebook, Youtube } from "lucide-react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';


export default function Home() {
  return (
    <main className="w-screen my-0 mx-auto min-h-screen text-white">
      <NavigationMenu.Root className="fixed top-0 z-50 w-screen my-0 mx-auto py-0  bg-slate-500 px-36">
        <NavigationMenu.List className="flex justify-between items-center">
          <NavigationMenu.Item>
            <Link href="#">
              <Image alt="" src={logoApp} width={150}></Image>
            </Link>
          </NavigationMenu.Item>
          <ul className="flex justify-center items-center gap-6 font-[500]">
            <NavigationMenu.Item>
              <Link href="#" className="hover:text-red-600">Início</Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="#" className="hover:text-red-600">Sobre</Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
            <NavigationMenu.Trigger className="hover:text-red-600 flex group">Serviços<ChevronDown className="group-hover:rotate-180 transition-transform duration-150"/></NavigationMenu.Trigger>
            <NavigationMenu.Content className="bg-slate-600 absolute top-[107px] rounded-sm grid grid-cols-2  items-center justify-center">
            <Link href="#" className="hover:bg-red-600 p-4">Serviços</Link>
            <Link href="#" className="hover:bg-red-600 p-4">Serviços</Link>
            <Link href="#" className="hover:bg-red-600 p-4">Serviços</Link>
            <Link href="#" className="hover:bg-red-600 p-4">Serviços</Link>
            </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:text-red-600 flex group" >Legislação <ChevronDown className="group-hover:rotate-180 transition-transform duration-150"/></NavigationMenu.Trigger>
              <NavigationMenu.Content className="bg-slate-600 absolute top-[107px] rounded-sm grid grid-cols-2  items-center justify-center">
            <Link href="#" className="hover:bg-red-600 p-4">Legislação</Link>
            <Link href="#" className="hover:bg-red-600 p-4">Legislação</Link>
            <Link href="#" className="hover:bg-red-600 p-4">Legislação</Link>
            <Link href="#" className="hover:bg-red-600 p-4">Legislação</Link>
            </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="#" className="hover:text-red-600">Suporte</Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="#" className="hover:text-red-600">Contactos</Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="flex justify-center items-center gap-4">
              <Link href="#" className="hover:text-blue-600">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-red-600">
                <Youtube />
              </Link>
            </NavigationMenu.Item>
          </ul>
         
        </NavigationMenu.List>
      </NavigationMenu.Root>

      

      <footer>

      </footer>
    </main>
  );
}
