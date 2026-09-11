import Image from "next/image";
import { useVilla } from "./Villa";

// Border sides per detail-item position (1-indexed), across breakpoints —
// same values used by VillaInfo on the villa detail pages.
const detailBorders = [
  "border-r-[0.1vw] border-black max-lg:border-r max-lg:border-b",
  "border-r-[0.1vw] border-black max-lg:border-r-0 max-lg:border-b",
  "border-r-[0.1vw] border-black max-lg:border-r",
  "",
];

export default function About() {
  const villa = useVilla();
  const details = [
    { value: villa.acres, label: "Acres" },
    { value: villa.units, label: "Units" },
    { value: villa.bhkResidences, label: "BHK Residences" },
    { value: villa.floors, label: "Floors" },
  ];

  return (
    <section id="about" className="bg-beige">
      <div className="px-32 lg:max-xl:px-20 max-lg:px-20 max-md:px-10 max-sm:px-5">
        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>

        <div className="flex justify-center">
          <h2 className="text-5xl lg:max-xl:text-4xl max-lg:text-4xl max-md:text-2xl font-medium leading-[1.1] text-center whitespace-nowrap lg:max-xl:whitespace-normal max-lg:whitespace-normal">
            LOW-DENSITY GATED COMMUNITY IN BENGALURU
          </h2>
        </div>
        <div className="w-full pt-16 max-lg:pt-12 max-md:pt-8"></div>

        <div className="grid grid-cols-2 gap-[5vw] items-stretch max-lg:grid-cols-1 max-lg:gap-10">
          <div className="flex flex-col items-start gap-[1.5vw] max-lg:gap-6 max-lg:items-center max-lg:text-center max-md:gap-4 max-lg:order-2">
            <p className="text-2xl max-lg:text-xl max-md:text-base text-justify">
              Bollineni Vienna by Bollineni Group brings timeless elegance and contemporary luxury to one of North Bengaluru’s most sought-after locations. Designed for those who value exclusivity, this low-density gated community features refined architecture, expansive spaces, and world-class amenities.
            </p>
            <p className="text-2xl max-lg:text-xl max-md:text-base text-justify">
              Perfectly positioned for those seeking apartments near Kempegowda International Airport, Bollineni Vienna offers premium apartments in Yelahanka and thoughtfully designed bespoke residences Bengaluru homebuyers will appreciate. Each 4 BHK and 5 BHK residence is crafted to maximize natural light, ventilation, privacy, and effortless functionality.
            </p>
            <p className="text-2xl max-lg:text-xl max-md:text-base text-justify">
              Surrounded by lush landscapes, open greens, and curated lifestyle amenities, Bollineni Vienna offers luxury apartments in Kogilu and ultra luxury apartments in North Bengaluru, creating a serene retreat with seamless urban convenience. Discover distinguished flats for sale in Kogilu and experience elevated living in one of Bengaluru’s finest addresses.
            </p>
          </div>
          <div className="relative max-lg:order-1">
            <div className="sticky top-[6vw] h-[28vw] overflow-hidden max-lg:static max-lg:h-[80vw]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero.jpg"
                  alt="Elegant living room interior at Bollineni Vienna with a marble feature wall and wood-panelled shelving."
                  title="Elegant living room interior at Bollineni Vienna with a marble feature wall and wood-panelled shelving."
                  fill
                  loading="lazy"
                  sizes="(max-width: 991px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>

        <div className="border-[0.1vw] border-black rounded-[1.5vw] grid grid-cols-4 max-lg:grid-cols-2 max-lg:grid-rows-[auto_auto]">
          {details.map((detail, index) => (
            <div
              key={detail.label}
              className={`flex flex-col justify-center items-center py-[1.5vw] px-[1vw] max-lg:py-6 max-lg:px-4 ${detailBorders[index]}`}
            >
              <div className="overflow-hidden">
                <div className="text-3xl lg:max-xl:text-2xl max-lg:text-2xl max-md:text-xl font-medium">{detail.value}</div>
              </div>
              <div className="text-2xl max-lg:text-xl max-md:text-base text-center">{detail.label}</div>
            </div>
          ))}
        </div>

        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>
      </div>
    </section>
  );
}
