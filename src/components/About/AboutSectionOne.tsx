import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-start text-[15px] leading-relaxed font-medium text-[#6B6258]">
      <span className="mt-0.5 mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F3EB] text-[#C48E3B]">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="bg-[#FCFBF9] pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-[#E2BC81]/[.3] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-4 inline-flex rounded-full bg-[#F8F3EB] px-4 py-2">
                <span className="text-sm font-medium text-[#C48E3B]">
                  Tentang Kami
                </span>
              </div>

              <SectionTitle
                title="Mendampingi Setiap Langkah Menuju Hari Bahagia Anda"
                paragraph="Srikandi Wedding hadir untuk membantu setiap pasangan mewujudkan pernikahan yang berkesan, terencana, dan sesuai impian. Dengan pengalaman lebih dari 5 tahun, kami percaya bahwa setiap kisah cinta layak dirayakan dengan sempurna melalui pelayanan yang personal dan penuh perhatian."
                mb="32px"
              />

              <div className="mb-8 rounded-2xl border border-[#E2BC81]/20 bg-[#F8F3EB] p-6">
                <h3 className="mb-3 text-lg font-semibold text-black">
                  Misi Kami
                </h3>

                <p className="leading-relaxed text-[#6B6258]">
                  Membantu setiap pasangan menikmati proses menuju hari
                  pernikahan tanpa stres dengan perencanaan yang matang,
                  koordinasi yang profesional, dan perhatian pada setiap detail
                  penting.
                </p>
              </div>

              <div
                className="mb-12 max-w-[600px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <List text="Pendekatan Personal untuk Setiap Pasangan" />
                    <List text="Perencanaan Detail & Terstruktur" />
                    <List text="Koordinasi Vendor Profesional" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <List text="Pendampingan Hingga Hari Acara" />
                    <List text="Komunikasi Cepat & Transparan" />
                    <List text="Komitmen pada Kualitas Pelayanan" />
                  </div>
                </div>

                {/* <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#E2BC81]/20 pt-8">
                  <div>
                    <h3 className="text-3xl font-bold text-[#C48E3B]">150+</h3>
                    <p className="mt-1 text-sm text-[#6B6258]">Pernikahan</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-[#C48E3B]">5+</h3>
                    <p className="mt-1 text-sm text-[#6B6258]">Tahun</p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-[#C48E3B]">50+</h3>
                    <p className="mt-1 text-sm text-[#6B6258]">Partner</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[560px]">
                <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-[#E2BC81]/10 blur-3xl"></div>

                <div className="relative overflow-hidden rounded-[32px] shadow-xl">
                  <Image
                    src="/images/about/about-image.jfif"
                    alt="Srikandi Wedding Team"
                    width={700}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-lg">
                  <p className="text-sm text-[#6B6258]">Dipercaya oleh</p>

                  <h4 className="text-xl font-bold text-[#C48E3B]">
                    150+ Pasangan
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
