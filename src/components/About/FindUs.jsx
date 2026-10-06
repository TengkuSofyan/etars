import React from 'react'
import FadeIn from "../motion/FadeIn";
function FindUs() {
    return (
        <section className="px-4 py-8 lg:py-16 sm:px-6 sm:py-24 w-full max-w-7xl xl:px-18">
            <FadeIn className="relative   overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 px-6 py-12 text-center shadow-xl sm:px-12 sm:py-16">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />

                <div className="relative">
                    <h2 className="text-3xl font-bold tracking-wide font-outfit text-white sm:text-4xl">
                        Partner With Us
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-teal" />

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                        We believe the best solutions are built together. If you have a
                        technical challenge to solve, an idea to discuss, or an interest in
                        collaborating on energy research and education, we would love to
                        hear from you. Let’s bridge the gap and create meaningful solutions
                        together.
                    </p>

                    <a
                        href="mailto:hello@yourdomain.com"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3 text-sm font-semibold text-soft shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:text-base"
                    >
                        Email Us
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884Z" />
                            <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118Z" />
                        </svg>
                    </a>
                </div>
            </FadeIn>
        </section>
    )
}

export default FindUs
