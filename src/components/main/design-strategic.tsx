import Image from "next/image";
import Link from "next/link";

const DesignStrategic = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <picture>
        <source
          media="(min-width:1024px)"
          srcSet="/assets/desktop/image-strategic.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="/assets/tablet/image-strategic.jpg"
        />
        <Image
          src="/assets/mobile/image-strategic.jpg"
          alt="Man on his Laptop"
          width={375}
          height={200}
          className="object-cover sm:h-[658px] sm:w-[378px] lg:h-[984px] lg:w-[735px]"
        />
      </picture>
      <div className="bg-[#191921] px-6 py-[4.5rem] sm:pt-[7.5rem] sm:pr-10 sm:pb-60 sm:pl-[4.31rem] lg:pt-[12.5rem] lg:pr-[6.63rem] lg:pb-[25rem] lg:pl-[9.63rem]">
        <div className="w-[20.4375rem] space-y-10 sm:w-[17.5625rem] sm:space-y-8 lg:w-[25.625rem] lg:space-y-12">
          <div className="lg:space-[2.69rem] space-y-6 sm:space-y-8">
            <h2 className="text-[2rem] leading-10 font-extrabold text-white lg:text-[3.5rem] lg:leading-16">
              <span className="text-[#F94F4F]">Design</span> is strategic.
            </h2>
            <p className="text-[0.9375rem] leading-[1.5625rem] font-normal text-white">
              “A well-crafted design strategy consistently produces desired
              outcomes and brand awareness. We are firm believers that success
              lies in creative collaboration with our clients.”
            </p>
          </div>
          <Link
            href={"/"}
            className="cursor-default text-[0.9375rem] leading-normal font-extrabold text-[#F94F4F] underline transition-colors duration-300 ease-in-out hover:text-[#FF9393] lg:text-lg"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DesignStrategic;
