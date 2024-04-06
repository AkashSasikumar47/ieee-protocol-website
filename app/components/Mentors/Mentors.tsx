import React from 'react'

const Mentors = () => {
    return (
        <section className="bg-blue-100 max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <div className="bg-red-100 grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-4">
                <div>
                    <a
                        href="#"
                        className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                            loading="lazy"
                            alt="Photo by Austin Wade"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="flex flex-col">
                        <span className="text-gray-500">Men</span>
                        <a
                            href="#"
                            className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                        >
                            Business Causual
                        </a>
                    </div>
                </div>
                <div>
                    <a
                        href="#"
                        className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                            loading="lazy"
                            alt="Photo by engin akyurt"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="flex flex-col">
                        <span className="text-gray-500">Women</span>
                        <a
                            href="#"
                            className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                        >
                            Summer Season
                        </a>
                    </div>
                </div>
                <div>
                    <a
                        href="#"
                        className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                            loading="lazy"
                            alt="Photo by Austin Wade"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="flex flex-col">
                        <span className="text-gray-500">Men</span>
                        <a
                            href="#"
                            className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                        >
                            Streetwear
                        </a>
                    </div>
                </div>
                <div>
                    <a
                        href="#"
                        className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
                            loading="lazy"
                            alt="Photo by Austin Wade"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="flex flex-col">
                        <span className="text-gray-500">Women</span>
                        <a
                            href="#"
                            className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                        >
                            Sale
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mentors