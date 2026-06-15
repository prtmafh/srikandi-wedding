import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#FCFBF9] py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-[#E8DDD0] bg-white px-8 py-14 shadow-sm lg:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block text-sm font-medium tracking-[0.2em] text-[#C48E3B] uppercase">
                Srikandi Wedding Organizer
              </span>

              <h2 className="mb-6 text-3xl font-bold text-[#2E2A25] md:text-5xl">
                Jadwalkan Konsultasi Gratis
              </h2>

              <p className="mb-10 text-lg leading-relaxed text-[#6B6258]">
                Ceritakan konsep pernikahan impian Anda kepada tim kami. Kami
                siap membantu mulai dari perencanaan, dekorasi, koordinasi
                vendor hingga hari pelaksanaan agar acara berjalan lancar dan
                berkesan.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/6287834800971?text=${encodeURIComponent(
                    `Halo Tim Srikandi Wedding Organizer.

Saya sedang merencanakan pernikahan dan ingin berkonsultasi mengenai layanan yang tersedia. Mohon informasi terkait paket wedding, dekorasi, serta ketersediaan tanggal acara.

Terima kasih.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#C48E3B] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#B17C2C]"
                >
                  Konsultasi via WhatsApp
                </a>

                <a
                  href="#packages"
                  className="rounded-xl border border-[#C48E3B] px-8 py-4 font-semibold text-[#C48E3B] transition-all duration-300 hover:bg-[#F8F1E7]"
                >
                  Lihat Paket Wedding
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-[#EFE8DD] pt-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <h4 className="mb-2 font-semibold text-[#2E2A25]">
                    Respon Cepat
                  </h4>
                  <p className="text-sm text-[#6B6258]">
                    Konsultasi langsung dengan tim kami.
                  </p>
                </div>

                <div className="text-center">
                  <h4 className="mb-2 font-semibold text-[#2E2A25]">
                    Konsultasi Gratis
                  </h4>
                  <p className="text-sm text-[#6B6258]">
                    Tanpa biaya dan tanpa komitmen.
                  </p>
                </div>

                <div className="text-center">
                  <h4 className="mb-2 font-semibold text-[#2E2A25]">
                    Layanan Lengkap
                  </h4>
                  <p className="text-sm text-[#6B6258]">
                    Dari akad hingga resepsi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
