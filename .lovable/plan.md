

## 518 Dental — Premium Website Redesign

### Design System
- **Fonts**: Cormorant Garamond (headings), Inter (body) via Google Fonts
- **Colors**: #FFFFFF (white), #FAF7F2 (warm off-white), #0B0B0C (deep black), #C9A24D (gold accent), #E5E7EB (borders)
- **Cards**: 16px border-radius, soft diffused shadows, hover lift (4px translateY + gold glow)
- **Spacing**: 80–120px between major sections, generous padding throughout
- **Animations**: Fade-up on scroll (400ms), smooth hover transitions

### Site Structure & Navigation (8 pages matching current site)

**Header** (sticky, white): Logo left → Nav links (Home, About, Meet The Team, Patient Journey, Treatments, Fees, Dental Referral, Contact) → Gold "Book / Enquire" CTA + phone icon

**Mobile**: Hamburger menu + persistent bottom action bar with Call, Book, Directions buttons

**Footer**: Address (518A Bury Rd, Rochdale OL11 4DQ), phone (01706 527127), email (admin@518dental.co.uk), opening hours, partner logos carousel (CQC, GDC, Invisalign, Smile Fast, Valplast, Avant Garde, Boutique)

---

### Page 1: Home (`/`)
1. **Hero**: Full-width clean dental imagery background, headline "Family Dental Care Delivered With a Smile", intro paragraph from current site, 3 CTAs (Call Now, Book/Enquire, View Treatments)
2. **Trust Bar**: 3 icon cards — Experienced Team, Patient-Focused Care, Modern Practice (drawn from existing wording)
3. **Treatments Preview**: Grid of 10 treatment cards (Examination, Hygiene, Composite Fillings, Crowns & Bridges, Dentures, Root Canal, Composite Bonding & Veneers, Teeth Whitening, Invisalign, Implants) with icons and "Learn More" links
4. **Why Choose 518 Dental**: 4 gold-accented icon cards (NHS & Private treatments, Continuing professional education, Caring relaxed environment, Husband & wife led practice)
5. **Team Preview**: Cards for Lawiza and Sajid with "Meet the Team" CTA
6. **Opening Times + Location**: Map embed (Google Maps for OL11 4DQ) + hours table + "Get Directions" button
7. **Partner Logos**: Scrolling carousel of accreditation logos
8. **CTA Banner**: Dark background "Ready to Book?" section with Call + Enquire buttons
9. **Contact Form**: Name, phone, email, consent checkbox (simulated submit with success toast)

### Page 2: About (`/about`)
- Full about text from current site (passionate team, NHS & private treatments, led by Lawiza and Sajid)
- Practice values section with icon cards
- Partner/accreditation logos

### Page 3: Meet The Team (`/meet-the-team`)
- Team grid cards for Lawiza (Lead Dentist) and Sajid (Lead Dentist) with the bio text from the site
- "Book an Appointment" CTA under each profile
- Click to expand full bio in modal

### Page 4: Patient Journey (`/patient-journey`)
- Step-by-step journey with numbered cards: Initial contact → Assessment (thorough examination, x-rays, oral cancer screening) → Treatment plan discussion → During treatment updates → Post-treatment satisfaction
- All text from current patient journey page preserved verbatim

### Page 5: Treatments (`/treatments`)
- Treatment cards in categories with accordion expand for full descriptions
- Each treatment has its full description text from the current site
- Sticky "Enquire" sidebar on desktop, fixed CTA on mobile
- 10 treatments: Examination, Hygiene, Composite Fillings, Crowns & Bridges, Dentures, Root Canal, Composite Bonding & Veneers, Teeth Whitening, Invisalign, Implants

### Page 6: Fees (`/fees`)
- All pricing tables from current site in elegant card-based layout
- Categories: Independent Fees, Private Cosmetic Dentistry, Invisalign, Lumi Aligners, Avant Garde Composite Bonding, Root Canal, Dentures, Tooth Whitening, Bite Guards, NHS Bands
- All exact prices preserved

### Page 7: Dental Referral (`/dental-referral`)
- Professional referral form (for GDC registered dentists only)
- Fields: Referring dentist name/practice/address/email/phone, Patient name/email/address/phone
- Referral treatment sections: Oral Surgery, Implants, Endodontics, Other
- File upload area (UI only), consent checkbox
- Simulated submit with success state

### Page 8: Contact (`/contact`)
- Practice details: Address, phone (click-to-call), email (click-to-email)
- Opening hours table (Mon-Tue 9-5:30, Wed 9-8, Thu 9-5:30, Fri 8-12:30, Weekends closed)
- Emergency info and disabled access info from current site
- Google Maps embed + "Get Directions" button
- Contact form: Name, phone, email, consent checkbox, simulated submit

### Functional Requirements
- All internal page links work via React Router
- Click-to-call (tel:01onal706527127), click-to-email (mailto:admin@518dental.co.uk)
- Google Maps directions link
- Forms validate and show success toast on submit
- Mobile hamburger menu with smooth slide animation
- Scroll-triggered fade-up animations using Intersection Observer
- Fully responsive (mobile/tablet/desktop)

