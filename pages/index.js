import Head from "next/head";
import { Image, Box } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  return (
    <div className=" flex place-content-center flex-col">
      <Head>
        <title>Wedding. Munkhgerel & Battsetseg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      <Invitation />
      <Seprater />
      <Slider />
      {/* <Location /> */}
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
        <div className="flex space-x-4 mt-64">
          <div className="flex-grow"></div>
          <Image h="40px" src="/king.png" w={"60px"} position="relative" />
          <Image h="40px" src="/queen.png" w={"60px"} position="relative" />
          <div className="flex-grow"></div>
        </div>

        <div className="flex space-x-2 mt-[10px]">
          <div>
            <p className=" font-rouge text-4xl font-normal">Munkhgerel</p>
            <p className="font-rouge text-xl -mt-[4px] text-right">
              Chuluunbold
            </p>
          </div>
          <div className=" font-rouge text-4xl font-normal">{` & `}</div>
          <div>
            <p className=" font-rouge text-4xl font-normal">Battsetseg</p>
            <p className="font-rouge text-xl -mt-[4px]">Batkhuyag</p>
          </div>
        </div>

        <div className="flex font-rouge mt-[20px]">
          <p>Sunday</p>
          <BsDot className="mt-1" />
          <p>2022 July 03</p>
          <BsDot className="mt-1" />
          <p>17:00</p>
        </div>

        <div className=" scrollcontainer mt-[-20px]">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
      </div>
    </div>
  );
};
const Invitation = () => {
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
      <div className=" absolute font-lobster mt-[-460px] pl-10 pr-10 text-2xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Эрхэм хүндэт")
              // .callFunction(() => {
              //   console.log("String typed out!");
              // })
              // .pauseFor(500)
              .typeString(
                `<p style='font-weight: bold; font-size: "24px"'>Ч. Мөнхгэрэл таныг</p>`
              )
              .typeString(
                "<p>гэр бүлийн хамт бидний хуримын ёслолын хүндэтгэлийн цайллагад хүрэлцэн ирэхийг урьж байна.</p>"
              )
              .pauseFor(1500)
              .deleteAll()
              .typeString(
                "Урьсан хосын голомт бадарч Уригдсан таны буян дэлгэрч Удам ургийн холбоо зузаарч Удаан жаргалын ерөөл оршиг."
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
            Охин: <strong>Маралгоо</strong>
            Хүү: <strong>Манлай</strong>
          </p>`
              )
              .start();
          }}
          options={{
            delay: 70,
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

const Slider = () => {
  return (
    <div className="slide">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/slider/1.jpg" objectFit={"cover"} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slider/2.jpg" objectFit={"cover"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const Location = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDHhC-OwSSChkghB23aIVn_k2DWAxFmZkk",
  });
  const center = useMemo(() => ({ lat: 47.9164714, lng: 106.9597117 }), []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
};
