import Image from "next/image";

const facts = [
  { value: "12+ ", label: "Years" },
  { value: "10 Million Sft.", label: "Developed" },
  { value: "5K+", label: "Happy Families" },
  { value: "5 Million Sft.", label: "Under Development" },  
];

export default function AboutBuilder() {
  return (
    <section id="builder" className="bg-beige">
      <div className="px-32 lg:max-xl:px-20 max-lg:px-20 max-md:px-10 max-sm:px-5">
        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>

        <div className="flex flex-col items-center text-center gap-[2vw] max-lg:gap-10">
          <div className="flex flex-col items-center gap-[1.25vw] max-lg:gap-4">
            <div className="relative h-[7vw] aspect-[1920/1080] max-lg:h-24 max-md:h-20">
              <Image
                src="/images/bollineni_vienna.svg"
                loading="lazy"
                alt="Bollineni Vienna"
                title="Bollineni Vienna"
                fill
                sizes="280px"
                className="object-contain"
              />
            </div>
            <div className="text-2xl max-lg:text-xl max-md:text-base font-medium">
              About BSCPL
            </div>
          </div>

          <div className="flex flex-col gap-[1.5vw] max-lg:gap-6 max-w-[78vw] max-lg:max-w-[95%]">
            <p className="font-heading text-3xl max-lg:text-2xl max-md:text-xl leading-[1.3] text-center">
              &ldquo;We don&rsquo;t build homes; we build them to endure, with engineering at their foundation and trust at their core.&rdquo;
            </p>
            <p className="text-2xl max-lg:text-xl max-md:text-base text-justify">
              BSCPL developers bring decades of infrastructure and engineering expertise to residential development across Bengaluru, Hyderabad, and Chennai, creating durable, thoughtfully planned homes rooted in quality, transparency, and timely execution. From RERA-compliant processes and clear communication to communities shaped by greenery, open spaces, and premium amenities, every project is designed for comfort and lasting value. Strategically chosen locations further enhance connectivity, lifestyle, and investment potential. With a legacy of quality construction and refined design, BSCPL developers continues to create homes that inspire confidence, from bespoke residences Bengaluru homebuyers can trust to flats for sale in Kogilu, premium apartments in Yelahanka, and ultra luxury apartments in North Bengaluru.
            </p>
          </div>
        </div>

        <div className="w-full pt-14 max-lg:pt-12 max-md:pt-10"></div>
        <div className="border-t border-black pt-[1.5vw] grid grid-cols-4 gap-[1.5vw] max-lg:grid-cols-1 max-lg:gap-6 max-lg:pt-6">
          {facts.map((fact, index) => (
            <div
              key={fact.label}
              className={`flex flex-col items-center text-center gap-[0.25vw] max-lg:gap-1 ${ index > 0 ? "max-lg:border-t max-lg:border-black/20 max-lg:pt-6" : "" }`}
            >
              <span className="text-3xl max-lg:text-2xl max-md:text-xl font-medium">{fact.value}</span>
              <span className="text-2xl max-lg:text-xl max-md:text-base text-neutral-light">{fact.label}</span>
            </div>
          ))}
        </div>

        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>
      </div>
    </section>
  );
}
