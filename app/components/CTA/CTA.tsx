import React from 'react'

const CTA = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <div className="relative isolate overflow-hidden px-6 py-20 text-center">
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Explore Our Tracks
                </h2>
                <h4 className="font-sans font-base text-black text-sm sm:text-lg">
                    At PROTOCOL 1.0, participants have the opportunity to explore and innovate within three exciting tracks
                </h4>
                <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center mt-12">
                    <a href="https://registrations.ieeesrmist.com/" className="relative inline-block text-lg text-center group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-sans font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-xl group-hover:text-white">
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
    )
}

export default CTA