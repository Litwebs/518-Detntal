import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { practicePhotos } from "@/data/practicePhotos";
import "./PracticeGallery.css";

export default function PracticeGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : practicePhotos[activeIndex];
  const move = (direction: number) => setActiveIndex((index) =>
    index === null ? null : (index + direction + practicePhotos.length) % practicePhotos.length,
  );
  const featured = practicePhotos[0];

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

      <Dialog open={active !== null} onOpenChange={(open) => { if (!open) setActiveIndex(null); }}>
        <DialogContent className="practice-gallery__viewer" onKeyDown={(event) => {
          if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
          if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
        }}>
          <DialogTitle className="sr-only">Inside 518 Dental</DialogTitle>
          <DialogDescription className="sr-only">Use the previous and next buttons or arrow keys to browse all photographs. Press Escape to close.</DialogDescription>
          {active && <>
            <img className="practice-gallery__viewer-image" src={active.src} alt={active.alt} width={active.width} height={active.height} />
            <div className="practice-gallery__viewer-controls">
              <button onClick={() => move(-1)} aria-label="Previous photograph"><ArrowLeft size={20} /></button>
              <div aria-live="polite" aria-atomic="true"><p>{active.caption}</p><span>{(activeIndex ?? 0) + 1} / {practicePhotos.length}</span></div>
              <button onClick={() => move(1)} aria-label="Next photograph"><ArrowRight size={20} /></button>
            </div>
          </>}
        </DialogContent>
      </Dialog>
    </section>
  );
}
