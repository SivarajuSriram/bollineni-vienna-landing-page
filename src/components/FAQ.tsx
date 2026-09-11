"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Where is BSCPL Bollineni Vienna Project located?",
    answer: "BSCPL Bollineni Vienna is located in Kogilu, near Yelahanka, a prime locality in North Bangalore.",
  },
  {
    question: "What are the different types of apartments it Offer?",
    answer: "The project offers exclusive 4 & 5 BHK luxurious residential apartments.",
  },
  {
    question: "Does the project have modern amenities?",
    answer: "Yes, the project has 20+ high-end modern amenities like gymnasium, kid’s play area, jogging track, yoga spaces, clubhouse, swimming pool, 24/7 security system, and many more.",
  },
  {
    question: "What is the total project area of the project?",
    answer: "BSCPL Bollineni Vienna total project area is around 2.65 acres.",
  },
  {
    question: "What are the apartment sizes in BSCPL Bollineni Vienna?",
    answer: "The project apartment size range from 3350 – 5550 sft.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-ink rounded-[0.75vw] overflow-hidden max-lg:rounded-lg">
      <div
        className="grid grid-cols-[1fr_auto] justify-between items-start gap-[2vw] py-[1vw] px-[1.25vw] cursor-pointer max-lg:gap-8 max-lg:py-4 max-lg:px-5 max-md:px-4"
        onClick={onToggle}
      >
        <div className="text-2xl max-lg:text-xl max-md:text-base text-white">{faq.question}</div>
        <div className={`faq-item-icon${isOpen ? " is-open" : ""}`}>
          <img
            src="/images/icons/caret-down-faq.svg"
            loading="lazy"
            alt="Toggle answer"
            title="Toggle answer"
            className="size-8 max-lg:size-7 max-md:size-5"
          />
        </div>
      </div>
      <div className={`faq-item_answer${isOpen ? " is-open" : ""}`}>
        <div className="w-[95%]">
          <p className="text-white">{faq.answer}</p>
        </div>
        <div className="w-full pt-7 max-lg:pt-6 max-md:pt-5"></div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-beige">
      <div className="px-32 lg:max-xl:px-20 max-lg:px-20 max-md:px-10 max-sm:px-5">
        <div className="w-full pt-14 max-lg:pt-12 max-md:pt-10"></div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-6xl max-lg:text-5xl max-md:text-3xl font-medium leading-none">
            FAQs
          </h2>
        </div>
        <div className="w-full pt-14 max-lg:pt-12 max-md:pt-10"></div>
        <div className="flex flex-col gap-[1.5vw] max-lg:gap-6 max-sm:gap-5 w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
        <div className="w-full pt-24 max-lg:pt-20 max-md:pt-14"></div>
      </div>
    </section>
  );
}
