import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="services" className="bg-[#FCFBF9] py-16 md:py-20 lg:py-28">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#F8F3EB] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#F3ECE2] blur-3xl" />
        <div className="container">
          <SectionTitle
            title="Layanan Pernikahan Lengkap"
            paragraph="Dari perencanaan hingga hari bahagia Anda, Srikandi Wedding hadir dengan layanan profesional yang dirancang untuk menciptakan momen tak terlupakan."
            center
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
