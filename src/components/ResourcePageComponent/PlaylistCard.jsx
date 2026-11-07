import React, { useState } from "react";

const ListIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3 6h12v2H3V6Zm0 5h12v2H3v-2Zm0 5h8v2H3v-2Zm13-4.5 6 3.5-6 3.5v-7Z" />
  </svg>
);

const PlayIcon = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8 5v14l11-7L8 5Z" />
  </svg>
);

export function PlaylistCard({ title, thumbnail, videoCount, href = "#", courseNum }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <a
      href={href}
      className="group block w-full sm:max-w-[calc(50%-10px)] sm:flex-[1_1_calc(50%-10px)] max-w-xs rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
      target="_blank"
    >
      {/* Thumbnail + efek tumpukan */}
      <div className="relative pt-3">
        {/* Lapisan tumpukan di belakang */}
        <div className="absolute inset-x-6 top-0 h-full rounded-xl bg-slate-300 opacity-60 transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none" />
        <div className="absolute inset-x-3 top-1.5 h-full rounded-xl bg-slate-400 opacity-70 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none" />

        {/* Gambar utama */}
        <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200 shadow-sm transition-shadow duration-300 group-hover:shadow-xl motion-reduce:transition-none">
          {imgFailed ? (
            <div className="h-full w-full bg-gradient-to-br from-sky-400 to-indigo-600" />
          ) : (
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
            />
          )}

          {/* Overlay hover: Putar semua */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
            <PlayIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Watch Playlist</span>
          </div>

          {/* Badge jumlah video */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-primary/75 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <ListIcon className="h-4 w-4" />
            {videoCount} video
          </div>
        </div>
      </div>

      {/* Judul */}
      <h3 className="mt-4 line-clamp-2 text-md lg:text-xl font-semibold leading-snug text-slate-900 transition-colors duration-300 font-outfit">
        <span className="font-bold text-teal">{title}</span> - Etars Short Course {courseNum}
      </h3>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white p-6 sm:p-10">
      <h1 className="mb-8 text-xl font-bold text-slate-900">Playlist</h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {playlists.map((p) => (
          <PlaylistCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
