"use client";
import Image from "next/image";
import logoApp from "@/public/logo.png";
import CarImage from "@/public/car.png";
import CarImage1 from "@/public/download.jpeg";
import Link from "next/link";
import {
  ChevronDown,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
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
            <NavigationMenu.Item className="group">
              <NavigationMenu.Trigger className="hover:text-red-600 flex ">
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
            <NavigationMenu.Item className="group">
              <NavigationMenu.Trigger className="hover:text-red-600 flex ">
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
      <section id="about" className="text-black mb-40 px-48">
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

      {/* Third Section, about the Software */}
      <section id="Software" className="text-black px-48 mb-40">
        <div className="pb-20">
          <h2 className="text-[48px] font-bold text-center font-two">
            <span className="text-red-600">Cont</span>actos
          </h2>
          <p className="text-center text-gray-500">
            Somos a New Drive Tecnology and Training Uma empresa dedicada
          </p>
        </div>
        <div className="grid grid-cols-4  gap-x-5">
          <div className="col-span-2 bg-slate-100 rounded-lg flex flex-col justify-center items-center p-10 gap-1 hover:brightness-95 cursor-pointer">
            <MapPin className="text-red-600 w-14 h-14" />
            <h3 className="font-two font-bold text-lg">Endereço</h3>
            <p className="text-gray-500 italic">
              Rua [Rua], [Número], [Localidade]
            </p>
          </div>
          <div className="bg-slate-100 rounded-lg flex flex-col justify-center items-center p-10 gap-1 hover:brightness-95 cursor-pointer">
            <Phone className="text-red-600 w-14 h-14" />
            <h3 className="font-two font-bold text-lg">Telefone</h3>
            <p className="text-gray-500 italic">+244 938 295 867</p>
          </div>
          <div className="bg-slate-100 rounded-lg flex flex-col justify-center items-center p-10 gap-1 hover:brightness-95 cursor-pointer">
            <Mail className="text-red-600 w-14 h-14" />
            <h3 className="font-two font-bold text-lg">Email</h3>
            <p className="text-gray-500 italic">vectorclever00@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-5 my-5">
          <div>
            <iframe
              className="border-0 w-full h-[400px] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            ></iframe>
          </div>
          <div className="bg-slate-100 flex justify-center items-center rounded-lg">
            <form className="bg-transparent w-full p-10">
              <div className="grid grid-cols-2 gap-3">
                <div className="">
                  <input
                    className="bg-slate-50 h-[43px] border text-gray-600 text-sm border-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-sm p-2 focus:border-red-600 w-full"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <input
                    className="bg-slate-50 h-[43px] border text-gray-600 text-sm border-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-sm p-2 focus:border-red-600 w-full"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>

                <div className="col-span-2">
                  <input
                    className="bg-slate-50 h-[43px] border text-gray-600 text-sm border-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-sm p-2 focus:border-red-600 w-full"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>

                <div className="col-span-2">
                  <textarea
                    className="bg-slate-50 h-[143px] border text-gray-600 text-sm border-gray-200 rounded-md placeholder:text-gray-400 placeholder:text-sm p-2 focus:border-red-600 w-full"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="place-self-center col-span-2">
                  <button
                    type="button"
                    className="font-[500] px-[30px] py-[16px] bg-red-600 rounded text-white hover:brightness-90"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="text-white px-48 bg-slate-500 pt-10">
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col justify-center items-start gap-5">
            <Image src={logoApp} alt={""} width={300} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aut{" "}
              <br />
              voluptates. Provident, veniam, inventore architecto quam <br />
              asperiores facere laudantium itaque doloribus. <br />
            </p>
            <ul className="flex justify-start items-center gap-5">
              <li>
                {" "}
                <Link href="#" className="hover:text-blue-600">
                  <Facebook className="w-10 h-10" />
                </Link>
              </li>
              <li>
                {" "}
                <Link href="#" className="hover:text-red-600">
                  <Youtube className="w-10 h-10" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col justify-center items-start gap-5 text-[20px]">
              <li>
                <Link href="/" className="hover:text-red-600">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-600">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/software" className="hover:text-red-600">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/software" className="hover:text-red-600">
                  Legislação
                </Link>
              </li>
              <li>
                <Link href="/software" className="hover:text-red-600">
                  Suporte
                </Link>
              </li>
              <li>
                <Link href="/software" className="hover:text-red-600">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-start text-[20px] gap-10">
            <div className=" rounded-lg flex justify-start items-center gap-5 cursor-pointer">
              <MapPin className="text-red-600 w-14 h-14" />
              <span>
                <h3 className="font-two font-bold text-lg">Endereço</h3>
                <p className=" italic">Rua [Rua], [Número], [Localidade]</p>
              </span>
            </div>

            <div className="rounded-lg flex justify-start items-center gap-5 cursor-pointer">
              <Phone className="text-red-600 w-14 h-14" />
              <span>
                <h3 className="font-two font-bold text-lg">Telefone</h3>
                <p className="italic">+244 938 295 867</p>
              </span>
            </div>

            <div className="rounded-lg flex justify-start items-center gap-5 cursor-pointer">
              <Mail className="text-red-600 w-14 h-14" />
              <span>
                <h3 className="font-two font-bold text-lg">Email</h3>
                <p className="italic">vectorclever00@gmail.com</p>
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center py-10">
          <p>
            © Copyright Interage - Ensinar a Conduzir 2014 - 2024 | Todos os
            direitos reservados.
          </p>
          <p>
            Política de cookiesPolítica de privacidadeTermos de usoLivro de
            reclamaçõesRAL
          </p>
        </div>
      </footer>
    </main>
  );
}
