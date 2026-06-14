import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Tips Memilih Tema Pernikahan yang Sesuai dengan Kepribadian Anda",
    paragraph:
      "Temukan inspirasi tema pernikahan mulai dari modern, tradisional, hingga outdoor wedding yang sesuai dengan karakter Anda dan pasangan.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Srikandi Wedding",
      image: "/images/blog/author.png",
      designation: "Wedding Planner",
    },
    tags: ["Wedding Tips"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Cara Menyusun Budget Pernikahan Tanpa Mengurangi Kualitas Acara",
    paragraph:
      "Pelajari cara mengatur anggaran pernikahan secara efektif agar tetap elegan, berkesan, dan sesuai dengan kemampuan finansial Anda.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Srikandi Wedding",
      image: "/images/blog/author.png",
      designation: "Wedding Consultant",
    },
    tags: ["Budget"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Checklist Persiapan Pernikahan dari 12 Bulan Hingga Hari H",
    paragraph:
      "Panduan lengkap persiapan pernikahan agar setiap detail acara berjalan lancar tanpa stres dan tanpa ada yang terlewat.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Srikandi Wedding",
      image: "/images/blog/author.png",
      designation: "Wedding Organizer",
    },
    tags: ["Planning"],
    publishDate: "2025",
  },
];

export default blogData;
