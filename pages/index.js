import Head from "next/head";
import { Image, Box } from "@chakra-ui/react";
import { BsDot, BsTelephoneOutboundFill } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const { query } = useRouter();
  const [to, setTo] = useState("");
  const [type, setType] = useState("");

  console.log(query);

  useEffect(() => {
    setTo(query.to);
    switch (query.type) {
      case "1":
        setType("гэр бүлийн хамт ");
        break;
      case "2":
        setType("хамт олоны хамт ");
        break;
      case "3":
        setType(" ");
        break;
    }
  }, [query]);

  return (
    <div className=" flex place-content-center flex-col max-w-4xl">
      <Head>
        <title>Wedding. Munkhgerel & Battsetseg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      {to && type && <Invitation to={to} type={type} />}

      <Seprater />
      <Contact />
    </div>
  );
}

const Top = () => {
  return (
    <div class="relative">
      <Box
        pos="relative"
        h="100vh"
        bg="rgba(0,0,0)"
        _before={{
          content: '""',
          bgImage: "url(/img/top.jpg)",
          bgSize: "cover",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.7,
        }}
      ></Box>
      {/* <div className=" w-full h-screen">
        <Image
          src="/img/top.jpg"
          w={"100%"}
          height={"100%"}
          // filter={"blur(0.8px)"}
          position="relative"
          objectFit={"cover"}
        />
      </div> */}

      <div class="w-full absolute top-0 left-0 h-full flex flex-col items-center  text-white">
        <Image src="/banner.png" w={"60%"} height={"76px"} className="mt-6" />
        <div className="flex space-x-4 mt-72">
          <div className="flex-grow"></div>
          <Image h="40px" src="/king.png" w={"60px"} position="relative" />
          <Image h="40px" src="/queen.png" w={"60px"} position="relative" />
          <div className="flex-grow"></div>
        </div>

        <div className="flex space-x-2 mt-[10px] font-rouge">
          <div>
            <p className="  text-4xl font-normal">Munkhgerel</p>
            <p className=" text-2xl text-right">Chuluunbold</p>
          </div>
          <div className="  text-4xl font-normal">{` & `}</div>
          <div>
            <p className="  text-4xl font-normal">Battsetseg</p>
            <p className=" text-2xl ">Batkhuyag</p>
          </div>
        </div>

        <div className="flex font-rouge mt-[20px] text-xl">
          <p>Sunday</p>
          <BsDot className="mt-1" />
          <p>2022 July 03</p>
          <BsDot className="mt-1" />
          <p>17:00</p>
        </div>

        <div className=" scrollcontainer mt-[-120px]">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
      </div>
    </div>
  );
};
const Invitation = ({ to, type }) => {
  return (
    <div className="second ">
      <div className="relative">
        <Image
          src="/frame2.png"
          w={"100%"}
          height={"100%"}
          // filter={"blur(0.8px)"}
          position="relative"
          // objectFit={"cover"}
          bg="white"
        />
      </div>
      <div className=" absolute font-lobster mt-[-495px] pl-10 pr-10 text-xl">
        <Typewriter
          className="max-w-lg"
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2500)
              .typeString("Эрхэм хүндэт")
              .typeString(
                `<p style='font-weight: bold; font-size: "30px"'>${to}</p>`
              )
              .typeString(
                `<p>${type} бидний хуримын ёслолын хүндэтгэлийн цайллагад хүрэлцэн ирэхийг урьж байна.</p>`
              )
              // .pauseFor(1500)
              // .deleteAll()
              .typeString(
                `<div><br/><p> Урьсан хосын голомт бадарч     Уригдсан таны буян дэлгэрч           Удам_ургийн холбоо зузаарч          Удаан_жаргалын ерөөл оршиг.</p></div>`
              )
              .typeString(
                `
                            <div>
                            <br/>
                            <p>Хүндэтгэсэн</p>
                          </div>
            `
              )
              .typeString(
                ` <p>
            Чулуунболдын <strong>Мөнхгэрэл</strong>
            Батхуягийн <strong>Батцэцэг</strong>
            Охин:<strong>М.Маралгоо</strong>
            Хүү:<strong>М.Манлай</strong>
          </p>`
              )
              // .callFunction(() => {
              // });

              .start();
          }}
          options={{
            delay: 70,
            autoStart: false,
          }}
        />
      </div>
    </div>
  );
};

const Seprater = () => {
  return (
    <Image
      h="110px"
      src="/seprater.png"
      w={"100%"}
      position="relative"
      bg="white"
    />
  );
};

const Contact = () => {
  return (
    <div className="flex flex-col items-center font-lobster px-4 py-10">
      {/* <div>Хэзээ:</div> */}
      <div className="text-lg font-normal">
        2022 оны 07 сарын 03 -д 17:00 цагаас
      </div>
      {/* <div>Хүлээн авалт болох газар:</div> */}
      <div className="text-lg font-normal">
        Улаанбаатар, Баянзүрх дүүрэг, Энх тайваны өргөн чөлөө, Кино үйлдвэр,
        Амар ресторан
      </div>
      <a href="https://www.google.com/maps/place/Amar+Hotel/@47.9121827,106.951779,3112m/data=!3m1!1e3!4m8!3m7!1s0x5d96918c82334b29:0x7bd8ecd5d4e563ee!5m2!4m1!1i2!8m2!3d47.9166211!4d106.9605482">
        {" "}
        <div className="text-blue-400 border border-blue-500 px-4 py-2 rounded-md font-sans flex flex-col-2 space-x-2 mt-10">
          <SiGooglemaps className="mt-[4px]" />
          <p>Google maps</p>
        </div>
      </a>
      <div className="flex flex-col-2 space-x-4 mt-4">
        <a
          href={`tel:99459449}`}
          className="text-green-400 border border-green-500 px-4 py-2 rounded-md font-sans  flex flex-col-2 space-x-2"
        >
          <BsTelephoneOutboundFill className="mt-[4px]" />
          <p>Мөнхгэрэл </p>
        </a>
        <a
          href={`tel:99986665}`}
          className="text-green-400 border border-green-500 px-4 py-2 rounded-md font-sans flex flex-col-2 space-x-2"
        >
          <BsTelephoneOutboundFill className="mt-[4px]" />
          <p>Батцэцэг </p>
        </a>
      </div>
    </div>
  );
};
