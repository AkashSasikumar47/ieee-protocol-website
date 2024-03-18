import React from 'react'

const Hero = () => {
    return (
        <div>

            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-6xl bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
                        {/* video - start */}
                        <video
                            src="/TechPulse_Img/190605(720p).mp4"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            autoPlay
                            loop
                            muted
                        >
                            Your browser does not support the video tag.
                        </video>
                        {/* video - end */}

                        {/* text start */}
                        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
                            <p className="mb-4 text-center text-lg text-gray-200 sm:text-xl md:mb-8">
                                Very proud to introduce
                            </p>
                            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                                Revolutionary way to build the web
                            </h1>
                            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                                <a
                                    href="#"
                                    className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                                >
                                    Start now
                                </a>
                                <a
                                    href="#"
                                    className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                                >
                                    Take tour
                                </a>
                            </div>
                        </div>
                        {/* text end */}
                    </section>
                </div>
            </div>

        </div >
    )
}

export default Hero