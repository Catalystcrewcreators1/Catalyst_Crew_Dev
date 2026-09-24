
CATALYST CREW
DEV COMMUNITY
WEBSITE PRODUCT REQUIREMENTS DOCUMENT
LEARN  •  BUILD  •  COLLABORATE  •  INNOVATE
Clean / Minimal / Fast / Community-first
Domain: catalystxcrew.in
Version 1.0  |  September 2026
 
1. Document Control
Item	Specification
Product	Catalyst Crew Developer Community Website
Product type	Community + Events + Showcase + Partnerships ecosystem
Domain	catalystxcrew.in
Primary users	College students, early-career developers and builders
Secondary users	Startups, SaaS, developer-tool companies, hiring teams and brands
Primary goal	Turn visitors into active community members and event participants
Secondary goal	Create a professional company partnership funnel
Design	Black + Cream + White + Neutral; clean, minimal, premium
Stack	Next.js + TypeScript + Tailwind CSS; static-first
Hosting	Cloudflare Pages; Workers only where dynamic functionality is needed
Status	Product specification for design and development

2. Executive Summary
Catalyst Crew's website is the digital home of a developer community built around a simple ecosystem: developers discover opportunities, join the community, learn, build, compete, showcase work and connect with companies.
The website should feel like a premium developer brand—not a generic college club page or an over-engineered SaaS dashboard. It should be calm, sharp, fast, editorial, trustworthy and highly usable.
CORE PRODUCT LOOP
DISCOVER → JOIN → LEARN → BUILD → COMPETE → SHOWCASE → CONNECT → GET OPPORTUNITIES

3. Product Vision, Mission & Promise
3.1 Vision
Make Catalyst Crew the place where a student developer discovers the next thing they can build, compete in, learn from or become part of.
3.2 Mission
To build a community where developers learn together, build real-world projects, collaborate with each other, and connect with opportunities that help them grow.
3.3 Brand Promise
•	Practical over purely theoretical.
•	Builders over passive audiences.
•	Community over isolated learning.
•	Opportunities over empty engagement.
•	Real projects and outcomes over vanity metrics.
4. Product Goals & Non-Goals
Goals
•	Explain Catalyst Crew within the first screen.
•	Drive visitors to join the WhatsApp community.
•	Make events easy to discover and understand.
•	Send registration traffic to official external platforms such as Unstop.
•	Showcase community projects and builders.
•	Create a professional partnership funnel.
•	Build credibility through team, events, projects and verified partners.
•	Stay fast on mobile and low-bandwidth networks.
•	Keep event/project content easy to update.
Non-Goals for V1
•	No complex member dashboard.
•	No custom event-registration engine.
•	No internal social network/chat.
•	No full LMS/course platform.
•	No unnecessary database for static content.
•	No heavy 3D experience that harms performance.
5. Target Users & Personas
Persona	Need	Primary CTA	Success signal
Student Developer	Projects, events, peers, skills, opportunities	JOIN THE CREW	Joins / participates
Hackathon Builder	Challenges, teams, deadlines, showcases	EXPLORE EVENTS	Registers / submits
Early-Career Developer	Networking, projects, career opportunities	EXPLORE COMMUNITY	Returns / applies
College Organizer	Collaboration, events, speakers, reach	PARTNER WITH US	Starts collaboration
Tech Company / SaaS	Developer reach, activation, hiring	PARTNER WITH US	Inquiry / activation
Brand / Sponsor	Relevant youth/developer visibility	BUILD WITH US	Campaign/event collaboration

5.1 Jobs To Be Done
•	Find a useful technical event quickly.
•	Join a relevant developer peer group.
•	Turn learning into practical projects.
•	Get work discovered and recognized.
•	Reach student developers through a professional channel.
•	Start a low-friction collaboration with Catalyst Crew.
6. Information Architecture & Pages
Route	Purpose	Priority
/	Main brand and conversion experience	P0
/about	Mission, vision, beliefs, team	P0
/events	Event/quest discovery	P0
/events/[slug]	Event details + external registration	P0
/community	Membership value + join flow	P0
/showcase	Project/build showcase	P0
/partners	Company partnership proposition	P0
/contact	General + partnership inquiries	P0
/opportunities	Jobs, internships and programs	P1
/resources	Guides, tools and learning resources	P1
/blog	Articles and community stories	P1
/crew	Team and leadership	P1
/faq	Common questions	P1
/code-of-conduct	Community standards	P1
/privacy	Privacy policy	P0
/terms	Terms	P0

6.1 Navigation
•	Desktop: Logo | Home | About | Events | Community | Showcase | Partners | More ▾ | JOIN THE CREW.
•	More menu: Opportunities, Resources, Blog, Crew, FAQ, Contact.
•	Mobile: compact header + accessible menu; JOIN THE CREW remains prominent.
7. Design System
Token	Value	Use
Ink Black	#111111	Primary dark surfaces and navigation
Soft Black	#1A1917	Cards / dark panels
Warm Cream	#F4EFE6	Primary light background
White	#FFFFFF	Cards and high-contrast text
Neutral Gray	#6F6A63	Secondary text
Light Neutral	#E8E2D8	Borders / dividers
Catalyst Red	#D83A35	Accent, CTA, active states

7.1 Design Rules
•	Black and cream carry most of the UI.
•	White creates clarity and breathing room.
•	Neutral gray handles secondary information.
•	Red is an accent, not a full-page background.
•	Avoid blue/purple SaaS gradients.
•	Avoid excessive neon and glassmorphism.
•	Use strong whitespace and thin borders.
•	Use medium-radius cards, not everything as a pill.
•	Use accessible contrast.
7.2 Typography
•	Display: Space Grotesk / Sora or another open-source geometric sans.
•	Body: Inter or equivalent open-source sans.
•	Labels: uppercase, compact and slightly letter-spaced.
•	Do not use Minecraft's proprietary font or copyrighted game assets.
8. Home Page PRD
Hero
•	Eyebrow: DEV COMMUNITY
•	Headline: BUILD WHAT'S NEXT
•	Copy: A community for developers, builders, innovators and creators.
•	Primary CTA: JOIN THE CREW
•	Secondary CTA: EXPLORE EVENTS
•	Optional status: WORLD LOADED / COMMUNITY ONLINE
•	Visual: original abstract/voxel-inspired developer environment, not copied game assets.
Choose Your Path
•	BUILDER — Learn. Code. Ship. → Join Community
•	COMPETITOR — Hackathons. Challenges. Competitions. → Explore Events
•	PARTNER — Build with the next generation. → Partner With Us
What Is Catalyst Crew?
•	“Catalyst Crew is a developer community built for people who don't just consume technology — they build with it.”
•	Learn / Build / Collaborate / Compete / Innovate
Community Journey
•	Discover → Join → Learn → Build → Compete → Showcase → Connect → Grow
Current Quests
•	Event cards from a single data/config source.
•	Show image, title, status, date, mode, eligibility, team size/prize when relevant.
•	Registration CTA can open Unstop or another official platform.
Builder Showcase Preview
•	Show 3–6 featured builds with builders, stack and outcome.
•	CTA: VIEW ALL BUILDS.
Partners
•	Headline: BUILD WITH US.
•	Explain partnership value before asking for sponsorship.
•	CTA: PARTNER WITH CATALYST CREW.
Final CTA
•	YOUR BUILD HASN'T STARTED YET.
•	JOIN CATALYST CREW — Learn • Build • Collaborate • Innovate.
9. About Page PRD
•	Who We Are
•	Mission
•	Vision
•	Why Catalyst Crew Exists
•	What We Believe
•	Learn • Build • Collaborate • Innovate
•	Community Journey
•	What We're Building
•	Founding Team
•	Final CTA
10. Events Page PRD
•	Hero: CURRENT QUESTS
•	Upcoming / Live / Past
•	Hackathons
•	Workshops
•	Challenges
•	Competitions
•	Category filters
•	Archive
11. Event Detail PRD
•	Hero + registration CTA
•	About
•	Why Participate
•	Eligibility
•	Problem Statements / Challenges
•	Timeline
•	Rounds
•	Prizes
•	Judging Criteria
•	Rules
•	Mentors
•	Judges
•	Partners
•	FAQs
•	Final Registration CTA
12. Community Page PRD
•	Why Join
•	What Members Get
•	Developer Network
•	Hackathons
•	Workshops
•	Project Collaboration
•	Team Formation
•	Mentorship
•	Opportunities
•	Community Guidelines
•	WhatsApp CTA
•	Instagram CTA
13. Showcase Page PRD
•	Featured Builds
•	Student Projects
•	Hackathon Projects
•	Community Projects
•	Open Source Projects
•	Category filters
•	Project cards
•	GitHub + live demo where available
•	Future: Submit Project
14. Partners Page PRD
•	Hero: BUILD WITH US.
•	Why Partner
•	What Companies Get
•	Technology Partner
•	Event Partner
•	Community Partner
•	Knowledge Partner
•	Prize Partner
•	Hiring Partner
•	Media / Content Partner
•	Merchandise Partner
•	Collaboration Formats
•	Connect → Align → Activate → Measure → Scale
•	Partner inquiry form
•	Final CTA
15. Opportunities Page PRD
•	Internships
•	Jobs
•	Hackathons
•	Grants
•	Fellowships
•	Open-source programs
•	Developer programs
•	Campus opportunities
•	Partner opportunities
•	Filters by category, technology and deadline
16. Resources Page PRD
•	Learning resources
•	Hackathon guides
•	Project ideas
•	Developer roadmaps
•	Developer tools
•	Templates
•	Starter kits
•	Tutorials
17. Blog Page PRD
•	Technology
•	AI
•	Web Development
•	Blockchain
•	Hackathons
•	Career
•	Developer Stories
•	Community Stories
•	Startup/Product building
18. Crew Page PRD
•	Founder
•	Core Team
•	Community
•	Technical
•	Operations
•	Creative
•	Professional short bios
19. Contact Page PRD
•	General inquiry
•	Partnership
•	Event collaboration
•	Hiring
•	Media
•	Community
•	Email/social links
20. Legal & Trust Pages PRD
•	FAQ
•	Code of Conduct
•	Privacy Policy
•	Terms
•	Community Guidelines
21. Founding Team
Person	Role
Arpit	Founder & CEO
Ashwin	Co-Founder & CTO
Samriddhi	Co-Founder & CCO — Chief Community Officer
Aviral	Founding Member & COO — Chief Operations Officer

22. Functional Requirements
ID	Requirement	Priority
FR-01	Responsive mobile/tablet/desktop experience	P0
FR-02	Accessible global navigation + mobile menu	P0
FR-03	Reusable event listing and status system	P0
FR-04	Reusable event detail template	P0
FR-05	External registration CTA support	P0
FR-06	WhatsApp community join CTA	P0
FR-07	Partner inquiry form	P0
FR-08	Project showcase listing	P0
FR-09	SEO metadata per route	P0
FR-10	Open Graph/social metadata	P1
FR-11	Analytics events	P1
FR-12	Event filtering	P1
FR-13	Blog/resource content model	P1
FR-14	Project submission workflow	P2
FR-15	Member profiles/dashboard	P2

23. UX Requirements
•	Visitor understands Catalyst Crew in 5–10 seconds.
•	Primary CTA visible without scrolling on mobile/desktop.
•	Important event information is scannable.
•	External registration is clearly labeled.
•	Forms use short labels and helpful validation.
•	All interactive elements have visible focus/hover states.
•	Keyboard navigation works.
•	Respect prefers-reduced-motion.
24. Performance Requirements
Area	Requirement
Architecture	Static-first wherever possible
Images	WebP/AVIF, responsive sizing, lazy loading below fold
Fonts	Optimize or self-host; avoid excessive families
JavaScript	Keep client components limited to interactive areas
Animation	Transform/opacity-first; avoid heavy continuous 3D
Third-party scripts	Minimal and deferred
Caching	Long cache for versioned static assets
Goal	Strong Core Web Vitals / Lighthouse performance

25. Recommended Free & Fast Tech Stack
Layer	Technology	Reason
Framework	Next.js + TypeScript	Routing, SEO, React ecosystem, static export
Styling	Tailwind CSS	Fast, consistent design system
Components	shadcn/ui + Radix primitives as needed	Accessible reusable components
Animation	Framer Motion	Selective, polished micro-interactions
Icons	Lucide React	Open-source and consistent
Content V1	Typed TypeScript/JSON data	No CMS/database needed for core pages
Hosting	Cloudflare Pages	CDN/static hosting + Git deployment
Serverless	Cloudflare Workers	Only for dynamic form/API needs
Database future	Cloudflare D1 or Turso	Serverless SQL when persistence is needed
Analytics	Cloudflare Web Analytics / privacy-conscious analytics	Lightweight measurement
Version control	GitHub	Source control + deployment integration

25.1 Architecture Principle
Start static. Add backend only where it creates real product value. This keeps the site fast, free/low-cost and easier to maintain.
25.2 Current Free-Tier Reference
Service	Current documented allowance / note	Catalyst Crew use
Cloudflare Pages	Static asset requests are free and unlimited	Primary hosting
Cloudflare Workers	Free plan: 100,000 requests/day	Forms/API only when needed
Cloudflare D1	5M rows read/day; 100K rows written/day; 5GB storage	Optional future database
Turso	Free: 100 DBs; 5GB; 500M rows read/month; 10M written/month	Alternative future database

Free-tier limits can change. Verify limits before launch and load-test high-volume workflows.
26. Technical Architecture
•	Next.js App Router + TypeScript.
•	Tailwind CSS + reusable UI components.
•	Static event/project data in typed files for V1.
•	Static export for pages that do not require server features.
•	Cloudflare Pages from GitHub.
•	Optional Cloudflare Worker for contact/partner forms.
•	Optional D1/Turso only after persistent data is justified.
26.1 Event Data Model
Field	Type
slug	string
title	string
status	upcoming/live/ended
date	date/string
mode	online/offline/hybrid
eligibility	string
teamSize	string
prize	string
description	string
registrationUrl	URL
image	path/URL

26.2 Project Data Model
Field	Type
slug	string
name	string
builders	array
description	string
problem	string
solution	string
stack	array
githubUrl	URL
demoUrl	URL
image	path/URL
category	string

27. SEO Requirements
•	Unique title/meta description per route.
•	Semantic heading hierarchy.
•	Open Graph and social metadata.
•	Canonical URLs.
•	Sitemap.xml and robots.txt.
•	Structured data where appropriate for events/articles.
•	Clean URLs.
•	Meaningful image alt text.
•	Important content should not be hidden exclusively behind client-side JS.
Suggested title: Catalyst Crew — Developer Community | Learn • Build • Collaborate • Innovate
Suggested description: Catalyst Crew is a developer community for builders, learners and innovators. Discover events, projects, challenges and opportunities.
28. Accessibility Requirements
•	Keyboard navigable controls.
•	Visible focus states.
•	Semantic landmarks.
•	Accessible form labels and errors.
•	Sufficient color contrast.
•	Reduced-motion support.
•	Do not communicate status through color alone.
•	Appropriate alt text.
29. Security & Privacy
•	HTTPS only.
•	No secrets in client-side code.
•	Environment variables for secrets.
•	Server-side validation/sanitization for forms.
•	Rate-limit public endpoints.
•	Bot protection where needed.
•	Collect only necessary personal data.
•	Privacy Policy and Terms before collecting personal information.
30. Analytics & Conversion
Event	Meaning
join_crew_click	Community intent
event_view	Event discovery
event_register_click	High-intent action
partner_cta_click	B2B interest
partner_form_submit	Partnership lead
project_view	Builder/content engagement
social_click	Community navigation
scroll_depth	Content engagement

NORTH STAR METRIC
Monthly Active Builders (MAB): users who complete a meaningful builder action in a month. Passive follows/page views should not count.

31. Content & Brand Voice
•	Confident, clear and builder-focused.
•	Short sentences and strong verbs.
•	Avoid corporate jargon.
•	Avoid empty hype claims.
•	Use developer language where it adds meaning.
•	Use specific CTAs.
•	Use verified statistics only.
•	Never fabricate partner logos, community counts or outcomes.
32. Motion & Interaction
•	Subtle page transitions.
•	Controlled hero ambience.
•	Small card hover movement.
•	Clear button feedback.
•	Restrained scroll reveals.
•	CSS/Framer Motion before Three.js.
•	No perpetual heavy WebGL background.
•	Respect reduced-motion.
33. Reusable Component Library
•	Navbar
•	MobileMenu
•	Button
•	SectionHeader
•	Badge
•	EventCard
•	EventStatus
•	ProjectCard
•	PartnerTypeCard
•	TeamCard
•	CTASection
•	FilterBar
•	FAQAccordion
•	FormField
•	Footer
•	SocialLinks
•	Breadcrumbs
34. Content Management Strategy
V1 should not require a full CMS. Events, projects and core content can be maintained in typed configuration/data files. When update frequency becomes high enough, migrate the same models to a headless CMS or database without redesigning the public UI.
35. Development Roadmap
Phase	Scope	Outcome
Phase 0	Brand tokens, IA, content inventory, wireframes	Approved foundation
Phase 1	Home, About, Events, Community, Partners, Showcase, Contact	Launch-ready V1
Phase 2	Opportunities, Resources, Blog, Crew, FAQ	Content ecosystem
Phase 3	Project submission, builder profiles, member dashboard	Community product layer
Phase 4	Team formation, leaderboards, matching	Network/platform layer

36. MVP Acceptance Criteria
•	All P0 pages responsive and production-ready.
•	Primary CTA works.
•	WhatsApp join flow works.
•	Event cards/detail pages use reusable data.
•	External registration links are correct.
•	Partner form validates and submits.
•	Showcase renders correctly.
•	SEO metadata exists on public routes.
•	404, Privacy and Terms pages exist.
•	Keyboard navigation works for core flows.
•	Images/fonts optimized.
•	No production console errors.
•	Production build succeeds.
•	Performance and accessibility are tested on representative mobile/desktop devices.
37. QA Test Matrix
Area	Test
Responsive	320, 375, 768, 1024, 1440px+
Navigation	All links, mobile menu, browser back/forward
Events	Upcoming/live/ended states and external registration
Forms	Required fields, invalid input, success/error states
Accessibility	Keyboard, focus, labels, contrast
SEO	Metadata, sitemap, robots, canonical
Performance	Cold load, cached load, image-heavy page
Security	Validation, rate limits, secret exposure
Browser	Chrome, Firefox, Safari, Edge; Android/iOS representative browsers

38. Future Product Expansion
•	Member authentication.
•	Builder profiles.
•	Project submission and moderation.
•	Team formation.
•	Community challenges.
•	Leaderboards.
•	Opportunity matching.
•	Partner dashboards.
•	Event management dashboard.
•	Notifications.
•	Mentor network.
•	Open-source collaboration hub.
PRODUCT PRINCIPLE
Do not build platform complexity before repeated community behavior proves the need.

39. Product Risks & Mitigation
Risk	Impact	Mitigation
Too much visual experimentation	High	Restrained motion + mobile performance testing
Website becomes a brochure	High	Prioritize events, community CTA and showcase
Too many routes at launch	Medium	Ship P0 routes first
Fake/weak social proof	High	Use verified numbers and partner proof only
Form spam	Medium	Validation, rate limiting, bot protection
Stale content	High	Centralized event/project data + ownership
Backend overengineering	High	Static-first architecture

40. Developer Handoff Checklist
1.	Create GitHub repository and branch strategy.
2.	Initialize Next.js + TypeScript + Tailwind.
3.	Create black/cream/white/neutral design tokens.
4.	Build global layout, navbar and footer.
5.	Build reusable cards, CTA and form components.
6.	Implement Home.
7.	Implement About, Community, Events and Partners.
8.	Implement reusable event detail route.
9.	Implement Showcase.
10.	Implement Contact and partner form.
11.	Add SEO metadata, sitemap and robots.
12.	Optimize images and fonts.
13.	Run responsive/accessibility QA.
14.	Run production build.
15.	Deploy to Cloudflare Pages.
16.	Connect catalystxcrew.in.
17.	Configure analytics.
18.	Complete content/link audit.
41. Technical References
•	Next.js Static Exports — https://nextjs.org/docs/pages/guides/static-exports
•	Cloudflare Pages — Next.js Static Deployment — https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
•	Cloudflare Workers Pricing — https://developers.cloudflare.com/workers/platform/pricing/
•	Cloudflare Workers Limits — https://developers.cloudflare.com/workers/platform/limits/
•	Turso Pricing — https://turso.tech/pricing
42. Final Product Definition
CATALYST CREW WEBSITE
A fast, minimal, premium developer-community website that connects people to the next thing they can learn, build, compete in, showcase or collaborate on.

The launch version should be intentionally lightweight: excellent information architecture, strong visual identity, clear CTAs, fast pages, reusable content models and simple deployment. The platform can then evolve into a real builder network as usage validates each next feature.
