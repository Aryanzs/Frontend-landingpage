
import { Droplets, Leaf, Flame } from "lucide-react";
const PrakritiImpactSection = () => (
  <section className="mt-10">
    <h2 className="mb-4 text-sm font-semibold text-[#333333]">
      Prakriti Impact
    </h2>

    <div className="grid gap-6 sm:grid-cols-3 max-w-xl">
      <DoshaCard label="Vata Balanced" color="#2F7B4A" />
      <DoshaCard label="Kapha Balanced" color="#F4A11A" />
      <DoshaCard label="Pitta Unbalanced" color="#E85C3C" unbalanced />
    </div>
  </section>
);

const DoshaCard = ({ label, color, unbalanced = false }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-24 w-24">
        {/* outer semicircle */}
        <div
          className="absolute inset-0 rounded-full border-[8px]"
          style={{ borderColor: `${color}33` }}
        />
        {/* inner arc */}
        <div
          className="absolute inset-2 rounded-full border-[8px] border-t-[8px] border-l-[8px] border-b-0 border-r-0"
          style={{ borderColor: color, transform: "rotate(135deg)" }}
        />
        {/* center icon */}
        <div className="absolute inset-4 flex items-center justify-center rounded-full bg-[#FFF7E2]">
          {label.startsWith("Vata") && (
            <Droplets className="h-5 w-5 text-[#2F7B4A]" />
          )}
          {label.startsWith("Kapha") && (
            <Leaf className="h-5 w-5 text-[#2F7B4A]" />
          )}
          {label.startsWith("Pitta") && (
            <Flame className="h-5 w-5 text-[#E85C3C]" />
          )}
        </div>
      </div>
      <p
        className={`text-xs ${
          unbalanced ? "text-[#E85C3C]" : "text-[#333333]"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default PrakritiImpactSection