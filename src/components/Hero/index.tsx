import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-[#FCFBF9] pt-[90px] pb-16 md:pt-[110px] md:pb-[90px] xl:pt-[120px] xl:pb-[120px]"
      >
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-[#E2BC81] bg-[#F8F3EB] px-4 py-2 text-sm font-medium text-[#C48E3B]">
                ✨ Wedding Organizer Profesional
              </div>

              <h1 className="mb-6 max-w-[700px] text-5xl leading-[1.1] font-bold text-[#2E2A25] md:text-6xl">
                Mewujudkan Pernikahan
                <span className="block text-[#C48E3B]">Impian Anda</span>
              </h1>

              <p className="mb-10 max-w-[600px] text-lg leading-relaxed text-[#6B6258]">
                Srikandi Wedding hadir untuk membantu mewujudkan hari bahagia
                Anda dengan pelayanan profesional, elegan, dan penuh perhatian
                pada setiap detail acara.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://wa.me/6281234567890"
                  className="rounded-xl bg-[#C48E3B] px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:bg-[#A8742D]"
                >
                  Konsultasi Gratis
                </Link>

                <Link
                  href="/gallery"
                  className="rounded-xl border border-[#C48E3B] px-8 py-4 text-center font-semibold text-[#C48E3B] transition hover:bg-[#C48E3B] hover:text-white"
                >
                  Lihat Portfolio
                </Link>
              </div>

              {/* STATISTIC */}
              <div className="mt-14 flex flex-wrap gap-10">
                <div>
                  <h3 className="text-3xl font-bold text-[#C48E3B]">250+</h3>
                  <p className="text-sm text-[#6B6258]">Wedding Events</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#C48E3B]">5+</h3>
                  <p className="text-sm text-[#6B6258]">Tahun Pengalaman</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-[#C48E3B]">98%</h3>
                  <p className="text-sm text-[#6B6258]">Klien Puas</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative mx-auto max-w-[500px]">
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-[#E2BC81]/20 to-[#C48E3B]/20 blur-3xl" />

              <Image
                src="/images/hero/hero-wedding.jpg"
                alt="Srikandi Wedding"
                width={700}
                height={900}
                priority
                className="relative h-auto w-full rounded-[32px] object-cover shadow-2xl"
              />

              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-6 py-4 shadow-xl">
                <p className="text-3xl font-bold text-[#C48E3B]">250+</p>
                <p className="text-sm text-[#634014]">Acara Pernikahan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-20 lg:opacity-40">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E2BC81" />
                <stop offset="1" stopColor="#E2BC81" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0.12" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0.12" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" />
                <stop offset="1" stopColor="#E2BC81" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" />
                <stop offset="1" stopColor="#FCFBF9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E2BC81" />
                <stop offset="1" stopColor="#FCFBF9" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" />
                <stop offset="1" stopColor="#E2BC81" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute top-0 right-0 z-[-1] opacity-20 lg:opacity-40">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" />
                <stop offset="1" stopColor="#E2BC81" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
