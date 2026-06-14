import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="group h-full rounded-2xl border border-[#E8E0D5] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#F8F3EB] text-[#C48E3B] transition-all duration-300 group-hover:bg-[#C48E3B] group-hover:text-white">
        {icon}
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-[#2E2A25]">{title}</h3>

      <p className="leading-relaxed text-[#6B6258]">{paragraph}</p>
    </div>
  );
};

export default SingleFeature;
