# Website Refresh — Aligned to the 2026 Company Overview

Keep what already works on the site (dark navy + gold look, founder cards, testimonials, case study, Executive Coaching, Knowledge Hub, contact form) and re-point the messaging at the sharper positioning in the deck: a boutique, dual-base (UK + India) practice building sustainable high-performance leadership teams, organised around three service pillars.

## What the visitor will see

**1. Top banner**
- Headline from the deck: "Bold, boundaryless leadership development — grounded in India, connected to the world."
- Positioning strip beneath: High Performance Leadership | Top Talent Development | Capabilities & Culture
- Location line: Office base camp — London, UK • Bengaluru, India | Development Centres — Bengaluru • Coimbatore
- Two buttons: Book a conversation / Explore what we do

**2. "What We Do" — services rebuilt around three pillars**
Replaces today's six loosely grouped cards with the deck's structure, sub-title "From strategy design to embedded, on-the-ground delivery."

- **High Performance Leadership** — Springboards (vision, mission, team charters); Crucible (identity & value clarification, habit formation); Unblocker — coaching for impact (Hogan, FIRO-B, TKI); embedding change at scale (process design, rituals & practices); mentoring ecosystem
- **Top Talent Development** — talent review & succession planning; talent pipeline development; talent actualisation for high-potentials via acceleration coaching and mentoring
- **Capabilities & Culture** — business model canvas; capability assessment & development roadmap; learning architecture; elevating performance management systems; culture audit; psychological safety; coaching for performance; agile

The existing client testimonials, the Financial Services Integration case study, and the keynote-sessions block are kept and re-attached under the matching pillar so nothing valuable is lost.

**3. New "Why Xponential Leadership" band**
- Tagline: "Your trusted partner in building sustainable high-performance leadership teams."
- Four large stat callouts: 45+ years of founding-team experience, 30+ companies, 10,000+ coaching and talent development hours, 50,000+ people positively impacted
- Four supporting cards: global exposure & dual operational base (UK and India, no visa sponsorship needed); credentialed coaches and certified facilitators; expert leaders with a global partner network; depth in building capability for high performance (talent pipelines for expanding IDCs/GCCs, high-potential development, organisation performance systems)

**4. New Clients section**
- Key clients as clean text chips: CreditAccess Grameen, Swiggy, Ramco, MiQ, HCLTech, Booking Holdings, Adobe, Avanti Feeds, Agratas (Tata)
- A lighter, smaller row beneath for the wider "made a positive difference to people at" list from the deck
- Text chips only, consistent with the earlier decision to drop logo placeholders

**5. New Collaborators & Partners strip**
- Hogan Assessments, The Myers-Briggs Company, Google Workspace, REDD Network as text chips, with the AVP testimonial quote alongside

**6. Founders section (same two-column layout, refreshed content)**
- Titles per the deck: Harini Papanna — Managing Partner & Co-Founder; Satya Kumar — Founder & Head, Leadership & HR Practice
- Deck bios replace the current ones
- Each card gains: Experience, Services (what each can be engaged for, including Satya's interim Chief Learning Officer / Chief Talent & Culture Officer / Independent Director), Organizations worked with, Certifications & qualifications, and a short "Beyond work" line
- Satya's certifications updated to the full deck list (ICF PCC & Hogan Coach, DDI Certified Leadership Facilitator, PDI 360 · MBTI · FIRO-B, Independent Director – IICA, CII Business Excellence Model Assessor, B.Sc. Life Sciences, MBA HRM & Marketing IPE, CIPD UK Level 5)
- Languages lines stay as they are today

**7. Contact & footer**
- Both numbers: +91 96061 10860 (India) and +44 7443 731001 (UK)
- Both emails, website, offices (Greater London, UK • Bengaluru, India) and development centres (Bengaluru • Coimbatore)
- Footer and top navigation updated to the new section names

**8. Page title and description** updated to match the new positioning.

## Points to note

- The deck restores "Managing Partner & Co-Founder" for Harini and drops the Fractional CXO pillar and the four-pillar framing from the earlier version — the plan follows this newest deck throughout.
- The deck's testimonial credits "a German Bank"; the site currently says "European Banking firm". The plan uses the deck's wording.
- Client and partner names appear as text, not logo images, unless you send approved logo files.
- Nothing is published; you review it in the preview first.

## Technical notes

- New components: `WhyUs.tsx`, `Clients.tsx`, `Partners.tsx`; rewrite of `Services.tsx` and `About.tsx`; edits to `Hero.tsx`, `Contact.tsx`, `Footer.tsx`, `Header.tsx` nav, `Index.tsx` section order, and `index.html` metadata.
- Section order: Hero → What We Do → Why Us → Clients → Partners/Testimonial → Founders → Executive Coaching → Knowledge Hub → Contact → Footer.
- Existing design tokens reused throughout; no new colour values, no hardcoded colour classes.
- No backend work.
