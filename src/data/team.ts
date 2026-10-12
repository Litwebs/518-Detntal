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
    name: "Dr Zara Ashraf",
    role: "Dentist",
    gdc: "270720",
    short:
      "Zara graduated from the University of Liverpool in 2017 and has advanced training in implant, restorative and aesthetic dentistry.",
    full: "Dr. Zara graduated from the University of Liverpool with a BDS in 2017. Since then, she has become a member of the Royal College of Physicians and Surgeons Glasgow and pursued her passion for Oral Surgery and Restorative dentistry, having completed a Master’s in Dental Implantology with Distinction, as well as a PGDip in Restorative and Implant Dentistry. She also holds a PGCert in Implant dentistry, another in Aesthetic and Restorative Dentistry and completed a course in Foundation and Advanced Anti-wrinkle treatment in 2019; enabling her to treat patients with head and neck concerns.\n\nWithin the practice, Dr. Zara also enjoys carrying out general dentistry and alignment of teeth with the use of clear aligner systems such as Invisalign and SmileWhite. Zara values communication to build strong relationships based on trust with both colleagues and patients alike, creating a comfortable and supportive clinic environment for all.\n\nDr. Zara’s professional dedication to keep up with the latest developments in Implant Dentistry have led her to complete numerous courses within the field, including same day full arch rehabilitation with dental implants as well as sinus lifts and guided bone regeneration techniques. She has recently started to mentor other clinicians starting out in Implant Dentistry, helping them to plan and carry out surgery.\n\nOutside of the clinic, Dr. Zara enjoys playing football and padel regularly, as well as travelling and exploring other countries with her family.",
  },
  {
    name: "Dr Hassan Adnan",
    role: "Dentist",
    gdc: "277472",
    image: hassanImage,
    short:
      "Hassan qualified from Plymouth University in 2018 and has a particular interest in cosmetic dentistry and smile makeovers.",
    full: "Dr Hassan qualified from Plymouth University Peninsula Dental School in 2018 and has since gained experience in both hospital and general dental practice. He completed a year as a Senior House Officer in Oral and Maxillofacial Surgery, developing valuable skills in managing complex dental and surgical cases.\n\nHe now provides a full range of NHS and private treatments in general practice and continues to expand his knowledge through postgraduate training.\n\nDr Hassan has a particular interest in cosmetic dentistry and smile makeovers, using facially driven smile design and digital technology to achieve natural, minimally invasive results.\n\nKnown for his calm and friendly manner, he is committed to making patients feel comfortable and at ease.\n\nHe is also further developing his skills in dental implantology with the BAIRD Academy.\n\nOutside of dentistry, Dr Hassan enjoys time with his family, staying active, and supporting Liverpool FC.",
  },
  {
    name: "Dr Shahzaib Siddiqui",
    role: "Dentist",
    gdc: "318897",
    short:
      "Shahzaib graduated with honours from the University of Manchester and has a strong interest in endodontics and preserving teeth.",
    full: "Dr. Shahzaib Siddiqui, a graduate from The University of Manchester with Honors in Dental Surgery, who went on to complete his professional training in Leicester. He is a highly dedicated and passionate dental professional committed to providing exceptional patient care, consistently prioritising the individual needs and preferences of his patients throughout their treatment. Dr. Siddiqui is particularly adept at preserving teeth that might otherwise be lost and demonstrates a strong interest in endodontic procedures, having pursued advanced training to refine his expertise in root canal treatment.",
  },
  {
    name: "Dr Bilal Afzal",
    role: "Dentist",
    gdc: "305693",
    short:
      "Bilal graduated from the Medical University of Plovdiv in 2022 and has a keen interest in oral surgery and conscious sedation.",
    full: "Dr Bilal Afzal graduated from Medical University of Plovdiv in 2022 before obtaining registration with the General Dental Council. Since qualifying, he has worked across a variety of practices, providing a wide range of general dental treatments while continually developing his clinical skills through postgraduate education.\n\nDr Afzal is a caring and dedicated clinician who is passionate about delivering high-quality, patient-centred care. He takes the time to understand each patient’s individual needs, ensuring they feel listened to, well informed and comfortable throughout their treatment journey.\n\nHe enjoys all aspects of general dentistry and finds it particularly rewarding to help patients out of pain and restore their oral health and confidence. He has a keen interest in oral surgery and is currently undertaking a Postgraduate Diploma in Oral Surgery, alongside advanced training in conscious sedation, enabling him to provide safe, comfortable care for anxious patients and those requiring more complex treatment.\n\nCommitted to lifelong learning, Dr Afzal regularly attends postgraduate courses and clinical education programmes to ensure his patients benefit from the latest evidence-based techniques and advances in modern dentistry.\n\nOutside of dentistry, Dr Afzal enjoys hiking, playing padel, travelling, and spending quality time with family and friends. He proudly admits to being a bit of a foodie, always on the lookout for new places to enjoy great cuisine.",
  },
  {
    name: "Dr Faiza Anjum",
    role: "Dentist",
    gdc: "296160",
    short:
      "Faiza qualified from the University of Manchester in 2021 and is passionate about making every visit relaxed and positive.",
    full: "Dr Faiza Anjum qualified in 2021 from The University of Manchester.\n\nFaiza’s priority is ensuring every patient has a positive and relaxed experience from the moment they walk through the door. Faiza enjoys treating patients of all ages, with a particular interest in helping those who feel anxious about dental treatment to try and make every appointment as comfortable and stress-free as possible.\n\nWhen she’s not at work you'll usually find her caring for her houseplants, planning her next travel adventure or enjoying quality time with family.",
  },
];
