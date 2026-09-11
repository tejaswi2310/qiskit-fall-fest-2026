# UX & Design Review: Qiskit Fall Fest 2026

## 1. Ten Strongest Things
1. **Premium Dark Aesthetic**: The deep background (`#0F111A`) paired with the vibrant quantum primary (`#6B4EFF`) perfectly hits the "academic yet modern" requirement without feeling like a generic neon template.
2. **Data Integrity & Credibility**: The strict adherence to empty states and "TBD" prevents the site from making false claims. The clear legal disclaimers at the bottom reinforce trustworthiness.
3. **Consistent Vertical Rhythm**: The systematic use of `py-20 md:py-32` across all `Section` components ensures the user experiences a steady, predictable breathing room while scrolling.
4. **Accessible Accordions**: The FAQ section utilizes a custom React component that accurately handles `aria-expanded`, `aria-controls`, and `focus-visible`, offering screen reader support often missed in hackathon sites.
5. **Polished Empty States**: Instead of rendering broken grids or empty white space, the Agenda, Speakers, and Workshops sections gracefully degrade into beautiful, reassuring "Coming Soon" components.
6. **Card Hierarchy**: The `WhyAttend`, `Speakers`, and `Organizers` sections utilize consistent border, surface, and hover elevation tokens that create a unified design language.
7. **Responsive Foundation**: The CSS Grid implementations elegantly collapse from 3 or 4 columns down to 1 column on mobile, prioritizing horizontal space perfectly.
8. **Clear Conversion Path**: The "Register" CTA is strategically placed at the top (Navbar), top-fold (Hero), and absolute bottom (Registration), capturing intent at all scroll depths.
9. **Restrained Micro-interactions**: Hover states scale smoothly, borders illuminate subtly, and accordions interpolate height gracefully, avoiding visually exhausting bouncy animations.
10. **Information Chunking**: The content is highly scannable. Long paragraphs were avoided in favor of bullet points, badges, and distinct typography scales for roles, durations, and skill levels.

---

## 2. Ten Weakest Things
1. **Lack of Active Scroll State**: The sticky navigation does not highlight which section the user is currently viewing. On a long single-page site, this increases cognitive load.
2. **Abrupt Anchor Navigation**: Clicking a navbar link snaps instantly to the section rather than smooth-scrolling, which feels jarring and unpolished.
3. **Mobile CTA Friction**: On mobile, the single-column layout makes the page extremely tall. If a user decides to register halfway down, they have to furiously scroll to the top or bottom.
4. **Repetitive Iconography**: The SVG icons used in the `Who Can Attend` and `Why Attend` sections are standard geometric shapes. They lack a distinct "quantum computing" or scientific flavor.
5. **Generic Hero Background**: Without an official IBM brand asset yet, the Hero relies on a subtle CSS radial blur. It feels clean, but slightly sterile and lacks immediate visual "wow" factor.
6. **"TBD" Copy Tone**: While accurate, rendering literal "TBD (Pending confirmation)" in the Requirements section feels slightly clinical and less welcoming than conversational copy like "Details coming shortly."
7. **Focus State Consistency**: While the FAQ has explicit keyboard focus rings, hover-able cards (like Speakers and Workshops) might rely on default browser outlines which lack visual contrast against the dark background.
8. **Empty State Vertical Bulk**: The empty states for Workshops and Agenda are highly polished, but stacking them consecutively creates a very tall block of "We don't have this yet," which could slightly diminish initial event excitement.
9. **Avatar Fallbacks**: The initial-based avatars for speakers are functional, but a flat color background feels slightly basic compared to a gradient or geometric pattern generation.
10. **Missing "Back to Top"**: Given the extensive length of the one-pager, users reaching the FAQ might want a quick escape hatch back to the hero without using the footer links.

---

## 3. Highest-Priority Improvements
*These actively impact usability and core navigation.*
* **Smooth Scrolling Behavior**: Add `scroll-behavior: smooth` to the global `html` tag to make anchor links feel premium.
* **Intersection Observer Nav**: Implement a hook that detects which section is currently intersecting the viewport and highlights the corresponding Navbar link.
* **Sticky Mobile CTA**: Implement a bottom-fixed "Register" banner that appears on mobile devices when scrolling past the Hero, ensuring the primary conversion action is never more than a thumb-tap away.

---

## 4. Medium-Priority Improvements
*These impact perceived brand polish and visual credibility.*
* **Enhance the Hero Canvas**: Add a subtle, low-opacity CSS noise overlay or a faint, geometric grid pattern to the Hero background to make it feel more engineered and scientific.
* **Refine "TBD" Copywriting**: Update raw "TBD" text across the site to softer, more reassuring phrasing (e.g., "Registration requirements will be announced soon. Check back for updates!").
* **Keyboard Accessibility Audit**: Ensure every actionable card, button, and link has a custom, high-contrast `focus-visible:ring-primary` class to support power users and accessible navigation.

---

## 5. Low-Priority Polish
*These are "nice-to-haves" that elevate the final aesthetic.*
* **Quantum-Themed SVGs**: Swap the generic icons in `Attendees` and `WhyAttend` with custom paths resembling circuits, bloch spheres, waves, and nodes.
* **Gradient Fallback Avatars**: Update the `span` avatar fallback to use a rich CSS gradient (e.g., `bg-gradient-to-br from-primary to-secondary`) rather than a flat surface color.
* **Consolidate Empty States**: If too many sections are empty, consider a singular "Schedule & Speakers dropping soon" super-section until data arrives, rather than 3 individual empty boxes.
