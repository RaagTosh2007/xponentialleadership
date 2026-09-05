# Website Refresh — Aligned to the 2026 Company Overview

Goal: keep what already works on the site (dark navy + gold look, founder cards, testimonials, case study, Knowledge Hub, contact form) and re-point the messaging at the sharper positioning in the deck: a boutique, dual-market (UK + India) leadership practice built on four pillars, with fractional CXO offerings.

## What the visitor will see

**1. Top banner (Hero)**
- Headline built on "Bold, boundaryless leadership development — grounded in India, connected to the world."
- Service strip under it: Leadership | Executive Coaching | HR & Tech Advisory | Fractional CXOs
- Location line: Offices London, UK • Bengaluru, India | Development Centres: Bengaluru • Coimbatore
- Two buttons: Book a conversation / See our services

**2. New "Why Xponential Leadership" band (new section)**
- The four proof numbers as large stat callouts: 23+ years, 30+ companies, 1,500+ coaching hours, 10,000+ people impacted
- Four short cards below: dual UK/India base (no visa sponsorship needed), credentialed coaches and certified facilitators, four-pillar expert team with a global partner network, sector range boards recognise (aerospace, engineering, renewable energy, enterprise software, financial services, retail, GCCs, start-ups)

**3. Services, restructured into four pillars**
Replaces the current six loosely-grouped cards with the deck's structure:
- Organisation Development — vision & mission sessions, talent review & succession, leadership team effectiveness, change & agility, culture transformation
- Leadership — leadership springboards, assessment & development, journey design & delivery, leadership coaching
- Capabilities & Culture — capability frameworks, L&D strategy & architecture, performance culture, talent pipeline
- Start-Up / CoE · Fractional CXO — business model canvas, core team set-up, go-to-market, talent acquisition, HCM implementation

The existing client testimonials, the Financial Services Integration case study, and the keynote-sessions block are kept and re-attached to the matching pillar so nothing valuable is lost. A short "Keynotes & Sessions" item stays alongside the four pillars.

**4. Founders section (refined, same two-column layout)**
- Titles updated to the deck wording: Harini Papanna — Founder & Managing Partner, Technology & Strategy; Satya Kumar — Founder & Head, Leadership & HR Practice
- Bios replaced with the deck bios
- Each card gains a "Services" line (what each can be engaged for, including Fractional CTO / interim CLO / Chief Talent & Culture Officer / Independent Director) and a "Select clients" line
- Certifications updated to the deck lists (Satya gains ICF PCC & Hogan Coach, DDI Certified Leadership Facilitator, PDI 360, Independent Director – IICA, CII Business Excellence Assessor, B.Sc.; Harini's list stays and gains her IIM-B and B.E. entries as-is)
- A small "Beyond work" line per founder (Everest Base Camp, mentoring, school governor roles) — adds warmth without clutter

**5. New Clients section**
- Named clients as clean text chips: CreditAccess Grameen, Swiggy, Ramco, MiQ, HCLTech, Booking Holdings, Adobe, Avanti Feeds, Agratas (Tata), Collins Aerospace, Tube Investments, plus the wider "made a positive difference at" list in a lighter, smaller row
- Text chips only, consistent with the earlier decision to drop logo placeholders

**6. New Collaborators & Partners strip**
- Hogan, The Myers-Briggs Company, Google Workspace, REDD Network as text chips, with the AVP testimonial quote alongside

**7. Contact & footer**
- Both phone numbers: +91 96061 10860 (India) and +44 7443 731001 (UK)
- Both emails, website, offices and development centres
- Footer navigation updated to the new section names

**8. Page title and description** updated to match the new positioning.

## Open points to confirm

- The deck lists Harini as "Founder & Managing Partner" while the site currently says "Co-Founder". The plan follows the deck. Say the word if you want to keep "Co-Founder".
- The deck's testimonial credits "a German Bank"; the site currently says "European Banking firm". The plan uses the deck's wording.
- Client logos are shown as names, not logo images, unless you send approved logo files.

## Technical notes

- New components: `WhyUs.tsx`, `Clients.tsx`, `Partners.tsx`; rewrite of `Services.tsx` and `About.tsx`; edits to `Hero.tsx`, `Contact.tsx`, `Footer.tsx`, `Header.tsx` nav, `Index.tsx` section order, and `index.html` metadata.
- Section order: Hero → Why Us → Services (4 pillars) → Founders → Clients → Partners/Testimonials → Coaching → Knowledge Hub → Contact → Footer.
- Existing design tokens reused throughout; no new colour values, no hardcoded colour classes.
- No backend, no publishing.
