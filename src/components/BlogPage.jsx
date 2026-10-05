import React from 'react'
import user2 from "/img/userA.jpeg"

function BlogPage() {
    return (
        <>

            <main className="pt-12 pb-24">

                {/* <!-- Breadcrumb / Back button --> */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-etars-teal transition-colors">
                        <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to Publications
                    </a>
                </div>

                {/* <!-- Article Container --> */}
                <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* <!-- Article Header --> */}
                    <header className="mb-12 border-b border-gray-200 pb-8">

                        {/* <!-- Elegant Minimalist Graphic Accent --> */}
                        <div className="w-full h-24 sm:h-32 mb-4 xl:mb-8 relative overflow-hidden flex items-end justify-center pointer-events-none">
                            {/* <!-- Subtle sweeping data curves on transparent/white background --> */}
                            <svg className="w-full h-full" viewBox="0 0 1000 150" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                {/* <!-- Defs for subtle fade-out gradients on the edges --> */}
                                <defs>
                                    <linearGradient id="line-grad-1" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#40C2BA" stopOpacity="0" />
                                        <stop offset="15%" stopColor="#40C2BA" stopOpacity="1" />
                                        <stop offset="85%" stopColor="#40C2BA" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#40C2BA" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="line-grad-2" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#87D544" stopOpacity="0" />
                                        <stop offset="25%" stopColor="#87D544" stopOpacity="0.8" />
                                        <stop offset="75%" stopColor="#87D544" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#87D544" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* <!-- Smooth elegant curves --> */}
                                <path d="M0,120 C250,120 400,30 650,80 C800,110 900,90 1000,90" stroke="url(#line-grad-1)" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M0,135 C270,135 420,45 670,95 C820,125 910,105 1000,105" stroke="url(#line-grad-2)" strokeWidth="1.5" strokeDasharray="6 8" strokeLinecap="round" />

                                {/* <!-- Subtle data node accent --> */}
                                <circle cx="650" cy="80" r="4.5" fill="#40C2BA" />
                                <circle cx="650" cy="80" r="14" fill="#40C2BA" opacity="0.1" />
                            </svg>
                        </div>

                        {/* <!-- Title --> */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-6 font-outfit">
                            PRODUCTION FORECASTING AND RESERVE EVALUATION OF THE NINI FIELD USING ARPS DECLINE CURVE ANALYSIS
                        </h1>

                        {/* <!-- Author Info --> */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-etars-teal flex items-center justify-center overflow-hidden mr-4 shadow-sm">
                                    <img className='w-full h-full' src={user2} />
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-gray-900">Tengku Muhammad Sofyan Astsauri</p>
                                    <p className="text-sm text-gray-500">Published in 2025</p>
                                </div>
                            </div>

                            {/* <!-- Action Buttons --> */}
                            <div className="flex space-x-3">
                                <button className="p-2 cursor-pointer text-gray-400 hover:text-etars-teal hover:bg-gray-50 rounded-full transition-all" title="Share article">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-teal text-white text-sm font-medium rounded-md hover:bg-primary cursor-pointer transition-all shadow-sm" title="Download PDF">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                    Download PDF
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-8 font-sans">
                            <span className="text-sm font-semibold text-gray-500 mr-2 py-1">Tags:</span>
                            <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded hover:bg-gray-200 transition-colors">Petroleum Engineering</a>
                            <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded hover:bg-gray-200 transition-colors">Decline Curve Analysis</a>
                            <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded hover:bg-gray-200 transition-colors">Reserve Evaluation</a>
                            <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded hover:bg-gray-200 transition-colors">Nini Field</a>
                        </div>
                    </header>

                    {/* <!-- Article Content (Using Serif font for readability like a journal) --> */}
                    <div className="article-content font-serif text-gray-800 text-lg leading-relaxed">

                        <h2 className='text-teal font-bold text-2xl mb-2'>INTRODUCTION</h2>
                        <p>
                            Oil production forecasting is a remain critical component of petroleum engineering because it provides the basis for estimating future well and field performance, recoverable reserves, and the economic life of hydrocarbon assets (Alrassas et al., 2021). Accurate forecasts support reservoir management throughout the field life cycle, from early resource evaluation and development planning to recovery optimization and estimation of remaining reserves.
                        </p>
                        <p>
                            Among empirical forecasting techniques, Arps decline curve analysis remains the most established and commonly applied approach in industry practice. Arps Decline-curve analysis is especially valuable when rapid assessment is needed for reserve booking, well performance screening, or comparison across large numbers of wells (Tang et al., 2024). The method has historically been effective in conventional reservoirs, particularly when wells have entered boundary-dominated flow and operating conditions remain reasonably stable.
                        </p>
                        <p>
                            Arps decline curve analysis involves fitting historical production data—specifically production rates over time—to a mathematical model. By assuming that future production will follow past performance trends, this method can be used to estimate original gas in place and forecast ultimate gas recovery at a specified abandonment pressure or economic cutoff rate. It also enables the prediction of how long a well or an entire field will remain productive. These methods are versatile and can be implemented for both individual wells and full-field evaluations (Lee & Wattenbarger, 1996). This study will demonstrate Arp’s DCA model to history match and forecast the production profile of Nini West and Nini East oil production and estimate the ultimate recovery.
                        </p>

                        <h2 className='text-teal font-bold text-2xl mt-8 mb-2'>METHODOLOGY</h2>

                        <h3 className="font-sans font-bold text-xl text-etars-dark mt-2 mb-3">Arps Decline Curve Analysis</h3>
                        <p>
                            Arps empirical equation as described in equation 1, is developed based on several key assumptions, including constant bottomhole pressure (BHP), production from a fixed drainage area with no-flow boundaries, constant reservoir permeability and skin factor, and the requirement that the analysis be performed only during boundary-dominated (stabilized) flow conditions (Yehia et al., 2023).
                        </p>

                        {/* <!-- Equation Box --> */}
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center justify-center relative font-sans overflow-x-auto">
                            <span className="text-xl font-semibold italic text-etars-dark">
                                q(t) = q<sub>i</sub> / (1 + b D<sub>i</sub> t)<sup>1/b</sup>
                            </span>
                            <span className="absolute right-6 text-gray-400 font-normal">(1)</span>
                        </div>

                        <p>
                            Where <i>q<sub>i</sub></i> and <i>q<sub>t</sub></i> is the initial production rate and the production rate at time <i>t</i> (bbl/day or scf/day), <i>D<sub>i</sub></i> is the initial decline rate (day<sup>-1</sup>), and <i>b</i> is the curvature exponent (dimensionless).
                        </p>
                        <p>
                            The Arps decline curve model requires calibration of three key parameters: the initial <i>q<sub>i</sub></i>, <i>b</i>, and the initial decline rate <i>D<sub>i</sub></i>. Because all three parameters influence the model simultaneously, their adjustment can lead to compromises and multiple valid solutions. As a result, the reliability of the model often depends on certain assumptions, such as the chosen starting production rate or the acceptable range of the <i>b</i>-value (Pratama et al., 2024). Depending on the value of the decline exponent, <i>b</i>, equation 1 has three different forms as presented in Table 1.
                        </p>

                        {/* <!-- Table 1 --> */}
                        <div className="my-8 overflow-x-auto">
                            <table className="w-full text-left border-collapse font-sans text-sm">
                                <caption className="caption-top text-left font-semibold text-gray-700 mb-2">Table 1. classNameification of Arps decline curve analysis</caption>
                                <thead>
                                    <tr className="bg-dark text-white">
                                        <th className="p-3 border border-gray-300">Parameter</th>
                                        <th className="p-3 border border-gray-300">Exponential Decline</th>
                                        <th className="p-3 border border-gray-300">Hyperbolic Decline</th>
                                        <th className="p-3 border border-gray-300">Harmonic Decline</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300 font-semibold italic">b</td>
                                        <td className="p-3 border border-gray-300 italic">b = 0</td>
                                        <td className="p-3 border border-gray-300 italic">0 &lt; b &lt; 1</td>
                                        <td className="p-3 border border-gray-300 italic">b = 1</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-300 font-semibold italic">q<sub>t</sub></td>
                                        <td className="p-3 border border-gray-300 italic">q<sub>t</sub> = q<sub>i</sub> e<sup>-D<sub>i</sub>t</sup></td>
                                        <td className="p-3 border border-gray-300 italic">q<sub>t</sub> = q<sub>i</sub> / (1 + b D<sub>i</sub> t)<sup>1/b</sup></td>
                                        <td className="p-3 border border-gray-300 italic">q<sub>t</sub> = q<sub>i</sub> / (1 + D<sub>i</sub> t)</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300 font-semibold italic">Q<sub>t</sub></td>
                                        <td className="p-3 border border-gray-300 italic">Q<sub>t</sub> = (q<sub>i</sub> - q<sub>t</sub>) / D<sub>i</sub></td>
                                        <td className="p-3 border border-gray-300 italic">Q<sub>t</sub> = [q<sub>i</sub><sup>b</sup> / (D<sub>i</sub>(1-b))] * [q<sub>i</sub><sup>1-b</sup> - q<sub>t</sub><sup>1-b</sup>]</td>
                                        <td className="p-3 border border-gray-300 italic">Q<sub>t</sub> = (q<sub>i</sub> / D<sub>i</sub>) ln(q<sub>i</sub> / q<sub>t</sub>)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Oil Production Data</h3>
                        <p>
                            The Nini Field is a largely depleted offshore oil field located in Block 5604/20 of the Danish sector of the North Sea within the Siri Canyon, situated approximately 200 km offshore Denmark near the Norwegian-Danish border. Discovered in 2000, Nini West serves as the primary initial target for Project Greensand, a major offshore geological carbon capture and storage (CCS) initiative operated by INEOS in partnership with Harbour Energy. Nini West began commercial oil production in 2003, achieved peak production in 2004, and had depleted approximately 89.93% of its recoverable resources by 2023. Production data reported between 2003 and 2009 belongs strictly to Nini West, whereas official reporting merged the annual figures for Nini West and Nini East starting from 2010 onward (Figure 1).
                        </p>

                        {/* <!-- Placeholder for Figure 1 --> */}
                        <div className="my-8">
                            <div className="w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center text-gray-500">
                                <svg className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                <span className="font-sans font-medium text-sm">Figure 1. Cumulative oil production profile of Nini Field from 2002 to 2022</span>
                            </div>
                        </div>

                        <p>
                            To reconstruct and forecast the individual production profiles of Nini West and Nini East, the following procedure was applied. This procedure enables the combined production data to be separated into individual Nini West and Nini East production profiles before performing long-term forecasting:
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-2">
                            <li>Arps’ Decline Curve Analysis (DCA) was first applied to the historical oil production data for Nini West from 2003 to 2009. After obtaining the empirical DCA parameters through history matching, the Nini West production profile was forecast to 2022. Since the actual production of Nini West was not reported separately after 2009, this estimated profile is referred to as Nini West Forecast.</li>
                            <li>The reported combined production of Nini West and Nini East from 2010 to 2022 was then subtracted by the corresponding Nini West Forecast. The resulting production profile was used to estimate the oil production of Nini East during the same period.</li>
                            <li>The reconstructed Nini East production data were history matched using Arps’ DCA and subsequently forecast to 2040. Finally, the Nini West production profile was also extended to 2040 using its previously established DCA model.</li>
                        </ul>
                        <p>
                            In this study, one condition is applied. A minimum nominal decline rate of 10% per year was imposed as the terminal decline constraint. The hyperbolic forecast was retained until its progressive nominal decline rate decreased to 10% per year or lower. From that forecast month onward, the production rate was calculated using an exponential decline model to avoid reserve overestimation using hyperbolic model.
                        </p>

                        <h2 className='text-teal font-bold text-2xl mt-8 mb-2' >RESULT & DISCUSSION</h2>
                        <p>
                            The history matching of the historical production data using the Arps Decline Curve Analysis (DCA) method has been successfully performed, as illustrated in Figure 2. The resulting match quality is excellent, with an error of less than 2%. The corresponding Arps parameters—decline exponent (b), initial decline rate (D<sub>i</sub>), and initial production rate (Q<sub>i</sub>)—are summarized in Table 1.
                        </p>

                        {/* <!-- Placeholder for Figure 2 --> */}
                        <div className="my-8">
                            <div className="w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center text-gray-500">
                                <svg className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                <span className="font-sans font-medium text-sm">Figure 2. History matching and forecasting of Nini field cumulative oil production</span>
                            </div>
                        </div>

                        <p>
                            The cumulative production of Nini West rose steeply in the early years and then gradually flattened, reaching approximately 3,700 Mm³ by 2009. Extending the Nini West model beyond 2009 shows continued but slowing growth in cumulative production. N<sub>p</sub> reaches about 5,200 Mm³ by 2040. The curve flattens strongly after 2022. This indicates that most of Nini West&apos;s recoverable volume had already been produced by the early 2020s, which is consistent with its reported depletion of approximately 89.93% by 2023 and its selection as the initial CO₂ storage target for Project Greensand.
                        </p>
                        <p>
                            Subtracting the Nini West forecast from the reported combined production produces the Nini East profile. Its cumulative production starts at about 700 Mm³ in 2010 and grows to roughly 2,500 Mm³ by 2022. Nini East forecast show that the cumulative oil production of this field at 2040 is around 2900 Mm³. This results indicated only approximately 400 Mm³ oil addition produced from 2022 – 2040, which considered insignificant for almost 20 years production.
                        </p>
                        <p>
                            Based on the figure 1, the actual production data given is only up to December 2022. Considering this as the basis, and the forecasting up to 2040 as EUR value for this field, the calculated remaining reserved can be calculated as follows:
                        </p>

                        {/* <!-- Equation Box for Reserve --> */}
                        <div className="bg-gray-50 border-l-4 border-etars-teal p-4 my-6 font-sans font-semibold text-lg text-center text-etars-dark">
                            Reserve after 2022 = EUR 2040 - EUR 2022
                        </div>

                        <p>
                            This formula explain that the remaining reserve after 2022 is simply a difference between the capability of production at 2040 and the current production at 2022. Hence, the deterministic oil reserves up to 2040 for both field are presented in table 2, as well as the calculation of remaining reserves from 31 December 2022. These estimates are important for the operator because they show whether the remaining volumes can still be recovered economically.
                        </p>

                        {/* <!-- Table 2: Deterministic EUR --> */}
                        <div className="my-8 overflow-x-auto">
                            <table className="w-full text-left border-collapse font-sans text-sm">
                                <caption className="caption-top text-left font-semibold text-gray-700 mb-2">Table 2. Deterministic EUR estimation in 2040 for Nini Field</caption>
                                <thead>
                                    <tr className="bg-dark text-white">
                                        <th className="p-3 border border-gray-300">Field</th>
                                        <th className="p-3 border border-gray-300">EUR 2040 (Mm³)</th>
                                        <th className="p-3 border border-gray-300">EUR 2022 (Mm³)</th>
                                        <th className="p-3 border border-gray-300">Remaining reserve, Mm³ (2022-forward)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="bg-white">
                                        <td className="p-3 border border-gray-300 font-semibold">Nini West</td>
                                        <td className="p-3 border border-gray-300">5208.7</td>
                                        <td className="p-3 border border-gray-300">4826.7</td>
                                        <td className="p-3 border border-gray-300">382.0</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300 font-semibold">Nini East</td>
                                        <td className="p-3 border border-gray-300">2911.9</td>
                                        <td className="p-3 border border-gray-300">2548.1</td>
                                        <td className="p-3 border border-gray-300">363.8</td>
                                    </tr>
                                    <tr className="bg-etars-teal bg-opacity-10 font-bold text-etars-dark">
                                        <td className="p-3 border border-gray-300">Combined</td>
                                        <td className="p-3 border border-gray-300">8120.6</td>
                                        <td className="p-3 border border-gray-300">7074.8</td>
                                        <td className="p-3 border border-gray-300">745.8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="font-sans font-bold text-xl text-etars-dark mt-8 mb-3">Probabilistic Arp’s Decline Curve Analysis</h3>
                        <p>
                            Arp’s DCA is originally a deterministic method. Since predicting future is full of uncertainty, including probabilistic study on this model is precious as it can minimized future unpredictable risk. By utilizing @Risk, a uniform distribution is applied to the <i>b</i>-coefficient parameter, while the other parameters, Q<sub>i</sub> (initial rate) and D<sub>i</sub> (decline rate), remain constant. Figure 3 illustrates the distribution of the <i>b</i>-coefficient for both fields. With the <i>b</i>-value variation applied, 1,000 simulations were conducted to analyze its impact on EUR estimates for 2040. Figure 3 illustrates the distribution of EUR for both fields at these time points, while Table 3 provides a summary of the P10, P50, and P90 probability estimates for EUR.
                        </p>

                        {/* <!-- Table 3: Probabilistic EUR (labeled Table 2 in doc) --> */}
                        <div className="my-8 overflow-x-auto">
                            <table className="w-full text-center border-collapse font-sans text-sm">
                                <caption className="caption-top text-left font-semibold text-gray-700 mb-2">Table 3. Probabilistic EUR in 2040 for Nini Field (value in Mm³)</caption>
                                <thead>
                                    <tr className="bg-dark text-white">
                                        <th className="p-3 border border-gray-300 text-left" rowSpan="2">Field</th>
                                        <th className="p-3 border border-gray-300" colSpan="3">EUR at 2040</th>
                                    </tr>
                                    <tr className="bg-gray-100 text-etars-dark">
                                        <th className="p-3 border border-gray-300">P90</th>
                                        <th className="p-3 border border-gray-300">P50</th>
                                        <th className="p-3 border border-gray-300">P10</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="bg-white">
                                        <td className="p-3 border border-gray-300 font-semibold text-left">Nini West</td>
                                        <td className="p-3 border border-gray-300">3,752.77</td>
                                        <td className="p-3 border border-gray-300">4,335.87</td>
                                        <td className="p-3 border border-gray-300">5,023.99</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border border-gray-300 font-semibold text-left">Nini East</td>
                                        <td className="p-3 border border-gray-300">2,471.39</td>
                                        <td className="p-3 border border-gray-300">2,659.85</td>
                                        <td className="p-3 border border-gray-300">2,859.51</td>
                                    </tr>
                                    <tr className="bg-etars-teal bg-opacity-10 font-bold text-etars-dark">
                                        <td className="p-3 border border-gray-300 text-left">Combined</td>
                                        <td className="p-3 border border-gray-300">6,224.45</td>
                                        <td className="p-3 border border-gray-300">6,989.96</td>
                                        <td className="p-3 border border-gray-300">7,680.51</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- Placeholder for Figure 3 --> */}
                        <div className="my-8">
                            <div className="w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center text-gray-500">
                                <svg className="w-12 h-12 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                <span className="font-sans font-medium text-sm">Figure 3. Distribution of b-value for Nini West and Nini East Field</span>
                            </div>
                        </div>

                        <p>
                            Based on Table 3, the probabilistic P90 EUR for Nini West and Nini East are 3,752.77 and 2,471.39, respectively. When combined, this results in a total probabilistic P90 EUR of 6,224.45 for the entire field. By comparing Table 2 and Table 3, we can confidently classNameify the EUR derived from the previous deterministic process. Since all deterministic values lie above the P10 estimate, indicating less than a 10% probability of being achieved. It means that the likelihood of achieving these reserves is less than 10%, making the deterministic EUR highly uncertain.
                        </p>

                        <h2 className='text-teal font-bold text-2xl mt-8 mb-2'>CONCLUSION</h2>
                        <p>
                            This study separated and forecast the individual production profiles of Nini West and Nini East from combined field reporting using Arps&apos; decline curve analysis. The history match of the historical data was excellent, with an error below 2%. The deterministic forecast gives a cumulative oil production of about 5,208.7 Mm³ for Nini West and 2,911.9 Mm³ for Nini East by 2040, for a combined field total of 8,120.6 Mm³. Only a small additional volume is expected over the next two decades (745.8 Mm³), which confirms that both fields, and Nini West in particular, are in a late stage of depletion.
                        </p>
                        <p>
                            The probabilistic analysis, which varied the decline exponent (b) over 1,000 simulations, gave a combined P90 EUR of 6,224.45 Mm³. All deterministic EUR values exceed the probabilistic P10, so their likelihood of being achieved is below 10% and they should be treated as optimistic. These results suggest that remaining reserve estimates for the Nini Field are best reported probabilistically. They also support the view that the field&apos;s economic production life is nearing its end, reinforcing the case for repurposing Nini West as a CO₂ storage site under Project Greensand.
                        </p>

                        {/* <!-- References Section --> */}
                        <h2 className="mt-12 text-teal font-bold text-2xl mb-2">REFERENCES</h2>
                        <div className="space-y-4 text-base text-gray-700 pl-4 font-sans">
                            <p className="indent-[-1rem]"><span className="font-semibold text-gray-900">Alrassas, A. M., Al-Qaness, M. A. A., Ewees, A. A., Ren, S., Elaziz, M. A., Damaševičius, R., & Krilavičius, T. (2021).</span> Optimized ANFIS Model Using Aquila Optimizer for Oil Production Forecasting. <i>Processes 2021</i>, Vol. 9, Page 1194, 9(7), 1194. <a href="https://doi.org/10.3390/PR9071194" target="_blank" className="text-etars-teal break-all">https://doi.org/10.3390/PR9071194</a></p>

                            <p className="indent-[-1rem]"><span className="font-semibold text-gray-900">Lee, J., & Wattenbarger, A. R. (1996).</span> <i>Gas Reservoir Engineering</i>.</p>

                            <p className="indent-[-1rem]"><span className="font-semibold text-gray-900">Pratama, M. A., Al Qoroni, O., Rahmatullah, I. K., Jameel, M. F., & Weijermars, R. (2024).</span> Probabilistic production forecasting and reserves estimation: Benchmarking Gaussian decline curve analysis against the traditional Arps method (Wolfcamp shale case study). <i>Geoenergy Science and Engineering</i>, 232. <a href="https://doi.org/10.1016/j.geoen.2023.212373" target="_blank" className="text-etars-teal break-all">https://doi.org/10.1016/j.geoen.2023.212373</a></p>

                            <p className="indent-[-1rem]"><span className="font-semibold text-gray-900">Tang, H. Y., He, G., Ni, Y. Y., Huo, D., Zhao, Y. L., Xue, L., & Zhang, L. H. (2024).</span> Production decline curve analysis of shale oil wells: A case study of Bakken, Eagle Ford and Permian. <i>Petroleum Science</i>, 21(6), 4262–4277. <a href="https://doi.org/10.1016/J.PETSCI.2024.07.029" target="_blank" className="text-etars-teal break-all">https://doi.org/10.1016/J.PETSCI.2024.07.029</a></p>

                            <p className="indent-[-1rem]"><span className="font-semibold text-gray-900">Yehia, T., Abdelhafiz, M. M., Hegazy, G. M., Elnekhaily, S. A., & Mahmoud, O. (2023).</span> A comprehensive review of deterministic decline curve analysis for oil and gas reservoirs. In <i>Geoenergy Science and Engineering</i> (Vol. 226). Elsevier B.V. <a href="https://doi.org/10.1016/j.geoen.2023.211775" target="_blank" className="text-etars-teal break-all">https://doi.org/10.1016/j.geoen.2023.211775</a></p>
                        </div>

                    </div>

                    {/* <!-- Tags and Bottom Navigation --> */}
                    <footer className="mt-16 pt-8 border-t border-gray-200">

                        {/* <!-- Next/Prev Article Navigation --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                            <a href="#" className="group block p-6 border border-gray-200 rounded-lg hover:border-etars-teal transition-colors">
                                <span className="block text-sm text-gray-500 mb-1">&larr; Previous Article</span>
                                <span className="block font-semibold text-etars-dark group-hover:text-etars-teal transition-colors line-clamp-2">Optimization Techniques in Modern Reservoir Simulation</span>
                            </a>
                            <a href="#" className="group block p-6 border border-gray-200 rounded-lg hover:border-etars-teal transition-colors text-right">
                                <span className="block text-sm text-gray-500 mb-1">Next Article &rarr;</span>
                                <span className="block font-semibold text-etars-dark group-hover:text-etars-teal transition-colors line-clamp-2">Economic Impact of Enhanced Oil Recovery Methods</span>
                            </a>
                        </div>
                    </footer>

                </article>
            </main>
        </>
    )
}

export default BlogPage
