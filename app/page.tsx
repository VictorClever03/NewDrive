"use client";
import Image from "next/image";
import logoApp from "@/public/logo.png";
import CarImage from "@/public/car.png";
import CarImage1 from "@/public/download.jpeg";
import Link from "next/link";
import {
  ChevronDown,
  Dot,
  Facebook,
  Globe,
  Handshake,
  Mail,
  MapPin,
  MonitorCheck,
  Phone,
  PlayCircleIcon,
  SquareCheck,
  Youtube,
} from "lucide-react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import SwipperComponent from "./src/components/SwipperComponent";
import Carousel from "./src/components/Carousel";
import { VideoPlayer } from "./src/components/VideoPlayer";
import * as Dialog from "@radix-ui/react-dialog";
import AGE from "./src/components/AGE";
import ageonlineImage from "@/public/ageonline.png";
import Avaliacao from "./src/components/Avaliacao";
import { SlideSalaOnline } from "./src/components/SlidesSalaOnline";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Chame handleScroll uma vez para ativar o link correto ao carregar a página
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              <Link
                href="#home"
                className={
                  activeSection === "home"
                    ? "text-red-600"
                    : "hover:text-red-600"
                }
              >
                Início
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link
                href="#about"
                className={
                  activeSection === "about"
                    ? "text-red-600"
                    : "hover:text-red-600"
                }
              >
                Sobre
              </Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="group">
              <NavigationMenu.Trigger
                className={
                  activeSection === "software"
                    ? "text-red-600 flex"
                    : "hover:text-red-600 flex"
                }
              >
                Software
                <ChevronDown className="group-hover:rotate-180 transition-transform duration-150" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="bg-slate-600 absolute top-[107px] rounded-sm grid grid-cols-2  items-center justify-center">
                <Link href="#software" className="hover:bg-red-600 p-4">
                  AGE
                </Link>
                <Link href="#software" className="hover:bg-red-600 p-4">
                  AGE Online
                </Link>
                <Link href="#software" className="hover:bg-red-600 p-4">
                  AVALIAÇÃO
                </Link>
                <Link href="#software" className="hover:bg-red-600 p-4">
                  SALA VIRTUAL
                </Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="group">
              <NavigationMenu.Trigger
                className={
                  activeSection === "legis"
                    ? "text-red-600 flex"
                    : "hover:text-red-600 flex"
                }
              >
                Legislação{" "}
                <ChevronDown className="group-hover:rotate-180 transition-transform duration-150" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="bg-slate-600 absolute top-[107px] rounded-sm grid grid-cols-2  items-center justify-center">
                <Link href="#legis" className="hover:bg-red-600 p-4">
                  Regulamento Da Habilitação Legal Para Conduzir
                </Link>
                <Link href="#legis" className="hover:bg-red-600 p-4">
                  Regulamento De Sinalização Do Trânsito
                </Link>
                <Link href="#legis" className="hover:bg-red-600 p-4">
                  Código Da Estrada
                </Link>
                <Link href="#legis" className="hover:bg-red-600 p-4">
                  Regime Jurídico Do Ensino Da Condução
                </Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            {/* <NavigationMenu.Item>
              <Link href="#" className="hover:text-red-600">
                Suporte
              </Link>
            </NavigationMenu.Item> */}
            <NavigationMenu.Item>
              <Link
                href="#contact"
                className={
                  activeSection === "contact"
                    ? "text-red-600"
                    : "hover:text-red-600"
                }
              >
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
        id="home"
        className="relative top-[100px] text-black flex justify-around items-center px-36 mx-auto overflow-x-hidden pt-10 mb-36 text-[20px]"
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
      <div className="App bg-slate-100 h-28 px-48 ">
        <SwipperComponent />
      </div>

      {/* second sections, about the company */}
      <section id="about" className="text-black pt-40 px-48 text-[20px]">
        <div className="pb-20">
          <h2 className="text-[48px] font-bold text-center  font-two">
            <span className="text-red-600">Sobre</span> Empresa
          </h2>
          <p className="text-center text-gray-500">
            Somos a New Drive Tecnology and Training <br /> Uma empresa dedicada
            a Ensino de condução. Fundada em [Ano] por [Fundador]
          </p>
        </div>

        <div className="flex justify-center items-center  gap-10">
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

      {/* third sections, about the company */}
      <section id="software" className="text-black pt-40  text-[20px]">
        <div className="pb-20 px-48">
          <h2 className="text-[48px] font-bold text-center  font-two">
            <span className="text-red-600">O</span> Software
          </h2>
          <p className="text-center text-gray-500">
            Somos a New Drive Tecnology and Training <br /> Uma empresa dedicada
            a Ensino de condução. Fundada em [Ano] por [Fundador]
          </p>
        </div>

        <div className="flex justify-center items-center  gap-10 px-48">
          <div className="flex flex-col gap-6 mx-auto w-[600px]">
            <h1 className="text-[48px] font-two">
              <span className="text-red-600">VEJA COMO FUNCIONA </span>SOFTWARE
              DE APOIO AO ENSINO DA CONDUÇÃO
            </h1>
          </div>
          <div className="w-[50%] h-auto my-10 rounded-lg">
            <div className="flex relative">
              <Image alt="" src={CarImage1} className="rounded-lg w-full" />

              <Dialog.Root>
                <Dialog.Trigger>
                  <PlayCircleIcon className="w-20 h-20 text-red-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:brightness-150" />
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed w-[100vw] h-[100vh] inset-0" />
                  <Dialog.Content className="w-auto rounded-md p-1  fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    {/* <Dialog.Title >wwww</Dialog.Title> */}
                    {/* <Dialog.Description >cccc</Dialog.Description> */}
                    <VideoPlayer
                      srcvideo="comofunciona.mp4"
                      style="rounded-md min-w-[800px]"
                    />
                    {/* <Dialog.Close >xxx</Dialog.Close> */}
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center gap-10 text-white min-w-52 px-36 ">
          <div className="bg-slate-500 p-10 flex justify-center items-center flex-col gap-5 rounded-md flex-wrap cursor-pointer hover:brightness-90">
            <Handshake className="w-10 h-10" />
            <h3 className="font-two font-bold text-[20px]">AGE</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              facere.
            </p>
            <button
              type="button"
              className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90"
            >
              Saber Mais
            </button>
          </div>

          <div className="bg-slate-500 p-10 flex justify-center items-center flex-col gap-5 rounded-md flex-wrap cursor-pointer hover:brightness-90">
            <Globe className="w-10 h-10" />
            <h3 className="font-two font-bold text-[20px]">AGE ONLINE</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              facere.
            </p>
            <button
              type="button"
              className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90"
            >
              Saber Mais
            </button>
          </div>

          <div className="bg-slate-500 p-10 flex justify-center items-center flex-col gap-5 rounded-md flex-wrap cursor-pointer hover:brightness-90">
            <SquareCheck className="w-10 h-10" />
            <h3 className="font-two font-bold text-[20px]">AVALIAÇÃO</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              facere.
            </p>
            <button
              type="button"
              className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90"
            >
              Saber Mais
            </button>
          </div>

          <div className="bg-slate-500 p-10 flex justify-center items-center flex-col gap-5 rounded-md flex-wrap cursor-pointer hover:brightness-90">
            <MonitorCheck className="w-10 h-10" />
            <h3 className="font-two font-bold text-[20px]">SALA VIRTUAL</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              facere.
            </p>
            <button
              type="button"
              className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90"
            >
              Saber Mais
            </button>
          </div>
        </div>

        <div>
          <div className="px-48 mt-20">
            <div className="">
              <span className="text-justify">
                <h3 className="flex justify-start items-center font-two font-bold text-[30px] mb-10">
                  <Dot className="text-red-600 w-10 h-10" /> AGE (Gestão)
                </h3>
                <p>
                  As melhores escolas de condução do país já o usam. Perante as
                  exigências de um processo de certificação de qualidade,
                  exigiram-nos o melhor. Pela sua fiabilidade e qualidade, o AGE
                  2010 foi uma escolha natural. Agora há finalmente um programa
                  de qualidade também para a sua escola.
                  <br />
                  <br />O módulo de gestão inclui todas as funcionalidades
                  necessárias para fazer a gestão de uma escola de condução e
                  todos os procedimentos necessários exigidos pelo IMT. Desde o
                  registo de inscrições até às consultas, listagens e
                  estatísticas sobre o funcionamento da escola, passando pela
                  facturação, requerimento de licenças, registo de lições e
                  avaliações, pedidos de exame, marcações e resultados.
                </p>
              </span>
              <figure className="w-full mt-5">
                <AGE />
              </figure>
              <span className="flex justify-between items-center mt-10 text-justify gap-10">
                <span className=" w-1/2">
                  <h4 className="font-bold mb-5">Demonstração</h4>
                  <p>
                    Instalação completa do{" "}
                    <strong>AGE 2010 – Gestão Administrativa.</strong>
                    <br />
                    Este ficheiro é um programa de instalação. Ao executar
                    deverá clicar no botão INSTALAR.{" "}
                    <small>Tamanho do ficheiro: 22,8 MB.</small>
                  </p>
                  <a href="Software/demo-age2000-gestao.exe" download>
                    <button
                      type="button"
                      className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90 mt-5 "
                    >
                      Faça aqui o download da demonstração
                    </button>
                  </a>
                </span>
                <span className="w-1/2">
                  <h4 className="font-bold mb-5">Atualizações</h4>
                  <p>
                    Actualização do{" "}
                    <strong> AGE 2010 – Gestão Administrativa</strong>{" "}
                    <small>versão 6.22 – 16-12-2022.</small>
                    <br /> Este ficheiro é um programa de actualização. Ao
                    executar deverá clicar no botão INSTALAR.
                    <small> Tamanho do ficheiro: 23,5 MB.</small>
                  </p>
                  <span className="mt-5 flex justify-start items-center gap-5">
                    <a href="Software/age2010-622.exe" download>
                      <button
                        type="button"
                        className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90"
                      >
                        Faça aqui a Atualização
                      </button>
                    </a>
                    <button
                      type="button"
                      className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90"
                    >
                      Novidades da versão 6.22
                    </button>
                  </span>
                </span>
              </span>
            </div>

            <div className="mt-20 text-justify">
              <span className=" ">
                <h3 className="flex justify-start items-center font-two font-bold text-[30px] mb-10">
                  <Dot className="text-red-600 w-10 h-10" />
                  Plataforma AGEOnline
                </h3>
                <span className="flex justify-between items-center gap-10 ">
                  <p>
                    AGE-Online é uma plataforma de registo obrigatório online da
                    formação teórica e prática de escolas de condução. <br />
                    <br /> Actualmente está a ser usada por cerca de 300 escolas
                    de condução.Cumpre a Lei n.º 14/2014 e respectiva
                    regulamentação. Regista a identificação da escola de
                    condução e respectiva empresa exploradora, os dados dos
                    instrutores, dos veículos da instrução, dos alunos e toda a
                    sua formação teórica e prática.Esta informação pode ser
                    consultada pelas escolas de condução e pelo IMT. Os alunos
                    poderão consultar a sua ficha de inscrição e toda sua
                    formação, não só as aulas realizadas mas também as aulas
                    marcadas.
                  </p>
                  <Image alt="ageonline" src={ageonlineImage} />
                </span>
              </span>
              <br />
              <br />
              <div className="mb-20">
                <h4 className="font-bold mb-5">
                  Para programadores e integradores de sistemas
                </h4>
                <p>
                  AGE-Online é uma plataforma aberta a qualquer sistema útil
                  para escolas de condução. Qualquer empresa que preste serviços
                  para escolas de condução poderá desenvolver a ligação à
                  AGE-Online. Esta ligação é gratuita.Já existem os seguintes
                  sistemas a tirar partido da AGE-Online:{" "}
                </p>
                <ul className="list-disc pl-10">
                  <li>Simulador de condução – da empresa Brainwork</li>
                  <li>Simulador de condução – da empresa Ptware</li>
                  <li>
                    Dispositivo de monitorização de aulas práticas – da empresa
                    Ptware{" "}
                  </li>
                  <li>
                    Aplicação de gestão de escolas de condução AGE – da empresa
                    Interage{" "}
                  </li>
                </ul>
                <br />
                E estão em desenvolvimento:
                <br />
                <br />
                <ul className="list-disc pl-10 mb-5">
                  <li>Uma plataforma de formação online</li>
                  <li>
                    Um sistema de GPS para monitorização de aulas práticas
                  </li>
                  <li>Uma plataforma de testes online</li>
                  <li>
                    Uma aplicação online de gestão para escolas de condução
                  </li>
                </ul>
                A especificação do webservice está em{" "}
                <a href="ageonline.pt/help" target="_blank">
                  ageonline.pt/help{" "}
                </a>
                <br />A documentação está em{" "}
                <a href="ageonline.pt/docs" target="_blank">
                  ageonline.pt/docs
                </a>
                <br />
                Contacte-nos para obter um login de desenvolvimento.
                <br />
                <button
                  type="button"
                  className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90 mt-5"
                >
                  <a href="http://ageonline.pt/" target="_blank">
                    AGEOnline
                  </a>
                </button>
              </div>
            </div>

            <div className="text-justify mb-20">
              <span className=" flex justify-between items-start gap-10">
                <span>
                  <h3 className="flex justify-start items-center font-two font-bold text-[30px] mb-10">
                    <Dot className="text-red-600 w-10 h-10" /> Avaliação
                    <span className="text-green-500"> &nbsp; €100.00</span>
                  </h3>
                  <p className="mb-5">
                    Os testes multimédia são semelhantes aos da IMT e todo o
                    sistema está preparado para funcionar com um ecrã táctil
                    (touch screen) ou tablet Windows. <br />
                    Tem testes de código comum, específicos de motociclos e
                    específicos das categorias C e D. <br />
                    Pode ser controlada a permissão a todas as funcionalidades
                    abaixo descritas, de maneira a que se tenha acesso ou não.{" "}
                    <br />O sistema pode ser configurado para guardar os
                    resultados dos testes de maneira a fazer a gestão da
                    avaliação dos alunos.
                  </p>
                  <a href="https://ensinaraconduzir.pt/dwn/salavirtual.exe">
                    <button
                      type="button"
                      className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90 w-full"
                    >
                      Faça aqui o download gratuito
                    </button>
                  </a>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90 w-full"
                  >
                    Comprar pen USB
                  </button>
                </span>
                <span className="w-1/2">
                  <Avaliacao />
                </span>
              </span>

              {/* <span>
                <h4>Características</h4>
                <p>
                  Ao iniciar um novo teste, pode identificar os alunos para
                  fazer a sua avaliação. Neste caso, cada aluno deve ter uma
                  ficha. Há também a opção do aluno só ter acesso aos testes que
                  lhe forem criados. Desta forma pode-se vender testes aos
                  alunos. No modo livre, esta janela não aparece e o aluno pode
                  fazer os testes que quiser. Mais de 6300 perguntas em
                  constante actualização. Mais de 1400 perguntas de mecânica e
                  500 perguntas sobre motociclos. Pode-se ir directamente para
                  qualquer pergunta e o aluno pode terminar o teste quando
                  desejar. O aluno ou instrutor têm a possibilidade de escolher
                  o tipo de teste pretendido. Há testes de código comum,
                  específicos de motociclos e específicos das categorias C e D.
                  As perguntas são muito exigentes e próximas do exame oficial.
                  Muitas foram mesmo retiradas dos exames. Podem ser realizados
                  testes automáticos em sala sem a assistência do instrutor. Os
                  resultados podem ser guardados para fazer a avaliação do
                  aluno. Têm também a possibilidade de escolher as sub unidades
                  temáticas sobre as quais querem executar um teste. O botão
                  “TODAS” permite marcar ou desmarcar todas as sub unidades. A
                  imagem pode ser redimensionada para melhor visualização. Ao
                  terminar a avaliação é mostrado um relatório com informação
                  sobre o tipo de teste realizado, data e hora, nome do aluno,
                  resultado, quais as respostas certas e erradas, perguntas não
                  respondidas, tempo por pergunta, número de respostas certas e
                  erradas por sub unidade temática e estatísticas gerais. O
                  relatório pode ser impresso. E pode-se ainda consultar as
                  respostas erradas.
                </p>
              </span> */}
            </div>

            <div className="block text-justify mb-20">
              <span className="flex justify-between items-start gap-10">
                <span className="w-1/2">
                  <SlideSalaOnline />
                </span>
                <span>
                  <h3 className="flex justify-start items-center font-two font-bold text-[30px] mb-10">
                    <Dot className="text-red-600 w-10 h-10" /> Sala Virtual
                    <span className="text-green-500"> &nbsp; €400.00</span>
                  </h3>

                  <p className="mb-5">
                    A Sala Virtual contém todo o material pedagógico
                    indispensável para o ensino do código da estrada em sala de
                    aula. O instrutor pode exibir qualquer sinal, de forma fácil
                    e rápida, bem como situações reais de trânsito onde este é
                    aplicado. É possível apresentar vídeos e animações 3D que
                    mostram a execução de manobras de forma certa ou errada, de
                    cedência de passagem e de cruzamento de veículos. Toda a
                    informação atualizada sobre os veículos e habilitação legal
                    para conduzir. Pode também simular qualquer situação de
                    trânsito.
                  </p>
                  <a href="https://ensinaraconduzir.pt/dwn/salavirtual.exe">
                    <button
                      type="button"
                      className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90 w-full"
                    >
                      Faça aqui o download gratuito
                    </button>
                  </a>
                  <br />
                  <br />
                  <button
                    type="button"
                    className="font-[500] p-[10px] bg-red-600 rounded text-white hover:brightness-90 w-full"
                  >
                    Comprar Pen USB
                  </button>
                </span>
              </span>
              <div className="mt-10 text-[30px]">
                <h4 className="font-bold font-two">Videos</h4>

                <div className="grid grid-cols-3 gap-x-20 gap-y-5 items-center justify-center">
                  <div>
                    <iframe
                      width="520"
                      height="315"
                      src="https://www.youtube.com/embed/eqUFhZG2eiM"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="520"
                      height="315"
                      src="https://www.youtube.com/embed/Wddh8RCDNZM"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="520"
                      height="315"
                      src="https://www.youtube.com/embed/0E_xE5swByg"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="520"
                      height="315"
                      src="https://www.youtube.com/embed/nGQjwhkzTxI"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="520"
                      height="315"
                      src="https://www.youtube.com/embed/ww4UMtSmeEE"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="520"
                      height="315"
                      src="https://www.youtube.com/embed/Q5k5bAW1u-Y"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* fourth sections, about the company */}
      <section id="legis" className="text-black pt-40 px-48 text-[20px]">
        <div className="pb-20">
          <h2 className="text-[48px] font-bold text-center  font-two">
            <span className="text-red-600">Legis</span>lação
          </h2>
          <p className="text-center text-gray-500">
            Somos a New Drive Tecnology and Training <br /> Uma empresa dedicada
            a Ensino de condução. Fundada em [Ano] por [Fundador]
          </p>
        </div>

        <div className="flex justify-center items-center  gap-10">
          {/* <div className="flex">
          <Image alt="" src={CarImage1}  width={600} className="rounded-lg"/>
        </div> */}
          <div className="bg-slate-100 w-1/2 h-auto my-10 rounded-lg">
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

      {/* fifth sections, about the company */}
      {/* <section id="about" className="text-black pt-40 px-48 text-[20px]">
        <div className="pb-20">
          <h2 className="text-[48px] font-bold text-center  font-two">
            <span className="text-red-600">Sup</span>orte
          </h2>
          <p className="text-center text-gray-500">
            Somos a New Drive Tecnology and Training <br /> Uma empresa dedicada
            a Ensino de condução. Fundada em [Ano] por [Fundador]
          </p>
        </div>

        <div className="flex justify-center items-center  gap-10">
          
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
      </section> */}

      {/* last Section, about the Software */}
      <section id="contact" className="text-black px-48 pt-40 text-[20px]">
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
          <div className="bg-slate-100 flex justify-center items-center rounded-lg ">
            <form className="bg-transparent w-full p-10 ">
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
                  Software
                </Link>
              </li>
              <li>
                <Link href="/software" className="hover:text-red-600">
                  Legislação
                </Link>
              </li>
              {/* <li>
                <Link href="/software" className="hover:text-red-600">
                  Suporte
                </Link>
              </li> */}
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
