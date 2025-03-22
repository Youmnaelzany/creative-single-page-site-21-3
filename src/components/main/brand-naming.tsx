import Image from "next/image";

const BrandNaming = () => {
  return (
    <section className="relative flex flex-col sm:flex-row-reverse lg:-mt-35">
      <div className="">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/assets/desktop/image-slide-1.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="/assets/tablet/image-slide-1.jpg"
          />
          <Image
            src="/assets/mobile/image-slide-1.jpg"
            alt="Man on his Laptop"
            width={375}
            height={404}
            className="object-cover sm:h-[472px] sm:w-[438px] lg:h-[728px] lg:w-[895px]"
          />
        </picture>
        <div className="lg:text-8 absolute right-8 bottom-[2.19rem] text-right text-[0.9375rem] leading-5 text-white sm:right-8 sm:bottom-[2.81rem] lg:right-[9.63rem] lg:bottom-[4.25rem] lg:text-xl">
          <h3 className="font-extrabold">Lean Product Roadmap</h3>
          <h4 className="font-normal">2019 Project</h4>
        </div>
      </div>
      <div className="z-50 bg-[#191921] px-6 py-16 sm:absolute sm:right-0 sm:py-[6.25rem] sm:pr-[4.38rem] sm:pl-[2.44rem] lg:py-[9.5rem] lg:pr-[7.81rem] lg:pl-[10.31rem]">
        <h2 className="w-[20.4375rem] text-[2rem] leading-10 font-extrabold text-white lg:text-[3.5rem] lg:leading-16">
          Brand naming & guidelines
        </h2>
      </div>
    </section>
  );
};
export default BrandNaming;
