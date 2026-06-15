"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Image from "next/image";
import PricelistCarousel from "./Pricelist";
import Reveal from "@/components/Common/Reveal";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section
      id="packages"
      className="relative z-10 bg-[#FCFBF9] py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <Reveal>
          <SectionTitle
            title="Paket Pernikahan"
            paragraph="Pilih paket dekorasi dan tata acara yang sesuai dengan kebutuhan pernikahan Anda. Seluruh paket dapat dikonsultasikan dan disesuaikan dengan konsep acara."
            center
            width="665px"
          />
        </Reveal>
        {/* <div className="mb-10 flex justify-center">
          <span className="text-base font-semibold text-[#C48E3B]">
            Pricelist Srikandi Wedding {new Date().getFullYear()}
          </span>
        </div> */}
        <Reveal delay={0.1}>
          <div className="mb-24 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Minimalis */}
            <PricingBox
              packageName="Minimalis"
              price="15 Jt"
              duration="paket"
              subtitle="Paket sederhana dan elegan untuk acara pernikahan yang hangat dan intim."
            >
              <OfferList text="Tenda Dekor 4 Lokal (64 m²)" status="active" />
              <OfferList text="Kursi Napol Cover 100 pcs" status="active" />
              <OfferList text="Mini Pelaminan 4 pcs" status="active" />
              <OfferList text="Blower 1 pcs" status="active" />
              <OfferList text="Gubukan 1 pcs" status="active" />
              <OfferList text="Makeup Pengantin & Softlens" status="active" />
            </PricingBox>

            {/* Silver */}
            <PricingBox
              packageName="Silver"
              price="22 Jt"
              duration="paket"
              subtitle="Pilihan populer dengan dekorasi lebih lengkap dan kapasitas tamu lebih besar."
            >
              <OfferList text="Tenda Dekor 6 Lokal (96 m²)" status="active" />
              <OfferList text="Kursi Future Cover 100 pcs" status="active" />
              <OfferList text="Pelaminan 6 Meter" status="active" />
              <OfferList text="Mini Garden" status="active" />
              <OfferList text="Gapura & Janur" status="active" />
              <OfferList text="Makeup Pengantin & Softlens" status="active" />
            </PricingBox>

            {/* Gold */}
            <PricingBox
              packageName="Gold"
              price="25 Jt"
              duration="paket"
              subtitle="Dekorasi premium dengan area pelaminan yang lebih luas dan elegan."
            >
              <OfferList text="Tenda Dekor 8 Lokal (120 m²)" status="active" />
              <OfferList text="Kursi Future Cover 150 pcs" status="active" />
              <OfferList text="Pelaminan 6–8 Meter" status="active" />
              <OfferList text="Mini Garden Premium" status="active" />
              <OfferList text="Janur & Bambu 2 Pasang" status="active" />
              <OfferList text="Makeup Pengantin & Softlens" status="active" />
            </PricingBox>

            {/* Platinum */}
            <PricingBox
              packageName="Platinum"
              price="30 Jt"
              duration="paket"
              subtitle="Paket terbaik dengan dekorasi mewah dan kapasitas tamu lebih banyak."
            >
              <OfferList text="Tenda Dekor 8 Lokal (150 m²)" status="active" />
              <OfferList text="Kursi Future Cover 200 pcs" status="active" />
              <OfferList text="Pelaminan 8 Meter" status="active" />
              <OfferList text="Mini Garden Premium" status="active" />
              <OfferList text="Janur & Bambu 2 Pasang" status="active" />
              <OfferList text="Makeup Pengantin & Softlens" status="active" />
            </PricingBox>
          </div>
        </Reveal>
        <Reveal>
          <SectionTitle
            title="Pricelist Lengkap"
            paragraph="Lihat detail seluruh paket, layanan wedding organizer, dekorasi, makeup, dan dokumentasi."
            center
          />
        </Reveal>
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"> */}
        {/* {[
            "/images/pricelist/1.png",
            "/images/pricelist/2.png",
            "/images/pricelist/3.png",
            "/images/pricelist/4.png",
            "/images/pricelist/5.png",
            "/images/pricelist/6.png",
            "/images/pricelist/7.png",
            "/images/pricelist/8.png",
          ].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src={image}
                alt={`Pricelist ${index + 1}`}
                width={600}
                height={900}
                className="w-full transition duration-300 hover:scale-105"
              />
            </div>
          ))} */}

        <PricelistCarousel />
        {/* </div> */}
        <Reveal delay={0.2}>
          <div className="mt-16 text-center">
            <h3 className="mb-4 text-3xl leading-tight! font-bold text-[#2E2A25] sm:text-4xl md:text-[45px]">
              Belum Menemukan Paket yang Sesuai?
            </h3>

            <p className="mb-8 text-base leading-relaxed! text-[#6B6258] md:text-lg">
              Kami siap membantu menyesuaikan paket sesuai kebutuhan dan budget
              pernikahan Anda.
            </p>

            <a
              href="https://wa.me/6287834800971"
              target="_blank"
              className="inline-flex rounded-md bg-[#C48E3B] px-8 py-4 text-white"
            >
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C48E3B" />
              <stop offset="1" stopColor="#C48E3B" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C48E3B" />
              <stop offset="1" stopColor="#C48E3B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
