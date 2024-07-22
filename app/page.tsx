"use client";
import Image from "next/image";
import logoApp from "@/public/logo.png";
import CarImage from "@/public/car.png";
import CarImage1 from "@/public/download.jpeg";
import Link from "next/link";
import { ChevronDown, Facebook, Youtube } from "lucide-react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import SwipperComponent from "./src/components/SwipperComponent";
import Carousel from "./src/components/Carousel";

export default function Home() {
  return (
    <main className="w-screen my-0 mx-auto min-h-screen text-white">
      {/* navbar */}
      <NavigationMenu.Root className="fixed top-0 z-50 w-screen my-0 mx-auto py-0  bg-slate-500 px-36 shadow-md">
        <NavigationMenu.List className="flex justify-between items-center">
          <NavigationMenu.Item>
            <Link href="#">
              <Image alt="" src={logoApp} width={150}></Image>
            </Link>
          </NavigationMenu.Item>
          <ul className="flex justify-center items-center gap-6 font-[500]">
            <NavigationMenu.Item>
              <Link href="#" className="hover:text-red-600">
                Início
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="#" className="hover:text-red-600">
                Sobre
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:text-red-600 flex group">
                Serviços
                <ChevronDown className="group-hover:rotate-180 transition-transform duration-150" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="bg-slate-600 absolute top-[107px] rounded-sm grid grid-cols-2  items-center justify-center">
                <Link href="#" className="hover:bg-red-600 p-4">
                  Serviços
                </Link>
                <Link href="#" className="hover:bg-red-600 p-4">
                  Serviços
                </Link>
                <Link href="#" className="hover:bg-red-600 p-4">
                  Serviços
                </Link>
                <Link href="#" className="hover:bg-red-600 p-4">
                  Serviços
                </Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:text-red-600 flex group">
                Legislação{" "}
                <ChevronDown className="group-hover:rotate-180 transition-transform duration-150" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="bg-slate-600 absolute top-[107px] rounded-sm grid grid-cols-2  items-center justify-center">
                <Link href="#" className="hover:bg-red-600 p-4">
                  Legislação
                </Link>
                <Link href="#" className="hover:bg-red-600 p-4">
                  Legislação
                </Link>
                <Link href="#" className="hover:bg-red-600 p-4">
                  Legislação
                </Link>
                <Link href="#" className="hover:bg-red-600 p-4">
                  Legislação
                </Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="#" className="hover:text-red-600">
                Suporte
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="#" className="hover:text-red-600">
                Contactos
              </Link>
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

      {/* first section, the landing */}
      <section
        id="landing"
        className="relative top-[100px] text-black flex justify-around items-center px-36 mx-auto overflow-x-hidden pt-10 mb-36"
      >
        <div className="flex flex-col justify-center items-start gap-4 w-[600px]">
          <h1 className="font-two text-[48px] font-bold">
            {" "}
            <span className="text-red-600">SOFTWARE</span> DE APOIO AO ENSINO DA
            CONDUÇÃO
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            quibusdam quod quae aut, dolorem velit officia repellat voluptatibus
            eaque cum dolorum debitis rem, qui error illum porro ex?
            Repudiandae, nam.
          </p>
          <div className="flex gap-3 ">
            <button
              type="button"
              className="font-[500] px-[10px] py-[16px] bg-red-600 rounded text-white hover:brightness-90"
            >
              Quem somos
            </button>
            <button
              type="button"
              className="font-[500] px-[10px] py-[16px] bg-red-100 rounded text-red-600 hover:brightness-90"
            >
              {" "}
              Avaliar Software
            </button>
          </div>
        </div>
        <div>
          <Image alt="" src={CarImage} width={700} />
        </div>
      </section>
      {/* horizontal page wrapper */}
      <div className="App bg-slate-100 h-28 px-48 mb-40">
        <SwipperComponent />
      </div>

      {/* second sections, about the company */}
      <section id="about" className="text-black">
        <div className="pb-20">
          <h2 className="text-[48px] font-bold text-center  font-two">
            <span className="text-red-600">Sobre</span> Empresa
          </h2>
          <p className="text-center text-gray-500">
            Somos a New Drive Tecnology and Training <br /> Uma empresa dedicada
            a Ensino de condução. Fundada em [Ano] por [Fundador]
          </p>
        </div>

        <div className="flex justify-center items-center px-48 gap-10">
          {/* <div className="flex">
          <Image alt="" src={CarImage1}  width={600} className="rounded-lg"/>
        </div> */}
          <div className="bg-slate-100 w-[50%] h-auto my-10 rounded-lg">
            <Carousel />
          </div>
          <div className="flex flex-col gap-6 mx-auto w-[600px]">
            <div>
              <h3 className="font-bold">Missão</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                efficitur et turpis non varius. Sed at justo non turpis
                venenatis pellentesque.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Nossa Equipe</h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                efficitur et turpis non varius. Sed at justo non turpis
                venenatis pellentesque.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
