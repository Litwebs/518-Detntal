import lawizaImage from "@/assets/doctor-2.png";
import sajidImage from "@/assets/doctor-1.png";
import hassanImage from "@/assets/doctor-3.png";

export type TeamMember = {
  name: string;
  role: string;
  gdc?: string;
  image?: string;
  short: string;
  full: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr Lawiza Kiani",
    role: "Principal Dentist",
    gdc: "100922",
    image: lawizaImage,
    short:
      "Lawiza qualified from the University of Manchester in 2005 and has a particular interest in caring for anxious patients.",
    full: "Lawiza qualified from the University of Manchester in 2005 and has consistently worked within the NHS, carrying out all aspects of general dentistry. She has a particular interest in the management of anxious patients. Lawiza currently divides her time between running the practice and her clinical work.",
  },
  {
    name: "Dr Sajid Malik",
    role: "Principal Dentist",
    gdc: "176706",
    image: sajidImage,
    short:
      "Sajid qualified from the University of Liverpool in 2009 and has advanced training in aligners, restorative and cosmetic dentistry.",
    full: "Sajid qualified from the University of Liverpool in 2009. Since then, he has continued to develop through advanced training in areas including clear aligners, restorative dentistry and cosmetic treatments. Sajid is currently studying for an MSc in Dental Implantology.",
  },
  {
    name: "Dr Zara",
    role: "Dentist",
    short:
      "Zara graduated from the University of Liverpool in 2017 and has advanced training in implant, restorative and aesthetic dentistry.",
    full: "Zara graduated from the University of Liverpool with a BDS in 2017 and is a member of the Royal College of Physicians and Surgeons of Glasgow. Pursuing her passion for oral surgery and restorative dentistry, she completed a Master's in Dental Implantology with Distinction and a PGDip in Restorative and Implant Dentistry. She also holds postgraduate certificates in Implant Dentistry and Aesthetic and Restorative Dentistry, and completed foundation and advanced anti-wrinkle treatment training in 2019. Within the practice, Zara also enjoys general dentistry and aligning teeth with clear aligner systems including Invisalign and SmileWhite. Her commitment to the latest developments in implant dentistry has led her to complete training in same-day full-arch rehabilitation, sinus lifts and guided bone regeneration. She now mentors clinicians who are beginning their implant dentistry training. Outside the clinic, Zara enjoys football, padel and travelling with her family.",
  },
  {
    name: "Dr Hassan Adnan",
    role: "Dentist",
    gdc: "277472",
    image: hassanImage,
    short:
      "Hassan qualified from Plymouth University in 2018 and has a particular interest in cosmetic dentistry and smile makeovers.",
    full: "Hassan qualified from Plymouth University Peninsula Dental School in 2018 and has since gained experience in both hospital and general dental practice. He completed a year as a Senior House Officer in Oral and Maxillofacial Surgery, developing valuable skills in managing complex dental and surgical cases. He now provides a full range of NHS and private general dental treatments and continues to expand his knowledge through postgraduate training. Hassan has a particular interest in cosmetic dentistry and smile makeovers, using facially driven smile design and digital technology to achieve natural, minimally invasive results. Known for his calm and friendly manner, he is committed to helping patients feel comfortable and at ease. He is also developing his dental implantology skills with the BAIRD Academy. Outside dentistry, Hassan enjoys family time, staying active and supporting Liverpool FC.",
  },
  {
    name: "Dr Shahzaib Siddiqui",
    role: "Dentist",
    short:
      "Shahzaib graduated with honours from the University of Manchester and has a strong interest in endodontics and preserving teeth.",
    full: "Shahzaib graduated with honours in Dental Surgery from the University of Manchester before completing his professional training in Leicester. He is a dedicated dental professional committed to exceptional, patient-centred care and consistently prioritises each patient's individual needs and preferences throughout treatment. Shahzaib is particularly skilled in preserving teeth that might otherwise be lost and has a strong interest in endodontics, having pursued advanced training to refine his expertise in root canal treatment.",
  },
  {
    name: "Dr Bilal Afzal",
    role: "Dentist",
    short:
      "Bilal graduated from the Medical University of Plovdiv in 2022 and has a keen interest in oral surgery and conscious sedation.",
    full: "Bilal graduated from the Medical University of Plovdiv in 2022 before obtaining registration with the General Dental Council. Since qualifying, he has worked across a variety of practices, providing a wide range of general dental treatments while continually developing his clinical skills through postgraduate education. Bilal is passionate about high-quality, patient-centred care and takes time to ensure every patient feels heard, informed and comfortable. He finds it especially rewarding to relieve pain and restore patients' oral health and confidence. He is currently undertaking a Postgraduate Diploma in Oral Surgery alongside advanced training in conscious sedation, enabling him to care for anxious patients and those requiring more complex treatment. Outside dentistry, Bilal enjoys hiking, padel, travelling, time with family and friends, and discovering new places to eat.",
  },
  {
    name: "Dr Faiza Anjum",
    role: "Dentist",
    short:
      "Faiza qualified from the University of Manchester in 2021 and is passionate about making every visit relaxed and positive.",
    full: "Faiza qualified from the University of Manchester in 2021. Her priority is ensuring every patient has a positive and relaxed experience from the moment they walk through the door. Faiza enjoys treating patients of all ages and has a particular interest in helping people who feel anxious about dental treatment, making every appointment as comfortable and stress-free as possible. Outside work, she enjoys caring for her houseplants, planning her next travel adventure and spending quality time with family.",
  },
];
