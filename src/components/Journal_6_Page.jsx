import React from 'react';
import authorImage1 from '/img/userA.jpeg';
import { Link } from 'react-router-dom';
import ArticleFigure from './ArticleFigure';
import figures from '../data-figure';

function Journal_6_Page({ publicationsHref = '/we-do/', pdfUrl = '', onShare = null }) {
    const img = figures.journal_6;

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
                                <linearGradient id="journal6-line-grad-1" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#40C2BA" stopOpacity="0" />
                                    <stop offset="15%" stopColor="#40C2BA" stopOpacity="1" />
                                    <stop offset="85%" stopColor="#40C2BA" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#40C2BA" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="journal6-line-grad-2" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#87D544" stopOpacity="0" />
                                    <stop offset="25%" stopColor="#87D544" stopOpacity="0.8" />
                                    <stop offset="75%" stopColor="#87D544" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#87D544" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Smooth elegant curves */}
                            <path d="M0,120 C250,120 400,30 650,80 C800,110 900,90 1000,90" stroke="url(#journal6-line-grad-1)" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M0,135 C270,135 420,45 670,95 C820,125 910,105 1000,105" stroke="url(#journal6-line-grad-2)" strokeWidth="1.5" strokeDasharray="6 8" strokeLinecap="round" />

                            {/* Subtle data node accent */}
                            <circle cx="650" cy="80" r="4.5" fill="#40C2BA" />
                            <circle cx="650" cy="80" r="14" fill="#40C2BA" opacity="0.1" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-6 font-outfit">
                        MODELLING FLUID FLOW USING CRMP AND COMPARING IT WITH AN AI-BASED MODEL
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
                        <p className="text-sm text-gray-500">Published in 2024</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4 font-sans">
                        <span className="text-sm font-semibold text-gray-500 mr-2 py-1">Tags:</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Capacitance Resistance Model</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Machine Learning</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Production Forecasting</span>
                    </div>
                </header>

                <div className="article-content font-serif text-gray-800 text-lg leading-relaxed">
                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">SUMMARY</h2>

                    <p className="mb-4 text-justify">This study compares two reservoir forecasting approaches across four wells: the physics-based Capacitance Resistance Model (CRMIP) and the data-driven Random Forest (RF) algorithm. CRMIP offers strong physical interpretability and excels in stable conditions, achieving a testing MAPE as low as 1.60%. However, its accuracy significantly drops in complex scenarios (e.g., Producer 2 testing MAPE: 11.88%). Conversely, RF adapts better to noisy, nonlinear data, demonstrating superior predictive accuracy with R² scores up to 0.978 and lower overall errors. Ultimately, while CRMIP provides valuable physical insights, RF delivers greater flexibility and accuracy in complex reservoir environments.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">INTRODUCTION</h2>

                    <p className="mb-4 text-justify">Reservoir modeling is essential for predicting subsurface fluid behavior, yet it faces major challenges from complex physics and limited data. Because direct measurements—such as core samples and well logs—provide only localized snapshots of vast formations, engineers must infer critical properties like porosity and permeability, leaving models laden with uncertainty. Furthermore, tight economic pressures require rapid decision-making that traditional, computationally heavy numerical simulations are simply too slow to support. Resolving this tension between detailed precision and efficient analysis remains the central challenge driving innovation in modern petroleum engineering.</p>

                    <p className="mb-4 text-justify">Simplified reservoir models offer a pragmatic solution by distilling complex physics into manageable frameworks. The Capacitance Resistance Model (CRM) exemplifies this, using readily available data—such as bottom-hole pressures and flow rates—to quickly derive interwell connectivities and time constants (Sayarpour et al., 2009, Weber et al., 2009 and Yousef et al., 2006). While CRM provides rapid, cost-effective insights for real-time optimization, classical versions struggle with aquifer influences and sudden operational changes (Olenchikov &amp; Posvyanskii, 2019). Fortunately, recent refinements that explicitly model aquifer effects and crossflows have significantly improved its robustness and forecasting utility.</p>

                    <ArticleFigure src={img.figure_A} figureId="intro" alt="CRMP model illustration" />

                    <p className="mb-4 text-justify">This study presents a comparative analysis of two modeling approaches: the Capacitance Resistance Model for Production (CRMP), a physics-based method, and Random Forest (RF), a data-driven machine learning algorithm applied to time-series data. CRMP models inter-well connectivity and injection response delay based on simplified reservoir physics (Figure 1 above), while RF uses lagged production and injection features to learn complex patterns from historical data.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">METHODOLOGY</h2>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Dataset Description</h3>

                    <p className="mb-4 text-justify">In this study, synthetic production and injection data for a waterflood operation were used, obtained from a publicly available synthetic reservoir model developed by (Sayarpour, 2008). The dataset represents a reservoir with four producer wells and five injector wells. Figure 1 from Sayarpour’s dissertation displays the well locations and highlights two high-permeability streaks within the reservoir model. The permeability is set uniformly at 5 millidarcies (md) throughout the reservoir, except within the streaks where the permeability is significantly higher. A constant porosity of 0.18 was assigned globally. The total mobility (λo + λw) is constant and independent of saturation. Compressibility values for oil, water, and rock are 5×10⁻⁶ psi⁻¹, 1×10⁻⁶ psi⁻¹, and 1×10⁻⁶ psi⁻¹, respectively.</p>

                    <p className="mb-4 text-justify">The average injection rate across all injectors is approximately 1,000 RB/D. However, the total production is predominantly influenced by Producer wells P1 and P4, which dominate the cumulative production, as illustrated in Figure 2. Additionally, the bottom-hole pressures (BHPs) at all producer wells are maintained constant at 250 psia throughout the simulation period.</p>

                    <ArticleFigure src={img.figure_1} figureId="1" alt="Figure 1. The well location map illustrates five injector wells (I1–I5) and four producer wells (P1–P4) within a reservoir model featuring two high-permeability streaks with permeabilities of 500 md and 1,000 md" caption={<>Figure 1. The well location map illustrates five injector wells (I1–I5) and four producer wells (P1–P4) within a reservoir model featuring two high-permeability streaks with permeabilities of 500 md and 1,000 md</>} />

                    <ArticleFigure src={img.figure_2} figureId="2" alt="Figure 2. Production profile of the synthetic reservoir model. " caption={<>Figure 2. Production profile of the synthetic reservoir model. </>} />

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Derivation of Capacitance Resistance Model</h3>

                    <p className="mb-4 text-justify">Start from the material balance equation</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>i</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo><mi>q</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mspace width="0.2em" /><mi>ϕ</mi></mrow><msub><mrow><mrow><mi>c</mi></mrow></mrow><mrow><mrow><mi>t</mi></mrow></mrow></msub><msub><mrow><mrow><mi>V</mi></mrow></mrow><mrow><mrow><mi>b</mi></mrow></mrow></msub><mfrac><mrow><mrow><mo>∂</mo></mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>¯</mo></mover></mrow><mrow><mrow><mo>∂</mo><mi>t</mi></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(1)</span></div>

                    <p className="mb-4 text-justify">Where <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>i</mi><mspace width="0.2em" /><mi>a</mi><mi>n</mi><mi>d</mi><mspace width="0.2em" /><mi>q</mi></mrow></mrow></math> is the injection and production rate at given time <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mo>(</mo><mi>t</mi><mo>)</mo></mrow></mrow></math>, and <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>¯</mo></mover></mrow></math> is the average reservoir pressure. </p>

                    <p className="mb-4 text-justify">The total production rate can be modeled as:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>q</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mi>J</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>¯</mo></mover><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(2)</span></div>

                    <p className="mb-4 text-justify">Where <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>J</mi></mrow></mrow></math> is the productivity index and <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub></mrow></math> is flowing bottom hole pressure.</p>

                    <p className="mb-4 text-justify">Let <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mrow><mrow><mi>ϕ</mi></mrow><msub><mrow><mrow><mi>c</mi></mrow></mrow><mrow><mrow><mi>t</mi></mrow></mrow></msub><msub><mrow><mrow><mi>V</mi></mrow></mrow><mrow><mrow><mi>b</mi></mrow></mrow></msub></mrow><mrow><mrow><mi>J</mi></mrow></mrow></mfrac><mrow><mo>=</mo><mspace width="0.2em" /><mi>τ</mi></mrow></mrow></math>, then the equation becomes</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mrow><mo>∂</mo><mi>q</mi></mrow></mrow><mrow><mrow><mo>∂</mo><mi>t</mi></mrow></mrow></mfrac><mrow><mo>+</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac><mrow><mi>q</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac><mrow><mi>i</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo><mi>J</mi></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo><mi>t</mi></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(3)</span></div>

                    <p className="mb-4 text-justify">In equation 3, our interest is the total production rate <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>q</mi></mrow></mrow></math>, and the variable <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>τ</mi></mrow></mrow></math> and <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>J</mi></mrow></mrow></math> is a constant that is not a function of <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>q</mi></mrow></mrow></math>. Equation 3 is the first-order differential equation that can be solved using integrating factor. </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>q</mi><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo><mi>q</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi><mo>-</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac></mrow></msup><mrow><mo>+</mo></mrow><mfrac><mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac></mrow></msup></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac><mrow><munderover><mo>∫</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mrow><mrow><mi>t</mi></mrow></mrow></munderover><mrow /></mrow><mrow><mspace width="0.2em" /></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mfrac><mrow><mrow><mi>ξ</mi></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac></mrow></msup><mrow><mi>i</mi><mo>(</mo><mi>ξ</mi><mo>)</mo><mi>d</mi><mi>ξ</mi><mo>-</mo><mi>J</mi></mrow><mrow><mo stretchy="true">[</mo><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub><mrow><mo>(</mo><mi>t</mi><mo>)</mo><mo>-</mo></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi><mo>-</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac></mrow></msup><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">]</mo></mrow><mrow><mo>+</mo></mrow><mfrac><mrow><mrow><mi>J</mi></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mfrac><mrow><mrow><mo>-</mo><mi>t</mi></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac></mrow></msup><mrow><munderover><mo>∫</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mrow><mrow><mi>t</mi></mrow></mrow></munderover><mrow /></mrow><mrow><mspace width="0.2em" /></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mi>ξ</mi><mo>/</mo><mi>τ</mi></mrow></mrow></msup><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub><mrow><mo>(</mo><mi>ξ</mi><mo>)</mo><mi>d</mi><mi>ξ</mi></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(4)</span></div>

                    <p className="mb-4 text-justify">Equation 4 represent the CRMT, in which the reservoir model is considered as a tank system which there are only one injector and one producer. Hence, we are only concerned with the injection and net production from the system</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">CRMP Derivation</h3>

                    <p className="mb-4 text-justify">CRMP considers a field with several number of production <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mo>(</mo></mrow><msub><mrow><mrow><mi>N</mi></mrow></mrow><mrow><mrow><mi>P</mi><mi>r</mi><mi>o</mi><mi>d</mi></mrow></mrow></msub><mrow><mo>)</mo></mrow></mrow></math> and several number of injectors <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>N</mi></mrow></mrow><mrow><mrow><mi>I</mi><mi>n</mi><mi>j</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>.</mo><mspace width="0.2em" /></mrow></mrow></math>In this model, every producer is assumed to be connected to every injector, which mean that every producer <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>J</mi></mrow></mrow></math> receives part of energy from the surrounding injectors. The control volume of this model is the drainage volume of each producer.  </p>

                    <p className="mb-4 text-justify">To write the relationship between the injector-producer from this scenario, equation 3 can be re-arranged as follows</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mrow><mi>d</mi></mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>(</mo><mi>t</mi><mo>)</mo></mrow></mrow><mrow><mrow><mi>d</mi><mi>t</mi></mrow></mrow></mfrac><mrow><mo>+</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>(</mo><mi>t</mi><mo>)</mo><mo>=</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mn>1</mn><mo>,</mo><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>i</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo>(</mo><mi>t</mi><mo>)</mo><mo>+</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mn>2</mn><mo>,</mo><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>i</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msub><mrow><mo>(</mo><mi>t</mi><mo>)</mo><mo>+</mo><mo>…</mo><mo>+</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><msub><mrow><mrow><mi>N</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>p</mi><mi>j</mi><mo>,</mo><mi>j</mi></mrow></mrow></msub></mrow></msub><msub><mrow><mrow><mi>i</mi></mrow></mrow><mrow><msub><mrow><mrow><mi>N</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi><mi>j</mi></mrow></mrow></msub></mrow></msub><mrow><mo>(</mo><mi>t</mi><mo>)</mo><mo>-</mo></mrow><msub><mrow><mrow><mi>J</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mfrac><mrow><mrow><mi>d</mi></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></msub></mrow><mrow><mrow><mi>d</mi><mi>t</mi></mrow></mrow></mfrac><mrow><mo>,</mo></mrow><mrow><mo>∀</mo></mrow><mrow><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mo>…</mo><mo>.</mo></mrow><msub><mrow><mrow><mi>N</mi></mrow></mrow><mrow><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>d</mi></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(5)</span></div>

                    <p className="mb-4 text-justify">Equation 5 can be simplified into </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo><mi>t</mi></mrow></mrow></mfrac><mrow><mo>+</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>τ</mi></mrow></mrow></mfrac><mrow><munderover><mo>∑</mo><mrow><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>N</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>n</mi><mi>j</mi></mrow></mrow></msub></mrow></munderover><mrow /></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub><mrow><mi>i</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>J</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></msub></mrow><mrow><mrow><mo>∂</mo><mi>t</mi></mrow></mrow></mfrac><mrow><mspace width="0.2em" /><mo>∀</mo><mspace width="0.2em" /><mi>j</mi><mo>=</mo><mi>p</mi><mi>r</mi><mi>o</mi><mi>d</mi><mi>u</mi><mi>c</mi><mi>e</mi><mi>r</mi><mspace width="0.2em" /><mn>1</mn><mo>,</mo><mspace width="0.2em" /><mn>2</mn><mo>,</mo><mspace width="0.2em" /><mn>3</mn><mo>…</mo><mo>.</mo><mi>n</mi></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(6)</span></div>

                    <p className="mb-4 text-justify">In equation 6, <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math> represents the fraction of injector <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>i</mi><mo>'</mo><mi>s</mi></mrow></mrow></math> rate flowing toward producer <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>j</mi></mrow></mrow></math>. Thus, <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math> can be expressed as </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>i</mi><mo>,</mo><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>i</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(7)</span></div>

                    <p className="mb-4 text-justify">Where each connectivity factor <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math> is non negative values and the sum of all <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math> for any particular injector <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>i</mi><mo>,</mo><mspace width="0.2em" /></mrow></mrow></math>can not exceed 1. </p>

                    <p className="mb-4 text-justify">The solution for equation 6 is similar to that equation 4 (for CRMT) except that it is obtained for each producer <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>J</mi></mrow></mrow></math> and we account for the connection of multiple injectors to every producer <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>J</mi></mrow></mrow></math>. Thus, we may write the solution to the CRMP model as</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi><mo>-</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msup><mrow><mo>+</mo></mrow><mfrac><mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><mrow><mi>t</mi></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msup></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><mrow><munderover><mo>∫</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mrow><mrow><mi>t</mi></mrow></mrow></munderover><mrow /></mrow><mrow><mspace width="0.2em" /></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mfrac><mrow><mrow><mi>ξ</mi></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msup><mrow><munderover><mo>∑</mo><mrow><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>N</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>n</mi><mi>j</mi></mrow></mrow></msub></mrow></munderover><mrow /></mrow><mrow><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mo>,</mo><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>i</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>ξ</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mi>d</mi><mi>ξ</mi><mo>-</mo></mrow><msub><mrow><mrow><mi>J</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo stretchy="true">[</mo><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></msub><mrow><mo>(</mo><mi>t</mi><mo>)</mo><mo>-</mo></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>t</mi><mo>-</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msup><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">]</mo></mrow><mrow><mo>+</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>J</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><mrow><mi>t</mi></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msup><mrow><munderover><mo>∫</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow><mrow><mrow><mi>t</mi></mrow></mrow></munderover><mrow /></mrow><mrow><mspace width="0.2em" /></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mfrac><mrow><mrow><mi>ξ</mi></mrow></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msup><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub><mrow><mo>(</mo></mrow><mrow><mi>ξ</mi></mrow><mrow><mo>)</mo><mi>d</mi><mi>ξ</mi><mo>,</mo></mrow><mrow><mo>∀</mo></mrow><mrow><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mo>…</mo><mo>.</mo></mrow><msub><mrow><mrow><mi>N</mi></mrow></mrow><mrow><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>d</mi></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(8)</span></div>

                    <p className="mb-4 text-justify">We can work on recursive expressions to solve equation 8 easily on python. For this case, we impose the condition where injection rates are constant from <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mspace width="0.2em" /></mrow></mrow></math>to <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>t</mi></mrow></mrow></math> and BHP varies linearly from <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mrow></msub></mrow></math> to <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow></math> (Sayarpour, 2008).</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub><mrow><mo>(</mo></mrow><mrow><mi>ξ</mi></mrow><mrow><mo>)</mo><mo>=</mo></mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mspace width="0.2em" /><mi>f</mi><mi>o</mi><mi>r</mi><mspace width="0.2em" /></mrow><mrow><mi>ξ</mi></mrow><mrow><mo>∈</mo></mrow><mrow><mo stretchy="true">[</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mrow></msub><mrow><mo>,</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow><mo stretchy="true">]</mo></mrow></mrow></math></div></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub><mrow><mo>(</mo></mrow><mrow><mi>ξ</mi></mrow><mrow><mo>)</mo><mo>=</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><mfrac><mrow><mrow><mi>ξ</mi></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mrow></msub></mrow><mrow><mrow><mi>Δ</mi></mrow><mrow><mi>t</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div></div>

                    <p className="mb-4 text-justify">and let </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub><mrow><mo>=</mo><mi>c</mi><mi>u</mi><mi>r</mi><mi>r</mi><mi>e</mi><mi>n</mi><mi>t</mi><mspace width="0.2em" /><mi>t</mi><mi>i</mi><mi>m</mi><mi>e</mi></mrow></mrow></math></div></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>Δ</mi></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mrow></msub></mrow></math></div></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>α</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mrow><mi>Δ</mi></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub><mrow><mo>/</mo></mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></msup></mrow></math></div></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>Δ</mi></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></msub><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div></div>

                    <p className="mb-4 text-justify">Using this assumption, equation 8 can be written in recursive expression as follows</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi><mo>-</mo><mn>1</mn></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><mrow><mi>Δ</mi></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msup><mrow><mo>+</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>1</mn><mo>-</mo></mrow><msup><mrow><mrow><mi>e</mi></mrow></mrow><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><mrow><mi>Δ</mi></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">[</mo><mrow><mrow><munderover><mo>∑</mo><mrow><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>N</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>n</mi><mi>j</mi></mrow></mrow></msub></mrow></munderover><mrow /></mrow><mrow><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>J</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mfrac><mrow><mrow><mi>Δ</mi></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></msub></mrow><mrow><mrow><mi>Δ</mi></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></msub></mrow></mfrac></mrow><mo stretchy="true">]</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(9)</span></div>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Random Forest (RF) Algorithm</h3>

                    <p className="mb-4 text-justify">In this project, our primary objective was to predict production rates using the Random Forest (RF) machine learning algorithm. We focused on four producers (P1, P2, P3, and P4), treating their production rates as the target variables, denoted as 𝑦<sub>1</sub>, 𝑦<sub>2</sub>, 𝑦<sub>3</sub>, y<sub>4</sub>. For input features, we utilized both the historical production data and injection rate data from the five injectors. Given the dynamics of reservoir behavior, we framed this as a time series problem, where the production at a future time step depends heavily on past data. In time series forecasting, it's important to acknowledge that data at time 𝑡+1 is primarily influenced by data at time 𝑡. Additionally, reservoir response to injection is delayed—there is a time lag between injection changes and their observable impact on production. For this reason, we generated lagged features to represent this delayed response. For example, a lag-3 feature means that the injection or production rate at time 𝑡 is used to predict production at 𝑡+3. By incorporating various lags (lag-1, lag-3, lag-5, etc.), the Random Forest model is able to capture the delayed influence of injection on production. In mathematical form, it is written like that:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>X</mi><mi>t</mi></msub><mo>=</mo><mo>[</mo><msubsup><mi>x</mi><mrow><mi>t</mi></mrow><mrow><mo>(</mo><mn>1</mn><mo>)</mo></mrow></msubsup><mo>,</mo><msubsup><mi>x</mi><mrow><mi>t−3</mi></mrow><mrow><mo>(</mo><mn>1</mn><mo>)</mo></mrow></msubsup><mo>,</mo><msubsup><mi>x</mi><mrow><mi>t</mi></mrow><mrow><mo>(</mo><mn>2</mn><mo>)</mo></mrow></msubsup><mo>,</mo><msubsup><mi>x</mi><mrow><mi>t−3</mi></mrow><mrow><mo>(</mo><mn>2</mn><mo>)</mo></mrow></msubsup><mo>,</mo><mo>…</mo><mo>,</mo><msubsup><mi>x</mi><mrow><mi>t</mi></mrow><mrow><mo>(</mo><mn>5</mn><mo>)</mo></mrow></msubsup><mo>,</mo><msubsup><mi>x</mi><mrow><mi>t−3</mi></mrow><mrow><mo>(</mo><mn>5</mn><mo>)</mo></mrow></msubsup><mo>]</mo></math></div><span className="shrink-0 font-sans text-gray-400">(10)</span></div>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Random Forest Regressor Workflow</h4>

                    <p className="mb-4 text-justify"><strong>Step 1</strong> – We first make subsets of our training data (features like lagged production and injector data for wells P1, P2, P3, P4) by performing row sampling with replacement (bootstrapping) and feature sampling (randomly selecting a subset of features using max_features='sqrt' or 'log2'), creating diverse subsets of the dataset.</p>

                    <p className="mb-4 text-justify"><strong>Step 2 </strong>– We create an individual decision tree for each subset, building 50 to 200 trees (based on n_estimators), where each tree is grown with constraints like maximum depth and minimum samples per leaf to predict production rates.</p>

                    <p className="mb-4 text-justify"><strong>Step 3</strong> – Each decision tree provides a predicted production value (in bbl/month) for each sample in the training, validation, and test sets.</p>

                    <p className="mb-4 text-justify"><strong>Step 4</strong> – Since this is a regression problem, the final output for each well’s production rate is calculated by averaging the predictions from all decision trees, resulting in the final forecasted production values.</p>

                    <p className="mb-4 text-justify">To inform feature engineering and understand relationships between producers (P1, P2, P3, P4) and injectors (I1, I2, I3, I4, I5), we compute the Pearson correlation coefficient, as the specific injector-producer pairs are not initially known. The heatmap shows strong positive correlations (red, e.g., P1–I1 at 0.84, P2–I4 at 0.86) and negative correlations (blue, e.g., P2–I2 at –0.33), which help identify influential injectors for each producer. To further refine feature selection, Granger causality tests were performed—these assess whether past values of an injector time series help predict future production rates. This allows for a more causal, time-aware identification of impactful injector features beyond simple correlation.</p>

                    <ArticleFigure src={img.figure_3} figureId="3" alt="Figure 3. Correlation Coefficient between the wells" caption={<><strong>Figure 3.</strong> Correlation Coefficient between the wells</>} />

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Feature Engineering</h3>

                    <p className="mb-4 text-justify">Feature engineering transforms raw data into meaningful inputs for the Random Forest Regressor. Using the same dataset for P1, we engineer features informed by the correlation analysis:</p>

                    <p className="mb-4 text-justify">Lagged Production (P1_lag1): Captures temporal trends, e.g., for March 2020, P1_lag1 = 120.</p>

                    <p className="mb-4 text-justify">Injector Influence (I1_lag0_for_P1): Includes I1’s current injection rate due to its high correlation (𝑟=0.758), e.g., for March 2020, I1_lag0_for_P1 = 60.</p>

                    <p className="mb-4 text-justify">Moving Average (P1_ma3): A 3-month moving average, e.g., for April 2020, P1_ma3 = (100 + 120 + 130) / 3 = 116.67.</p>

                    <p className="mb-4 text-justify">Seasonal Feature (sin_month): Captures seasonality, e.g., for March, sin_month = sin (2π × 3 / 12) = 1.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">RESULTS &amp; DISCUSSION</h2>

                    <p className="mb-4 text-justify">We begin by evaluating the quality of the model fit against historical production data, both for the training and testing phases. Mean Average Percentage Error (MAPE) is used as a quantitative metric to assess model accuracy. In addition to prediction performance, we also report the estimated model parameters — including the time constants <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></math>, interwell connectivity coefficients <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math>, and initial production rates <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>t</mi><mi>o</mi></mrow></mrow></msub></mrow></math>— which were obtained through optimization. These parameters are not only critical for production forecasting, but also carry valuable physical meaning regarding reservoir dynamics and injector-producer interactions.</p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 1. <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>τ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></math> obtained for each producer </p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">

                        <thead>

                            <tr className="bg-gray-100">

                                <th scope="col" className="border border-gray-200 px-4 py-3">Well</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3">Value</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Producer 1</td>

                                <td className="border border-gray-200 px-4 py-3">0.127536</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Producer 2</td>

                                <td className="border border-gray-200 px-4 py-3">1.948799</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Producer 3</td>

                                <td className="border border-gray-200 px-4 py-3">1.416613</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Producer 4</td>

                                <td className="border border-gray-200 px-4 py-3">0.120036</td>

                            </tr>



                        </tbody></table></div>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 2. <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub></mrow></math> obtained for each producer</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">

                        <thead>

                            <tr className="bg-gray-100">

                                <th scope="col" className="border border-gray-200 px-4 py-3">Well</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3">Value</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Producer 1</td>

                                <td className="border border-gray-200 px-4 py-3">0.000536</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Producer 2</td>

                                <td className="border border-gray-200 px-4 py-3">0.028380</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Producer 3</td>

                                <td className="border border-gray-200 px-4 py-3">0.000180</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Producer 4</td>

                                <td className="border border-gray-200 px-4 py-3">0.000355</td>

                            </tr>



                        </tbody></table></div>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 3. Injection-producer connectivity (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math>)</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">

                        <thead>

                            <tr className="bg-gray-100">

                                <th scope="col" className="border border-gray-200 px-4 py-3">Injector</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3">Producer 1</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3">Producer 2</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3">Producer 3</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3">Producer 4</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><munderover><mo>∑</mo><mrow></mrow><mrow></mrow></munderover><mrow /></mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math></th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Inj1</td>

                                <td className="border border-gray-200 px-4 py-3">0.933310</td>

                                <td className="border border-gray-200 px-4 py-3">0.007814</td>

                                <td className="border border-gray-200 px-4 py-3">0.006942</td>

                                <td className="border border-gray-200 px-4 py-3">0.051935</td>

                                <td className="border border-gray-200 px-4 py-3">1.000000</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Inj2</td>

                                <td className="border border-gray-200 px-4 py-3">0.544592</td>

                                <td className="border border-gray-200 px-4 py-3">0.009411</td>

                                <td className="border border-gray-200 px-4 py-3">0.140479</td>

                                <td className="border border-gray-200 px-4 py-3">0.305519</td>

                                <td className="border border-gray-200 px-4 py-3">1.000000</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Inj3</td>

                                <td className="border border-gray-200 px-4 py-3">0.093697</td>

                                <td className="border border-gray-200 px-4 py-3">0.000972</td>

                                <td className="border border-gray-200 px-4 py-3">0.041702</td>

                                <td className="border border-gray-200 px-4 py-3">0.863630</td>

                                <td className="border border-gray-200 px-4 py-3">1.000000</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Inj4</td>

                                <td className="border border-gray-200 px-4 py-3">0.152012</td>

                                <td className="border border-gray-200 px-4 py-3">0.150333</td>

                                <td className="border border-gray-200 px-4 py-3">0.039127</td>

                                <td className="border border-gray-200 px-4 py-3">0.653324</td>

                                <td className="border border-gray-200 px-4 py-3">0.994796</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Inj5</td>

                                <td className="border border-gray-200 px-4 py-3">0.182583</td>

                                <td className="border border-gray-200 px-4 py-3">0.020687</td>

                                <td className="border border-gray-200 px-4 py-3">0.095045</td>

                                <td className="border border-gray-200 px-4 py-3">0.701686</td>

                                <td className="border border-gray-200 px-4 py-3">1.000001</td>

                            </tr>



                        </tbody></table></div>

                    <p className="mb-4 text-justify">The performance of the CRM model, evaluated using the Mean Absolute Percentage Error (MAPE), varies across the four producer wells during both the training and testing periods. As shown in Table 4, Producer 1 and Producer 4 achieve the lowest MAPE values during both training and testing, indicating a very good agreement between model predictions and actual production data. Conversely, Producer 2 and, to a lesser extent, Producer 3 show higher error values, particularly during the testing phase. </p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 4. Mean average percentage of error (MAPE)</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">

                        <thead>

                            <tr className="bg-gray-100">

                                <th scope="col" className="border border-gray-200 px-4 py-3">Well</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3">Training</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3">Testing</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Producer 1</td>

                                <td className="border border-gray-200 px-4 py-3">3.70 %</td>

                                <td className="border border-gray-200 px-4 py-3">2.16 %</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Producer 2</td>

                                <td className="border border-gray-200 px-4 py-3">5.96 %</td>

                                <td className="border border-gray-200 px-4 py-3">11.88 %</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Producer 3</td>

                                <td className="border border-gray-200 px-4 py-3">7.20 %</td>

                                <td className="border border-gray-200 px-4 py-3">2.51 %</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Producer 4</td>

                                <td className="border border-gray-200 px-4 py-3">4.38 %</td>

                                <td className="border border-gray-200 px-4 py-3">1.60 %</td>

                            </tr>



                        </tbody></table></div>

                    <ArticleFigure src={img.figure_4} figureId="4" alt="Figure 4. History macthing oil production actual with CRM result for producer 1" caption={<>Figure 4. History macthing oil production actual with CRM result for producer 1</>} />

                    <ArticleFigure src={img.figure_5} figureId="5" alt="Figure 5. History macthing oil production actual with CRM result for producer 2" caption={<>Figure 5. History macthing oil production actual with CRM result for producer 2</>} />

                    <p className="mb-4 text-justify">The interwell connectivity coefficients <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math>​, which quantify the influence of each injector on a given producer, play a critical role in both the magnitude of predicted oil production and the accuracy of model fitting. From a volumetric perspective, wells that are strongly connected to one or more injectors tend to exhibit higher production rates, as the CRM formulation directly links injection input to production output through these coefficients. For instance, Producer 1, which receives over 93% of its support from Injector 1, consistently shows higher oil production (ranging from 1000 to 4500 bbl) compared to Producer 2, which has significantly lower  <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math>​ values and correspondingly lower production (around 70 to 150 bbl). This relationship reinforces the physical interpretation of  <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math>​ as a measure of fluid communication and injection effectiveness.</p>

                    <p className="mb-4 text-justify">Beyond determining production magnitude, the structure of <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math>​ also has a notable impact on the accuracy of history matching. Wells that exhibit dominant connectivity from a small number of injectors (e.g., Producer 1 and 4) provide the model with clearer causal relationships, allowing the CRM to accurately reconstruct the production profile from injection trends. Conversely, in cases like Producer 2, where injection influence is weak and dispersed across several injectors, the model lacks strong signals to correlate injection with production. This diffuse and low connectivity leads to ambiguity in parameter estimation and reduced predictive performance, as seen in the higher MAPE during the testing period. Since the CRM is a linear, memory-based model, it performs best when injector–producer interactions are well defined and strong; under complex or ambiguous flow regimes, its explanatory power diminishes. Therefore, both the strength and the clarity of <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math>​ are essential not only for determining the scale of production, but also for achieving accurate and reliable history matching.</p>

                    <ArticleFigure src={img.figure_6} figureId="6" alt="Figure 6. Heatmap of interwell connectivity matrix fij​ inferred from the Capacitance-Resistance Model (CRM)" caption={<>Figure 6. Heatmap of interwell connectivity matrix <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>f</mi></mrow></mrow><mrow><mrow><mi>i</mi><mi>j</mi></mrow></mrow></msub></mrow></math>​ inferred from the Capacitance-Resistance Model (CRM)</>} />

                    <p className="mb-4 text-justify">After defining the features, we evaluated model performance and analyzed the impact of individual variables. Given the noisy dataset and time-series prediction task, lag and moving average (MA) features were expected to be critical. For Well P1, the model heavily relies on the P1_lag2 feature, indicating that the production rate at time t+2 is effectively predicted using data from time t. The model demonstrated strong performance, with a training MAE of 14.68, validation MAE of 32.94, and test MAE of 14.30. The R² scores were 0.995 for training and 0.997 for testing, reflecting excellent accuracy and generalization. The MAPE values were consistently low—0.84% for training, 1.90% for validation, and 0.55% for testing—confirming the effectiveness of lag-based features in accurately forecasting the production rate for Well P1.</p>

                    <ArticleFigure src={img.figure_7} figureId="7" alt="Figure 7. Random Forest results for Producer 1" caption={<><strong>Figure 7.</strong> Random Forest results for Producer 1</>} />

                    <p className="mb-4 text-justify">For Well P2, the model's performance is notably weaker compared to other wells. The training R² is high at 0.997, and the training MAE is low at 1.21, indicating a strong fit to the training data. However, the test R² plummets to 0.098, and the test MAE rises to 17.91, signaling poor generalization and significant overfitting. This suggests the model struggles to capture underlying patterns in unseen data, likely due to complex reservoir characteristics around Well P2 or insufficient data coverage. The validation and test MAPE values are 2.62% and 7.15%, respectively, further highlighting the model’s limited predictive capability for this well.</p>

                    <ArticleFigure src={img.figure_8} figureId="8" alt="Figure 8. Random Forest results for Producer 2" caption={<><strong>Figure 8. </strong>Random Forest results for Producer 2</>} />

                    <p className="mb-4 text-justify">For Well P3, the model shows good accuracy with a test MAE of 3.05 and a test R² of 0.969, capturing production rate fluctuations, especially with the lag2 feature. For Well P4, the model has a higher test MAE of 48.6, suggesting difficulties in prediction, likely due to complex reservoir conditions. Despite strong training results, the model struggles to generalize to the test data. All details can be found in Table 5.</p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600"><strong>Table 5.</strong> Summary of RF performance metrics for all wells.</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">

                        <thead>

                            <tr className="bg-gray-100">

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Well</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Train MAE</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Validation MAE</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Test MAE</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Train R2</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Test R2</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Train MAPE (%)</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Validation MAPE (%)</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Test MAPE (%)</strong></th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">P1</td>

                                <td className="border border-gray-200 px-4 py-3">14,67806</td>

                                <td className="border border-gray-200 px-4 py-3">32,94268</td>

                                <td className="border border-gray-200 px-4 py-3">14,30015</td>

                                <td className="border border-gray-200 px-4 py-3">0,994841</td>

                                <td className="border border-gray-200 px-4 py-3">0,996806</td>

                                <td className="border border-gray-200 px-4 py-3">0,844739</td>

                                <td className="border border-gray-200 px-4 py-3">1,903593</td>

                                <td className="border border-gray-200 px-4 py-3">0,551749</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">P2</td>

                                <td className="border border-gray-200 px-4 py-3">1,210244</td>

                                <td className="border border-gray-200 px-4 py-3">4,866666</td>

                                <td className="border border-gray-200 px-4 py-3">17,90945</td>

                                <td className="border border-gray-200 px-4 py-3">0,996979</td>

                                <td className="border border-gray-200 px-4 py-3">0,098218</td>

                                <td className="border border-gray-200 px-4 py-3">0,820787</td>

                                <td className="border border-gray-200 px-4 py-3">2,615892</td>

                                <td className="border border-gray-200 px-4 py-3">7,145663</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">P3</td>

                                <td className="border border-gray-200 px-4 py-3">2,095767</td>

                                <td className="border border-gray-200 px-4 py-3">3,951582</td>

                                <td className="border border-gray-200 px-4 py-3">3,052384</td>

                                <td className="border border-gray-200 px-4 py-3">0,994386</td>

                                <td className="border border-gray-200 px-4 py-3">0,96962</td>

                                <td className="border border-gray-200 px-4 py-3">0,56284</td>

                                <td className="border border-gray-200 px-4 py-3">1,051771</td>

                                <td className="border border-gray-200 px-4 py-3">0,884427</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">P4</td>

                                <td className="border border-gray-200 px-4 py-3">18,93651</td>

                                <td className="border border-gray-200 px-4 py-3">29,33839</td>

                                <td className="border border-gray-200 px-4 py-3">48,62612</td>

                                <td className="border border-gray-200 px-4 py-3">0,986269</td>

                                <td className="border border-gray-200 px-4 py-3">0,954795</td>

                                <td className="border border-gray-200 px-4 py-3">1,117991</td>

                                <td className="border border-gray-200 px-4 py-3">1,306292</td>

                                <td className="border border-gray-200 px-4 py-3">1,587267</td>

                            </tr>



                        </tbody></table></div>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">CONCLUSION</h2>

                    <p className="mb-4 text-justify">This study compared the physics-based Capacitance Resistance Model for Production (CRMP) and the data-driven Random Forest (RF) algorithm for reservoir production forecasting across four wells. CRMP effectively captured inter-well connectivity and response delays, demonstrating high accuracy in stable conditions (e.g., Test MAPE of 2.16% for P1 and 2.51% for P3). However, it struggled with nonlinearities in complex regions like P2 (11.88% Test MAPE).</p>

                    <p className="mb-4 text-justify">Conversely, RF leveraged historical trends and time-lagged features to deliver strong predictive accuracy across most wells (e.g., Test R² of 0.997 for P1 and 0.970 for P3). Yet, RF also faltered in P2 (Test R²: 0.098, Test MAPE: 7.15%) due to potential overfitting, and its strictly data-driven nature limits physical interpretability. Ultimately, while CRMP provides physical consistency and RF excels in pattern recognition, integrating CRMP-derived physical features into the RF framework offers a promising hybrid approach for a more robust, explainable forecasting tool.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">ACKNOWLEDGEMENT</h2>

                    <p className="mb-4 text-justify">The author sincerely acknowledges my colleagues – Masud Babayev – for his insightful comments, invaluable technical discussions, and engaging collaboration that helped completed the concepts presented in this work</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">REFERENCES</h2>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Olenchikov, D., &amp; Posvyanskii, D. (2019). Application of CRM-like models for express forecasting and optimizing field development. <em>Society of Petroleum Engineers - SPE Russian Petroleum Technology Conference 2019, RPTC 2019</em>. https://doi.org/10.2118/196893-MS</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Sayarpour, M. (2008). Development and Application of Capacitance-Resistive Models to Water / CO 2 Floods. <em>Dissertation</em>.</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Sayarpour, M., Kabir, C. S., &amp; Lake, L. W. (2009). Field applications of capacitance-resistive models in waterfloods. <em>SPE Reservoir Evaluation and Engineering</em>, <em>12</em>(6). https://doi.org/10.2118/114983-pa</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Weber, D., Edgar, T. F., Lake, L. W., Lasdon, L., Kawas, S., &amp; Sayarpour, M. (2009). Improvements in capacitance-resistive modeling and optimization of large scale reservoirs. <em>SPE Western Regional Meeting 2009 - Proceedings</em>. https://doi.org/10.2118/121299-ms</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Yousef, A. A., Gentil, P., Jensen, J. L., &amp; Lake, L. W. (2006). A capacitance model to infer interwell connectivity from production- and injection-rate fluctuations. <em>SPE Reservoir Evaluation and Engineering</em>, <em>9</em>(6). https://doi.org/10.2118/95322-PA</p>
                </div>

                <footer className="mt-16 pt-8 border-t border-gray-200">

                    {/* <!-- Next/Prev Article Navigation --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                        <Link to="/we-do/5" className="group block p-6 border border-gray-200 rounded-lg hover:border-etars-teal transition-colors">
                            <span className="block text-sm text-gray-500 mb-1">&larr; Previous Article</span>
                            <span className="block font-semibold text-dark group-hover:text-etars-teal transition-colors line-clamp-2">Application of a Language Model-Based Forecasting Framework (Chronos) for Probabilistic Oil Production Forecasting: A Comparison with DCA, ARIMA, and LSTM</span>
                        </Link>
                        <Link to="/we-do/7" className="group block p-6 border border-gray-200 rounded-lg hover:border-etars-teal transition-colors text-right">
                            <span className="block text-sm text-gray-500 mb-1">Next Article &rarr;</span>
                            <span className="block font-semibold text-dark transition-colors line-clamp-1">Layered Reservoir With No Crossflow, Constant-Rate IBC, and Constant-Rate OBC</span>
                        </Link>
                    </div>
                </footer>
            </article>
        </main>
    )
}

export default Journal_6_Page

