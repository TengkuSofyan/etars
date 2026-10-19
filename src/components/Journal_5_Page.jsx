import React from 'react';
import authorImage1 from '/img/userA.jpeg';
import authorImage2 from '/img/user1.jpeg';
import { Link } from 'react-router-dom';
import figures from '../data-figure';
import ArticleFigure from './ArticleFigure';

// Isi URL/path gambar Anda di sini. Satu gambar utuh untuk setiap nomor figure.
// Figure 3: gabungkan panel a–d; Figure 5: gabungkan kedua panel.
const figure = [{
    figure_1: '', // Volve field production data
    figure_2: '', // Chronos workflow
    figure_3: '', // F-12: DCA, zero-shot, ARIMA, and LSTM
    figure_4: '', // Covariate correlation
    figure_5: '', // Hyperparameter tuning and covariates
    figure_6: '', // Forecasting errors for F-12
    figure_7: '', // Forecasting errors for F-14
}];

function SmallFigure({ src, number, caption }) {
    return (
        <>
            <img src={src} alt={caption} loading="lazy" className="rounded-lg border border-gray-200 bg-white" />
            <figcaption id={`journal5-figure-${number}`} className="mt-3 text-center font-sans text-sm text-gray-600">{caption}</figcaption>
        </>
    )
}

/**
 * Article content extracted from 05. Chronos Forecasting.docx without summarizing.
 * Uses the same React Router, Tailwind theme, typography and layout as Journal_4_Page.
 * Equations use native MathML; no additional equation library is required.
 * Pass a PDF URL and/or a share callback to enable the corresponding header actions.
 */
function Journal_5_Page({ publicationsHref = '/we-do/', pdfUrl = '', onShare = null }) {
    const { journal_5 } = figures;


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
                                <linearGradient id="journal5-line-grad-1" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#40C2BA" stopOpacity="0" />
                                    <stop offset="15%" stopColor="#40C2BA" stopOpacity="1" />
                                    <stop offset="85%" stopColor="#40C2BA" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#40C2BA" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="journal5-line-grad-2" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#87D544" stopOpacity="0" />
                                    <stop offset="25%" stopColor="#87D544" stopOpacity="0.8" />
                                    <stop offset="75%" stopColor="#87D544" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#87D544" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            {/* Smooth elegant curves */}
                            <path d="M0,120 C250,120 400,30 650,80 C800,110 900,90 1000,90" stroke="url(#journal5-line-grad-1)" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M0,135 C270,135 420,45 670,95 C820,125 910,105 1000,105" stroke="url(#journal5-line-grad-2)" strokeWidth="1.5" strokeDasharray="6 8" strokeLinecap="round" />

                            {/* Subtle data node accent */}
                            <circle cx="650" cy="80" r="4.5" fill="#40C2BA" />
                            <circle cx="650" cy="80" r="14" fill="#40C2BA" opacity="0.1" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight mb-6 font-outfit">
                        APPLICATION OF A LANGUAGE MODEL-BASED FORECASTING FRAMEWORK (CHRONOS) FOR PROBABILISTIC OIL PRODUCTION FORECASTING: A COMPARISON WITH DCA, ARIMA, AND LSTM
                    </h1>

                    {/* Author Info */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center flex-wrap gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-etars-teal flex items-center justify-center overflow-hidden  shadow-sm">
                                    <img className="w-full h-full object-cover" src={authorImage1} alt="Tengku Astsauri" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-gray-900">Tengku Astsauri</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-etars-teal flex items-center justify-center overflow-hidden  shadow-sm">
                                    <img className="w-full h-full object-cover" src={authorImage2} alt="Muhammad Habiburrahman" />
                                </div>
                                <div>
                                    <p className="text-base font-semibold text-gray-900">Muhammad Habiburrahman</p>
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
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Machine Learning</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Time Series Forecasting</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">Production Forecasting</span>
                    </div>
                </header>

                <div className="article-content font-serif text-gray-800 text-lg leading-relaxed">
                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">SUMMARY</h2>

                    <p className="mb-4 text-justify">This study pioneers the use of Chronos, an LLM-based framework, for daily oil production forecasting using Volve field data. Benchmarked against Arps’ DCA, ARIMA, and LSTM, zero-shot Chronos uniquely captures natural decline trends that traditional models often miss, despite higher initial errors. When fine-tuned with operational covariates like pressure, its accuracy improves dramatically—matching ARIMA and LSTM, and sometimes outperforming DCA. Furthermore, Chronos is highly efficient, generating probabilistic forecasts in under a minute. Ultimately, this research demonstrates that Chronos is a fast, versatile, and effective tool for time-series forecasting in modern petroleum engineering.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">INTRODUCTION</h2>

                    <p className="mb-4 text-justify">Production forecasting remains a fundamental task in the oil and gas industry. Forecasting models enable operators to adapt operational timelines and technologies in response to evolving maintenance requirements and production demands (Gharbi &amp; Mansoori, 2005). Accurate forecats support the formulation of development strategies, optimize resource allocation, and guide investment planning. Consequently, forecasting serves as a strategic tool throughout the entire lifecycle of oil and gas field development, enhancing operational efficiency and reducing financial risk (Fan et al., 2024). </p>

                    <p className="mb-4 text-justify">Large Language Models (LLMs) are powerful AI models trained on massive amounts of text data, enabling them to understand and generate human-like language. Building on the established forecasting baselines, this study introduces Chronos, a recently developed probabilistic forecasting framework that applies large language model (LLM) techniques to time series prediction tasks (Ansari et al., 2024). Chronos transforms each observation by rescaling and quantizing it into a fixed vocabulary, converting the time series into a sequence of discrete tokens. A pretrained style Transformer is then fine-tuned using a standard cross-entropy loss function (Raffel et al., 2020). Forecasts are generated by autoregressively sampling future token sequences, which are subsequently post-processed into full predictive distributions (Ansari et al., 2024). The model’s performance is benchmarked against Arps’ decline curve analysis (DCA) and machine learning methods including ARIMA and LSTM. This head-to-head comparison provides the first empirical evidence on whether language model-based forecasting can complement or surpass established techniques currently used in upstream oil and gas operations.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">METHODOLOGY</h2>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Dataset Description</h3>

                    <p className="mb-4 text-justify">In this study, real field oil production data from the Volve field operated by Equinor is used as the main dataset for time series forecasting. As presented in <strong>Figure 1</strong>, the Volve field contains several active production wells. However, this study focuses on production well “15/9-F-12” (green color) and “15/9-F-14” (red color), which offer the most comprehensive dataset across the entire production life cycle. Based on <strong>Figure 1</strong>, it is evident that the oil production data contains significant noise. Therefore, a specific method is applied to smooth the data, enabling better data representation and a more accurate forecasting model. A moving average with a 30-day window is used to smooth the dataset. This processed data serves as the reference for forecasting model development in this study. </p>

                    <ArticleFigure src={journal_5.figure_1} number={1} caption="Figure 1. Volve field production data." />

                    <p className="mb-4 text-justify">For well “15/9-F-12,” the dataset used to construct the forecasting model spans from October 1, 2010, to September 27, 2013. The forecasting evaluation period extends from September 28, 2013, to September 20, 2014. This timeframe is selected because oil production began to decline around 2010, making it suitable for decline curve analysis (DCA). Notably, an increase in oil production occurred in 2015 due to water flooding injection; however, this data is excluded from the DCA to maintain model consistency. For well “15/9-F-14,” the algorithms are trained on oil production data collected between September 26, 2008, and July 29, 2015. The period from July 30, 2015, to July 28, 2016, is used for evaluation. The training and evaluation periods for both wells are based on daily time series data.</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Chronos Time Series</h3>

                    <p className="mb-4 text-justify">Chronos frames univariate time series forecasting as a language modeling task by transforming real-valued observations into discrete tokens. Each observation is rescaled using mean scaling, quantized into one of B uniformly spaced bins, and then passed into standard Transformer architectures (e.g., T5 or GPT-2 variants) trained with a cross-entropy objective (Raffel et al., 2020). During inference, Chronos autoregressively samples from the learned token distributions to generate multiple possible future trajectories, which are subsequently dequantized and unscaled into real-valued forecasts. This token-level sampling allows Chronos to effectively capture uncertainty and produce diverse predictive outcomes without relying on predefined parametric distributions. Pretrained on a large corpus of real and Gaussian process–generated series, Chronos delivers strong in-domain accuracy, competitive zero-shot performance, and remains more lightweight compared to prompt-based LLM approaches (Ansari et al., 2024).</p>

                    <p className="mb-4 text-justify"><strong>Figure 2</strong> illustrates the overall workflow. On the left, historical time series are scaled and quantized to produce context tokens. In the center, the Transformer model autoregressively predicts the next token, and the cross-entropy between the predicted distribution and the ground-truth token is used as the training loss. On the right, inference proceeds by sampling multiple future token trajectories. These are then dequantized and rescaled to yield numerical values, producing a full predictive distribution instead of a single point forecast.</p>

                    <ArticleFigure src={journal_5.figure_2} number={2} caption="Figure 2. Illustration of Chronos. (Left) The raw time series data is first normalized through scaling and then converted into discrete tokens via quantization. (Center) These tokens are then input into a language model, either an encoder-decoder or a decoder-only type. The model is trained to predict the next token using a cross-entropy loss function. (Right) During prediction (inference), the model generates future tokens in an autoregressive manner. These tokens are then transformed back into real-valued numbers. To produce a probabilistic forecast, multiple future sequences are generated by sampling several possible token paths." />

                    <p className="mb-4 text-justify"> The theoretical formulation is compact. Let <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>x</mi></mrow></mrow><mrow><mrow><mi>i</mi></mrow></mrow></msub></mrow></math> denote a scaled observation, and <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>q</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>x</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>∈</mo><mo>&#123;</mo><mn>1</mn><mo>,</mo><mo>…</mo><mo>,</mo><mi>B</mi><mo>&#125;</mo></mrow></mrow></math> its bin index. The quantizer <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>q</mi></mrow></mrow></math> and its inverse <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>d</mi></mrow></mrow></math> are defined as:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>q</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>x</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo></mrow><mrow><mo stretchy="true">&#123;</mo><mrow><mtable columnalign="left"><mtr><mtd><mrow><mrow><mn>1</mn><mo>,</mo><mspace width="0.2em" /><mspace width="0.2em" /><mi>x</mi><mo>&lt;</mo></mrow><msub><mrow><mrow><mi>b</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mn>2</mn><mo>,</mo><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>b</mi></mrow></mrow><mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo>≤</mo><mi>x</mi><mo>&lt;</mo></mrow><msub><mrow><mrow><mi>b</mi></mrow></mrow><mrow><mrow><mn>2</mn></mrow></mrow></msub><mrow><mspace width="0.2em" /></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>⋮</mo></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mi>B</mi><mo>,</mo><mspace width="0.2em" /></mrow><msub><mrow><mrow><mi>b</mi></mrow></mrow><mrow><mrow><mi>B</mi><mo>-</mo><mn>1</mn></mrow></mrow></msub><mrow><mo>≤</mo><mi>x</mi></mrow></mrow></mtd></mtr></mtable></mrow><mo stretchy="true"></mo></mrow><mrow><mo>,</mo><mspace width="0.2em" /></mrow><mrow><mspace width="0.2em" /><mspace width="0.2em" /><mspace width="0.2em" /><mspace width="0.2em" /><mspace width="0.2em" /><mspace width="0.2em" /><mspace width="0.2em" /><mspace width="0.2em" /><mspace width="0.2em" /></mrow><mrow><mi>d</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>j</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo></mrow><msub><mrow><mrow><mi>c</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(1)</span></div>

                    <p className="mb-4 text-justify">where <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>c</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></math> are bin centers and <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>b</mi></mrow></mrow><mrow><mrow><mi>j</mi></mrow></mrow></msub></mrow></math> the bin edges. Training minimizes the sequence-level cross‑entropy loss:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi>l</mi></mrow><mrow><mo stretchy="true">(</mo><mrow><mrow><mi>θ</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mo>=</mo><mo>-</mo></mrow><mrow><munderover><mo>∑</mo><mrow><mrow><mi>h</mi><mo>=</mo><mn>1</mn></mrow></mrow><mrow><mrow><mi>H</mi><mo>+</mo><mn>1</mn></mrow></mrow></munderover><mrow><mrow><munderover><mo>∑</mo><mrow><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow></mrow><mrow><mrow><mo stretchy="true">|</mo><mrow><msub><mrow><mrow><mi>V</mi></mrow></mrow><mrow><mrow><mi>t</mi><mi>s</mi></mrow></mrow></msub></mrow><mo stretchy="true">|</mo></mrow></mrow></munderover><mrow><mrow><mn>1</mn></mrow><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>z</mi></mrow></mrow><mrow><mrow><mi>C</mi><mo>+</mo><mi>h</mi><mo>+</mo></mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo>=</mo><mi>i</mi></mrow></mrow><mo stretchy="true">)</mo></mrow><mrow><mrow><mrow><mi>l</mi><mi>o</mi><mi>g</mi></mrow></mrow><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>θ</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>z</mi></mrow></mrow><mrow><mrow><mi>C</mi><mo>+</mo><mi>h</mi><mo>+</mo></mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo>=</mo><mi>i</mi></mrow></mrow><mo>|</mo><mrow><msub><mrow><mrow><mi>z</mi></mrow></mrow><mrow><mrow><mn>1</mn><mo>:</mo><mi>C</mi><mo>+</mo><mi>h</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></mrow></mrow></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(2)</span></div>

                    <p className="mb-4 text-justify">where <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>θ</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>z</mi></mrow></mrow><mrow><mrow><mi>C</mi><mo>+</mo><mi>h</mi><mo>+</mo></mrow><mrow><mn>1</mn></mrow></mrow></msub><mrow><mo>=</mo><mi>i</mi></mrow></mrow><mo>|</mo><mrow><msub><mrow><mrow><mi>z</mi></mrow></mrow><mrow><mrow><mn>1</mn><mo>:</mo><mi>C</mi><mo>+</mo><mi>h</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow></math> is the categorical distribution over the vocabulary <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mrow><mrow><mi>V</mi></mrow></mrow><mrow><mrow><mi>t</mi><mi>s</mi></mrow></mrow></msub></mrow></math>, predicted by the model parameterized by <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>θ</mi></mrow></mrow></math>. As a result, Chronos performs regression via classification over a fixed vocabulary. In practice, the loss is averaged across batches of time series during training.</p>

                    <p className="mb-4 text-justify"> During inference, forecasts are generated by autoregressively sampling from the learned distribution. For each horizon step <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>h</mi><mo>=</mo><mn>1</mn><mo>,</mo><mo>…</mo><mo>,</mo><mi>H</mi></mrow></mrow></math>, Chronos draws a token <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>z</mi></mrow></mrow></math> from:</p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 flex items-center gap-6 overflow-x-auto"><div className="flex-1 flex justify-center text-xl text-etars-dark"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mrow><mrow><mi>p</mi></mrow></mrow><mrow><mrow><mi>θ</mi></mrow></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><msub><mrow><mrow><mi>z</mi></mrow></mrow><mrow><mrow><mi>C</mi></mrow><mrow><mo>+</mo><mi>h</mi><mo>+</mo></mrow><mrow><mn>1</mn></mrow></mrow></msub></mrow><mo>|</mo><mrow><msub><mrow><mrow><mi>z</mi></mrow></mrow><mrow><mrow><mn>1</mn><mo>:</mo></mrow><mrow><mi>C</mi></mrow><mrow><mo>+</mo><mi>h</mi></mrow></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow></math></div><span className="shrink-0 font-sans text-gray-400">(3)</span></div>

                    <p className="mb-4 text-justify">Each sampled token is then mapped to a real value using the dequantizer <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>d</mi><mo>(</mo><mi>z</mi><mo>)</mo><mo>=</mo></mrow><msub><mrow><mrow><mi>c</mi></mrow></mrow><mrow><mrow><mi>z</mi></mrow></mrow></msub></mrow></math>, and rescaled by the series-specific scale <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mi>s</mi></mrow></mrow></math> to reconstruct the numerical path. Repeating this process yields a set of Monte Carlo trajectories, forming an empirical predictive distribution without modifying the model architecture or objective function.</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">RESULTS &amp; DISCUSSION</h2>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Evaluation of Chronos Zero-Shot in Oil Production Forecasting</h3>

                    <p className="mb-4 text-justify">The processed data are subsequently modeled using Arps’ Decline Curve Analysis (DCA), a widely adopted approach for reserve forecasting in the petroleum industry (Cancelliere et al., 2011). <strong>Figure 3a</strong> presents the oil production forecast generated using the decline curve analysis of well F-12. </p>

                    <ArticleFigure src={figure[0].figure_3} number={3} caption="Figure 3. Result of oil forecasting from several model for well F-12" />

                    <p className="mb-4 text-center font-sans text-sm text-gray-600">DCA result (MAPE = 0.828) · Zero-shot result (MAPE = 1.038) · ARIMA result (MAPE = 0.301) · LSTM result (MAPE =0.219)</p>

                    <p className="mb-4 text-justify">Following the DCA analysis, a preliminary forecast is conducted using the Chronos Zero-Shot model (<strong>Figure 3b</strong>). This model represents the most basic implementation of Chronos and is capable of producing oil production forecasts without retraining or fine-tuning on historical field data. To benchmark its performance, two widely used forecasting models (LSTM and ARIMA) are also applied to the same dataset (<strong>Figure 3c </strong>and<strong> 3d</strong>), with their respective hyperparameters carefully tuned. This comparison is intended to evaluate the forecasting capability of Chronos relative to established time series models.</p>

                    <p className="mb-4 text-justify">At this stage, the Chronos Zero-Shot model exhibits the highest prediction error among the three methods. Despite its relatively higher error as indicated by the MAPE, the Chronos Zero-Shot model demonstrates a notable strength: it captures the natural declining trend in oil production more effectively. In contrast to other models, which often produce flat or overly smoothed predictions, Chronos adapts to fluctuations and the inherent volatility of production decline. This indicates that, even without retraining, the model’s pre-trained architecture can recognize and reflect typical oil production patterns. Therefore, Chronos shows potential as a rapid forecasting tool in field scenarios where data availability and time are constrained.</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Enhancing Chronos Forecasting through Fine-Tuning and Covariates</h3>

                    <p className="mb-4 text-justify">Building on the initial findings, a more advanced forecasting scenario is developed using a fine-tuned version of the Chronos model. In this configuration, key hyperparameters such as the learning rate and the number of fine-tuning steps are explicitly defined and applied. Chronos continues to operate as a univariate model by default, relying solely on historical production data for its forecasts. However, in real-world applications, additional exogenous variables (e.g., pressure and temperature) are often available and can significantly improve forecasting accuracy.</p>

                    <p className="mb-4 text-justify">To assess the impact of incorporating external information, Chronos is evaluated in a multivariate setting with the inclusion of relevant covariates. Several independent variables, including wellhead pressure, wellhead temperature, and choke size, are identified as candidates for integration into the forecasting model. To determine the most informative covariates, a correlation analysis is performed to examine the relationship between each parameter and oil production (<strong>Figure 4</strong>). The results indicate that variables such as production time, downhole pressure, downhole temperature, tubing pressure, annulus pressure, and wellhead pressure exhibit strong correlations (coefficient correlation &gt; 0.5) with oil production. Based on both the strength of correlation and the completeness of available data, tubing pressure and wellhead pressure are selected as the primary covariates for inclusion in the Chronos model. These parameters exhibit strong correlations with oil production and possess the most complete time series records.</p>

                    <ArticleFigure src={journal_5.figure_4} number={4} caption="Figure 4. correlation coefficient of covariate oil production" />

                    <p className="mb-4 text-justify">Forecasting results using the fine-tuned Chronos model with the selected covariates are presented in <strong>Figure 5</strong>. These results demonstrate that optimizing model hyperparameters and incorporating relevant covariates substantially improves forecasting accuracy. In particular, the enhanced Chronos configuration achieves a lower Mean Absolute Percentage Error (MAPE) compared to the initial Zero-Shot version. Although Chronos does not yet match the accuracy levels of the ARIMA and LSTM models, it outperforms Arps’ Decline Curve Analysis, which remains a standard approach in petroleum forecasting. Furthermore, Chronos demonstrates a stronger ability to capture the complex dynamics of natural production decline. Unlike ARIMA and LSTM, which often produce flat or overly smoothed forecasts, Chronos more effectively approximates the fluctuating behavior of declining oil production.</p>

                    <ArticleFigure src={figure[0].figure_5} number={5} caption="Figure 5. Chronos result with hyperparameter tuned and covariates included" />

                    <p className="mb-4 text-center font-sans text-sm text-gray-600">Chronos result with hyper-parameter tuned – MAPE = 0.736 · Chronos result with  covariates incorporated – MAPE = 0.749</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Chronos for Uncertainty-Aware Forecasting</h3>

                    <p className="mb-4 text-justify">One key advantage of Chronos lies in its probabilistic nature, which enables it to effectively capture uncertainty in time series forecasting. By generating multiple possible future trajectories through token-level sampling, Chronos provides diverse and realistic predictive outcomes without relying on predefined parametric assumptions, making it a robust tool in scenarios with high uncertainty.</p>

                    <ArticleFigure src={journal_5.figure_6} number={6} caption="Figure 6. Summary of mean average percentage error (MAPE) of all model forecasting." />

                    <p className="mb-4 text-justify"><strong>Figure 6</strong> presents the Mean Absolute Percentage Error (MAPE) fraction values for oil production forecasts generated by various models. Based on these results, emerges as a highly promising alternative to conventional forecasting methods such as ARIMA, Arps’ Decline Curve Analysis (DCA), and LSTM. In the context of oil production forecasting, the P90 prediction is often regarded as the most reliable metric. It provides a conservative estimate that helps avoid the risk of overestimating future output. While P50 and P10 forecasts can support more optimistic planning scenarios, they inherently carry a higher risk of overprediction. Therefore, emphasis is placed on evaluating the P90 results for each Chronos model configuration.</p>

                    <p className="mb-4 text-justify">The comparison shows that Chronos performs particularly well at the P90 level. When fine-tuned or used with covariates, it achieves forecasting accuracy comparable to, or even better than, LSTM and ARIMA. Remarkably, even in its zero-shot configuration, without any retraining, Chronos delivers P90 results on par with traditional models such as DCA. These findings underscore Chronos's robustness in generating reliable probabilistic forecasts, with the added advantage of capturing uncertainty across a wide range of possible future outcomes.</p>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Chronos Forecasting on Well 15/9-F-14</h3>

                    <p className="mb-4 text-justify">To further support these results, another Chronos model was constructed to forecast oil production for a different well, 15/9-F-14. A similar procedure was followed, beginning with the application of a smoothing method to reduce noise, and comparing the Chronos output with results from the other two algorithms, as presented in <strong>Figure 7</strong>. As can be seen, across both evaluation sets, the Chronos family delivers the smallest forecasting errors, confirming its suitability for predicting production from both wells.</p>

                    <p className="mb-4 text-justify">In data from well 15/9-F-12, the fine-tuned P90 configuration achieves a MAPE of 0.238, only slightly above the single-point LSTM benchmark, while its P50 and P90 quantile forecasts remain tighter than any deterministic alternative. Data from well 15/9-F-14 broadens the assessment and shows that Chronos in its zero-shot P50 configuration records the lowest MAE, while the hyper-tuned P90 variant secures the best overall MAPE (0.374), decisively outperforming ARIMA and DCA, whose errors exceed 0.9. This performance advantage originates from Chronos’s language-model-inspired architecture: the algorithm tokenizes, quantizes, and autoregressively samples the time series, allowing it to learn long-range, nonlinear production dynamics that decline-curve or linear models cannot capture. It natively yields full predictive distributions (P10, P50, P90), embedding uncertainty directly into the modeling process rather than adding it as a post hoc feature. Furthermore, it can ingest auxiliary covariates that influence well behavior. The combination of quantitative superiority, probabilistic insight, and modeling flexibility makes Chronos the most reliable and informative tool for forward modeling of oil output from both wells.</p>

                    <ArticleFigure src={journal_5.figure_7} number={7} caption="Figure 7. Summary of mean average percentage error (MAPE) of all model forecasting for different well." />

                    <p className="mb-4 text-justify">Additionally, for this dataset, Chronos was able to generate probabilistic forecasts in under one minute, as shown in <strong>Table 1</strong>. The dataset encompasses approximately five years of daily oil production data. Although larger datasets may result in longer runtimes, Chronos demonstrated impressive efficiency by producing forecasts faster than both ARIMA and LSTM models—while still maintaining comparable accuracy. This highlights not only the computational efficiency of Chronos but also its robustness as a reliable forecasting tool.</p>

                    <p className="mt-6 mb-3 text-center font-sans text-sm text-gray-600">Table 1. Computational running time description of each model</p>

                    <div className="overflow-x-auto my-6"><table className="w-full text-left border-collapse font-sans text-sm">

                        <thead>

                            <tr className="bg-gray-100">

                                <th scope="col" className="border border-gray-200 px-4 py-3">Method</th>

                                <th scope="col" className="border border-gray-200 px-4 py-3">Training runtime (seconds)</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Chronos zero-shoot</td>

                                <td className="border border-gray-200 px-4 py-3">0.01</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">Chronos fine-tuned</td>

                                <td className="border border-gray-200 px-4 py-3">51.73</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">Chronos with covariates</td>

                                <td className="border border-gray-200 px-4 py-3">1.33</td>

                            </tr>





                            <tr className="bg-gray-50">

                                <td className="border border-gray-200 px-4 py-3">ARIMA</td>

                                <td className="border border-gray-200 px-4 py-3">1.88</td>

                            </tr>





                            <tr className="bg-white">

                                <td className="border border-gray-200 px-4 py-3">LSTM</td>

                                <td className="border border-gray-200 px-4 py-3">164.5</td>

                            </tr>



                        </tbody></table></div>

                    <h3 className="font-sans font-bold text-xl text-etars-dark mt-6 mb-3">Challenges and Limitations of Chronos</h3>

                    <p className="mb-4 text-justify">Although the core Chronos framework does not explicitly define a minimum requirement for the length of historical data, its implementation in AutoGluon TimeSeries imposes such a constraint during training. Specifically, the time series must be at least twice as long as the prediction horizon to ensure adequate coverage for both training and validation phases. For example, a forecasting horizon of 365 days would require a minimum of approximately 730 days of historical data. This requirement is essential for internal model evaluation and validation. In contrast, Arps’ Decline Curve Analysis is more flexible, often requiring only one to two years of historical data to forecast production over extended periods—sometimes up to ten years. Consequently, Chronos is currently better suited for short- to medium-term forecasting, which highlights one of its key limitations when compared to traditional forecasting approaches</p>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">CONCLUSION</h2>

                    <p className="mb-4 text-justify">In this study, a comparative analysis was performed to evaluate the performance of Chronos, a large language model (LLM) developed by Amazon, in forecasting oil production using the Volve dataset. To benchmark Chronos’s performance, results from widely used forecasting models in the oil and gas industry—Arp’s Decline Curve Analysis (DCA), ARIMA, and LSTM—were also included.</p>

                    <p className="mb-4 text-justify">Based on the findings, several key insights regarding Chronos’s forecasting capabilities have been identified:</p>

                    <ul className="list-disc pl-6 mb-6 space-y-3">

                        <li className="text-justify">Chronos performance improves significantly with hyperparameter tuning, resulting competitive result with ARIMA and LSTM,  making it a competitive option for production forecasting.</li>

                        <li className="text-justify">Unlike ARIMA and LSTM, which often produce flat or smoothed outputs, Chronos adjusts its forecasts in alignment with real-world production behavior, especially in high variability or noisy scenarios. </li>

                        <li className="text-justify">Chronos is fundamentally a probabilistic model, providing rich uncertainty estimates through distributional sampling. This makes Chronos particularly valuable in scenarios where uncertainty quantification is critical. </li>

                        <li className="text-justify">Chronos demonstrates strong result in short-term probabilistic forecasting, yield competitive performance compared to traditional models like ARIMA and LSTM in both accuracy and runtime performance.</li>

                        <li className="text-justify">However, its requirement for long historical data relative to the prediction horizon limits its applicability for long-term forecasting, making it less flexible than classical approaches such as Arps’ decline curve analysis.</li>

                    </ul>

                    <h2 className="text-teal font-bold text-2xl mt-8 mb-2">REFERENCES</h2>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Ansari, A. F., Stella, L., Turkmen, C., Zhang, X., Mercado, P., Shen, H., Shchur, O., Rangapuram, S. S., Arango, S. P., Kapoor, S., Zschiegner, J., Maddix, D. C., Wang, H., Mahoney, M. W., Torkkola, K., Wilson, A. G., Bohlke-Schneider, M., &amp; Wang, Y. (2024). <em>Chronos: Learning the Language of Time Series</em>. http://arxiv.org/abs/2403.07815</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Cancelliere, M., Verga, F., &amp; Viberti, D. (2011, September 6). Benefits and Limitations of Assisted History Matching. <em>SPE Offshore Europe Oil and Gas Conference and Exhibition</em>. https://doi.org/10.2118/146278-MS</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Correia, G. G., &amp; Schiozer, D. J. (2019). Using pilot wells to integrate geological modelling and history matching: applied to the Norne Benchmark case. <em>Petroleum Geoscience</em>, <em>25</em>(2), 188–206. https://doi.org/10.1144/petgeo2017-086</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">El-Mallah, E., &amp; Elsharkawy, S. (2016). Time-Series Modeling and Short Term Prediction of Annual Temperature Trend on Coast Libya Using the Box-Jenkins ARIMA Model. <em>Advances in Research</em>, <em>6</em>(5), 1–11. https://doi.org/10.9734/AIR/2016/24175</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Fan, Z., Liu, X., Wang, Z., Liu, P., &amp; Wang, Y. (2024). A Novel Ensemble Machine Learning Model for Oil Production Prediction with Two-Stage Data Preprocessing. <em>Processes</em>, <em>12</em>(3), 587. https://doi.org/10.3390/pr12030587</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Gharbi, R. B. C., &amp; Mansoori, G. A. (2005). An introduction to artificial intelligence applications in petroleum exploration and production. <em>Journal of Petroleum Science and Engineering</em>, <em>49</em>(3–4), 93–96. https://doi.org/10.1016/j.petrol.2005.09.001</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Hochreiter, S., &amp; Schmidhuber, J. (1997). Long Short-Term Memory. <em>Neural Computation</em>, <em>9</em>(8), 1735–1780. https://doi.org/10.1162/neco.1997.9.8.1735</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Kontopoulou, V. I., Panagopoulos, A. D., Kakkos, I., &amp; Matsopoulos, G. K. (2023). A Review of ARIMA vs. Machine Learning Approaches for Time Series Forecasting in Data Driven Networks. <em>Future Internet</em>, <em>15</em>(8), 255. https://doi.org/10.3390/fi15080255</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Kumar, J., Goomer, R., &amp; Singh, A. K. (2018). Long Short Term Memory Recurrent Neural Network (LSTM-RNN) Based Workload Forecasting Model For Cloud Datacenters. <em>Procedia Computer Science</em>, <em>125</em>, 676–682. https://doi.org/10.1016/j.procs.2017.12.087</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Landi, F., Baraldi, L., Cornia, M., &amp; Cucchiara, R. (2021). Working Memory Connections for LSTM. <em>Neural Networks</em>, <em>144</em>, 334–341. https://doi.org/10.1016/j.neunet.2021.08.030</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Liu, W., Liu, W. D., &amp; Gu, J. (2020). Forecasting oil production using ensemble empirical model decomposition based Long Short-Term Memory neural network. <em>Journal of Petroleum Science and Engineering</em>, <em>189</em>, 107013. https://doi.org/10.1016/j.petrol.2020.107013</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Raffel, C., Shazeer, N., Roberts, A., Lee, K., Narang, S., Matena, M., Zhou, Y., Li, W., &amp; Liu, P. J. (2020). Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer. In <em>Journal of Machine Learning Research</em> (Vol. 21). http://jmlr.org/papers/v21/20-074.html.</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Rundo, F., Trenta, F., di Stallo, A. L., &amp; Battiato, S. (2019). Machine Learning for Quantitative Finance Applications: A Survey. <em>Applied Sciences</em>, <em>9</em>(24), 5574. https://doi.org/10.3390/app9245574</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Sherstinsky, A. (2020). Fundamentals of Recurrent Neural Network (RNN) and Long Short-Term Memory (LSTM) network. <em>Physica D: Nonlinear Phenomena</em>, <em>404</em>, 132306. https://doi.org/10.1016/j.physd.2019.132306</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Werbos, P. J. (1990). Backpropagation through time: what it does and how to do it. <em>Proceedings of the IEEE</em>, <em>78</em>(10), 1550–1560. https://doi.org/10.1109/5.58337</p>

                    <p className="mb-4 text-justify text-base text-gray-700 font-sans break-words">Yamada, T. (2000, April 25). Non-Uniqueness of History Matching. <em>SPE Asia Pacific Conference on Integrated Modelling for Asset Management</em>. https://doi.org/10.2118/59434-MS</p>
                </div>

                <footer className="mt-16 pt-8 border-t border-gray-200">

                    {/* <!-- Next/Prev Article Navigation --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                        <Link to="/we-do/4" className="group block p-6 border border-gray-200 rounded-lg hover:border-etars-teal transition-colors">
                            <span className="block text-sm text-gray-500 mb-1">&larr; Previous Article</span>
                            <span className="block font-semibold text-dark group-hover:text-etars-teal transition-colors line-clamp-2">Flow Zone Indicator Prediction and Hydraulic Flow Unit Classification Using Machine Learning</span>
                        </Link>
                        <Link to="/we-do/6" className="group block p-6 border border-gray-200 rounded-lg hover:border-etars-teal transition-colors text-right">
                            <span className="block text-sm text-gray-500 mb-1">Next Article &rarr;</span>
                            <span className="block font-semibold text-dark transition-colors line-clamp-1">Modelling Fluid Flow Using CRMP and Comparing it with an AI-Based Model</span>
                        </Link>
                    </div>
                </footer>
            </article>
        </main>
    )
}

export default Journal_5_Page

