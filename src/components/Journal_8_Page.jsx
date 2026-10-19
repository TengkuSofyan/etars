import React from 'react';
import authorImage1 from '/img/userA.jpeg';
import { Link } from 'react-router-dom';
import ArticleFigure from './ArticleFigure';
import figures from '../data-figure';



function Journal_8_Page({ publicationsHref = '/we-do/', pdfUrl = '', onShare = null }) {
    const img = figures.journal_8;

    return (
        <main className="pt-12 pb-24">

            {/* Breadcrumb / Back button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <a href={publicationsHref} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-etars-teal transition-colors">
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to Publications
                </a>
            </div>

            {/* Article Container */}
            <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Article Header */}
                <header className="mb-12 border-b border-gray-200 pb-8">

                    {/* Elegant Minimalist Graphic Accent */}
                    <div className="w-full h-24 sm:h-32 mb-4 xl:mb-8 relative overflow-hidden flex items-end justify-center pointer-events-none">
                        {/* Subtle sweeping data curves on transparent/white background */}
                        <svg className="w-full h-full" viewBox="0 0 1000 150" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Defs for subtle fade-out gradients on the edges */}
                            <defs>
                                <linearGradient id="journal8-line-grad-1" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#40C2BA" stopOpacity="0" />
                                    <stop offset="15%" stopColor="#40C2BA" stopOpacity="1" />
                                    <stop offset="85%" stopColor="#40C2BA" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#40C2BA" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="journal8-line-grad-2" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#87D544" stopOpacity="0" />
                                    <stop offset="25%" stopColor="#87D544" stopOpacity="0.8" />
                                    <stop offset="75%" stopColor="#87D544" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#87D544" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Smooth elegant curves */}
                            <path d="M0,120 C250,120 400,30 650,80 C800,110 900,90 1000,90" stroke="url(#journal8-line-grad-1)" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M0,135 C270,135 420,45 670,95 C820,125 910,105 1000,105" stroke="url(#journal8-line-grad-2)" strokeWidth="1.5" strokeDasharray="6 8" strokeLinecap="round" />

                            {/* Subtle data node accent */}
                            <circle cx="650" cy="80" r="4.5" fill="#40C2BA" />
                            <circle cx="650" cy="80" r="14" fill="#40C2BA" opacity="0.1" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-6 font-outfit">
                        PROBABILISTIC ASSESSMENT OF OFFSHORE CO₂ STORAGE PERFORMANCE IN THE NINI WEST FIELD (PROJECT GREENSAND)
                    </h1>

                    {/* Author Info */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-etars-teal flex items-center justify-center overflow-hidden  shadow-sm">
                                    <img className="w-full h-full object-cover" src={authorImage1} alt="Tengku Sofyan" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-gray-900">Tengku Sofyan</p>
                                </div>
                            </div>


                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                            {typeof onShare === 'function' && (
                                <button className="p-2 cursor-pointer text-gray-400 hover:text-etars-teal hover:bg-gray-50 rounded-full transition-all" type="button" onClick={onShare} title="Share article" aria-label="Share article">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                                </button>
                            )}
                            {pdfUrl && (
                                <a href={pdfUrl} download className="flex items-center gap-2 px-4 py-2 bg-teal text-white text-sm font-medium rounded-md hover:bg-primary cursor-pointer transition-all shadow-sm" title="Download PDF">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                    Download PDF
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-gray-500">Published in 2025</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4 font-sans">
                        <span className="text-sm font-semibold text-gray-500 mr-2 py-1">Tags:</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">CO₂ Storage</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Monte Carlo Simulation</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Gaussian Pressure Transient Analysis</span>
                    </div>
                </header>

                <div className="article-content font-serif text-gray-800 text-lg leading-relaxed">
                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">SUMMARY</h2>

                    <p className="mb-4 text-justify">This study evaluates the CO₂ storage performance of the depleted Nini West field, the initial storage site of Project Greensand in the Danish North Sea. Hydraulic diffusivity was estimated from production, injection, and manual analyses, and each estimate was used to forecast 10 years of CO₂ injection. The storage uncertainty was then quantified through Monte Carlo simulation, and plume and pressure behavior were analyzed. The results show that hydraulic diffusivity is highly uncertain and that reservoir parameters must be adjusted to reach the injection target with reasonable storage efficiency. Probabilistic storage estimates also require a large number of simulations before they become reliable. Pressure travels much faster than the CO₂ plume, so early pressure monitoring is essential.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">INTRODUCTION</h2>

                    <p className="mb-4 text-justify">Geological storage of carbon dioxide (CO₂) in depleted oil and gas fields is one of the most practical routes to large-scale emission reduction, because these reservoirs have a proven seal, well-characterized geology, and often existing infrastructure. Project Greensand is a major offshore carbon capture and storage (CCS) initiative in the Danish sector of the North Sea, operated by INEOS in partnership with Harbour Energy. Its initial target is the Nini West field, located in the Siri Canyon approximately 200 km offshore Denmark. Nini West began commercial oil production in 2003 and had depleted approximately 89.93% of its recoverable resources by 2023, making it a natural candidate for repurposing as a CO₂ storage site.</p>

                    <p className="mb-4 text-justify">Gaussian decline curve analysis, which is based on the Gaussian pressure-transient (GPT) solution of the diffusivity equation, has been shown to be a robust alternative to the traditional Arps method for production forecasting, and its matching parameters include the hydraulic diffusivity and drainage radius of the reservoir. Because the different estimation routes rarely agree, storage forecasts should be treated probabilistically. Monte Carlo simulation is the most common tool for propagating such input uncertainty, but its estimates are only reliable once enough realizations have been run for the results to converge.</p>

                    <p className="mb-4 text-justify">This study evaluates the CO₂ storage performance of Nini West under these uncertainties. Hydraulic diffusivity is estimated from production analysis, injection analysis, and manual calculation, and each estimate is used to forecast CO₂ injection over a 10-year period (2026–2035) against a total target of 4.5 million tons. The storage forecast is then quantified probabilistically using Monte Carlo simulation with a convergence check. Finally, CO₂ plume migration, pressure propagation, and the ratio of horizontal to vertical velocity are analyzed to understand the behavior of the injected CO₂.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">METHODOLOGY</h2>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Production Data Conversion Using Arps' Decline Curve</h3>

                    <p className="mb-4 text-justify">In a previous study, a history matching process using Arps’ decline curve analysis was successfully conducted on the annual production data of Nini West (read here: <a href="https://etars.vercel.app/we-do/1" className="text-etars-teal break-all">https://etars.vercel.app/we-do/1</a> ) . This analysis resulted in the derivation of decline parameters specific to the field. Utilizing these parameters, the calculation was subsequently converted to a daily production basis by adjusting the initial decline parameter <em><br /></em><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub></mrow></math><em> </em>through division by 365. </p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 1. DCA parameter</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th scope="col" className="border border-gray-200 px-4 py-3">Parameter</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Value</th>
                            </tr>
                        </thead><tbody>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>Q</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub></mrow></math></td>
                                <td className="border border-gray-200 px-4 py-3">3.7 (vol/day)</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub></mrow></math></td>
                                <td className="border border-gray-200 px-4 py-3">0.409 %/year</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>b</mi></mrow></mrow></math></td>
                                <td className="border border-gray-200 px-4 py-3">0.410</td>
                            </tr>
                        </tbody></table></div>

                    <ArticleFigure src={img.figure_1} figureId="1" alt="Figure 1. Arp’s decline curve: daily and annual production matching" caption={<>Figure 1. Arp’s decline curve: daily and annual production matching</>} />

                    <p className="mb-4 text-justify">Figure 1 demonstrates that the daily production data aligns with the initial yearly data for both the production rate and cumulative, indicating consistency between the two datasets. This validation confirms the reliability of the daily data for further history matching of hydraulic diffusivity in the subsequent section. </p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Hydraulic Diffusivity from Gaussian Pressure-Transient Matching</h3>

                    <p className="mb-4 text-justify">Utilizing the daily production data derived from Arps' equation, history matching was conducted using the Gaussian Model, as represented by Equation 1. </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>W</mi><mi>H</mi></mrow></mrow></msub><mrow><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo></mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mfrac><mrow><mrow><mn>2</mn></mrow><msqrt><mrow><mrow><mi>π</mi></mrow></mrow></msqrt><mrow><mo>(</mo><mi>h</mi><mi>k</mi><mo>)</mo></mrow></mrow><mrow><mrow><mi>μ</mi><mi>B</mi></mrow></mrow></mfrac><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>P</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>P</mi></mrow></mrow><mrow><mrow><mi>B</mi><mi>H</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msqrt><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mi>t</mi></mrow></mrow></msqrt></mrow></mfrac><mrow><mo stretchy="true">[</mo><mrow><mrow><mi>e</mi><mi>r</mi><mi>f</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>2</mn></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mo>-</mo><mn>1</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mi>l</mi><mi>n</mi></mrow><mrow><mo>⁡</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>2</mn></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mo>-</mo><mn>1</mn></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mn>2</mn></mrow><msqrt><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mi>t</mi></mrow></mrow></msqrt></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>l</mi><mi>n</mi></mrow><mrow><mo>⁡</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>2</mn></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mo>-</mo><mn>1</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo><mn>1</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mfrac><mrow><mrow><mo>-</mo></mrow><msup><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>2</mn></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mo>-</mo><mn>1</mn></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup><msup><mrow><mrow><mi>l</mi><mi>n</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup><mrow><mo>⁡</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>2</mn></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mo>-</mo><mn>1</mn></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mn>4</mn></mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mi>t</mi></mrow></mrow></mfrac></mrow></msup></mrow><mo stretchy="true">]</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(1)</span></div>

                    <p className="mb-4 text-justify">The conversion factor applied in this process is  <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mn>0</mn><mo>.</mo><mn>0</mn><mn>0</mn><mn>6</mn><mn>3</mn><mn>2</mn><mn>8</mn><mn>2</mn><mn>9</mn></mrow><mfrac><mrow><mrow><mi>c</mi><mi>p</mi><mo>.</mo><mi>f</mi></mrow><msup><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow><mrow><mrow><mi>m</mi><mi>D</mi><mo>.</mo><mi>p</mi><mi>s</mi><mi>i</mi><mo>.</mo><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></mfrac></mrow></math> which will give the production in <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mrow><mi>S</mi><mi>c</mi><mi>f</mi></mrow></mrow><mrow><mrow><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></mfrac><mrow><mo>.</mo><mspace width="0.2em" /></mrow></mrow></math> Subsequently, the production data were converted to barrels using a factor of <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mn>0</mn><mo>.</mo><mn>1</mn><mn>7</mn><mn>8</mn><mn>1</mn><mn>0</mn><mn>8</mn><mspace width="0.2em" /></mrow><mfrac><mrow><mrow><mi>b</mi><mi>b</mi><mi>l</mi></mrow></mrow><mrow><mrow><mi>S</mi><mi>c</mi><mi>f</mi></mrow></mrow></mfrac></mrow></math>. </p>

                    <p className="mb-4 text-justify">Through this approach, history matching was performed to determine the hydraulic diffusivity <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> and drainage radius <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>R</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub></mrow></math> of the reservoir. The results of this matching process are presented in Figure 2, which illustrates the alignment of production data for both daily rate and cumulative production. Additionally, the matched values of <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> and <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>R</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub></mrow></math> are summarized in Table 2.</p>

                    <ArticleFigure src={img.figure_2} figureId="2" alt="Figure 2. Gaussian daily and cumulative production matched" caption={<>Figure 2. Gaussian daily and cumulative production matched</>} />

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 2. Gaussian parameter matched</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th scope="col" className="border border-gray-200 px-4 py-3">Parameter</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Value</th>
                            </tr>
                        </thead><tbody>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math></td>
                                <td className="border border-gray-200 px-4 py-3">8.67 <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>f</mi></mrow><msup><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup><mrow><mo>/</mo><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></math></td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3">Re</td>
                                <td className="border border-gray-200 px-4 py-3">4920 <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>f</mi><mi>t</mi></mrow></mrow></math></td>
                            </tr>
                        </tbody></table></div>

                    <p className="mb-4 text-justify">It is important to highlight that the reservoir radius <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>R</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub></mrow></math> obtained in this analysis remains uncertain. Variations in this parameter do not significantly impact the accuracy of the history matching results. For instance, substituting <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>R</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>1</mn><mn>0</mn><mn>0</mn><mn>0</mn><mn>0</mn><mspace width="0.2em" /><mi>f</mi><mi>t</mi></mrow></mrow></math> ft into Equation 1 does not alter the quality of the match. This observation suggests that history matching for reservoir radius does not yield a definitive or reliable value. Consequently, the optimal <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>R</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mspace width="0.2em" /></mrow></mrow></math>​ for this case remains undetermined, and the obtained <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>R</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mspace width="0.2em" /></mrow></mrow></math>value should not be considered valid for recommendation.</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Hydraulic Diffusivity from Injection Data</h3>

                    <p className="mb-4 text-justify">Before calculating the hydraulic diffusivity <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math>, the formation volume factor (FVF) of CO₂ can be approximated using the density of CO₂ in the reservoir.</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>B</mi></mrow></mrow><mrow><mrow><mi>C</mi><mi>O</mi><mn>2</mn></mrow></mrow></msub><mrow><mo>=</mo><mspace width="0.2em" /></mrow><mfrac><mrow><msub><mrow><mrow><mi>ρ</mi></mrow></mrow><mrow><mrow><mi>s</mi><mi>u</mi><mi>r</mi><mi>f</mi><mi>a</mi><mi>c</mi><mi>e</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>ρ</mi></mrow></mrow><mrow><mrow><mi>r</mi><mi>e</mi><mi>s</mi><mi>e</mi><mi>r</mi><mi>v</mi><mi>o</mi><mi>i</mi><mi>r</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>1</mn><mo>.</mo><mn>8</mn><mn>6</mn><mspace width="0.2em" /><mi>k</mi><mi>g</mi><mo>/</mo></mrow><msup><mrow><mrow><mi>m</mi></mrow></mrow><mrow><mrow><mn>3</mn></mrow></mrow></msup></mrow><mrow><mrow><mn>7</mn><mn>5</mn><mn>6</mn><mspace width="0.2em" /><mi>k</mi><mi>g</mi><mo>/</mo></mrow><msup><mrow><mrow><mi>m</mi></mrow></mrow><mrow><mrow><mn>3</mn></mrow></mrow></msup></mrow></mfrac><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>0</mn><mo>.</mo><mn>1</mn><mn>1</mn><mn>6</mn><mn>7</mn><mspace width="0.2em" /><mi>l</mi><mi>b</mi><mo>/</mo><mi>f</mi></mrow><msup><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>3</mn></mrow></mrow></msup></mrow><mrow><mrow><mn>4</mn><mn>7</mn><mo>.</mo><mn>1</mn><mn>9</mn><mn>5</mn><mn>5</mn><mspace width="0.2em" /><mi>l</mi><mi>b</mi><mo>/</mo><mi>f</mi></mrow><msup><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>3</mn></mrow></mrow></msup></mrow></mfrac><mrow><mo>=</mo><mn>0</mn><mo>.</mo><mn>0</mn><mn>0</mn><mn>2</mn><mn>4</mn><mn>7</mn><mspace width="0.2em" /></mrow><mfrac><mrow><mrow><mi>r</mi><mi>c</mi><mi>f</mi></mrow></mrow><mrow><mrow><mi>S</mi><mi>c</mi><mi>f</mi></mrow></mrow></mfrac></mrow></math></div></div>

                    <p className="mb-4 text-justify">Now, let’s apply equation 2 to find the <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> value:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>q</mi><mi>WH</mi></msub><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mfrac><mrow><mn>2</mn><msqrt><mi>π</mi></msqrt><mo>(</mo><mi>h</mi><mi>k</mi><mo>)</mo></mrow><mrow><mi>μ</mi><mi>B</mi></mrow></mfrac><mfrac><mrow><mo>(</mo><msub><mi>P</mi><mi>BH</mi></msub><mo>−</mo><msub><mi>P</mi><mn>0</mn></msub><mo>)</mo></mrow><msqrt><mrow><msub><mi>D</mi><mi>h</mi></msub><mi>t</mi></mrow></msqrt></mfrac></math></div><span className="shrink-0 font-sans text-gray-400">(2)</span></div>

                    <p className="mb-4 text-justify">The given data indicates that the injectivity index ranges from 7.8 to 12 ton/day/bar, with a reservoir pressure difference of (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>P</mi></mrow></mrow><mrow><mrow><mi>o</mi></mrow></mrow></msub><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>P</mi></mrow></mrow><mrow><mrow><mi>b</mi><mi>h</mi><mi>p</mi></mrow></mrow></msub><mrow><mo>)</mo></mrow></mrow></math> = 60 bar. Based on this information, the peak injection rate is estimated to be within the range of 468 to 720 ton/day. Applying a conversion factor of (1 mTon = 19.27 Mscf), the injection rate is converted to 9.00E+06 - 1.38E+07 Mscf/day. Then, by rearranging Equation 2, the <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> can be estimated as follows.</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><msup><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>C</mi><mn>1</mn></mrow><mfrac><mrow><mrow><mn>2</mn></mrow><msqrt><mrow><mrow><mi>π</mi></mrow></mrow></msqrt><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>h</mi><mi>k</mi></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>μ</mi></mrow><msub><mrow><mrow><mi>B</mi></mrow></mrow><mrow><mrow><mi>C</mi><mi>O</mi><mn>2</mn></mrow></mrow></msub></mrow></mfrac><mfrac><mrow><msub><mrow><mrow><mi>P</mi></mrow></mrow><mrow><mrow><mi>o</mi></mrow></mrow></msub><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>P</mi></mrow></mrow><mrow><mrow><mi>B</mi><mi>h</mi><mi>p</mi></mrow></mrow></msub></mrow><mrow><mrow><mi>q</mi></mrow></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(3)</span></div>

                    <p className="mb-4 text-justify">Where the <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo>=</mo><mn>0</mn><mo>.</mo><mn>0</mn><mn>0</mn><mn>6</mn><mn>3</mn><mn>2</mn><mn>8</mn><mn>2</mn><mn>9</mn><mo>×</mo></mrow><msup><mrow><mrow><mn>1</mn><mn>0</mn></mrow></mrow><mrow><mrow><mo>-</mo><mn>3</mn></mrow></mrow></msup><mrow><mspace width="0.2em" /></mrow><mfrac><mrow><mrow><mi>c</mi><mi>p</mi><mo>.</mo><mi>f</mi></mrow><msup><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow><mrow><mrow><mi>m</mi><mi>D</mi><mo>.</mo><mi>p</mi><mi>s</mi><mi>i</mi><mo>.</mo><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></mfrac><mrow><mspace width="0.2em" /></mrow></mrow></math>, which used correspondence to the unit of the CO2 rate (Mscf).</p>

                    <p className="mb-4 text-justify">Injection scenario data is available for analysis. Using this data, the hydraulic diffusivity <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> of the formation is calculated by applying Equation 3. The injection data and the corresponding <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math>​ values are presented in Table 3</p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 3. <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> calculation scenario 1 (CO2 based injection data)</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th scope="col" className="border border-gray-200 px-4 py-3">Rate injection (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mrow><mi>m</mi><mi>T</mi><mi>o</mi><mi>n</mi></mrow></mrow><mrow><mrow><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></mfrac></mrow></math>)</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Rate Injection (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mrow><mi>M</mi><mi>s</mi><mi>c</mi><mi>f</mi></mrow></mrow><mrow><mrow><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></mfrac></mrow></math>)</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>B</mi></mrow></mrow><mrow><mrow><mi>C</mi><mi>O</mi><mn>2</mn></mrow></mrow></msub></mrow></math> <br />(Rcf/Scf)</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> <br />(<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mrow><mi>f</mi></mrow><msup><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow><mrow><mrow><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></mfrac><mrow><mo>)</mo></mrow></mrow></math></th>
                            </tr>
                        </thead><tbody>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3">720</td>
                                <td className="border border-gray-200 px-4 py-3">1.39E+04</td>
                                <td className="border border-gray-200 px-4 py-3">0.002473</td>
                                <td className="border border-gray-200 px-4 py-3">2.03E+06</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3">468</td>
                                <td className="border border-gray-200 px-4 py-3">9.02E+03</td>
                                <td className="border border-gray-200 px-4 py-3">0.002473</td>
                                <td className="border border-gray-200 px-4 py-3">4.80E+06</td>
                            </tr>
                        </tbody></table></div>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">CO₂ Storage Forecast and Storage Efficiency</h3>

                    <p className="mb-4 text-justify">Using the <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> values from Table 4, the objective is to forecast CO2 injection over a 10-year operational period, spanning from January 1, 2026, to December 31, 2035. The evaluation focuses on determining whether the total injection target of 4.5 million tons (Mt) is achieved by the end of the injection schedule. Additionally, the storage efficiency of the injection will be assessed by comparing the Estimated Ultimate Storage (EUS) with the Total Storage Resource (TSR) of the formation, which can be calculated as follows:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>T</mi><mi>S</mi><mi>R</mi><mo>=</mo></mrow><mfrac><mrow><mrow><mi>φ</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>1</mn><mo>-</mo></mrow><msub><mrow><mrow><mi>S</mi></mrow></mrow><mrow><mrow><mi>o</mi><mi>r</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mi>h</mi><mi>π</mi><mi>r</mi></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow><mrow><mrow><mi>B</mi></mrow></mrow></mfrac><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>0</mn><mo>.</mo><mn>3</mn><mn>5</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>1</mn><mo>-</mo><mn>0</mn><mo>.</mo><mn>4</mn><mn>5</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>3</mn><mn>2</mn><mn>8</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mi>π</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mrow><mrow><mn>4</mn><mn>9</mn><mn>2</mn><mn>6</mn></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mn>0</mn><mo>.</mo><mn>0</mn><mn>0</mn><mn>2</mn><mn>4</mn><mn>7</mn><mn>3</mn><mn>5</mn></mrow></mrow></mfrac><mrow><mo>×</mo></mrow><msup><mrow><mrow><mn>1</mn><mn>0</mn></mrow></mrow><mrow><mrow><mo>-</mo><mn>3</mn></mrow></mrow></msup><mrow><mo>=</mo><mn>1</mn><mo>.</mo><mn>9</mn><mn>5</mn><mi>E</mi><mo>+</mo><mn>0</mn><mn>9</mn><mspace width="0.2em" /><mi>M</mi><mi>s</mi><mi>c</mi><mi>f</mi></mrow></mrow></math></div></div>

                    <p className="mb-4 text-justify">Following the EUS calculation, it is essential to assess the performance of the CO₂ injection scenarios for each <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> ​ value. The primary objective is to achieve the total injection target of 4.5 million tons while maximizing CO₂ storage efficiency within the formation. The storage efficiency can be determined using the following equation:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>E</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mi>EUS</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>/</mo><mi>TSR</mi></math></div><span className="shrink-0 font-sans text-gray-400">(4)</span></div>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Probabilistic Analysis and Convergence Check</h3>

                    <p className="mb-4 text-justify">The probabilistic EUS values for 10 years of CO₂ injection are obtained through Monte Carlo simulation. However, an important question arises regarding the validation of these results: <em>How can we confidently verify their accuracy?</em> This question emerges because the model relies on Monte Carlo simulation, which is based on the strong law of large numbers. This principle states that as the number of samples <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>n</mi></mrow></mrow></math> approaches infinity, the average outcome will almost certainly converge to the true expected value <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>P</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><munder><mrow><mrow><mi>l</mi><mi>i</mi><mi>m</mi></mrow></mrow><mrow><mrow><mi>n</mi><mo>→</mo></mrow><mrow><mo>∞</mo></mrow></mrow></munder><mrow><mspace width="0.2em" /></mrow><mrow><mo stretchy="true">|</mo><mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>S</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub><mrow><mo>-</mo><mi>S</mi></mrow></mrow><mo stretchy="true">|</mo></mrow><mrow><mo>=</mo><mn>0</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mn>1</mn><mo>.</mo></mrow></mrow></math> </p>

                    <p className="mb-4 text-justify">To enhance the reliability of the analysis, 20,000 simulations of CO₂ Estimated Ultimate Storage (EUS) over a 10-year injection period have been performed. This approach aims to provide more validated results than those obtained from a small number of simulations. Using this expanded dataset, a convergence analysis is conducted to assess the stability of the model in generating consistent EUS values.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">RESULT &amp; DISCUSSION</h2>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Comparison of Hydraulic Diffusivity Estimates</h3>

                    <p className="mb-4 text-justify">At this stage, multiple values of hydraulic diffusivity <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> have been obtained, corresponding to three different scenarios: manual calculation, production analysis, and injection analysis (Table 4). These <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math>​ values will be utilized in the next section to calculate the Estimated Ultimate Storage (EUS).</p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 4. <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> value calculation based on several scenarios</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th rowSpan={2} scope="col" className="border border-gray-200 px-4 py-3">Manual Calculation</th>
                                <th rowSpan={2} scope="col" className="border border-gray-200 px-4 py-3">Production Analysis</th>
                                <th colSpan={2} scope="colgroup" className="border border-gray-200 px-4 py-3">Injection Analysis</th>
                            </tr>
                            <tr className="bg-gray-100">
                                <th scope="col" className="border border-gray-200 px-4 py-3">Upper Injectivity Index</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Lower Injectivity Index</th>
                            </tr>
                        </thead><tbody>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3">8.93E+05</td>
                                <td className="border border-gray-200 px-4 py-3">8.608</td>
                                <td className="border border-gray-200 px-4 py-3">2.03E+06</td>
                                <td className="border border-gray-200 px-4 py-3">4.80E+06</td>
                            </tr>
                        </tbody></table></div>

                    <p className="mb-4 text-justify">Theoretically speaking, each procedure explained above results in a different <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mspace width="0.2em" /></mrow></mrow></math>value due to different approaches. Manual calculation provides a theoretical estimate using permeability, porosity, viscosity, and compressibility, often resulting in lower values as it does not account for real-time fluid interactions. Production analysis, derived from history matching with production data, yields a lower <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> since pressure declines more gradually due to depletion, fluid mobility changes, and capillary effects. In contrast, injection analysis produces much higher <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math>​ values because pressure propagates faster during injection, increasing fluid mobility and possibly opening micro-fractures. The difference between upper and lower injectivity indices reflects the sensitivity of <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> to reservoir conditions and injection parameters. However, in this work, the obtained <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> from each procedure is varying significantly, resulting very extreme uncertainty. Hence, it must be something off in the given data that exist for the reason of this phenomenon which we still can not capture clearly. </p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">CO₂ Injection Forecast and Storage Efficiency</h3>

                    <p className="mb-4 text-justify">In the TSR calculation, the given reservoir radius Re of 1500 m is utilized. Based on the history matching of production data, variations in Re do not significantly impact the accuracy of the history match; therefore, the given value is retained. Following this approach, the results of the injection scenario forecast, incorporating varying <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> values from Table 4, are presented in Figure 3.</p>

                    <ArticleFigure src={img.figure_3} figureId="3" alt="Figure 3. Comparison EUS for all calculated Dh values" caption={<>Figure 3. Comparison EUS for all calculated <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> values</>} />

                    <p className="mb-4 text-justify">It is important to note that a significant difference exists in the Estimated Ultimate Storage (EUS) obtained for <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> = 8.608 (derived from production analysis) compared to other <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> values. Therefore, in the presented plot, refer to the secondary y-axis for a detailed analysis of EUS values. </p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 5. References for TSR and injection target</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th scope="col" className="border border-gray-200 px-4 py-3">Parameter</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Value<br />(Mscf)</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Value <br />(metric tons)</th>
                            </tr>
                        </thead><tbody>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3">TSR</td>
                                <td className="border border-gray-200 px-4 py-3">1.95E+09</td>
                                <td className="border border-gray-200 px-4 py-3">1.01E+08</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3">Target CO2 Injected</td>
                                <td className="border border-gray-200 px-4 py-3">8.66E+09</td>
                                <td className="border border-gray-200 px-4 py-3">4.50E+06</td>
                            </tr>
                        </tbody></table></div>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 6. CO2 injection analysis: Deviation from injection target and storage efficiency</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th scope="col" className="border border-gray-200 px-4 py-3">Scenario <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math></th>
                                <th scope="col" className="border border-gray-200 px-4 py-3"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> value</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Final EUS(Tons)</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Deviation from injection target</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Storage Efficiency</th>
                            </tr>
                        </thead><tbody>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3">Production</td>
                                <td className="border border-gray-200 px-4 py-3">8.608</td>
                                <td className="border border-gray-200 px-4 py-3">2.38E+07</td>
                                <td className="border border-gray-200 px-4 py-3">+429.64%</td>
                                <td className="border border-gray-200 px-4 py-3">23.602%</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3">Lower Injectivity</td>
                                <td className="border border-gray-200 px-4 py-3">4.80E+06</td>
                                <td className="border border-gray-200 px-4 py-3">1.18E+04</td>
                                <td className="border border-gray-200 px-4 py-3">-99.74%</td>
                                <td className="border border-gray-200 px-4 py-3">0.012%</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3">Upper Injectivity</td>
                                <td className="border border-gray-200 px-4 py-3">2.03E+06</td>
                                <td className="border border-gray-200 px-4 py-3">2.66E+04</td>
                                <td className="border border-gray-200 px-4 py-3">-99.41%</td>
                                <td className="border border-gray-200 px-4 py-3">0.027%</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3">Manual Calculation</td>
                                <td className="border border-gray-200 px-4 py-3">8.93E+05</td>
                                <td className="border border-gray-200 px-4 py-3">5.46E+04</td>
                                <td className="border border-gray-200 px-4 py-3">-98.78%</td>
                                <td className="border border-gray-200 px-4 py-3">0.055%</td>
                            </tr>
                        </tbody></table></div>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 6 indicates that utilizing a lower <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math>​ value (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>8</mn><mo>.</mo><mn>6</mn><mn>0</mn><mn>8</mn></mrow></mrow></math>) derived from production analysis facilitates achieving the 4.5 million ton injection target. In fact, with this <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math>​ value, the CO2 storage capacity extends up to four times the initial target, resulting in a storage efficiency of 23.602%. Conversely, in other scenarios where a higher <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math>​ value is used, CO₂ storage efficiency is significantly lower. In some cases, it fails to exceed 1% storage efficiency, indicating poor injection performance. </p>

                    <p className="mb-4 text-justify">At this stage, the results suggest that adopting a lower <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> value from production analysis is advantageous in meeting the injection target. However, a critical evaluation is necessary: “<em>Is the Estimated Ultimate Storage (EUS) value obtained with this </em><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math><em>​ physically realistic? Injecting 23 million tons of CO2 over a 10-year period, yielding a 24% injection efficiency, is an exceptionally high value—raising questions about its feasibility</em>”.</p>

                    <p className="mb-4 text-justify">To address this question, it is not entirely reliable to use the <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> value obtained solely from production data. Therefore, the reservoir thickness was increased to 1000 m to determine an optimized <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> value that ensures the achievement of 4.5 million tons of CO₂ injection within 10 years. Through this approach, the optimized <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> value required to meet the injection target—considering a 1000 m reservoir thickness—was found to be <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>2</mn><mo>.</mo><mn>4</mn><mn>2</mn><mi>E</mi><mo>+</mo><mn>0</mn><mn>4</mn><mspace width="0.2em" /></mrow></mrow></math>ft²/day. Additionally, since Total Storage Resource (TSR) is a function of reservoir thickness, the TSR value has also increased to 3.08E+08. </p>

                    <p className="mb-4 text-justify">With this optimized <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math>​ value, the 4.5 million ton injection target is successfully achieved, resulting in a storage efficiency of 1.46%. The relatively low storage efficiency is attributed to the increase in Total Storage Resource (TSR), which expanded due to the increased reservoir thickness. To improve the storage efficiency to approximately 10%, a slight adjustment was made to the reservoir’s drainage radius, reducing it from 4,920 ft (initial value) to 3,200 ft. This modification allowed for the successful achievement of both the injection target and an improved storage efficiency of 10.5% after 10 years of injection. </p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 7. TSR and EUS calculation for <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>2</mn><mn>4</mn><mn>2</mn><mn>0</mn><mn>0</mn><mspace width="0.2em" /></mrow><mfrac><mrow><mrow><mi>f</mi></mrow><msup><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow><mrow><mrow><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></mfrac><mrow><mo>,</mo><mspace width="0.2em" /><mspace width="0.2em" /><mi>t</mi><mi>h</mi><mi>i</mi><mi>c</mi><mi>k</mi><mi>n</mi><mi>e</mi><mi>s</mi><mspace width="0.2em" /></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>h</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mn>3</mn><mn>2</mn><mn>8</mn><mn>0</mn><mspace width="0.2em" /><mi>f</mi><mi>t</mi></mrow></mrow></math></p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th scope="col" className="border border-gray-200 px-4 py-3">Parameter</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">(Mscf)</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">(Tons)</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Deviation from injection target</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Storage Efficiency</th>
                            </tr>
                        </thead><tbody>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3">TSR</td>
                                <td className="border border-gray-200 px-4 py-3">8.21E+08</td>
                                <td className="border border-gray-200 px-4 py-3">4.26E+07</td>
                                <td className="border border-gray-200 px-4 py-3">-</td>
                                <td className="border border-gray-200 px-4 py-3">-</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3">EUS</td>
                                <td className="border border-gray-200 px-4 py-3">8.66E+07</td>
                                <td className="border border-gray-200 px-4 py-3">4.5E+06</td>
                                <td className="border border-gray-200 px-4 py-3">0%</td>
                                <td className="border border-gray-200 px-4 py-3">10.5%</td>
                            </tr>
                        </tbody></table></div>

                    <ArticleFigure src={img.figure_4} figureId="4" alt="Figure 4. Final for Dh=24200 ft2day,  thicknes h=3280 ft" caption={<>Figure 4. Final for <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>2</mn><mn>4</mn><mn>2</mn><mn>0</mn><mn>0</mn><mspace width="0.2em" /></mrow><mfrac><mrow><mrow><mi>f</mi></mrow><msup><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow><mrow><mrow><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></mfrac><mrow><mo>,</mo><mspace width="0.2em" /><mspace width="0.2em" /><mi>t</mi><mi>h</mi><mi>i</mi><mi>c</mi><mi>k</mi><mi>n</mi><mi>e</mi><mi>s</mi><mspace width="0.2em" /></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>h</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mn>3</mn><mn>2</mn><mn>8</mn><mn>0</mn><mspace width="0.2em" /><mi>f</mi><mi>t</mi></mrow></mrow></math></>} />

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Probabilistic Estimated Ultimate Storage</h3>

                    <p className="mb-4 text-justify">This study reveals the presence of significant uncertainty in the analysis. At least three major sources of uncertainty can be identified:</p>

                    <ul className="list-disc pl-6 mb-6 space-y-3">

                        <li className="text-justify">Hydraulic Diffusivity (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math>) Variability – The <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow></math> values obtained from different methods (production and injection analysis, manual calculation) exhibit substantial variation. Ultimately, an adjusted value of <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>2</mn><mn>4</mn><mn>2</mn><mn>0</mn><mn>0</mn></mrow><mfrac><mrow><mrow><mi>f</mi></mrow><msup><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow><mrow><mrow><mi>d</mi><mi>a</mi><mi>y</mi></mrow></mrow></mfrac></mrow></math>  was adopted, as it allows for achieving the 4.5 million ton CO₂ injection target and approximately 10% storage efficiency over a 10-year period.</li>

                        <li className="text-justify">Reservoir Parameter Adjustments – To achieve the desired injection target and efficiency, modifications were necessary. The reservoir radius was adjusted from its initial value of 4,920 ft to 3,200 ft, and the reservoir thickness was increased from 328 ft to 3,280 ft. However, uncertainty remains regarding whether these values accurately represent the true reservoir conditions.</li>

                    </ul>

                    <p className="mb-4 text-justify">With the newly defined parameters for EUS calculation, the next step involves running a Monte Carlo simulation to assess the impact of parameter uncertainty. In this scenario, a probability analysis was conducted to evaluate the impact of simultaneously varying <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>,</mo><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>R</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mo>,</mo><mspace width="0.2em" /><mi>h</mi></mrow></mrow></math>. This approach was taken because the exact values of these parameters remain uncertain, making it essential to incorporate them into the uncertainty analysis. The results of this analysis are presented in Figure 7. The figure presents a convergence plot for 20,000 simulation runs. In this plot, each colored line represents a moving average of the data, which is recalculated as new realizations are added. After completing the analysis for one subset, the dataset is randomly shuffled, and the process is repeated with a new arrangement to generate another colored line. Each plot consists of 100 shuffled subsets, enhancing confidence in the results. It can be observed that all plots begin to converge when the number of simulations exceeds 10,000, further validating the stability of the analysis. </p>

                    <p className="mb-4 text-justify">It is evident that the expected values fluctuate significantly, particularly in cases with a lower number of simulations. From this observation, it can be concluded that the EUS values obtained from a small number of simulations are not reliable for decision-making, as the uncertainty is extremely high. <em>For a multi-billion-dollar project, relying on such highly uncertain results could lead to significant miscalculations in decision making</em>. This underscores the importance of conducting convergence analysis in any probabilistic study, especially in cases with extreme uncertainty, as observed in this study. With a validated model for probability analysis, updated key statistical properties for CO₂ Estimated Ultimate Storage (EUS) are presented in Table 9. These values serve as reliable references for future decision-making in this project.</p>

                    <ArticleFigure src={img.figure_7} figureId="7" alt="Figure 7. Convergence analysis for 20000 EUS simulations – varying Dh, Re, h" caption={<>Figure 7. Convergence analysis for 20000 EUS simulations – varying <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>,</mo><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>R</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mo>,</mo><mspace width="0.2em" /><mi>h</mi></mrow></mrow></math></>} />

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 9. EUS probabilistic result from 20000 simulation runs – varying <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>,</mo><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>R</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub><mrow><mo>,</mo><mspace width="0.2em" /><mi>h</mi></mrow></mrow></math></p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th scope="col" className="border border-gray-200 px-4 py-3">EUS Scenario </th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Final EUS(Tons)</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Deviation from injection target</th>
                                <th scope="col" className="border border-gray-200 px-4 py-3">Storage Efficiency</th>
                            </tr>
                        </thead><tbody>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3">P90</td>
                                <td className="border border-gray-200 px-4 py-3">4.1127E+06</td>
                                <td className="border border-gray-200 px-4 py-3">-8.51</td>
                                <td className="border border-gray-200 px-4 py-3">9.65%</td>
                            </tr>
                            <tr className="bg-gray-50">
                                <td className="border border-gray-200 px-4 py-3">P50</td>
                                <td className="border border-gray-200 px-4 py-3">4.4937E+06</td>
                                <td className="border border-gray-200 px-4 py-3">-0.04</td>
                                <td className="border border-gray-200 px-4 py-3">10.55%</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="border border-gray-200 px-4 py-3">P10</td>
                                <td className="border border-gray-200 px-4 py-3">4.8944E+06</td>
                                <td className="border border-gray-200 px-4 py-3">8.88</td>
                                <td className="border border-gray-200 px-4 py-3">11.49%</td>
                            </tr>
                        </tbody></table></div>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">CO₂ Plume Migration and Pressure Propagation</h3>

                    <p className="mb-4 text-justify">Looking at Figure 8, the plume migration is shown to reach far distance from the wellbore as the time increased which is physically understandable. After 60000 days, the horizontal migration of the plume is not significant as the early time periode. It is because that the pressure gradient at this time period is significantly lower compare to the initial injection, which lowering the lateral velocity of the CO2. </p>

                    <p className="mb-4 text-justify">On the other hand, Figure 9 describes how the pressure propagate during the CO2 injection. At the early time, the pressure propagate just reach the near wellbore region, which is indicated by the significant drop of the injection pressure to reservoir pressure. For example, at t = 10 days, the pressure plot drop to 2900 psi at 250 ft. It indicated that the pressure at this time at 250 ft still equal to the initial reservoir pressure before the injection process, which the pressure from the injection has not travel to this region. As the time increase, we can analyze that the reservoir pressure increase to approximate the injection pressure. </p>

                    <ArticleFigure src={img.figure_8} figureId="8" alt="Figure 8. Plume migration Dh=24200" caption={<>Figure 8. Plume migration <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>2</mn><mn>4</mn><mn>2</mn><mn>0</mn><mn>0</mn></mrow></mrow></math></>} />

                    <ArticleFigure src={img.figure_9} figureId="9" alt="Figure 9. Pressure propagation over time and radius Dh=24200" caption={<>Figure 9. Pressure propagation over time and radius <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>2</mn><mn>4</mn><mn>2</mn><mn>0</mn><mn>0</mn></mrow></mrow></math></>} />

                    <p className="mb-4 text-justify">From both of this figures, it can be analyze that the pressure propagation is move faster than the CO2 plume. For example, for t = 20000 days, the CO2 plume is just reach approximately 175 ft distance away from the wellbore. However, for the same timelines, pressure propagation has reach the area of 4500 ft from the wellbore. Pressure propagation occurs significantly faster than CO₂ plume migration because pressure waves travel through the reservoir almost instantly without requiring the displacement of large fluid volumes. This is primarily driven by the compressibility of both the reservoir rock and the fluids, allowing pressure to equalize rapidly over large distances. In contrast, CO₂ plume migration involves the actual movement of CO₂ through the pore spaces of the reservoir, requiring the displacement of existing fluids, which is a much slower process controlled by permeability, relative mobility, and capillary forces. </p>

                    <p className="mb-4 text-justify">From a reservoir management perspective, the rapid spread of pressure means that pressure monitoring is crucial in the early stages of CO₂ injection, as pressure can reach critical limits well before the CO₂ plume fully develops. This highlights the need to carefully manage the maximum allowable pressure to avoid exceeding the reservoir's fracture pressure, which could lead to unintended fluid migration or leakage. Additionally, even after injection ceases, the CO₂ plume continues to migrate under the influence of residual pressure gradients, making long-term monitoring essential.</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Horizontal-to-Vertical Velocity Ratio</h3>

                    <p className="mb-4 text-justify">From Figure 10, the velocity ratio <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><msub><mrow><mrow><mi>U</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>U</mi></mrow></mrow><mrow><mrow><mi>z</mi></mrow></mrow></msub></mrow></mfrac></mrow></math> vs. time graph illustrates the evolution of horizontal and vertical CO₂ migration over time. Initially, at early times (first few hundred days), the velocity ratio is high (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><msub><mrow><mrow><mi>U</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>U</mi></mrow></mrow><mrow><mrow><mi>z</mi></mrow></mrow></msub></mrow></mfrac><mrow><mspace width="0.2em" /></mrow></mrow></math>&gt;20), indicating that horizontal migration dominates due to strong injection pressure and reservoir permeability anisotropy (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub><mrow><mo>&gt;</mo></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mi>z</mi></mrow></mrow></msub></mrow></math>​). The high pressure gradient in the reservoir drives CO₂ laterally, while buoyancy effects remain minimal. As time progresses, the pressure gradient decreases, reducing horizontal velocity, while buoyancy remains constant, making vertical migration increasingly significant. Around 1000 days, the velocity ratio declines steadily as buoyancy starts to balance horizontal flow. In the late-time phase (5000–7000 days), <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><msub><mrow><mrow><mi>U</mi></mrow></mrow><mrow><mrow><mi>h</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>U</mi></mrow></mrow><mrow><mrow><mi>z</mi></mrow></mrow></msub></mrow></mfrac></mrow></math> approaches values close to 1–3, suggesting that both horizontal and vertical migration contribute significantly to CO₂ movement. At this stage, the dominance of pressure-driven horizontal flow has weakened, and buoyancy-driven vertical migration becomes a key factor in CO₂ plume behavior.</p>

                    <ArticleFigure src={img.figure_10} figureId="10" alt="Figure 10. Velocity ratio vs time" caption={<>Figure 10. Velocity ratio vs time</>} />

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">CONCLUSION</h2>

                    <p className="mb-4 text-justify">This study assessed the CO₂ storage performance of the Nini West field for Project Greensand under subsurface uncertainty. Hydraulic diffusivity estimates from production, manual, and injection analyses differed by several orders of magnitude (about 8.6 to 4.8×10⁶ ft²/day). The resulting storage forecasts were either physically unrealistic or far below the 4.5 Mt target. With an adjusted diffusivity of 24,200 ft²/day, a thickness of 3,280 ft, and a drainage radius of 3,200 ft, the target was achieved at 10.5% storage efficiency. The Monte Carlo results converged only after more than 10,000 realizations, giving P90–P10 storage estimates of 4.33–4.69 Mt. Pressure propagated far faster than the CO₂ plume, so early pressure monitoring is essential. Buoyancy-driven vertical migration becomes increasingly important as injection pressure gradients decline.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">REFERENCES</h2>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Kroese, D. P., &amp; Rubinstein, R. Y. (2012). Monte Carlo methods. <em>Wiley Interdisciplinary Reviews: Computational Statistics, 4</em>(1), 48–58. https://doi.org/10.1002/wics.194</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Pratama, M. A., Al Qoroni, O., Rahmatullah, I. K., Jameel, M. F., &amp; Weijermars, R. (2024). Probabilistic production forecasting and reserves estimation: Benchmarking Gaussian decline curve analysis against the traditional Arps method (Wolfcamp shale case study). <em>Geoenergy Science and Engineering, 232</em>. https://doi.org/10.1016/j.geoen.2023.212373</p>
                </div>

                <footer className="mt-16 pt-8 border-t border-gray-200">

                    {/* <!-- Next/Prev Article Navigation --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                        <Link to="/we-do/7" className="group block p-6 border border-gray-200 rounded-lg hover:border-etars-teal transition-colors">
                            <span className="block text-sm text-gray-500 mb-1">&larr; Previous Article</span>
                            <span className="block font-semibold text-dark group-hover:text-etars-teal transition-colors line-clamp-2">Layered Reservoir with No Crossflow, Constant-Rate IBC, and Constant-Rate OBC</span>
                        </Link>

                    </div>
                </footer>
            </article>
        </main>
    )
}

export default Journal_8_Page

