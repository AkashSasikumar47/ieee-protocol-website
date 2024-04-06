import React from 'react'

const Hero = () => {
    return (
        <div className="bg-green-100 max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <section className="relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-6xl bg-gray-100 py-24 shadow-lg md:py-48">
                <video
                    src="/TechPulse_Img/190605(720p).mp4"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    autoPlay
                    loop
                    muted
                >
                    Your browser does not support the video tag.
                </video>
                <div className="relative flex flex-col items-center p-4 lg:px-36">
                    <p className="mb-4 text-center text-lg text-gray-200 sm:text-xl md:mb-8">
                        PROTOCOL 1.0
                    </p>
                    <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                        Empowering Innovations in Tech
                    </h1>
                    <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                        <a href="#" className="relative inline-block text-lg text-center group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-xl group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-xl bg-gray-50" />
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease" />
                                <span className="relative">REGISTER</span>
                            </span>
                            <span
                                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-xl group-hover:mb-0 group-hover:mr-0"
                                data-rounded="rounded-xl"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero