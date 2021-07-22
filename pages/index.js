import Head from 'next/head'
import React from "react";

export default function Home() {
    //TODO set the page title -> SEO
    const pageTitle = "Netflix Tailwind Test"
    return (
      <>
          <Head>
              <title>{pageTitle}</title>
          </Head>


          {/*NOTE used non border box styling here to match as in the original website*/}
          <header className="
          box-content
          relative z-10
          pt-[20px]
          h-[45px] md:h-16 xl:h-20
          2xl:mx-auto max-w-screen-2xl
          ">

              <div className="
              flex flex-row flex-nowrap items-start justify-items-start
              pt-2
              mx-[5%] sm:mx-[45px] md:mx-14
              "
              >
                  <div className={
                  "mr-auto "
                  }>
                      <svg xmlns="http://www.w3.org/2000/svg"
                           className={
                               "pt-0 text-[#e50914] "+
                               "w-auto   sm:w-[108px] md:w-[8.375rem] xl:w-[10.4375rem] "+
                               "h-[24px] sm:h-[32px]  md:h-9          xl:h-[2.8125rem] "
                           }
                           fill="currentColor" stroke="none" viewBox="0 0 111 30" focusable="false">
                          <path d="M105.0623 14.2806L110.9992 30c-1.75-.2503-3.499-.5633-5.2808-.8445l-3.3442-8.6869-3.437 7.969c-1.6872-.2813-3.3444-.376-5.0315-.5943l6.0315-13.7501L94.4681 0h5.0633l3.062 7.8742L105.8751 0h5.1242l-5.9369 14.2806zM90.4686 0H85.875v27.25c1.4996.0937 3.0621.1556 4.5936.343V0zm-8.563 26.937c-4.187-.2813-8.3748-.5306-12.6554-.6253V0h4.6864v21.8746c2.6882.0628 5.3754.2812 7.969.4058v4.6565zM64.2496 10.656v4.6874h-6.4055v10.6561h-4.6255V0h13.125v4.6874h-8.4995v5.9687h6.4055zM45.3435 4.6874V26.25c-1.5625 0-3.1559 0-4.6874.0618V4.6874h-4.844V0h14.4063v4.6874h-4.8749zM30.7498 15.5928c-2.062 0-4.5 0-6.2498.0947v6.9688c2.75-.1884 5.5-.4068 8.281-.5005v4.5l-12.9685 1.0319V0H32.781v4.6874H24.5v6.3118c1.8127 0 4.5936-.0938 6.2498-.0938v4.6874zM4.7811 12.9684V29.343c-1.687.1884-3.1877.4067-4.7811.657V0h4.469l6.0934 17.0316V0h4.6874v28.0617c-1.6562.2821-3.3433.3758-5.1251.6251L4.781 12.9684z"/>
                      </svg>

                  </div>


                  <div className={
                      "ml-3 mr-3 sm:mr-6 md:mr-8 "
                  }>
                      <button className={
                      "relative top-[0px] " +
                      "flex items-center "+
                      "border-[1px] border-[#aaa] "+
                      "rounded-[2px] "+
                      "whitespace-nowrap text-white text-0-875-rem-lh-1-3-rem "+
                      "bg-black bg-opacity-40 "+
                      "py-1 sm:py-2 px-[1.375rem] " +
                      "my-0 mx-3 sm:mr-6 md:mr-8 "
                      }
                      >
                          <span>English</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                      </button>

                  </div>
                  <a className={
                      "mt-0 "+
                      "whitespace-nowrap text-white text-14-4-px-normal sm:text-base-normal "+
                      "bg-[#e50914] "+
                      "py-[4px] sm:py-[7px] "+
                      "px-[8px] sm:px-[17px] "+
                      "rounded-[3px] "
                  }>
                      Sign In
                  </a>


              </div>
          </header>


          <div className={
              "relative "
              // +"pt-[28rem] "
          }
          >
              <div id={"background-container"} className={
                  ""
                  // +"opacity-25 "
                  +"absolute z-0 "
                  +"top-[-70px] md:top-[-100px] left-0 right-0 bottom-0 "
                  +"overflow-hidden "
              }
              >
                  <img className={
                     ""
                    +"object-cover "
                    +"w-full h-full "
                } src="/img/hero_india.jpg" alt="" />


                <div id={"image-gradient"} className={
                    "absolute "
                    +"bg-black bg-opacity-40 bg-hero-gradient "
                    +"top-0 left-0 right-0 bottom-0 "
                }>

                </div>

              </div>

          {/*todo exp with text layout like the original website*/}

              <div id={"text-container"} className={
                  ""
                  +" relative "
                  +" px-[5%] py-[50px] sm:px-[45px] sm:py-[70px]  "
                  +" flex flex-col items-center justify-center flex-auto "

              }>

                  <div className={
                      " "
                      +" max-w-[640px] xl:max-w-[800px] "
                      +" text-1-75-rem-lh-1-1 sm:text-3-1-rem-lh-1-1 xl:text-4-0-rem-lh-1-1"
                      +" font-bold text-center text-white "
                      +" pb-3 "
                      }>
                      Unlimited movies, TV shows, and more.
                  </div>
                  <div className={
                      ""
                      +" max-w-[640px] xl:max-w-[800px] "
                      +" text-1-125-rem-lh-default sm:text-1-625-rem-lh-default"
                      +" font-medium text-center text-white  "
                      +" pb-3  "


                  }>
                      Watch anywhere. Cancel anytime.
                  </div>

                  <div className={
                      ""
                      +" max-w-screen-[450px] md:max-w-none "
                      +" text-1-125-rem-lh-default sm:text-1-625-rem-lh-default "
                      +" text-18-0-px-normal md:text-1-2-rem-lh-default "
                      +" font-normal text-center text-white "
                      +" pb-3 "
                      //todo check from the page
                      // +" px-[5%] sm:px-[10%]  md:pb-[20px] "
                  }>
                      Ready to watch? Enter your email to create or restart your membership.
                  </div>




                  <div className={
                      ""
                      +" self-stretch md:self-auto"
                      +" block md:flex md:flex-row "
                      +" md:mt-4"

                  }
                  >

                      <input
                          placeholder="Email address"
                          className={
                              ""
                              +" block "
                              +" mx-auto md:mx-0 "
                              +" mb-3 md:mb-0 "
                              +" text-14-px-normal sm:text-16-px-normal "
                              +" bg-white p-4 min-w-[264px] sm:min-w-[400px]"
                          }
                      />
                      <button className={
                          "mx-auto md:mx-0 "
                          +" flex items-center "
                          +" text-white text-base sm:text-xl bg-[#e50914] "
                          // +"mx-2 mt-2 "
                          +" py-1 px-2 sm:px-4 md:px-8 "
                          +" outline-none focus:outline-none "
                          +" rounded-[2px] "
                          }
                      >
                          Get Started
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 mt-[1px]"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                              />
                          </svg>
                      </button>
                  </div>

          </div>


          </div>

      </>
    )
}
