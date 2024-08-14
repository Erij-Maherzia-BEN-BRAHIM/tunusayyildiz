"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const covers = Array.from({ length: 12 }, (_, index) => `/${index + 1}.png`);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  return (
    <div className="flex justify-center max-w-xl mx-auto items-center flex-1 h-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={2.3}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        onSlideChange={({ realIndex }: { realIndex: number }) =>
          setActiveSlideIdx(realIndex)
        }
      >
        {covers.map((cover, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-full"
            >
              <Link
                href={`/mag/${index + 1}`}
                target="_blank"
                className="flex flex-col justify-end items-center rounded-2xl border"
              >
                <Image
                  src={cover}
                  alt="magazine cover"
                  className={`h-72 w-full object-cover object-center ${
                    index == activeSlideIdx ? "rounded-t-2xl" : " rounded-2xl"
                  }`}
                  height={288}
                  width={120}
                />
                <motion.p
                  className={index == activeSlideIdx ? "block p-4" : "hidden"}
                >
                  {`AYYILDIZ DERGİSİNİN ${index + 1}`}
                </motion.p>{" "}
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
