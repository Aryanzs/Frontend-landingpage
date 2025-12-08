import { CheckCircle2 } from "lucide-react";
const HerbHeroSection = ({ product }) => {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
      {/* Image card */}
      <div className="rounded-[32px] bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        <div className="overflow-hidden rounded-[24px] bg-[#FFF7E2]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Text side */}
      <div>
        <h1 className="text-xl sm:text-2xl md:text-[26px] font-semibold text-[#333333] leading-snug">
          Chitrak – Plumbago zeylanica
          <br />
          <span className="text-[#555555] text-base">
            (Sanskrit – चित्रक)
          </span>
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-[#4F4F4F] max-w-xl">
          Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful
          Ayurvedic herb valued for its ability to improve digestion, reduce
          inflammation, and detoxify the body. It is great for boosting
          metabolism, enhancing skin health, and easing joint pain.
        </p>

        {/* Why Chitrak list */}
        <div className="mt-6">
          <h2 className="mb-3 text-sm font-semibold text-[#333333]">
            Why Chitrak?
          </h2>
          <ul className="space-y-2 text-sm text-[#4F4F4F]">
            <BulletItem>
              It is valued because it helps lower blood sugar, boosts
              digestion, and reduces anxiety.
            </BulletItem>
            <BulletItem>
              It also protects the skin and speeds up wound healing with its
              antioxidant and antimicrobial properties.
            </BulletItem>
            <BulletItem>
              It is mostly used in Ayurvedic medicines for indigestion and
              metabolic issues.
            </BulletItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

const BulletItem = ({ children }) => (
  <li className="flex items-start gap-2">
    <CheckCircle2 className="mt-[2px] h-4 w-4 text-[#3A643B]" />
    <span>{children}</span>
  </li>
);

export default HerbHeroSection