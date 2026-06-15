"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="grid gap-12 py-16 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              {/* <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/images/logo/logo.svg"
                  alt="Wedding Organizer"
                  width={180}
                  height={50}
                />
              </Link> */}

              <p className="text-body-color max-w-md text-base leading-relaxed">
                Mewujudkan pernikahan yang elegan, berkesan, dan berjalan
                sempurna. Dari perencanaan hingga hari istimewa Anda, kami hadir
                untuk memastikan setiap detail tertangani dengan profesional.
              </p>

              <div className="mt-8 flex gap-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color transition hover:text-[#C48E3B]"
                >
                  Instagram
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color transition hover:text-[#C48E3B]"
                >
                  TikTok
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-color transition hover:text-[#C48E3B]"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Menu */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-black dark:text-white">
                Navigasi
              </h3>

              <ul className="space-y-4">
                <li>
                  <Link
                    href="#home"
                    className="text-body-color hover:text-[#C48E3B]"
                  >
                    Beranda
                  </Link>
                </li>

                <li>
                  <Link
                    href="#about"
                    className="text-body-color hover:text-[#C48E3B]"
                  >
                    Tentang Kami
                  </Link>
                </li>

                <li>
                  <Link
                    href="#services"
                    className="text-body-color hover:text-[#C48E3B]"
                  >
                    Layanan
                  </Link>
                </li>

                <li>
                  <Link
                    href="#gallery"
                    className="text-body-color hover:text-[#C48E3B]"
                  >
                    Galeri
                  </Link>
                </li>

                <li>
                  <Link
                    href="#contact"
                    className="text-body-color hover:text-[#C48E3B]"
                  >
                    Konsultasi
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-black dark:text-white">
                Hubungi Kami
              </h3>

              <ul className="text-body-color space-y-4">
                <li>📱 +6287834800971</li>
                <li>✉️ hello@weddingorganizer.com</li>
                <li>📍 Bekasi, Indonesia</li>
              </ul>

              <a
                href="https://wa.me/6287834800971"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#C48E3B] px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-stroke border-t py-6 dark:border-white/10">
            <p className="text-body-color text-center text-sm">
              © {new Date().getFullYear()} Wedding Organizer. All rights
              reserved.
            </p>
          </div>
        </div>
        {/* <div className="absolute top-14 right-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0.62" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0.62" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0.62" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0.62" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0.62" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0.62" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C48E3B" stopOpacity="0" />
                <stop offset="1" stopColor="#C48E3B" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
