import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

const galleryImages = [
  "/images/gallery/gallery-1.jfif",
  "/images/gallery/gallery-2.jfif",
  "/images/gallery/gallery-3.jfif",
  "/images/gallery/gallery-4.jfif",
  "/images/gallery/gallery-5.jfif",
  "/images/gallery/gallery-6.jfif",
];

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-[#FCFBF9] to-white py-20 lg:py-24"
    >
      <div className="container">
        <SectionTitle
          title="Galeri Momen Istimewa"
          paragraph="Setiap detail kami persiapkan dengan penuh dedikasi untuk menghadirkan pernikahan yang berkesan, elegan, dan tak terlupakan."
          center
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image}
                  alt={`Wedding Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              <div className="absolute right-0 bottom-0 left-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-5 text-white transition duration-500 group-hover:translate-y-0">
                <p className="text-sm font-medium">
                  Dokumentasi Pernikahan Elegan
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
            Dari akad hingga resepsi, kami membantu mewujudkan setiap impian
            pasangan menjadi sebuah perayaan cinta yang berkelas dan penuh
            makna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
