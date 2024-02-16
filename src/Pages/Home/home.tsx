import LeaveIcon from "../../assets/iconLeave.svg";
import Freight from "../../assets/freight.svg";
import LeaveIcon2 from "../../assets/leave2.svg";
import Play from "../../assets/play.svg";
import Video from "../../assets/FullSizeRender.mp4";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Dialog,
  Link,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import "animate.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useState } from "react";
import { Notification } from "../../components/notification";
import CardYoutube from "../../components/cardDepoiments";
import CardCompose from "../../components/cardCompose";
import { data } from "../../components/cardCompose/data";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Caps1 from "../../assets/caps/1-app-1.png";
import Caps2 from "../../assets/caps/2-app-e.png";
import Caps3 from "../../assets/caps/3-app-e.png";
import Caps4 from "../../assets/caps/4-new-e.png";
import Caps5 from "../../assets/caps/5-new-e.png";

import Noticia1 from "../../assets/noticias/noticia1.png";
import Noticia2 from "../../assets/noticias/noticia2.png";
import Noticia3 from "../../assets/noticias/noticia3.png";
import Noticia4 from "../../assets/noticias/noticia4.png";

import {
  CardNews,
  images1,
  images2,
  images3,
  images4,
} from "../../components/cardNews";
import { CardDepoiments2 } from "../../components/cardDepoiments2";
import { Footer } from "../../components/Footer";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full grid grid-cols-12 relative">
      {/* <Notification /> */}
      <div className=" col-span-12"></div>
      <div className="col-span-12 p-5 border-b-2 border-green-500 flex items-center justify-center">
        <img
          className="w-32 sm:w-40"
          src="https://newdetox.com.br/wp-content/uploads/2023/05/logo-1024x145.webp"
          alt="logodetox"
        />
      </div>
      <div className="sm:h-screen col-span-12 grid grid-cols-12 pb-10 sm:pb-0 bg-gradient-to-l from-green-200 via-white to-white">
        <div className="col-span-1" />
        <div className="col-span-10 sm:col-span-4 flex  flex-col items-start justify-start pt-10">
          <div className="text-center sm:text-left">
            <h1 className="font-Montserrat font-bold text-4xl sm:text-5xl text-green-800">
              SEM DIETAS MALUCAS <br /> OU EXERCÍCIOS <br /> FÍSICOS
            </h1>
            <p className="font-Poppins text-2xl sm:text-3xl font-light ">
              Emagreça muito <br className="flex sm:hidden" /> mais{" "}
              <br className="hidden sm:flex" /> rápido!
            </p>
            <img
              className="w-fit h-fit flex sm:hidden "
              src="https://newdetox.com.br/wp-content/uploads/2023/09/head-retret.webp"
              alt=""
            />
          </div>
          <div className="w-full sm:w-fit sm:mt-5 relative  rounded-xl shadow-2xl shadow-black/30">
            <iframe
              className="w-full sm:w-96 h-48 sm:h-56 rounded-xl shadow-2xl  transition-all ease-in-out cursor-pointer border-4 border-green-700"
              src="https://www.youtube.com/embed/u1KOagon26Y?si=nGxhWPlfRzaI0blc"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-col mt-5  !w-full">
            <button className="font-Montserrat  sm:w-96 p-3 bg-green-700 border-b-4 border-lime-500 text-white font-bold text-lg uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
              Quero um corpo novo
            </button>
            <div className="sm:w-96 flex items-center justify-center gap-2 mt-2">
              <img src={LeaveIcon2} alt="" className="w-4 text-green-700" />
              <p className="font-Poppins font-light text-md">100% Natural</p>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden col-span-1" />
        <div className="hidden col-span-7  sm:flex flex-col justify-between items-end ">
          <div className="h-full flex items-center justify-center  w-full "></div>
          <img
            className="w-fit h-fit"
            src="https://newdetox.com.br/wp-content/uploads/2023/09/head-retret.webp"
            alt=""
          />
        </div>
      </div>

      <div className="sm:h-screen col-span-12 grid py-10 sm:py-0 grid-cols-12 bg-gradient-to-l from-green-600 via-green-700 to-green-900 text-white">
        <div className="col-span-1" />
        <div className="col-span-10 sm:col-span-5 flex flex-col items-center justify-center gap-5">
          <h1 className="w-full text-center sm:text-left text-4xl sm:text-5xl font-Montserrat font-bold">
            Como New Detox <br className="hidden sm:flex" />
            te faz emagrecer?
          </h1>
          <p className="font-Poppins text-center sm:text-left text-lg sm:text-xl  leading-tight font-light">
            New Detox reúne todos os ingredientes de uma receita na medida
            certa. Tudo isso feito com tecnologia avançada, que te fará
            emagrecer muito mais rápido. Você não precisará ter o trabalho de
            preparar receitas complicadas, nem comprar ingredientes e chás caros
            e difíceis de encontrar. Você terá tudo pronto. Basta apenas tomar 2
            cápsulas por dia e, em poucas semanas, verá o resultado.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-5 flex items-center justify-center">
          <img
            src="https://newdetox.com.br/wp-content/uploads/2023/08/NEW-DETOX-GOTAS-AGUA-Recuperado.webp"
            alt=""
          />
        </div>
        <div className="col-span-1" />
      </div>

      <div className="sm:h-screen col-span-12 py-10 sm:py-0 grid grid-cols-12 bg-gradient-to-l from-green-200 via-white to-white">
        <div className="col-span-1" />
        <div className="hidden col-span-5  sm:flex items-end justify-center">
          <img
            src="https://newdetox.com.br/wp-content/uploads/2023/08/Imagem-Nicole-Bahls-Criativo-1.webp"
            alt=""
            className=""
          />
        </div>
        <div className="col-span-10 sm:col-span-5  flex flex-col items-start justify-center gap-5">
          <h1 className="w-full text-center sm:text-left text-4xl sm:text-5xl font-Montserrat font-bold text-green-700">
            Você mais magra <br /> e disposta em <br /> poucas semanas
          </h1>
          <p className="font-Poppins text-lg sm:text-xl leading-tight text-center sm:text-left font-light">
            New Detox é um{" "}
            <span className="font-bold  text-green-900">poderoso</span>{" "}
            suplemento que acelera o seu metabolismo, diminui o inchaço e a
            retenção, elimina as substâncias inflamatórias e te faz emagrecer de
            forma rápida, saudável e definitiva.
          </p>
          <img
            src="https://newdetox.com.br/wp-content/uploads/2023/08/Imagem-Nicole-Bahls-Criativo-1.webp"
            alt=""
            className=" sm:hidden"
          />
          <div className="flex flex-col items-start justify-center mt-3 w-full  sm:w-96">
            <button className="p-3 w-full sm:w-96 bg-green-700 border-b-4 border-lime-500 text-white font-Montserrat font-bold text-lg uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
              comprar agora
            </button>
            <div className="w-full flex items-center justify-center gap-2 mt-2">
              <img src={LeaveIcon2} alt="" className="w-4 text-green-700" />
              <p className="font-Poppins font-light text-md">100% Natural</p>
            </div>
          </div>
        </div>
        <div className="col-span-1" />
      </div>

      <div className=" col-span-12 grid grid-cols-12 pb-20 bg-gradient-to-l from-green-900 via-green-700 to-green-600 text-white">
        <div className="col-span-12 py-10">
          <p className=" w-full text-center font-Montserrat font-bold text-4xl  text-white">
            Quem já experimentou <br /> emagreceu e recomenda!
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-12 sm:gap-20">
          <div className="col-span-1" />
          <div className="col-span-10  sm:col-span-3 flex flex-col items-center justify-center gap-5">
            <CardNews images={images3} />
            <CardNews images={images4} />
          </div>
          <div className="flex sm:hidden col-span-1" />

          <div className="flex sm:hidden col-span-1" />
          <div className="col-span-10 sm:col-span-4 flex flex-col items-center justify-center my-5 sm:my-0">
            <div onClick={handleOpen} className="relative">
              <img
                src="https://newdetox.com.br/wp-content/uploads/2022/11/nicole_bahls-1.webp"
                className="object-cover object-center w-96 h-80 sm:h-96 rounded-3xl shadow-2xl shadow-black"
                alt=""
              />
              <img
                src={Play}
                className="absolute left-20 sm:left-24 bottom-16 w-52"
                alt=""
              />
            </div>
            <Dialog
              maxWidth="xs"
              sx={{ borderRadius: 24 }}
              fullWidth
              open={open}
              onClose={handleClose}
            >
              <Card>
                <CardMedia
                  component="video"
                  autoPlay
                  controls
                  className="h-fit"
                  image="https://newdetox.com.br/wp-content/uploads/2022/11/FullSizeRender.mov"
                />
              </Card>
            </Dialog>
            <div className="flex flex-col mt-6 w-full">
              <button className="w-full sm:w-96 p-3 bg-white border-b-4 border-lime-500 text-black font-extrabold text-md uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
                QUERO UM CORPO NOVO
              </button>
              <div className="flex items-center justify-center gap-2 mt-2">
                <img src={LeaveIcon2} alt="" className="w-4 text-green-700" />
                <p className="font-light text-md">100% Natural</p>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden col-span-1" />

          <div className="flex sm:hidden col-span-1" />
          <div className="col-span-10 sm:col-span-3 flex flex-col  gap-5 items-center justify-center">
            <CardNews images={images1} />
            <CardNews images={images2} />
          </div>

          <div className="col-span-1" />
        </div>
        <div className="col-span-12 py-10">
          <p className=" w-full text-center font-Montserrat font-bold text-4xl  text-white">
            Feedback de quem recomenda!
          </p>
        </div>
        <div className="col-span-12">
          <CardDepoiments2 />
        </div>
      </div>

      {/* <div className=" col-span-12 grid grid-cols-12 bg-gradient-to-l from-green-200 via-white to-white">
        <div className="col-span-12 py-14">
          <p className=" w-full text-center font-Montserrat font-bold text-3xl mt-10 text-green-700">
            Veja oque falam sobre o Detox
          </p>
        </div>
        <div className="col-span-1" />
        <div className="col-span-10">
          <CardNews />
        </div>
        <div className="col-span-1" />
        <div className="sm:hidden col-span-1" />
        <div className="col-span-10 sm:col-span-12">
          <div className="flex items-center justify-center flex-col mt-6 w-full ">
            <button className="w-full sm:w-96 p-3 bg-green-700 border-b-4 border-lime-500 text-white font-extrabold text-lg uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
              100% NATURAL E EFICAZ!
            </button>
          </div>
        </div>
        <div className="sm:hidden col-span-1" />
      </div> */}

      <div className=" col-span-12 grid grid-cols-12 pb-10 bg-gradient-to-l from-green-200 via-white to-white">
        <div className="col-span-12 py-14">
          <p className=" w-full text-center font-Montserrat font-bold text-3xl mt-10 text-green-700">
            Conheça a formulação do New Detox
          </p>
        </div>
        <div className="col-span-1" />
        <div className="col-span-10 grid grid-cols-4 gap-5">
          {data.map((item, index) => (
            <CardCompose
              images={item.images}
              description={item.description}
              name={item.name}
              link={item.link}
              key={index}
            />
          ))}
          <div className="col-span-4">
            <div className="flex items-center justify-center gap-2 mt-2">
              <img src={LeaveIcon2} alt="" className="w-4 text-green-700" />
              <p className="font-Poppins font-normal text-md">100% Natural</p>
            </div>
          </div>
        </div>
        <div className="col-span-1" />
        <div className="col-span-12 py-14">
          <p className=" w-full text-center font-Montserrat font-bold text-3xl text-green-700">
            New Detox é <br className="sm:hidden" /> para você que:
          </p>
        </div>
        <div className="col-span-1" />
        <div className="col-span-10 grid grid-cols-3 gap-8">
          <div className="col-span-3 sm:col-span-1 bg-white p-7  flex items-center justify-center rounded-xl transition ease-in-out hover:scale-105 active:scale-95 shadow-2xl shadow-black/30">
            <h1 className="w-fit h-fit text-center font-Montserrat  font-bold text-xl text-green-700  ">
              Já tentou de tudo mas não consegue Emagrecer
            </h1>
          </div>
          <div className="col-span-3 sm:col-span-1 bg-white  p-7  flex items-center justify-center rounded-xl transition ease-in-out hover:scale-105 active:scale-95  shadow-lg shadow-black/30">
            <h1 className="w-fit h-fit text-center font-Montserrat  font-bold text-xl text-green-700  ">
              Vive Cansada(o) e sem disposição para Nada
            </h1>
          </div>
          <div className="col-span-3 sm:col-span-1 bg-white  p-7  flex items-center justify-center rounded-xl transition ease-in-out hover:scale-105 active:scale-95  shadow-lg shadow-black/30">
            <h1 className="w-fit h-fit text-center font-Montserrat  font-bold text-xl text-green-700  ">
              Vive com Fome e Ansiedade
            </h1>
          </div>
          <div className="col-span-3 sm:col-span-1 bg-white  p-7  flex items-center justify-center rounded-xl transition ease-in-out hover:scale-105 active:scale-95  shadow-lg shadow-black/30">
            <h1 className="w-fit h-fit text-center font-Montserrat  font-bold text-xl text-green-700  ">
              Está com o Corpo Inchado e Pesado
            </h1>
          </div>
          <div className="col-span-3 sm:col-span-1 bg-white  p-7  flex items-center justify-center rounded-xl transition ease-in-out hover:scale-105 active:scale-95  shadow-lg shadow-black/30">
            <h1 className="w-fit h-fit text-center font-Montserrat  font-bold text-xl text-green-700  ">
              Quer Emagrecer Rápido Sem Passar Fome
            </h1>
          </div>
          <div className="col-span-3 sm:col-span-1 bg-white  p-7  flex items-center justify-center rounded-xl transition ease-in-out hover:scale-105 active:scale-95  shadow-lg shadow-black/30">
            <h1 className="w-fit h-fit text-center font-Montserrat  font-bold text-xl text-green-700  ">
              Busca uma Solução Rápida e Saudável para Emagrecer
            </h1>
          </div>
        </div>
        <div className="col-span-1" />
        <div className="sm:hidden col-span-1" />

        <div className="col-span-10 sm:col-span-12">
          <div className="flex items-center justify-center flex-col mt-6 w-full ">
            <button className="w-full sm:w-96 p-3 bg-green-700 border-b-4 border-lime-500 text-white font-extrabold text-lg uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
              QUERO UMA VIDA NOVA
            </button>
            <div className="flex items-center justify-center gap-2 mt-2">
              <img src={LeaveIcon2} alt="" className="w-4 text-green-700" />
              <p className="font-light text-md">100% Natural</p>
            </div>
          </div>
        </div>
        <div className="sm:hidden col-span-1" />
      </div>

      <div className="col-span-12 grid py-10 grid-cols-12 bg-gradient-to-l from-green-500 via-green-700 to-green-900 text-white">
        <div className="col-span-1" />
        <div className="col-span-12 sm:col-span-5 flex flex-col items-center justify-center sm:items-start sm:justify-start gap-5">
          <h1 className="w-full text-center sm:text-left text-3xl sm:text-4xl font-Montserrat font-bold">
            Adquira o New Detox e tenha acesso gratuito ao nosso App
            Personalizado!
          </h1>
          <p className="font-Poppins text-center sm:text-left text-xl font-light">
            Pensado como uma forma de instruir e elevar os resultados de nossos
            clientes, nós da equipe New Detox desenvolvemos um{" "}
            <span className="font-bold">
              aplicativo personalizado totalmente gratuito.{" "}
            </span>
          </p>
          <div className="flex w-32 items-center justify-center sm:justify-start">
            <img
              src="https://newdetox.com.br/wp-content/uploads/2023/10/appstore-new.webp"
              alt=""
              className="transition ease-in-out hover:scale-105 active:scale-95"
            />
            <img
              src="https://newdetox.com.br/wp-content/uploads/2023/10/google-play-new.webp"
              alt=""
              className="transition ease-in-out hover:scale-105 active:scale-95"
            />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-5">
          <img
            src="https://newdetox.com.br/wp-content/uploads/2023/10/new-detx-app-scaled.webp"
            alt=""
            className="w-full "
          />
        </div>
        <div className="col-span-1" />
      </div>

      <div className="col-span-12 grid grid-cols-12 gap-5 bg-gradient-to-l from-green-200 via-white to-white">
        <div className="col-span-1" />
        <div className="col-span-10 py-10">
          <p className=" w-full text-center font-Montserrat leading-none font-bold text-3xl sm:text-4xl mt-10 text-green-700">
            ESSA É A HORA DE VOCÊ AGIR, E <br className="hidden sm:flex" />
            CONQUISTAR O CORPO DOS SONHOS{" "}
          </p>
        </div>
        <div className="col-span-1" />

        <div className="col-span-1 sm:col-span-3" />
        <div className="col-span-10 sm:col-span-3 border bg-white border-slate-600 transition ease-in-out hover:scale-105 rounded-2xl ">
          <div className="p-4 bg-gradient-to-l from-green-700 via-green-700 to-green-600 text-center rounded-t-2xl">
            <h1 className="font-semibold text-white text-xl">COMPRE 5 POTES</h1>
            <h1 className="font-extrabold text-[#ECFF00] text-2xl leading-none">
              LEVE O 6º GRÁTIS + <br /> EBOOK + APP
            </h1>
          </div>
          <h1 className="font-normal text-gray-500 text-xl text-center py-5">
            TRATAMENTO PARA 6 MESES
          </h1>
          <div className="flex items-start p-5">
            <div className="text-center flex flex-col justify-end mt-7">
              <h1 className="font-Poppins font-normal text-black/80 text-md leading-none">
                De <span className="line-through">R$497,00</span>
              </h1>
              <h1 className="font-Poppins font-bold text-black text-md ">
                Por apenas 12x
              </h1>
              <h1 className="font-Sora font-extrabold text-green-800 text-4xl">
                R$27,10
              </h1>
              <h1 className="font-bold text-black text-md leading-none">
                Ou <span className="font-Poppins font-black">R$269,90</span>{" "}
                <br /> à vista
              </h1>
            </div>
            <div>
              <img src={Caps5} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-center p-2 bg-[#ECFF00] text-black  font-semibold">
            <img src={Freight} className="w-10" alt="" />
            FRETE GRÁTIS
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              target="_blank"
              rel="noopener"
              className="w-2/3 p-2 mt-5 mb-2 bg-[#10b910] hover:bg-[#3dee3d] text-white font-extrabold text-md rounded-sm text-center uppercase  transition ease-in-out hover:scale-105 active:scale-95"
              href="https://app.monetizze.com.br/checkout/DFW247655"
            >
              comprar agora
            </a>
            <img
              src="https://dermodiet.com.br/wp-content/uploads/2023/12/formas-de-pg.webp"
              className="w-40 mb-2"
            />
            <img
              className="w-44 mb-5"
              src="https://newdetox.com.br/wp-content/uploads/2023/02/selos-de-compra.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-1 sm:hidden" />

        <div className="col-span-1 sm:hidden" />
        <div className=" col-span-10 sm:col-span-3 border bg-white border-slate-600 transition ease-in-out hover:scale-105 rounded-2xl">
          <div className="p-4 bg-gradient-to-l from-green-700 via-green-700 to-green-600 text-center rounded-t-2xl">
            <h1 className="font-semibold text-white text-xl">COMPRE 4 POTES</h1>
            <h1 className="font-extrabold text-[#ECFF00] text-2xl leading-none">
              LEVE O 5º GRÁTIS + <br /> EBOOK + APP
            </h1>
          </div>
          <h1 className="font-normal text-gray-500 text-xl text-center py-5">
            TRATAMENTO PARA 5 MESES
          </h1>
          <div className="flex items-start p-5">
            <div className="text-center flex flex-col justify-end mt-7">
              <h1 className="font-Poppins font-normal text-black/80 text-md leading-none">
                De <span className="line-through">R$397,00</span>
              </h1>
              <h1 className="font-Poppins font-bold text-black text-md ">
                Por apenas 12x
              </h1>
              <h1 className="font-Sora font-extrabold text-green-800 text-4xl">
                R$25,10
              </h1>
              <h1 className="font-bold text-black text-md leading-none">
                Ou <span className="font-Poppins font-black">R$229,90</span>{" "}
                <br /> à vista
              </h1>
            </div>
            <div>
              <img src={Caps4} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-center p-2 bg-[#ECFF00] text-black  font-semibold">
            <img src={Freight} className="w-10" alt="" />
            FRETE GRÁTIS
          </div>
          <div className="flex flex-col items-center justify-center">
            <a
              target="_blank"
              rel="noopener"
              className="w-2/3 p-2 mt-5 mb-2 bg-[#10b910] hover:bg-[#3dee3d] text-white font-extrabold text-md rounded-sm text-center uppercase  transition ease-in-out hover:scale-105 active:scale-95"
              href="https://app.monetizze.com.br/checkout/DUQ247652"
            >
              comprar agora
            </a>
            <img
              src="https://dermodiet.com.br/wp-content/uploads/2023/12/formas-de-pg.webp"
              className="w-40 mb-2"
            />
            <img
              className="w-44 mb-5"
              src="https://newdetox.com.br/wp-content/uploads/2023/02/selos-de-compra.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-1 sm:hidden" />

        <div className="hidden sm:col-span-3" />

        <div className="col-span-12 grid grid-cols-12 sm:grid-cols-11 gap-5 mt-5">
          <div className="col-span-1" />
          <div className="col-span-10 sm:col-span-3 border bg-white border-slate-600 transition ease-in-out hover:scale-105 rounded-2xl">
            <div className="p-4 bg-gradient-to-l from-green-700 via-green-700 to-green-600 text-center rounded-t-2xl">
              <h1 className="font-semibold text-white text-xl">
                COMPRE 3 POTES
              </h1>
              <h1 className="font-extrabold text-[#ECFF00] text-2xl leading-none">
                LEVE O 4º GRÁTIS + <br /> EBOOK + APP
              </h1>
            </div>
            <h1 className="font-normal text-gray-500 text-xl text-center py-5">
              TRATAMENTO PARA 4 MESES
            </h1>
            <div className="flex items-start p-5">
              <div className="text-center flex flex-col justify-end mt-7">
                <h1 className="font-Poppins font-normal text-black/80 text-md leading-none">
                  De <span className="line-through">R$297,00</span>
                </h1>
                <h1 className="font-Poppins font-bold text-black text-md ">
                  Por apenas 12x
                </h1>
                <h1 className="font-Sora font-extrabold text-green-800 text-4xl">
                  R$16,77
                </h1>
                <h1 className="font-bold text-black text-md leading-none">
                  Ou <span className="font-Poppins font-black">R$167,00</span>{" "}
                  <br /> à vista
                </h1>
              </div>
              <div>
                <img src={Caps3} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-center p-2 bg-[#ECFF00] text-black  font-semibold">
              <img src={Freight} className="w-10" alt="" />
              FRETE GRÁTIS
            </div>
            <div className="flex flex-col items-center justify-center">
              <a
                target="_blank"
                rel="noopener"
                className="w-2/3 p-2 mt-5 mb-2 bg-[#10b910] hover:bg-[#3dee3d] text-white font-extrabold text-md rounded-sm text-center uppercase  transition ease-in-out hover:scale-105 active:scale-95"
                href="https://app.monetizze.com.br/checkout/DZN247651"
              >
                comprar agora
              </a>
              <img
                src="https://dermodiet.com.br/wp-content/uploads/2023/12/formas-de-pg.webp"
                className="w-40 mb-2"
              />
              <img
                className="w-44 mb-5"
                src="https://newdetox.com.br/wp-content/uploads/2023/02/selos-de-compra.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 sm:hidden" />

          <div className="col-span-1 sm:hidden" />
          <div className="col-span-10 sm:col-span-3 border bg-white border-slate-600 transition ease-in-out hover:scale-105 rounded-2xl">
            <div className="p-4 bg-gradient-to-l from-green-700 via-green-700 to-green-600 text-center rounded-t-2xl">
              <h1 className="font-semibold text-white text-xl">
                COMPRE 2 POTES
              </h1>
              <h1 className="font-extrabold text-[#ECFF00] text-2xl leading-none">
                LEVE O 3º GRÁTIS + <br /> EBOOK + APP
              </h1>
            </div>
            <h1 className="font-normal text-gray-500 text-xl text-center py-5">
              TRATAMENTO COMPLETO
            </h1>
            <div className="flex items-start p-5">
              <div className="text-center flex flex-col justify-end mt-7">
                <h1 className="font-Poppins font-normal text-black/80 text-md leading-none">
                  De <span className="line-through">R$194,00</span>
                </h1>
                <h1 className="font-Poppins font-bold text-black text-md ">
                  Por apenas 12x
                </h1>
                <h1 className="font-Sora font-extrabold text-green-800 text-4xl">
                  R$14,76
                </h1>
                <h1 className="font-bold text-black text-md leading-none">
                  Ou <span className="font-Poppins font-black">R$147,00</span>{" "}
                  <br /> à vista
                </h1>
              </div>
              <div>
                <img src={Caps2} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-center p-2 bg-[#ECFF00] text-black  font-semibold">
              <img src={Freight} className="w-10" alt="" />
              FRETE GRÁTIS
            </div>
            <div className="flex flex-col items-center justify-center">
              <a
                target="_blank"
                rel="noopener"
                className="w-2/3 p-2 mt-5 mb-2 bg-[#10b910] hover:bg-[#3dee3d] text-white font-extrabold text-md rounded-sm text-center uppercase  transition ease-in-out hover:scale-105 active:scale-95"
                href="https://app.monetizze.com.br/checkout/DTF247649"
              >
                comprar agora
              </a>
              <img
                src="https://dermodiet.com.br/wp-content/uploads/2023/12/formas-de-pg.webp"
                className="w-40 mb-2"
              />
              <img
                className="w-44 mb-5"
                src="https://newdetox.com.br/wp-content/uploads/2023/02/selos-de-compra.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 sm:hidden" />

          <div className="col-span-1 sm:hidden" />
          <div className="col-span-10 sm:col-span-3 border bg-white border-slate-600 transition ease-in-out hover:scale-105 rounded-2xl">
            <div className="p-4 bg-gradient-to-l from-green-700 via-green-700 to-green-600 text-center rounded-t-2xl">
              <h1 className="font-semibold text-white text-xl">
                COMPRE 1 POTE
              </h1>
              <h1 className="font-extrabold text-[#ECFF00] text-2xl leading-none">
                LEVE O 2º GRÁTIS + <br /> EBOOK + APP
              </h1>
            </div>
            <h1 className="font-normal text-gray-500 text-xl text-center py-5">
              TRATAMENTO PARA 2 MESES
            </h1>
            <div className="flex items-start px-5 pt-5">
              <div className="text-center flex flex-col justify-end mt-7">
                <h1 className="font-Poppins font-normal text-black/80 text-md leading-none">
                  De <span className="line-through">R$177,00</span>
                </h1>
                <h1 className="font-Poppins font-bold text-black text-md ">
                  Por apenas 12x
                </h1>
                <h1 className="font-Sora font-extrabold text-green-800 text-4xl">
                  R$9,74
                </h1>
                <h1 className="font-bold text-black text-md leading-none">
                  Ou <span className="font-Poppins font-black">R$99,00</span>{" "}
                  <br /> à vista
                </h1>
              </div>
              <div>
                <img src={Caps1} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 text-center p-2 bg-[#ECFF00] text-black  font-semibold">
              <img src={Freight} className="w-10" alt="" />
              FRETE GRÁTIS
            </div>
            <div className="flex flex-col items-center justify-center">
              <a
                target="_blank"
                rel="noopener"
                className="w-2/3 p-2 mt-5 mb-2 bg-[#10b910] hover:bg-[#3dee3d] text-white font-extrabold text-md rounded-sm text-center uppercase  transition ease-in-out hover:scale-105 active:scale-95"
                href="https://app.monetizze.com.br/checkout/DBZ247599"
              >
                comprar agora
              </a>
              <img
                src="https://dermodiet.com.br/wp-content/uploads/2023/12/formas-de-pg.webp"
                className="w-40 mb-2"
              />
              <img
                className="w-44 mb-5"
                src="https://newdetox.com.br/wp-content/uploads/2023/02/selos-de-compra.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1 sm:hidden" />

          <div className="col-span-12 h-24" />
        </div>
      </div>

      <div className="col-span-12 grid grid-cols-12 pb-8 bg-gradient-to-l from-green-800 via-green-700 to-green-500 ">
        <div className="col-span-1" />
        <div className="col-span-5 hidden sm:flex items-center justify-center ">
          <img
            className="w-2/3 "
            src="https://newdetox.com.br/wp-content/uploads/2023/09/Sem-Titulo-1-Recuperado.webp"
            alt=""
          />
        </div>
        <div className="col-span-10 sm:col-span-5 flex flex-col items-start justify-start gap-4">
          <p className="w-full text-center sm:text-left font-Montserrat leading-none font-bold text-4xl mt-10 text-white">
            SEU RISCO <br />
            POR TENTAR É ZERO!
          </p>
          <p className="font-Poppins text-xl text-center sm:text-left text-white font-light">
            Se por algum motivo você não ficar Satisfeita com <br /> New Detox,
            devolvemos 100% do Seu Dinheiro!
          </p>
          <div className="flex items-center justify-center sm:hidden">
            <img
              className=""
              src="https://newdetox.com.br/wp-content/uploads/2023/09/Sem-Titulo-1-Recuperado.webp"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-full flex flex-col justify-center ittems-center gap-3">
              <button className="w-full sm:w-96 p-3 bg-white border-b-4 border-lime-500 text-black font-Montserrat font-bold text-lg uppercase rounded-2xl transition ease-in-out hover:scale-105 active:scale-95 shadow-xl shadow-black/30">
                comprar com garantia
              </button>
              <div className="w-full sm:w-96 flex items-center justify-center gap-2 ">
                <img src={LeaveIcon2} alt="" className="w-4 text-green-700" />
                <p className="font-Poppins font-light text-center text-md  text-white">
                  100% Natural
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 grid grid-cols-12 gap-5  pb-10 bg-gradient-to-l from-green-200 via-white to-white">
        <div className="col-span-12 py-10">
          <p className=" w-full text-center font-Montserrat leading-none font-bold text-4xl mt-10 text-green-700">
            Ainda com <br className="flex sm:hidden" /> dúvidas?
          </p>
        </div>
        <div className="col-span-1 sm:col-span-3" />
        <div className="col-span-10 sm:col-span-6 flex flex-col gap-3">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <QuestionMarkIcon className="text-lime-500" />
              <p className="font-bold text-lime-500">
                QUAIS OS EFEITOS DO NEW DETOX?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-200">
              New Detox possui uma ação emagrecedora, atuando na queima de
              gordura, desintoxicação do corpo, auxiliando na redução do inchaço
              do seu corpo, aumentando sua disposição e fazendo você emagrecer
              de forma rápida e definitiva.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <QuestionMarkIcon className="text-lime-500" />
              <p className="font-bold text-lime-500">
                QUANTOS KG CONSIGO EMAGRECER COM NEW DETOX?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-200">
              Os resultados variam de pessoa para pessoa, mas com New Detox você
              já consegue obter e ver diferença já nas primeiras semanas de uso.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <QuestionMarkIcon className="text-lime-500" />
              <p className="font-bold text-lime-500">
                QUAL O PRAZO DA ENTREGA?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-200">
              O prazo médio de entrega para o Brasil é de 1 a 10 dias úteis. O
              produto só é enviado após a confirmação do seu pagamento pela
              administradora do seu cartão de crédito ou após a confirmação do
              pagamento do boleto.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <QuestionMarkIcon className="text-lime-500" />
              <p className="font-bold text-lime-500">
                EXISTEM EFEITOS COLATERAIS? QUALQUER UM PODE TOMAR?
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-200">
              Não existe nenhum efeito colateral com o consumo do produto, e
              qualquer pessoa pode tomar e aproveitar seus benefícios. Porém,
              gestantes, crianças, lactantes e pessoas enfermas ou que fazem uso
              contínuo de algum medicamento devem consultar um médico antes de
              iniciar o consumo.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <QuestionMarkIcon className="text-lime-500" />
              <p className="font-bold text-lime-500">
                COMO DEVO USAR NEW DETOX?{" "}
              </p>
            </AccordionSummary>
            <AccordionDetails className="bg-gray-200">
              New Detox deve ser tomado diariamente, 2 cápsulas por dia,
              preferencialmente antes das refeições. Recomendamos o uso por no
              mínimo 3 meses para um resultado surpreendente.
            </AccordionDetails>
          </Accordion>

          <p className="text-center mt-10">
            New Detox deve ser tomado diariamente, 2 cápsulas por dia,
            preferencialmente antes das refeições. Recomendamos o uso por no
            mínimo 3 meses para um resultado surpreendente.
          </p>
        </div>
        <div className="col-span-1 sm:col-span-3" />
      </div>
      <Footer />
      
    </div>
  );
}
