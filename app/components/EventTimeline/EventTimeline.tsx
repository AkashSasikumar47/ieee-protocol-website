import React from 'react'

const EventTimeline = () => {
    return (
        <section className="bg-green-100 max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <div className="bg-gray-100 mx-auto mb-6">
                <p className="mb-2 font-semibold text-indigo-500 md:mb-4 lg:text-lg">
                    Introducing
                </p>
                <h2 className="mb-4 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                    Revolutionary way to build the web
                </h2>
                <p className="max-w-screen-md text-gray-500 md:text-lg">
                    This is a section of some simple filler text, also known as placeholder
                    text. It shares some characteristics of a real written text but is random
                    or otherwise generated.
                </p>
            </div>
            <div className="bg-red-100 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={10}
                        >
                            <path
                                fillRule="nonzero"
                                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                            />
                        </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Order Placed</div>
                            <time className="font-caveat font-medium text-indigo-500">
                                08/06/2023
                            </time>
                        </div>
                        <div className="text-slate-500">
                            Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi
                            blandit cursus risus.
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={10}
                        >
                            <path
                                fillRule="nonzero"
                                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                            />
                        </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Order Shipped</div>
                            <time className="font-caveat font-medium text-indigo-500">
                                09/06/2023
                            </time>
                        </div>
                        <div className="text-slate-500">
                            Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi
                            blandit cursus risus.
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={10}
                        >
                            <path
                                fillRule="nonzero"
                                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                            />
                        </svg>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">In Transit</div>
                            <time className="font-caveat font-medium text-indigo-500">
                                10/06/2023
                            </time>
                        </div>
                        <div className="text-slate-500">
                            Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi
                            blandit cursus risus.
                        </div>
                    </div>
                </div>
                {/* Item #4 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={10}
                        >
                            <path
                                fillRule="nonzero"
                                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                            />
                        </svg>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Out of Delivery</div>
                            <time className="font-caveat font-medium text-indigo-500">
                                12/06/2023
                            </time>
                        </div>
                        <div className="text-slate-500">
                            Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi
                            blandit cursus risus.
                        </div>
                    </div>
                </div>
                {/* Item #5 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                        >
                            <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                        </svg>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Delivered</div>
                            <time className="font-caveat font-medium text-amber-500">
                                Exp. 12/08/2023
                            </time>
                        </div>
                        <div className="text-slate-500">
                            Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi
                            blandit cursus risus.
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default EventTimeline