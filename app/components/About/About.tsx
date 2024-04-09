import React from 'react'

const About = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <div className="flex flex-wrap justify-between">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 font-sans font-bold text-black text-2xl sm:text-4xl">
                        About PROTOCOL 1.0
                    </h1>
                    <p className="max-w-md leading-relaxed font-sans font-base text-gray-500 text-justify text-sm sm:text-lg">
                        PROTOCOL 1.0, is an innovative online hackathon aimed at empowering Computer Science and Engineering students to innovate and create impactful solutions. With a focus on fostering creativity and collaboration, PROTOCOL 1.0 provides participants with a platform to explore cutting-edge technologies and address real-world challenges.
                    </p>
                    <a href="/EventDocumentation" className="text-blue-500 hover:underline mt-4">
                        Know More
                    </a>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                        <img
                            src="/assets/Posters/POSTER 1.svg"
                            loading="lazy"
                            alt="IEEE SRM SB"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <img
                            src="/assets/Posters/POSTER 3.svg"
                            loading="lazy"
                            alt="IEEE SRM SB"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About