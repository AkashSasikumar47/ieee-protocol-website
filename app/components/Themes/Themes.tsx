import React from 'react'

const Themes = () => {
    return (
        <div>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* text - start */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Gallery
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            This is a section of some simple filler text, also known as placeholder
                            text. It shares some characteristics of a real written text but is
                            random or otherwise generated.
                        </p>
                    </div>
                    {/* text - end */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        <a
                            href="#"
                            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-4xl bg-gray-100 shadow-lg md:h-96"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            >
                                <source src="/TechPulse_Img/190606(720p).mp4" type="video/mp4" />
                                {/* You can provide additional source elements for different video formats */}
                                Your browser does not support the video tag.
                            </video>
                            <div className="text-container absolute inset-0 flex justify-center items-center">
                                <p className="text-white text-center text-4xl font-bold whitespace-nowrap">Future Tech Innovations</p>
                            </div>
                        </a>

                        <a
                            href="#"
                            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-4xl bg-gray-100 shadow-lg md:h-96"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            >
                                <source src="/TechPulse_Img/190606(720p).mp4" type="video/mp4" />
                                {/* You can provide additional source elements for different video formats */}
                                Your browser does not support the video tag.
                            </video>
                            <div className="text-container absolute inset-0 flex justify-center items-center">
                                <p className="text-white text-center text-4xl font-bold whitespace-nowrap">HealthTech Solutions</p>
                            </div>
                        </a>

                        <a
                            href="#"
                            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-4xl bg-gray-100 shadow-lg md:h-96"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            >
                                <source src="/TechPulse_Img/190606(720p).mp4" type="video/mp4" />
                                {/* You can provide additional source elements for different video formats */}
                                Your browser does not support the video tag.
                            </video>
                            <div className="text-container absolute inset-0 flex justify-center items-center">
                                <p className="text-white text-center text-4xl font-bold whitespace-nowrap">Sustainable Development</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Themes