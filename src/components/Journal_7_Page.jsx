import React from 'react';
import authorImage1 from '/img/userA.jpeg';
import authorImage2 from '/img/user1.jpeg';
import { Link } from 'react-router-dom';
import ArticleFigure from './ArticleFigure';
import figures from '../data-figure';

function Journal_7_Page({ publicationsHref = '/we-do/', pdfUrl = '', onShare = null }) {
    const img = figures.journal_7;

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
                                <linearGradient id="journal7-line-grad-1" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#40C2BA" stopOpacity="0" />
                                    <stop offset="15%" stopColor="#40C2BA" stopOpacity="1" />
                                    <stop offset="85%" stopColor="#40C2BA" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#40C2BA" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="journal7-line-grad-2" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#87D544" stopOpacity="0" />
                                    <stop offset="25%" stopColor="#87D544" stopOpacity="0.8" />
                                    <stop offset="75%" stopColor="#87D544" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#87D544" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Smooth elegant curves */}
                            <path d="M0,120 C250,120 400,30 650,80 C800,110 900,90 1000,90" stroke="url(#journal7-line-grad-1)" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M0,135 C270,135 420,45 670,95 C820,125 910,105 1000,105" stroke="url(#journal7-line-grad-2)" strokeWidth="1.5" strokeDasharray="6 8" strokeLinecap="round" />

                            {/* Subtle data node accent */}
                            <circle cx="650" cy="80" r="4.5" fill="#40C2BA" />
                            <circle cx="650" cy="80" r="14" fill="#40C2BA" opacity="0.1" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-6 font-outfit">
                        LAYERED RESERVOIR WITH NO CROSSFLOW, CONSTANT-RATE IBC, AND CONSTANT-RATE OBC
                    </h1>

                    {/* Author Info */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-etars-teal flex items-center justify-center overflow-hidden  shadow-sm">
                                    <img className="w-full h-full object-cover" src={authorImage2} alt="Muhammad Habiburrahman" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-gray-900">Muhammad Habiburrahman</p>
                                </div>
                            </div>
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
                        <p className="text-sm text-gray-500">Published in 2023</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4 font-sans">
                        <span className="text-sm font-semibold text-gray-500 mr-2 py-1">Tags:</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Pressure Transient Analysis</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Layered Reservoir</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Laplace Transform</span>
                    </div>
                </header>

                <div className="article-content font-serif text-gray-800 text-lg leading-relaxed">
                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">SUMMARY</h2>

                    <p className="mb-4 text-justify">  This study derives an analytical pressure-transient model for a two-layer reservoir with no crossflow, produced by a fully penetrating vertical well under constant-rate inner and outer boundary conditions, including wellbore storage and skin effects. The radial diffusivity equation was converted to dimensionless form and solved in the Laplace domain, which gives a general solution in modified Bessel functions. The solution was then inverted to the time domain with Stehfest’s algorithm in Python. The resulting semi-log and log-log plots show the expected behavior: wellbore storage delays the onset of radial flow, skin lowers the flowing pressure, and the constant-rate outer boundary makes the pressure rise at late time. The sensitivity study confirms these trends for the wellbore storage coefficient, altered permeability, and external rate. The derived model and its code therefore produce physically consistent pressure responses that agree with established reservoir engineering principles.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">INTRODUCTION</h2>

                    <p className="mb-4 text-justify">  Fluid flow in porous media is a complex phenomenon that is crucial in various scientific and technological fields, including hydrology, soil physics, petroleum technology, chemical engineering, and oil and gas production (Kundu et al., 2016). This complexity arises from the interactions between the fluid and the particles in the medium, as well as between the fluid, the particles, and the walls of the containing structure (Grattoni &amp; Dawe, 1995). </p>

                    <p className="mb-4 text-justify">  The diffusivity equation is a key tool in reservoir engineering for forecasting the pressure distribution within a reservoir, assuming constant temperature (Azin et al., 2017). It is built on the foundations of fluid flow modeling in porous media: constitutive equations, such as Darcy’s Law, which relate fluxes to their driving forces, and conservation laws, particularly the continuity equation for mass conservation. Together, these produce partial differential equations that describe how density, velocity, and pressure vary over space and time. The diffusivity equation links pressure changes to flow rates, which makes it fundamental for predicting reservoir performance and for analyzing production data to characterize reservoirs and wells. Various numerical and analytical methods have been developed to solve it, including solutions in its dimensionless form (King et al., 2016).</p>

                    <p className="mb-4 text-justify">  This study aims to examine a specific solution of the diffusivity equation for a layered reservoir without crossflow, featuring Constant-Rate Inner Boundary Conditions (IBC) and Constant-Rate Outer Boundary Conditions (OBC). It will also address IBC with skin and wellbore storage effects. The derivation process for these boundary conditions will be carried out separately.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">METHODOLOGY</h2>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Radial Diffusivity Equation</h3>

                    <p className="mb-4 text-justify"> The equations used to characterize fluid flow within a reservoir can vary significantly based on a range of factors, such as the nature of the flow and the characteristics of the fluids involved. By integrating the mass conservation equation with the transport equation (known as Darcy's Law) and various state equations, it's possible to formulate the required equations to accurately describe the flow dynamics in a reservoir (Ahmed, 2006). By writing mass balance for a definite element of porous medium, the continuity equation is determined (Ahmed, 2006):</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>r</mi></mrow></mrow></mfrac><mfrac><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mo>∂</mo><mi>r</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">[</mo><mrow><mrow><mi>r</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>v</mi><mi>ρ</mi></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">]</mo></mrow><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mo>∂</mo><mi>t</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>ϕ</mi><mi>ρ</mi></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(1)</span></div>

                    <p className="mb-4 text-justify"> The continuity equation above represents the principle of mass conservation in fluid dynamics. Here, <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>v</mi></mrow></mrow></math> is the fluid velocity, <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>ρ</mi></mrow></mrow></math> is the fluid density, and <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>ϕ</mi></mrow></mrow></math> is the porosity of the medium. The equation links the radial divergence of mass flow to the time rate of change of mass within the porous medium. Liquid velocity (<em>v</em>) is calculated using Darcy's Law, which correlates fluid velocity with the pressure gradient. In this law, k represents the medium's permeability, μ is the fluid's dynamic viscosity, and <em>∂p/∂r</em> denotes the radial pressure gradient. Darcy's Law is a fundamental principle for describing fluid flow through porous media.</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>v</mi></mrow><mrow><mo>=</mo><mn>0</mn><mo>.</mo><mn>0</mn><mn>0</mn><mn>0</mn><mn>2</mn><mn>6</mn><mn>3</mn><mn>7</mn></mrow><mfrac><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>μ</mi></mrow></mrow></mfrac><mfrac><mrow><mrow><mo>∂</mo><mi>p</mi></mrow></mrow><mrow><mrow><mo>∂</mo><mi>r</mi></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(2)</span></div>

                    <p className="mb-4 text-justify">By substituting Darcy’s Law (Eq. 2) in the continuity equation (Eq. 1), derived an equation that links pressure distribution to fluid and porous medium properties (Eq. 3)</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>r</mi></mrow></mrow></mfrac><mfrac><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mo>∂</mo><mi>r</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">[</mo><mrow><mrow><mi>r</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mn>0</mn><mo>.</mo><mn>0</mn><mn>0</mn><mn>0</mn><mn>2</mn><mn>6</mn><mn>3</mn><mn>7</mn></mrow><mfrac><mrow><mrow><mi>k</mi><mi>ρ</mi></mrow></mrow><mrow><mrow><mi>μ</mi></mrow></mrow></mfrac><mfrac><mrow><mrow><mo>∂</mo><mi>p</mi></mrow></mrow><mrow><mrow><mo>∂</mo><mi>r</mi></mrow></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">]</mo></mrow><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mo>∂</mo><mi>t</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>ϕ</mi><mi>ρ</mi></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(3)</span></div>

                    <p className="mb-4 text-justify">For constant viscosity, porosity, and permeability the diffusivity equation for slightly compressible fluids is defined as:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>r</mi></mrow></mrow></mfrac><mfrac><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mo>∂</mo><mi>r</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>r</mi></mrow><mfrac><mrow><mrow><mo>∂</mo><mi>p</mi></mrow></mrow><mrow><mrow><mo>∂</mo><mi>r</mi></mrow></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>η</mi></mrow></mrow></mfrac><mfrac><mrow><mrow><mo>∂</mo><mi>p</mi></mrow></mrow><mrow><mrow><mo>∂</mo><mi>t</mi></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(4)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>η</mi><mo>=</mo></mrow><mfrac><mrow><mrow><mn>0</mn><mo>.</mo><mn>0</mn><mn>0</mn><mn>0</mn><mn>2</mn><mn>6</mn><mn>3</mn><mn>7</mn><mi>k</mi></mrow></mrow><mrow><mrow><mi>ϕ</mi><mi>μ</mi></mrow><msub><mrow><mrow><mi>c</mi></mrow></mrow><mrow><mrow><mi>t</mi></mrow></mrow></msub></mrow></mfrac><mrow><mspace width="0.2em" /></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(5)</span></div>

                    <p className="mb-4 text-justify"> The equation above is applicable to slightly compressible fluids. It relates pressure changes over space and time, considering fluid compressibility. It is needed to emphasize that during the derivation of the diffusivity equation above, several assumptions are applied into the procedure. Those assumptions are:</p>

                    <ul className="list-disc pl-6 mb-6 space-y-3">

                        <li className="text-justify">Homogeneous and isotropic porous medium</li>

                        <li className="text-justify">Uniform thickness</li>

                        <li className="text-justify">Single phase flow</li>

                        <li className="text-justify">Laminar flow</li>

                        <li className="text-justify">Rock and fluid properties independent of pressure</li>

                    </ul>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Reservoir Model</h3>

                    <p className="mb-4 text-justify"> In this work, the derivation of the mathematical model is grounded on a schematic representation of a radially layered reservoir (as shown in <strong></strong><strong></strong><strong></strong><strong></strong><strong>Figure </strong><strong>1</strong><strong></strong>). The model includes a vertical well that fully penetrates two separate reservoir layers, which are divided by an impermeable barrier to prevent crossflow. The development of the pressure transient analysis method for this layered reservoir model is based on the following assumptions.</p>

                    <ArticleFigure src={img.figure_1} number={1} caption="Figure 1. Schematic two-layered reservoir without crossflow" />

                    <p className="mb-4 text-justify">  Each layer in the reservoir is horizontally layered and cylindrical, featuring closed ends at the top, bottom, and around the drainage radius. Composed of homogeneous and isotropic porous media, these layers are uniformly thick, porous, and permeable, each containing a fluid with distinct compressibility. Both layers share the same initial reservoir pressure, and the pressure at the sand face is consistent across all layers. Gravity's effects are considered negligible in each layer, and they all share the same drainage radius. The reservoir and radial flow geometry operate under a pseudo steady-state flow regime with a constant skin factor. Both layers are perforated, but there is no crossflow between them.</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Layered Reservoir Radial Diffusivity Equation</h3>

                    <p className="mb-4 text-justify"> Lefkovits et al., 1961 offered a comprehensive derivation in the context of layered reservoirs without crossflow. For each layer of the reservoir, a fundamental radial diffusivity equation is derived. The permeability ratio (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></math>) and storability (<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></math>), also studied by (Shi et al., 2020), are considered to understand the characteristics of the layered reservoir. The radial diffusivity equation is presented as follows:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>r</mi></mrow></mrow></mfrac><mfrac><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mo>∂</mo><mi>r</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>r</mi></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mi>r</mi></mrow></mrow></msub></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>η</mi></mrow></mrow><mrow><mrow><mi>t</mi></mrow></mrow></msub></mrow></mfrac><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo><mi>t</mi></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(6)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>η</mi></mrow></mrow><mrow><mrow><mi>t</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mrow><munderover><mo>∑</mo><mrow></mrow><mrow></mrow></munderover><mrow><mfrac><mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>ϕ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mi>μ</mi></mrow><msub><mrow><mrow><mi>c</mi></mrow></mrow><mrow><mrow><mi>t</mi></mrow></mrow></msub></mrow></mfrac></mrow></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(7)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>ϕ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><munderover><mo>∑</mo><mrow></mrow><mrow></mrow></munderover><mrow><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>ϕ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(8)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><munderover><mo>∑</mo><mrow></mrow><mrow></mrow></munderover><mrow><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(9)</span></div>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Dimensionless Diffusivity Equation Formulation</h4>

                    <p className="mb-4 text-justify">First, recall the definition of the dimensionless parameter in its general form to derive the dimensionless version of the diffusivity equation.</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo><mspace width="0.2em" /></mrow><mfrac><mrow><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>q</mi><mi>B</mi><mi>μ</mi></mrow></mrow></mfrac><mrow><munderover><mo>∑</mo><mrow></mrow><mrow></mrow></munderover><mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mrow><mrow><mo>=</mo><mi>α</mi><mspace width="0.2em" /></mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(10)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo><mo>∑</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mi>t</mi></mrow></mrow><mrow><msub><mrow><mrow><mi>ϕ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mi>μ</mi></mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mi>t</mi></mrow></mrow></msub><mrow><mo>⋅</mo></mrow><msubsup><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msubsup></mrow></mfrac><mrow><mo>=</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>η</mi></mrow></mrow><mrow><mrow><mi>t</mi></mrow></mrow></msub><mrow><mi>t</mi></mrow></mrow><mrow><msubsup><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msubsup></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(11)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtable columnalign="left"><mtr><mtd><mrow><mrow><mo>&amp;</mo></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>&amp;</mo></mrow></mrow></mtd></mtr></mtable><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mn>2</mn><mi>π</mi></mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mi>t</mi></mrow></mrow></msub><mrow><mo>⋅</mo></mrow><msubsup><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msubsup><mrow><mo>∑</mo></mrow><msub><mrow><mrow><mi>φ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(12)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mi>r</mi></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow></msub></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(13)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow></msub></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(14)</span></div>

                    <p className="mb-4 text-justify">Finally, we will get the diffusivity equation in dimensionless form as:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msubsup><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msubsup></mrow><mrow><mrow><mo>∂</mo></mrow><msubsup><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msubsup></mrow></mfrac><mrow><mo>+</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>⋅</mo></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>=</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>⋅</mo></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(15)</span></div>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Dimensionless Boundary Condition Formulation</h3>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Constant Rate IBC and OBC</h4>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Boundary Conditions</h4>

                    <p className="mb-4 text-justify">In the constant rate condition, the dimensional initial, inner, and outer boundary conditions of the reservoir are defined as</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtext>IC:</mtext><mspace width="1em" /><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo>)</mo><mo>=</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(16)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtext>IBC:</mtext><mspace width="1em" /><mrow><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>r</mi></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><mrow><mi>r</mi></mrow></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>r</mi><mo>=</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow></msub></mrow></msub><mrow><mo>=</mo><mo>-</mo></mrow><mfrac><mrow><msup><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>e</mi><mi>l</mi><mi>l</mi><mspace width="0.2em" /></mrow></mrow></msup><mrow><mi>μ</mi></mrow></mrow><mrow><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mi>Σ</mi></mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(17)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtext>OBC:</mtext><mspace width="1em" /><mrow><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>r</mi></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo><mi>r</mi></mrow></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>r</mi></mrow><mrow><mo>=</mo></mrow><mrow><mi>r</mi><mi>e</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><msup><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>x</mi><mi>t</mi></mrow></mrow></msup><mrow><mi>μ</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow><mrow><mi>π</mi></mrow><mrow><mi>Σ</mi></mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(18)</span></div>

                    <p className="mb-4 text-justify">Hence, the dimensionless pressure at initial conditions can be expressed by:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>,</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>0</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mspace width="0.2em" /><mi>α</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mo>(</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo>)</mo></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mn>0</mn></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(19)</span></div>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Dimensionless IBC Formulation</h4>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>1</mn></mrow></mrow></msub><mrow><mo>=</mo><mo>-</mo></mrow><mfrac><mrow><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mi>Σ</mi></mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msup><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>e</mi><mi>l</mi><mi>l</mi><mspace width="0.2em" /></mrow></mrow></msup><mrow><mi>μ</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">(</mo><mrow><mrow><mo>-</mo></mrow><mfrac><mrow><msup><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>e</mi><mi>l</mi><mi>l</mi><mspace width="0.2em" /></mrow></mrow></msup><mrow><mi>μ</mi></mrow></mrow><mrow><mrow><mn>2</mn><mi>π</mi><mi>k</mi><mi>h</mi></mrow></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mn>1</mn></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(20)</span></div>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Dimensionless OBC Formulation</h4>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mi>Σ</mi></mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msup><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>e</mi><mi>l</mi><mi>l</mi><mspace width="0.2em" /></mrow></mrow></msup><mrow><mi>μ</mi></mrow></mrow></mfrac><msub><mrow><mfrac><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo stretchy="true">[</mo><mrow><mrow><mi>r</mi></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo><mi>r</mi></mrow></mrow></mfrac></mrow><mo stretchy="true">]</mo></mrow></mrow><mrow><mrow><mi>r</mi><mo>=</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi></mrow></mrow></msub></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mi>Σ</mi></mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msup><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>e</mi><mi>l</mi><mi>l</mi><mspace width="0.2em" /></mrow></mrow></msup><mrow><mi>μ</mi></mrow></mrow></mfrac><mfrac><mrow><mrow><mo>-</mo></mrow><msup><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>x</mi><mi>t</mi></mrow></mrow></msup><mrow><mi>μ</mi></mrow></mrow><mrow><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mi>Σ</mi></mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>=</mo><mo>-</mo></mrow><mfrac><mrow><msup><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>x</mi><mi>t</mi></mrow></mrow></msup><mrow><mspace width="0.2em" /></mrow></mrow><mrow><msup><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow></mrow></msup></mrow></mfrac><mrow><mo>=</mo></mrow><msub><mrow><mrow><mo>-</mo><mi>q</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(21)</span></div>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Wellbore Storage and Skin Effect</h3>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Boundary Conditions</h4>

                    <p className="mb-4 text-justify">In the skin and wellbore storage condition, the dimensional initial, inner, and outer boundary conditions of the reservoir are defined as</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtext>IC:</mtext><mspace width="1em" /><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo>)</mo><mo>=</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(22)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtext>IBC: (with skin)</mtext><mspace width="1em" /><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow></msub><mrow><mo>,</mo><mi>t</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow></msub><mrow><mo>,</mo><mi>t</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>s</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>r</mi></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><mrow><mi>r</mi></mrow></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>r</mi><mo>=</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow></msub></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(23)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtext>(with WBS)</mtext><mspace width="1em" /><mrow><mrow><mi>q</mi><mo>=</mo></mrow><mfrac><mrow><mrow><mo>-</mo><mi>C</mi></mrow></mrow><mrow><mrow><mi>B</mi><mi>μ</mi></mrow></mrow></mfrac><mrow><mo>⋅</mo></mrow><mfrac><mrow><mrow><mi>d</mi></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>f</mi></mrow></mrow></msub></mrow><mrow><mrow><mi>d</mi><mi>t</mi></mrow></mrow></mfrac><mrow><mo>+</mo></mrow><mrow><munderover><mo>∑</mo><mrow><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow></mrow><mrow><mrow><mi>n</mi></mrow></mrow></munderover><mrow><mrow><mspace width="0.2em" /></mrow></mrow></mrow><mfrac><mrow><mrow><mn>2</mn><mi>π</mi></mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>h</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><mi>B</mi><mi>μ</mi></mrow></mrow></mfrac><mrow><mo>⋅</mo></mrow><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>r</mi></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><mrow><mi>r</mi></mrow></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>r</mi><mo>=</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow></msub></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(24)</span></div>

                    <p className="mb-4 text-justify">The skin itself is defined as</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>s</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>k</mi></mrow></mrow><mrow><mrow><mi>a</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>-</mo><mn>1</mn></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mi>l</mi><mi>n</mi></mrow><mrow><mo>⁡</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>a</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>w</mi></mrow></mrow></msub></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(25)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mtext>OBC:</mtext><mspace width="1em" /><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>r</mi><mo>→</mo><mo>∞</mo><mo>,</mo><mspace width="0.2em" /><mi>t</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(26)</span></div>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Dimensionless IBC I – with Skin Formulation</h4>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>+</mo></mrow><msub><mrow><mrow><mi>s</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>⋅</mo></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>1</mn></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(27)</span></div>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Dimensionless IBC II – with WBS Formulation</h4>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mn>1</mn><mo>=</mo></mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>⋅</mo></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>w</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>-</mo></mrow><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>⋅</mo></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>1</mn></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(28)</span></div>

                    <h4 className="font-sans font-bold text-lg text-etars-dark mt-6 mb-3">Dimensionless OBC Formulation</h4>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>→</mo></mrow><mrow><mo>∞</mo><mo>,</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mn>0</mn></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(29)</span></div>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Solution for the Diffusivity Equation</h3>

                    <p className="mb-4 text-justify"> The subsequent step involves transforming the diffusivity equation, currently in the form of a partial differential equation, along with its respective boundary conditions, from the real-time domain to the Laplace domain. This is achieved by employing the definitions of dimensionless variables, as will be detailed below. The process entails converting the equation into the Laplace domain using the properties of Laplace transformation, as demonstrated in the following section. This method effectively removes the time domain, thereby converting the partial differential equation into an ordinary differential equation.</p>

                    <p className="mb-4 text-justify">Recall the radial diffusivity equation for layered reservoirs.</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msubsup><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msubsup></mrow><mrow><mrow><mo>∂</mo></mrow><msubsup><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msubsup></mrow></mfrac><mrow><mo>+</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>⋅</mo></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>=</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><mrow><mo>⋅</mo></mrow><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>t</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(30)</span></div>

                    <p className="mb-4 text-justify">Apply Laplace transformation for both side results in</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msup><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow><mrow><mrow><mo>∂</mo></mrow><msup><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msup></mrow></mfrac><mover accent="true"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>J</mi><mi>D</mi></mrow></mrow></msub></mrow><mo>̂</mo></mover><mrow><mo>+</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac><mfrac><mrow><mrow><mo>∂</mo></mrow></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac><mover accent="true"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>J</mi><mi>D</mi></mrow></mrow></msub></mrow><mo>̂</mo></mover><mrow><mo>-</mo><mi>z</mi></mrow><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac><mover accent="true"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mo>̂</mo></mover><mrow><mo>=</mo><mn>0</mn><mspace width="0.2em" /></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(31)</span></div>

                    <p className="mb-4 text-justify">The formula above resembles the modified Bessel function. Therefore, the general solution for the equation is as follows.</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mo>̂</mo></mover><mrow><mo>(</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>,</mo><mi>z</mi><mo>)</mo><mo>=</mo></mrow><msub><mrow><mrow><mi>A</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><msqrt><mrow><mrow><mi>z</mi></mrow><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><msub><mrow><mrow><mi>B</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><msqrt><mrow><mrow><mi>z</mi></mrow><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(32)</span></div>

                    <p className="mb-4 text-justify"> Using Equation 32, the next step is to apply the boundary conditions for constant rate Inner Boundary Conditions (IBC) and Outer Boundary Conditions (OBC). Subsequently, the process starts anew from Equation 32 to incorporate wellbore storage and skin effects into the inner boundary conditions.</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Solution for Constant Rate IBC and OBC</h3>

                    <p className="mb-4 text-justify">Recall the general solution for the diffusivity equation:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mo>̂</mo></mover><mrow><mo>(</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>,</mo><mi>z</mi><mo>)</mo><mo>=</mo></mrow><msub><mrow><mrow><mi>A</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><msqrt><mrow><mrow><mi>z</mi></mrow><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><msub><mrow><mrow><mi>B</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><msqrt><mrow><mrow><mi>z</mi></mrow><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div></div>

                    <p className="mb-4 text-justify">Ultimately, the resulting values of <em>A</em><sub><em>j</em></sub> and <em>B</em><sub><em>j</em></sub> are as follows:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>A</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>=</mo><mo>-</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><mrow><mo stretchy="true">[</mo><mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">]</mo></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(33)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>B</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><mrow><mo>=</mo><mo>-</mo></mrow><mfrac><mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><mrow><mo stretchy="true">[</mo><mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">]</mo></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(34)</span></div>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Solution for Wellbore Storage and Skin</h3>

                    <p className="mb-4 text-justify">Recall the general solution for the diffusivity equation:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mo>̂</mo></mover><mrow><mo>(</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>,</mo><mi>z</mi><mo>)</mo><mo>=</mo></mrow><msub><mrow><mrow><mi>A</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><msqrt><mrow><mrow><mi>z</mi></mrow><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><msub><mrow><mrow><mi>B</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><msqrt><mrow><mrow><mi>z</mi></mrow><mfrac><mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div></div>

                    <p className="mb-4 text-justify">Then, applying Laplace for OBC</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo><mo>∞</mo><mo>,</mo><mi>z</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mi>A</mi></mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mrow><mo>∞</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo><mi>B</mi></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mrow><mo>∞</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mn>0</mn></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(35)</span></div>

                    <p className="mb-4 text-justify">To arrest the Io from tending to infinity, A must be zero. Then</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>B</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(36)</span></div>

                    <p className="mb-4 text-justify">Applying Laplace for IBC with wellbore storage</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mi>z</mi></mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>w</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>-</mo></mrow><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>1</mn></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>z</mi></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(37)</span></div>

                    <p className="mb-4 text-justify">Applying Laplace for IBC with skin</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>w</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>s</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub><msub><mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mfrac><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>j</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><mrow><mo>∂</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo><mn>1</mn></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(38)</span></div>

                    <p className="mb-4 text-justify">Solve for <em>B</em><sub><em>j</em></sub>:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>B</mi><mo>=</mo></mrow><mfrac><mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>w</mi><mi>D</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo><mi>s</mi></mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mspace width="0.2em" /><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(39)</span></div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>w</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>z</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">[</mo><mrow><mfrac><mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><mrow><mi>s</mi></mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><mrow><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mi>s</mi><mi>z</mi></mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><mrow><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow><mo stretchy="true">]</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(40)</span></div>

                    <p className="mb-4 text-justify">The equation above is the <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>w</mi><mi>D</mi></mrow></mrow></msub></mrow></math> solution for vertical well with wellbore storage and skin.</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Total Solution</h3>

                    <p className="mb-4 text-justify">  After solving for all the boundary conditions, both equations now needed to be summed up and the following is the total solution for the given case.</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mover accent="true"><mrow><mrow><mi>p</mi></mrow></mrow><mo>̂</mo></mover></mrow><mrow><mrow><mi>w</mi><mi>D</mi></mrow></mrow></msub><mrow><mo>=</mo></mrow><mfrac><mrow><mrow><mn>1</mn></mrow></mrow><mrow><mrow><mi>z</mi></mrow></mrow></mfrac><mrow><mo stretchy="true">[</mo><mrow><mfrac><mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><mrow><mi>s</mi></mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><mrow><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><msub><mrow><mrow><mi>C</mi></mrow></mrow><mrow><mrow><mi>D</mi></mrow></mrow></msub><mrow><mi>s</mi><mi>z</mi></mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><mrow><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow><mo stretchy="true">]</mo></mrow><mrow><mo>+</mo></mrow><mrow><mo stretchy="true">[</mo><mrow><mfrac><mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><mrow><mi>z</mi></mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><mrow><mo stretchy="true">[</mo><mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">]</mo></mrow></mrow></mfrac><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>+</mo></mrow><mfrac><mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>q</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub><mrow><mi>z</mi></mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><mrow><mo stretchy="true">[</mo><mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>-</mo></mrow><msub><mrow><mrow><mi>I</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt><msub><mrow><mrow><mi>r</mi></mrow></mrow><mrow><mrow><mi>e</mi><mi>D</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">]</mo></mrow></mrow></mfrac><msub><mrow><mrow><mi>K</mi></mrow></mrow><mrow><mrow><mn>0</mn></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mfrac><mrow><mrow><mi>z</mi></mrow><msub><mrow><mrow><mi>ω</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow><mrow><msub><mrow><mrow><mi>χ</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></mfrac></mrow></msqrt></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">]</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(41)</span></div>

                    <p className="mb-4 text-justify">  The total solution to Equation above must be transformed back into the time domain using the Laplace inverse method. It is important to note that the transformed equation remains in dimensionless form for both time and pressure. To determine the flowing wellbore pressure (<em>P</em><sub><em>wf</em></sub>), it must be recalculated using its dimensionless definition. For this purpose, several algorithms are available in the Python 'mpmath' library, including those developed by Stehfest (1970), Talbot (1979), de Hoog et al. (1982), and Cohen (2007). This study employs Stehfest's algorithm to perform the Laplace inversion from the Laplace domain to the time domain.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">RESULT &amp; DISCUSSION</h2>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Pressure Profile</h3>

                    <p className="mb-4 text-justify"> To generate the pressure profile, it is essential to define various reservoir and well parameters, enabling the algorithm to compute the resulting inverted equation. These parameters are determined based on a general understanding of reservoir and well characteristics. The parameters are detailed in <strong></strong><strong></strong><strong></strong><strong></strong><strong>Table </strong><strong>1</strong><strong></strong>.</p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 1. Well and reservoir properties used in this study</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">

                        <thead>

                            <tr className="bg-gray-100">

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Parameter</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Symbol</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Value</strong></th>

                                <th scope="col" className="border border-gray-200 px-4 py-3"><strong>Unit</strong></th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Permeability Layer 1</td>

                                <td className="border border-gray-200 px-4 py-3"><em>k_1</em></td>

                                <td className="border border-gray-200 px-4 py-3">500</td>

                                <td className="border border-gray-200 px-4 py-3">mD</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Permeability Layer 2</td>

                                <td className="border border-gray-200 px-4 py-3"><em>k_2</em></td>

                                <td className="border border-gray-200 px-4 py-3">800</td>

                                <td className="border border-gray-200 px-4 py-3">mD</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Porosity Layer 1</td>

                                <td className="border border-gray-200 px-4 py-3"><em>phi_1</em></td>

                                <td className="border border-gray-200 px-4 py-3">0.15</td>

                                <td className="border border-gray-200 px-4 py-3">-</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Porosity Layer 2</td>

                                <td className="border border-gray-200 px-4 py-3"><em>phi_2</em></td>

                                <td className="border border-gray-200 px-4 py-3">0.25</td>

                                <td className="border border-gray-200 px-4 py-3">-</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Thickness Layer 1</td>

                                <td className="border border-gray-200 px-4 py-3"><em>h_1</em></td>

                                <td className="border border-gray-200 px-4 py-3">10</td>

                                <td className="border border-gray-200 px-4 py-3">ft</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Thickness Layer 2</td>

                                <td className="border border-gray-200 px-4 py-3"><em>h_2</em></td>

                                <td className="border border-gray-200 px-4 py-3">25</td>

                                <td className="border border-gray-200 px-4 py-3">ft</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Total Compressibility</td>

                                <td className="border border-gray-200 px-4 py-3"><em>c_t</em></td>

                                <td className="border border-gray-200 px-4 py-3">0.00001</td>

                                <td className="border border-gray-200 px-4 py-3">1/psi</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Formation Volume Factor</td>

                                <td className="border border-gray-200 px-4 py-3"><em>B</em></td>

                                <td className="border border-gray-200 px-4 py-3">1.25</td>

                                <td className="border border-gray-200 px-4 py-3">res-bbl/STB</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Production Rate</td>

                                <td className="border border-gray-200 px-4 py-3"><em>q</em></td>

                                <td className="border border-gray-200 px-4 py-3">250</td>

                                <td className="border border-gray-200 px-4 py-3">STB/day</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Viscosity</td>

                                <td className="border border-gray-200 px-4 py-3"><em>mu</em></td>

                                <td className="border border-gray-200 px-4 py-3">10</td>

                                <td className="border border-gray-200 px-4 py-3">cP</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Initial Reservoir Pressure</td>

                                <td className="border border-gray-200 px-4 py-3"><em>p_i</em></td>

                                <td className="border border-gray-200 px-4 py-3">3000</td>

                                <td className="border border-gray-200 px-4 py-3">psi</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Radius of Investigation</td>

                                <td className="border border-gray-200 px-4 py-3"><em>r_e</em></td>

                                <td className="border border-gray-200 px-4 py-3">1000</td>

                                <td className="border border-gray-200 px-4 py-3">ft</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Wellbore Storage Coefficient</td>

                                <td className="border border-gray-200 px-4 py-3"><em>C</em></td>

                                <td className="border border-gray-200 px-4 py-3">0.0115</td>

                                <td className="border border-gray-200 px-4 py-3">res-bbl/psi</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Wellbore Radius</td>

                                <td className="border border-gray-200 px-4 py-3"><em>r_w</em></td>

                                <td className="border border-gray-200 px-4 py-3">0.33</td>

                                <td className="border border-gray-200 px-4 py-3">ft</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Altered Wellbore Radius</td>

                                <td className="border border-gray-200 px-4 py-3"><em>r_a</em></td>

                                <td className="border border-gray-200 px-4 py-3">2</td>

                                <td className="border border-gray-200 px-4 py-3">ft</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Altered Permeability</td>

                                <td className="border border-gray-200 px-4 py-3"><em>k_a</em></td>

                                <td className="border border-gray-200 px-4 py-3">100</td>

                                <td className="border border-gray-200 px-4 py-3">mD</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">External Rate</td>

                                <td className="border border-gray-200 px-4 py-3"><em>q_e</em></td>

                                <td className="border border-gray-200 px-4 py-3">250</td>

                                <td className="border border-gray-200 px-4 py-3">STB/day</td>

                            </tr>



                        </tbody></table></div>

                    <ArticleFigure src={img.figure_2} number={2} caption="Figure 2. Semi-log plot for pressure response of the derived mathematical model" />

                    <p className="mb-4 text-justify">  <strong></strong><strong></strong><strong></strong><strong></strong><strong>Figure </strong><strong>2</strong><strong></strong> demonstrates that the onset of radial flow, typically identified by the straight-line segment in the semi-log plot, is delayed due to the wellbore storage effect. Concurrently, the skin effect obscures the early time region and lowers the intercept of the radial flow's straight line below the initial reservoir pressure. These phenomena are frequently observed in cases involving wellbore storage and skin effects. Regarding the constant rate boundary conditions, they become distinctly apparent in the later stages of the pressure profile, in which, instead of decreasing, the pressure increases. This phenomenon is commonly observed in scenarios where there is a constant rate factor at the outer boundary, such as the presence of an aquifer or proximity to an injection well.</p>

                    <ArticleFigure src={img.figure_3} number={3} caption="Figure 3. Log-log plot for pressure derivative response of the derived mathematical model" />

                    <p className="mb-4 text-justify"> As an additional interpretation, the derivative diagnostic log-log plot of the pressure profile is presented in <strong></strong><strong></strong><strong></strong><strong></strong><strong>Figure </strong><strong>3</strong><strong></strong>. Although the early time typically indicates wellbore storage, characterized by a unit slope, this feature is not distinctly visible in the derivative curve. However, <strong></strong><strong></strong><strong></strong><strong></strong><strong>Figure </strong><strong>2</strong><strong></strong> confirms the presence of wellbore storage effects. This discrepancy arises because the mathematical model incorporates a constant rate inner boundary condition. Consequently, the typical wellbore storage signature, usually marked by a unit slope due to an initially zero sand-face rate that gradually increases over time, is not evident in this case. The model's inclusion of a constant rate inner boundary condition from the outset alters the expected features in <strong></strong><strong></strong><strong></strong><strong></strong><strong>Figure </strong><strong>3</strong><strong></strong>. </p>

                    <p className="mb-4 text-justify"> In the later stages, as the pressure rises due to the constant rate boundary condition, the derivative plot shows a decline. This trend is typical when pressure increases lead to diminishing pressure differences over time, eventually reaching very low levels. Such a phenomenon is also commonly observed when the outer boundary condition is constant pressure.</p>

                    <p className="mb-4 text-justify"> Overall, the resulting semi-log and log-log plots yield acceptable and reasonable results. This demonstrates that the derived mathematical model, coupled with the application of each boundary condition, aligns effectively with the principles of mathematical modeling in petroleum reservoir engineering.</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Sensitivity Study</h3>

                    <p className="mb-4 text-justify"> A sensitivity study is also performed to observed varying boundary conditions, which in this study will be varying the wellbore storage coefficient (<em>C</em>), skin effect which will be represented by the altered permeability (<em>k</em><sub><em>a</em></sub>), and the external rate (<em>q</em><sub><em>e</em></sub>).</p>

                    <ArticleFigure src={img.figure_4} number={4} caption="Figure 4. Pressure response on varying wellbore storage coefficient" />

                    <p className="mb-4 text-justify"> In <strong></strong><strong></strong><strong></strong><strong></strong><strong>Figure </strong><strong>4</strong><strong></strong>, the graph displays three distinct curves, each corresponding to a different value of the wellbore storage coefficient <em>C</em>, ranging from a low of 0.00115 to a high of 0.115 bbl/psi. As the wellbore storage coefficient increases, the peak wellbore flowing pressure also increases. This is indicative of the wellbore's ability to store fluid, effectively acting as a buffer and applying back pressure, which slows down the rate at which pressure stabilizes.</p>

                    <p className="mb-4 text-justify"> For the curve with the highest wellbore storage coefficient (<em>C</em> = 0.115 bbl/psi), the onset of IARF (indicated by straight-line) is significantly delayed compared to the curves with lower <em>C</em> values. This means that the well takes longer to reach a stabilized flow regime where the wellbore effects are negligible. The implication of this could be significant in reservoir engineering, as it would affect the interpretation of pressure transient analysis used to estimate reservoir properties such as permeability of oil and make decisions about well testing and production planning.</p>

                    <ArticleFigure src={img.figure_5} number={5} caption="Figure 5. Pressure response on varying altered permeability." />

                    <p className="mb-4 text-justify">  <strong></strong><strong></strong><strong></strong><strong></strong><strong>Figure </strong><strong>5</strong><strong></strong> illustrates the impact of altered permeability due to skin damage as the varying parameter. This damage occurs in the near wellbore region, affecting a few feet away from the wellbore. The damaged zone exhibits a different, potentially significantly lower, permeability compared to the reservoir. The skin effect plays a crucial role in the associated pressure drop. A high positive skin effect leads to a significant pressure drop, while a low negative skin effect indicates well stimulation, resulting in an increase in altered permeability near the wellbore. It is important to note that a smaller value of altered permeability results in a substantial pressure drop in the reservoir, which can be estimated by extrapolating a portion of the straight-line during radial flow to the y-axis. Nevertheless, the onset of radial flow is difficult to discern due to the wellbore storage effect.</p>

                    <p className="mb-4 text-justify">   Initially, changes in the external rate (<em>q</em><sub><em>e</em></sub>) might not immediately impact the flowing bottomhole pressure (<em>P</em><sub><em>wf</em></sub>) due to the distance between the injection point and the wellbore. However, as time progresses and the injected fluid permeates the reservoir, an increase in <em>q</em><sub><em>e</em></sub> can aid in sustaining or even elevating <em>P</em><sub><em>wf</em></sub>, counterbalancing the natural decline caused by production.</p>

                    <ArticleFigure src={img.figure_6} number={6} caption="Figure 6. Pressure response on varying external rate." />

                    <p className="mb-4 text-justify">  In later stages, the impact of varying <em>q</em><sub><em>e</em></sub> becomes more evident, as can be seen from <strong></strong><strong></strong><strong></strong><strong></strong><strong>Figure </strong><strong>6</strong><strong></strong>. The graph would illustrate that higher external rates result in an upward trend in <em>P</em><sub><em>wf</em></sub>, signifying effective pressure support from the boundary. On the other hand, if the external rate is too low, <em>P</em><sub><em>wf</em></sub> may continue to decrease, suggesting that the reservoir is not receiving sufficient support to counteract the effects of production. By increasing <em>q</em><sub><em>e</em></sub>, it is possible to maintain or even enhance reservoir pressure over time. As additional fluid is injected, it compensates for the fluid extracted during production, potentially stabilizing, or increasing <em>P</em><sub><em>wf</em></sub>.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">CONCLUSION</h2>

                    <p className="mb-4 text-justify">  This study has successfully derived a mathematical model for a layered reservoir with no crossflow, incorporating constant inner and outer boundary conditions as well as wellbore storage and skin effects. The Laplace transformation method was utilized to solve the radial diffusivity equation for this type of reservoir and to transform all the boundary conditions. The transformation of the diffusivity equation resulted in a general solution that takes the form of modified Bessel’s functions of the first (<em>I</em><sub><em>α</em></sub>) and second (<em>K</em><sub><em>α</em></sub>) kinds. The general solution was applied separately: first for the constant inner and outer boundary conditions, and then for the wellbore storage and skin effect conditions. The final resulting equation was then inverted using Stehfest’s algorithm, available in the mp.math library in Python. The resulting plot indicates that both the mathematical model and the accompanying code are correct. Additionally, a sensitivity study confirms the physical accuracy of the pressure response, given the boundary conditions specified in the study, and validates that it aligns with the established knowledge and principles of petroleum reservoir engineering.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">ACKNOWLEDGEMENT</h2>

                    <p className="mb-4 text-justify">  The author sincerely acknowledges our colleagues – Ose Dimas B and Tania Fara – for their insightful comments, invaluable technical discussions, and engaging collaboration that helped completed the concepts presented in this work.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">REFERENCES</h2>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Azin, R., Mohamadi-Baghmolaei, M., &amp; Sakhaei, Z. (2017). Parametric analysis of diffusivity equation in oil reservoirs. <em>Journal of Petroleum Exploration and Production Technology</em>, <em>7</em>(1), 169–179. https://doi.org/10.1007/s13202-016-0247-5 </p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Cohen, A. M. (2007). <em>Numerical Methods for Laplace Transform Inversion</em>. Springer Science+Business Media.</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">de Hoog, F. R., Knight, J. H., &amp; Stokes, A. N. (1982). An Improved Method for Numerical Inversion of Laplace Transforms. <em>SIAM Journal on Scientific and Statistical Computing</em>, <em>3</em>(3), 357–366. https://doi.org/10.1137/0903022 </p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Grattoni, C. A., &amp; Dawe, R. A. (1995). Anisotropy in pore structure of porous media. <em>Powder Technology</em>, <em>85</em>(2), 143–151. https://doi.org/10.1016/0032-5910(95)03016-3 </p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">King, M. J., Wang, Z., &amp; Datta-Gupta, A. (2016). <em>Asymptotic Solutions of the Diffusivity Equation and Their Applications</em>. http://onepetro.org/SPEEURO/proceedings-pdf/16EURO/All-16EURO/SPE-180149-MS/1401063/spe-180149-ms.pdf/1 </p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Kundu, P., Kumar, V., &amp; Mishra, I. M. (2016). Experimental and numerical investigation of fluid flow hydrodynamics in porous media: Characterization of pre-Darcy, Darcy and non-Darcy flow regimes. <em>Powder Technology</em>, <em>303</em>, 278–291. https://doi.org/10.1016/j.powtec.2016.09.037 </p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Lefkovits, H. C., Hazebroek, P., Allen, E. E., &amp; Matthews, C. S. (1961). A Study of the Behavior of Bounded Reservoirs Composed of Stratified Layers. <em>Society of Petroleum Engineers Journal</em>, <em>1</em>(01), 43–58. https://doi.org/10.2118/1329-G </p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Stehfest, H. (1970). Algorithm 368: Numerical inversion of Laplace transforms [D5]. <em>Communications of the ACM</em>, <em>13</em>(1), 47–49. https://doi.org/10.1145/361953.361969</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Talbot, A. (1979). The Accurate Numerical Inversion of Laplace Transforms. <em>IMA Journal of Applied Mathematics</em>, <em>23</em>(1), 97–120. https://doi.org/10.1093/imamat/23.1.97  </p>
                </div>

                <footer className="mt-16 pt-8 border-t border-gray-200">

                    {/* <!-- Next/Prev Article Navigation --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                        <Link to="/we-do/6" className="group block p-6 border border-gray-200 rounded-lg hover:border-etars-teal transition-colors">
                            <span className="block text-sm text-gray-500 mb-1">&larr; Previous Article</span>
                            <span className="block font-semibold text-dark group-hover:text-etars-teal transition-colors line-clamp-2">Modelling Fluid Flow Using CRMP and Comparing It with an AI-Based Model</span>
                        </Link>
                        <Link to="/we-do/8" className="group block p-6 border border-gray-200 rounded-lg hover:border-etars-teal transition-colors text-right">
                            <span className="block text-sm text-gray-500 mb-1">Next Article &rarr;</span>
                            <span className="block font-semibold text-dark transition-colors line-clamp-1">Probabilistic Assessment of Offshore CO₂ Storage Performance in The Nini West Field (Project Greensand)</span>
                        </Link>

                    </div>
                </footer>
            </article>
        </main>
    )
}

export default Journal_7_Page

