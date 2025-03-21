import Image from "next/image";

import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col gap-y-8 sm:flex-row-reverse">
      {/* Image */}
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/assets/desktop/image-hero.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="/assets/tablet/image-hero.jpg"
        />
        <Image
          src="/assets/mobile/image-hero.jpg"
          alt="Man on his Laptop"
          width={375}
          height={200}
          className="object-cover sm:h-[606px] sm:w-[438px] lg:h-[800px] lg:w-[895px]"
        />
      </picture>
      {/* Text */}
      <div className="z-50 space-y-10 px-6 sm:absolute sm:top-[4.81rem] sm:left-0 sm:z-50 sm:space-y-8 sm:pl-[2.44rem] lg:top-28 lg:space-y-12 lg:pl-[10.31rem]">
        <div className="space-y-[0.93rem] sm:space-y-[1.19rem] lg:space-y-[2.44rem]">
          <h1 className="w-[20.4375rem] text-[2.5rem] leading-10 font-extrabold text-black sm:w-[24.875rem] sm:text-[3.5rem] sm:leading-14 lg:w-[45.625rem] lg:text-[5rem] lg:leading-[5.5rem]">
            Branding & website design agency
          </h1>
          <p className="w-[20.4375rem] text-[0.9375rem] leading-[1.5625rem] font-normal text-black sm:w-[24.875rem] lg:w-[33.75rem] lg:text-lg lg:leading-8">
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
        </div>
        <div className="">
          <Button type="button">Learn More</Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
