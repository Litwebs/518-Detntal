import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { practicePhotos } from "@/data/practicePhotos";
import "./PracticeGallery.css";

export default function PracticeGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : practicePhotos[activeIndex];
  const move = (direction: number) => setActiveIndex((index) =>
    index === null ? null : (index + direction + practicePhotos.length) % practicePhotos.length,
  );
  const featured = practicePhotos[0];
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  useEffect(() => {
    if (activeIndex !== null) thumbnailRefs.current[activeIndex]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [activeIndex]);

  return (
    <section className="practice-gallery" aria-labelledby="practice-gallery-heading">
      <div className="container mx-auto px-4">
        <div className="practice-gallery__intro">
          <div>
            <p className="practice-gallery__eyebrow">A closer look at 518 Dental</p>
            <h2 id="practice-gallery-heading">Make yourself at home.</h2>
          </div>
          <p>Step inside our Rochdale practice. From the first hello to a quiet moment before your appointment, discover the spaces that make you feel welcome.</p>
        </div>

        <div className="practice-gallery__feature">
          <button className="practice-gallery__feature-photo" onClick={() => setActiveIndex(0)} aria-label={`View photo 1 of ${practicePhotos.length}: ${featured.caption}`}>
            <img src={featured.src} alt={featured.alt} width={featured.width} height={featured.height} loading="lazy" decoding="async" />
            <span className="practice-gallery__expand"><Expand size={18} aria-hidden="true" /><span>Take a closer look</span></span>
          </button>
          <div className="practice-gallery__feature-copy">
            <span className="practice-gallery__number">01 / OUR PRACTICE</span>
            <h3>A warm welcome.<br />A calming space.</h3>
            <span className="practice-gallery__rule" />
            <p>Soft lighting, warm wood and thoughtful details. A little look around before we welcome you in person.</p>
            <a href="#practice-photo-collection">Explore the gallery <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>

        <div className="practice-gallery__collection-heading" id="practice-photo-collection">
          <h3>Inside our practice</h3>
          <span>{practicePhotos.length} photographs · Select a photo to explore</span>
        </div>
        <div className="practice-gallery__masonry">
          {practicePhotos.slice(1).map((photo, index) => (
            <button key={photo.src} className="practice-gallery__tile" onClick={() => setActiveIndex(index + 1)} aria-label={`View photo ${index + 2} of ${practicePhotos.length}: ${photo.caption}`}>
              <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
              <span className="practice-gallery__tile-caption"><span>{photo.caption}</span><Expand size={17} aria-hidden="true" /></span>
            </button>
          ))}
        </div>
        <p className="practice-gallery__closing">Thoughtfully designed. Personally welcoming. <span>518 Dental, Rochdale.</span></p>
      </div>

      <Dialog.Root open={active !== null} onOpenChange={(open) => { if (!open) setActiveIndex(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="practice-lightbox-backdrop" />
          <Dialog.Content className="practice-lightbox" onKeyDown={(event) => {
            if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
            if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
          }}>
            <Dialog.Description className="sr-only">Explore our practice photographs. Choose a thumbnail or use the arrow keys. Press Escape to close.</Dialog.Description>
            {active && <>
              <header className="practice-lightbox__header">
                <div className="practice-lightbox__heading">
                  <p className="practice-lightbox__eyebrow">518 Dental <span /> The practice collection</p>
                  <Dialog.Title className="practice-lightbox__title">{active.caption}</Dialog.Title>
                </div>
                <div className="practice-lightbox__actions">
                  <p className="practice-lightbox__counter" aria-live="polite" aria-atomic="true"><strong>{String((activeIndex ?? 0) + 1).padStart(2, "0")}</strong><span>/ {practicePhotos.length}</span></p>
                  <Dialog.Close className="practice-lightbox__close" aria-label="Close gallery"><span>Close</span><X size={18} aria-hidden="true" /></Dialog.Close>
                </div>
              </header>
              <div className="practice-lightbox__stage">
                <img key={active.src} className="practice-lightbox__image" src={active.src} alt={active.alt} width={active.width} height={active.height} />
                <button className="practice-lightbox__arrow practice-lightbox__arrow--previous" onClick={() => move(-1)} aria-label="Previous photograph"><ArrowLeft size={22} aria-hidden="true" /></button>
                <button className="practice-lightbox__arrow practice-lightbox__arrow--next" onClick={() => move(1)} aria-label="Next photograph"><ArrowRight size={22} aria-hidden="true" /></button>
              </div>
              <footer className="practice-lightbox__footer">
                <div className="practice-lightbox__collection-label"><span>A little look around</span><span>Choose a view below</span></div>
                <div className="practice-lightbox__thumbnails" aria-label="Choose a practice photograph">
                  {practicePhotos.map((photo, index) => (
                    <button key={photo.src} ref={(node) => { thumbnailRefs.current[index] = node; }} className="practice-lightbox__thumbnail" aria-label={`Show photograph ${index + 1}: ${photo.caption}`} aria-current={activeIndex === index ? "true" : undefined} onClick={() => setActiveIndex(index)}>
                      <img src={photo.src} alt="" width={photo.width} height={photo.height} loading="lazy" />
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </button>
                  ))}
                </div>
              </footer>
            </>}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
