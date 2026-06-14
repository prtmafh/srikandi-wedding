"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section
      id="packages"
      className="relative z-10 bg-[#FCFBF9] py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Paket Wedding Organizer"
          paragraph="Setiap pasangan memiliki cerita yang berbeda. Pilih paket layanan yang sesuai dengan kebutuhan acara Anda atau konsultasikan untuk paket yang sepenuhnya disesuaikan."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span className="mr-4 text-base font-semibold text-[#C48E3B]">
              Investasi Pernikahan
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Akad Intimate"
            price="5.000.000"
            duration="-"
            subtitle="Cocok untuk akad atau resepsi sederhana dengan pendampingan profesional."
          >
            <OfferList text="Konsultasi Persiapan Pernikahan" status="active" />
            <OfferList text="Rundown Acara" status="active" />
            <OfferList text="Koordinasi Vendor" status="active" />
            <OfferList text="Tim WO Hari H" status="active" />
            <OfferList text="Pendampingan Pengantin" status="active" />
            <OfferList text="Full Planning" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Wedding Signature"
            price="15.000.000"
            duration="-"
            subtitle="Pilihan favorit pasangan dengan layanan lengkap dari persiapan hingga hari pernikahan."
          >
            <OfferList text="Full Wedding Planning" status="active" />
            <OfferList text="Koordinasi Seluruh Vendor" status="active" />
            <OfferList text="Tim WO Profesional" status="active" />
            <OfferList text="Pendampingan Keluarga" status="active" />
            <OfferList text="Technical Meeting" status="active" />
            <OfferList text="Gladi Bersih Acara" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Royal Wedding"
            price="30.000.000"
            duration="-"
            subtitle="Layanan premium dengan konsep eksklusif dan pendampingan penuh."
          >
            <OfferList text="Wedding Planning Premium" status="active" />
            <OfferList text="Konsep Acara Eksklusif" status="active" />
            <OfferList text="Dedicated Wedding Consultant" status="active" />
            <OfferList text="Unlimited Coordination" status="active" />
            <OfferList text="VIP Family Assistance" status="active" />
            <OfferList text="Full Event Management" status="active" />
          </PricingBox>
        </div>
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
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
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
              id="paint1_linear_93:235"
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
