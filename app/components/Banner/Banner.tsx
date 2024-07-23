"use client";

const exps = [
  {
    label: "Community",
    value: "3.2K+",
  },
  {
    label: "Events",
    value: "20+",
  },
  {
    label: "Tests Conduct",
    value: "10+",
  },
];

const Banner = () => {
  return (
    <main className="banner-image">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px">
              Emerging Scholar <br /> of Thar
            </h1>
            <p className="mt-6 text-lg leading-8 text-black">
              An ideal platform founded by the students of Sukkur IBA University
              hailing from Tharparkar and Umerkot to help the students in
              building their better future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="hidden sm:block -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src={'/assets/profile/nazeerahmed.png'}
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src={'/assets/profile/premsagar.png'}
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src={'/assets/profile/partabrai.png'}
                  alt=""
                />
               
              </div>
              <div className="bannerBorder sm:pl-8">
                <div className="flex justify-center sm:justify-start">
                  <h3 className="text-2xl font-semibold mr-2">Member</h3>
                  {/* <img src={'/assets/banner/Stars.svg'} alt="stars-icon" /> */}
                </div>
                <div>
                  <h3 className="text-sm">10+</h3>
                </div>
              </div>
            </div>
          </div>

          {/* DROPDOWN BUTTONS */}

          {/* Experience */}
          <div className="shadow-lg py-4 px-7 rounded-lg mt-10 bg-white">
            <div className="flex flex-wrap -mx-2">
              {exps.map((item) => (
                <div key={item.value} className="w-full md:w-1/3 px-2 mb-2">
                  <div className="text-center mb-1 md:mb-0">
                    <div className="text-secondary mb-1 md:mb-2 text-4xl md:text-5xl font-bold">
                      {item.value}
                    </div>
                    <div className="text-gray-600 text-lg">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
