import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 15H5V9h14v10z" />
      </svg>
    ),
    title: "Wedding Organizer",
    paragraph:
      "Pendampingan penuh mulai dari persiapan hingga hari pernikahan untuk memastikan acara berjalan lancar, teratur, dan sesuai impian Anda.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 14H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V7h8v2z" />
      </svg>
    ),
    title: "Wedding Planner",
    paragraph:
      "Membantu menyusun konsep acara, timeline, budgeting, serta pemilihan vendor yang sesuai dengan kebutuhan dan tema pernikahan.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2c1.7 0 3 1.3 3 3 0 .6-.2 1.2-.5 1.7 1.6-.3 3.3.4 4.1 1.9.8 1.5.5 3.4-.7 4.6.6.2 1.2.5 1.7 1 1.2 1.2 1.2 3.1 0 4.2s-3.1 1.2-4.2 0c-.5-.5-.8-1-1-1.7-1.2 1.2-3.1 1.5-4.6.7s-2.2-2.5-1.9-4.1c-.5.3-1.1.5-1.7.5-1.7 0-3-1.3-3-3s1.3-3 3-3c.6 0 1.2.2 1.7.5-.3-1.6.4-3.3 1.9-4.1.5-.3 1.1-.4 1.7-.4z" />
      </svg>
    ),
    title: "Dekorasi Pernikahan",
    paragraph:
      "Dekorasi elegan dan berkelas untuk akad, resepsi, maupun engagement dengan konsep yang disesuaikan dengan karakter pasangan.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2 5h-4l-1 4 2 2-2 9h6l-2-9 2-2-1-4z" />
      </svg>
    ),
    title: "Rias & Busana Pengantin",
    paragraph:
      "Layanan makeup profesional dan busana pengantin yang dirancang untuk menampilkan penampilan terbaik Anda di hari spesial.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M20 5h-3.2l-1.8-2H9L7.2 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
      </svg>
    ),
    title: "Foto & Video Dokumentasi",
    paragraph:
      "Mengabadikan setiap momen berharga melalui foto dan video berkualitas tinggi dengan sentuhan sinematik yang berkesan.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path d="M12 14a4 4 0 0 0 4-4V5a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4zm5-4a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-4.08A7 7 0 0 0 19 10h-2z" />
      </svg>
    ),
    title: "Entertainment & MC",
    paragraph:
      "Hiburan, live music, dan MC profesional yang membantu menciptakan suasana acara yang hangat, meriah, dan berkesan.",
  },
];
export default featuresData;
