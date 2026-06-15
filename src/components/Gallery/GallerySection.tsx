"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

const galleryImages = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
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

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image}
                  alt={`Wedding Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />

              <div className="absolute right-0 bottom-0 left-0 translate-y-full bg-gradient-to-t from-black/80 to-transparent p-5 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium">
                  Dokumentasi Pernikahan Elegan
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
            Dari akad hingga resepsi, kami membantu mewujudkan setiap impian
            pasangan menjadi sebuah perayaan cinta yang berkelas dan penuh
            makna.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
