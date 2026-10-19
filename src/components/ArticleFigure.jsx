import React from 'react'

function ArticleFigure({ src, number, caption }) {
    return (
        <figure className="my-8 center flex-col" aria-labelledby={`journal5-figure-${number}`}>
            {src ? (
                <img src={src} alt={caption} loading="lazy" className="rounded-lg bg-white" />
            ) : (
                <div className="min-h-48 flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white p-8 font-sans text-sm text-gray-400">
                    Figure {number}
                </div>
            )}
            <figcaption id={`journal5-figure-${number}`} className="mt-3 text-center font-sans text-sm text-gray-600">{caption}</figcaption>
        </figure>
    )
}

export default ArticleFigure
