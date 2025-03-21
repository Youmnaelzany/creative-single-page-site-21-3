const OurApproach = () => {
  return (
    <section className="relative sm:flex">
      <div className="hidden bg-white pr-[0.63rem] sm:block sm:w-2/5 sm:pt-36 sm:pl-8 lg:pt-48">
        <h2 className="relative z-50 w-[17.5625rem] text-[2rem] leading-10 font-extrabold text-black lg:left-25 lg:w-[33.75rem] lg:text-[3.5rem] lg:leading-16">
          Our approach for creating a winning brand
        </h2>
      </div>
      <div className="space-y-12 bg-[#F94F4F] px-6 py-24 sm:relative sm:-top-35 sm:z-40 sm:w-3/5 sm:py-[7.5rem] sm:pl-[5.63rem] lg:py-[12.5rem] lg:pl-[13.81rem]">
        {/* Title */}
        <div className="w-[20.4375rem] sm:hidden">
          <h2 className="text-[2rem] leading-10 font-extrabold text-white">
            Our approach for creating a winning brand
          </h2>
        </div>
        {/* Content */}
        <div className="space-y-[5.25rem] text-white">
          {/* Item 1*/}
          <div className="relative w-[19.4375rem] sm:w-[21.1875rem] lg:w-[27.8125rem]">
            <h2 className="absolute -top-9 -left-4 text-[5rem] leading-[5.5rem] font-extrabold opacity-25">
              01
            </h2>
            <div className="space-y-[0.94rem]">
              <h3 className="text-[0.9375rem] leading-[1.5625rem] font-extrabold lg:text-xl lg:leading-8">
                Brand Strategy
              </h3>
              <p className="text-[0.9375rem] leading-[1.5625rem] font-normal lg:text-lg lg:leading-8">
                Brand strategy is critical for long-term success. Outshining
                competitors and capturing the target audience are key.
              </p>
            </div>
          </div>
          {/* Item 1*/}
          <div className="relative w-[19.4375rem] sm:w-[21.1875rem] lg:w-[27.8125rem]">
            <h2 className="absolute -top-9 -left-4 text-[5rem] leading-[5.5rem] font-extrabold opacity-25">
              02
            </h2>
            <div className="space-y-[0.94rem]">
              <h3 className="text-[0.9375rem] leading-[1.5625rem] font-extrabold lg:text-xl lg:leading-8">
                Brand Design
              </h3>
              <p className="text-[0.9375rem] leading-[1.5625rem] font-normal lg:text-lg lg:leading-8">
                Keeping the brand design unique and meaningful helps in
                communicating the brand’s timeless value effectively.{" "}
              </p>
            </div>
          </div>
          {/* Item 3*/}
          <div className="relative w-[19.4375rem] sm:w-[21.1875rem] lg:w-[27.8125rem]">
            <h2 className="absolute -top-9 -left-4 text-[5rem] leading-[5.5rem] font-extrabold opacity-25">
              03
            </h2>
            <div className="space-y-[0.94rem]">
              <h3 className="text-[0.9375rem] leading-[1.5625rem] font-extrabold lg:text-xl lg:leading-8">
                Web Design
              </h3>
              <p className="text-[0.9375rem] leading-[1.5625rem] font-normal lg:text-lg lg:leading-8">
                A beautifully crafted website is the best tool for brand
                awareness, and ultimately results in increased revenues.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurApproach;
