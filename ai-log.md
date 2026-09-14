\# AI Use Log



\## Tools used

\- Claude (Anthropic) — setup guidance, content-notes structuring, spelling 

&#x20; corrections, and the implementation prompt below (Corrected by me for errors and corrections).

\- Content used: my own public resume and LinkedIn information, published with 

&#x20; my permission.



\## Prompt 1 — Implementation plan request

Date: 2026-09-14



You are assisting with a small, public static portfolio website.



Project context:

\- Purpose: present my skills and projects to internship and research reviewers.

\- Existing system: a React (create-react-app) portfolio template, forked from 

&#x20; soumyajit4419/Portfolio.

\- Allowed changes: content, styling, and small front-end corrections only.

\- Do not add: a backend, login system, analytics tracker, or external data 

&#x20; collection.



Files likely to change:

\- src/components/Home/Home.js, Home2.js

\- src/components/About/About.js, AboutCard.js, Techstack.js, Toolstack.js

\- src/components/Projects/Projects.js, ProjectCards.js

\- src/components/Footer.js, src/components/Navbar.js

\- src/Assets/ (images, resume PDF)

\- README.md



Acceptance criteria:

1\. The landing page displays "Roshkrishna K Ranjith" and the role 

&#x20;  "Graduate Researcher - AI \& Robotics".

2\. The portfolio contains at least three projects, each with a title and a small

&#x20;  description.

3\. All navigation links move to the correct sections or pages.

4\. The site is readable and usable on a 375px-wide mobile viewport.

5\. No placeholder name, email, resume file, or template image from the original 

&#x20;  author remains.



Constraints:

\- Do not invent education, work history, awards, links, or technical skills. 

&#x20; Use only what is in content-notes.md.

\- Preserve the original MIT license and attribution.

\- Keep the site usable on mobile screens.

\- Maintain readable contrast, keyboard navigation, meaningful link text, and 

&#x20; useful image alternative text.

\- Do not expose private information.



First provide:

1\. A file-by-file implementation plan.

2\. Any assumptions or risks.

3\. A proposed test checklist.

4\. Any questions that must be answered before implementation.



Do not modify files until the plan is reviewed.


##Response 1

Implementation plan

1\. File-by-file

File	Change

Home.js	Show "I'M ROSHKRISHNA K RANJITH". Keep only GitHub (LUCIFER5671) and email links, and give each icon link a readable label. Remove Twitter, Instagram and LinkedIn (your notes have no LinkedIn URL). Remove the template hero illustration and shrink the 50px text padding on mobile.

Type.js	Typing text uses only your notes: "Graduate Researcher - AI \& Robotics", "MS in AI @ University of Michigan", "Graduate Student Research Assistant @ PlayLab".

Home2.js	Rewrite the intro from your summary (U of M, CUSAT ECE, DRDO, Hashraft, Estro Tech). Skills come from your list only. Remove the Blockchain/Rust/Next.js text and the template avatar.

AboutCard.js	Name, Detroit Metropolitan Area, MS in AI (2025–) plus GSRA at PlayLab, Bachelors in ECE from CUSAT (2021–2025). Remove the hobbies and quote, since they aren't in your notes.

About.js	Remove the laptop illustration and the "Tools I use" section (Mac OS and VS Code aren't in your notes). Add Soft Skills as a text list. Possibly add Experience (see Q3).

Techstack.js	Only Python, C++, Java, Oracle SQL, C#, Arduino, Unity, scikit-learn, and DSA as a text item. I checked that icons for all of these are available locally. Also fixes the TypeScript tile that's labelled "Javascript".

Toolstack.js	Delete it (nothing in your notes backs it).

Github.js	Change the username to LUCIFER5671 and make it fit on mobile, or remove it (Q4).

Projects.js	Your 3 projects, with titles and descriptions condensed from your notes. No links, since your notes don't have any.

ProjectCards.js	Show the image and GitHub button only when they exist; today the GitHub button always renders, with an empty link. Use meaningful alt text instead of "card-img", add rel="noopener noreferrer", and left-align the text instead of justifying it.

Navbar.js	Remove the "Blogs" link and the Fork/Star button to his repo. Replace the "Sb." logo image with a text monogram. Add a label to the mobile menu button. Fix a bug where a new scroll listener is added on every render.

Footer.js	"Designed and Developed by Roshkrishna K Ranjith", plus a credit line: "Based on Portfolio by Soumyajit Behera (MIT)". Your social links, with labels.

ResumeNew.js + App.js	Use your PDF, or remove the route and nav link (Q1). Removing it also drops the pdf.js request to an outside CDN.

src/Assets/	Delete both Soumyajit PDFs, all 6 project screenshots, logo.png, about.png, avatar.svg, home-main.svg, and unused tech icons. Swap pre.svg for a CSS spinner.

public/index.html, manifest.json, favicon.png	Your title and description. Remove the og:url/og:image tags that point to his site. Proper app names. A simple monogram favicon.

README.md + Images/	Rewrite it for you. Keep a credit link to the original repo. Remove his badges, "Buy Me a Coffee" button and screenshots.

LICENSE (new)	See the risk below.

2\. Assumptions and risks

There is no LICENSE file in the repo, so there is nothing to "preserve" as-is. I'd fetch the original repo's LICENSE, confirm it's MIT, and add it word for word with the original copyright line.

Criterion 5 takes out every image: logo, favicon, preloader and illustrations. Unless you send your own, the site will be text-only.

Inconsistencies in your notes. The constraints say to use the notes as written, so I won't "fix" these without you:

Hashraft is listed as both "Intern" and "Project Associate"

Estro Tech is "logistics and backend developer" in the summary but "Project Associate" in the experience list

Carbon Rank and Debales AI have identical dates that overlap 5 other roles

Role text: your notes say "Graduate Researcher, AI \& Robotics", but the criterion says "Graduate Researcher - AI \& Robotics". I'll follow the criterion.

Tools that appear only in projects (MATLAB, OpenCV, Raspberry Pi) will go in project descriptions only, not the Skillset, unless you approve.

The GitHub calendar calls an outside contributions API from each visitor's browser. Also, at its current size it overflows a 375px screen.

Publishing: your notes put the DRDO project and your Gmail address on the public site. Please double-check DRDO's disclosure rules.

ai-log.md isn't committed and shows escaped markdown (\\#, \&#x20;), so it will look broken on GitHub.

3\. Test checklist

&#x20;npm run build succeeds with no errors. npm test passes (I'll update the default CRA test if it's outdated).

&#x20;Searching src/, public/ and README.md for soumya|behera|juspay|mesra|S0umyajit finds only the credit and license lines.

&#x20;No deleted template asset is still imported or served.

&#x20;Every nav link (Home, About, Projects, and Resume if kept) opens the right page; unknown URLs go to Home; the logo goes to Home.

&#x20;At 375px on every page: no horizontal scroll (scrollWidth ≤ 375), no clipped text, and the mobile menu opens and closes.

&#x20;Keyboard only: all links and the menu button can be reached with a visible focus outline and used with Enter.

&#x20;Every icon link and image has a meaningful accessible name or alt text. Text contrast is at least 4.5:1.

&#x20;The network tab shows no unexpected outside requests.

&#x20;Every fact on the site matches content-notes.md line by line. Landing page shows the exact name and role. At least 3 projects.

&#x20;LICENSE and credit are present.



I can run the in-browser checks in the app's browser pane after implementing.



4\. Questions to answer before I start

Resume: will you add a PDF, or should I remove the Resume page? (I recommend removing it for now.)

Images: go text-only, or will you send a photo or your own images?

Experience and Education: the template has no section for them. Should I add one to the About page from your 10 roles? (I recommend yes.)

GitHub calendar: keep it with a mobile fix, or remove it because of the outside API call?

Notes discrepancies: which Hashraft and Estro titles are correct? Are the Carbon Rank and Debales AI dates right?

MATLAB, OpenCV, Raspberry Pi: add them to the Skillset, or keep them in project descriptions only?

License: OK to add the original repo's LICENSE file plus the footer credit?

Git: when it's done, should I commit locally, push to LUCIFER5671/Lucifix-Portfolio, or leave the changes uncommitted?



## Revised by me



Review item 	My response


\### Accepted plan element:  The file-by-file breakdown, deleting Toolstack.js, and adding an Experience section to About.js. Each change traces directly to a line in content-notes.md, and the plan explicitly refused to invent content where my notes were silent (no project links, no hobbies, no Tools section).


\### Revised plan element	Four revisions: (1) Delete the GitHub contributions calendar as it calls back to a log in the backend, (2) keep MATLAB, OpenCV, and Raspberry Pi in project descriptions and add them to the skill set; (3) approved publishing the DRDO project and my Gmail address after review; (4) supply my own images instead of accepting a text-only site. I also rejected the plan's licensing remedy—see below.



\### Risk the AI identified: The fork has no LICENSE file, so it could not satisfy the constraint "preserve the original MIT license" as written. It also caught two real template defects: an empty GitHub link rendering on every project card in ProjectCards.js, and a scroll listener added on every render in Navbar.js. It further flagged internal inconsistencies in my own notes (duplicate Hashraft/Estro titles, overlapping Carbon Rank and Debales AI dates).



\### Risk the AI missed: GitHub Pages deployment is absent from the plan entirely. No homepage field in package.json, so a CRA build resolves asset paths from the domain root, and the published site renders blank on a project-subpath URL. It also missed that React Router breaks on direct URL access under Pages without a 404.html redirect or hash routing. Separately, its proposed licensing fix was wrong: it assumed the upstream repo was MIT and suggested copying that license across. I verified that soumyajit4419/Portfolio has no license at all, so adding an MIT file under his name would have asserted permission he never granted. I replaced it with a credit link in the footer and README per his README's request to link back.

