"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/app/_lib/basePath";

type GalleryImage = { file: string; alt: string; className: string };

export default function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  function open(image: GalleryImage) {
    setSelected(image);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <div className="grid auto-rows-[220px] grid-flow-dense gap-3 sm:grid-cols-4 sm:auto-rows-[240px]">
        {images.map((image) => (
          <button
            key={image.file}
            type="button"
            onClick={() => open(image)}
            className={`group relative overflow-hidden text-left ${image.className}`}
          >
            <Image
              src={withBasePath(`/images/gallery/${image.file}`)}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-transparent" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-[90vh] max-w-[90vw] rounded-xl bg-transparent p-0 backdrop:bg-black/80"
      >
        {selected && (
          <figure className="m-0">
            <img
              src={withBasePath(`/images/gallery/${selected.file}`)}
              alt={selected.alt}
              className="max-h-[80vh] w-full rounded-t-xl object-contain"
            />
            <figcaption className="flex items-center justify-between gap-4 rounded-b-xl bg-white px-5 py-3 text-sm text-gray-700">
              {selected.alt}
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="shrink-0 text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                ✕
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
