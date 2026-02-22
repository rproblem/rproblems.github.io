const PRODUCT_TIERS = [
  {
    id: "copilot-accelerator",
    name: "Copilot & Microsoft 365 Jumpstart",
    bestFor:
      "Teams who want to roll out Copilot effectively and build their first automated workflows.",
    timeline: "Fixed 4-Week Engagement",
    startingPrice: "$8,500 one-time",
    successMetric:
      "Copilot is deployed, your team is trained, and you have a clear roadmap for future automation.",
    acceptanceCriteria:
      "Initial setup is complete and your team is actively using it.",
    outcomeExamples: [
      "Copilot configured securely for your specific environment",
      "Custom training sessions for your leadership and staff",
      "Identification of top 3 automation opportunities",
    ],
    artifacts: [
      "Deployment plan and security review",
      "Recorded training sessions and adoption guides",
      "1 Custom Workflow built and deployed for your team",
    ],
    deliverables: [
      "Technical setup and licensing guidance",
      "Hands-on training and Q&A",
      "We design and build 1 high-impact automation for you",
    ],
    ctaLabel: "Book Jumpstart",
    ctaHref: "https://calendly.com/rproblems/discovery",
  },
  {
    id: "automation-partner",
    name: "Automation Partner (Standard)",
    bestFor:
      "Growing businesses that need ongoing automation support without hiring a full-time developer.",
    timeline: "Ongoing Subscription",
    startingPrice: "$4,500 / month",
    successMetric:
      "Eliminate manual data transfer and automate routine tasks month over month.",
    acceptanceCriteria:
      "You submit requests, we build them one by one, and manage them proactively.",
    outcomeExamples: [
      "Connect your CRM to your billing system",
      "Automate onboarding emails and document generation",
      "Build custom dashboards for weekly reporting",
    ],
    artifacts: [
      "Unlimited automation requests (worked on sequentially)",
      "Proactive monitoring of all active integrations",
      "Weekly progress updates",
    ],
    deliverables: [
      "1 active request at a time",
      "Basic API integrations and workflow automation",
      "Pause or cancel anytime",
    ],
    ctaLabel: "Subscribe Now",
    ctaHref: "https://calendly.com/rproblems/discovery",
  },
  {
    id: "automation-partner-pro",
    name: "Automation Partner (Pro)",
    bestFor:
      "Companies with complex, multi-system workflows and custom development needs.",
    timeline: "Ongoing Subscription",
    startingPrice: "$8,000 / month",
    successMetric:
      "Accelerate your digital transformation with parallel development and priority support.",
    acceptanceCriteria:
      "We tackle multiple complex projects simultaneously to modernize your operations faster.",
    outcomeExamples: [
      "Custom internal tools and portals built to spec",
      "Complex, multi-system ERP/CRM integrations",
      "Advanced AI agent development",
    ],
    artifacts: [
      "Everything in Standard, plus:",
      "Custom UI/tool development",
      "Priority SLA and dedicated slack channel",
    ],
    deliverables: [
      "2 active requests at a time",
      "Advanced custom code and database architecture",
      "Quarterly strategic planning sessions",
    ],
    ctaLabel: "Subscribe Pro",
    ctaHref: "https://calendly.com/rproblems/discovery",
  },
];

const PROCESS_STEPS = [
  {
    id: "understand",
    title: "Understand",
    summary:
      "We learn how your team works today, where time is being wasted, and what would make the biggest difference.",
    inputs: [
      "A walkthrough of your current tools and processes",
      "Your team's biggest frustrations",
      "What success looks like for you",
    ],
    outputs: [
      "A clear picture of your highest-impact opportunities",
      "Prioritized list of what to fix first",
      "An honest assessment of what's realistic",
    ],
  },
  {
    id: "plan",
    title: "Plan",
    summary:
      "We agree on exactly what we'll build, what it will cost, and when it will be done. No surprises.",
    inputs: [
      "What we learned in the discovery phase",
      "Your budget and timeline preferences",
      "Any security or compliance needs",
    ],
    outputs: [
      "A plain-language project plan",
      "Fixed price and timeline",
      "Clear milestones you can track",
    ],
  },
  {
    id: "build",
    title: "Build",
    summary:
      "We do the work in stages, checking in with you weekly so you always know where things stand.",
    inputs: [
      "Approved plan",
      "Access to your systems",
      "A point person on your team for questions",
    ],
    outputs: [
      "Working solution, tested and ready to use",
      "Your team trained on how it works",
      "Everything documented in plain language",
    ],
  },
  {
    id: "results",
    title: "Measure Results",
    summary:
      "We show you the impact, hand over everything, and make sure your team can keep it running without us.",
    inputs: [
      "The completed project",
      "Feedback from your team",
      "Usage and performance data",
    ],
    outputs: [
      "Before-and-after comparison of time saved",
      "Full ownership transferred to your team",
      "Recommendations for what to tackle next",
    ],
  },
];

function listToHtml(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderProcessSteps() {
  const container = document.getElementById("process-steps");
  if (!container) return;

  container.innerHTML = PROCESS_STEPS.map(
    (step, index) => `
      <article class="process-card" id="${step.id}">
        <span class="step-index">0${index + 1}</span>
        <h3>${step.title}</h3>
        <p>${step.summary}</p>
        <p class="product-meta"><strong>What we need from you:</strong></p>
        <ul class="meta-list">${listToHtml(step.inputs)}</ul>
        <p class="product-meta"><strong>What you get:</strong></p>
        <ul class="meta-list">${listToHtml(step.outputs)}</ul>
      </article>
    `,
  ).join("");
}

function renderProductTiers() {
  const container = document.getElementById("product-tiers");
  if (!container) return;

  container.innerHTML = PRODUCT_TIERS.map(
    (tier) => `
      <article class="product-card" id="${tier.id}">
        <h3>${tier.name}</h3>
        <p class="product-meta"><strong>Best for:</strong> ${tier.bestFor}</p>
        <p class="product-meta"><strong>Timeline:</strong> ${tier.timeline}</p>
        <p class="product-price">${tier.startingPrice}</p>
        <p class="product-meta"><strong>How we measure success:</strong> ${tier.successMetric}</p>
        <p class="product-meta"><strong>Done when:</strong> ${tier.acceptanceCriteria}</p>
        <p class="product-heading"><strong>Examples:</strong></p>
        <ul class="meta-list">${listToHtml(tier.outcomeExamples)}</ul>
        <p class="product-heading"><strong>What you walk away with:</strong></p>
        <ul class="meta-list">${listToHtml(tier.artifacts)}</ul>
        <p class="product-heading"><strong>What's included:</strong></p>
        <ul class="meta-list">${listToHtml(tier.deliverables)}</ul>
        <a class="btn btn-primary" href="${tier.ctaHref}" target="_blank" rel="noreferrer">${tier.ctaLabel}</a>
      </article>
    `,
  ).join("");
}

function setupRevealAnimations() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const elements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          const staggerChildren = entry.target.querySelectorAll(
            ".card, .reason, .process-card, .product-card, .ai-card, details",
          );
          staggerChildren.forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.12}s`;
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  elements.forEach((el) => observer.observe(el));
}

function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

function setupScrollHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setFooterYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

/* ── Assessment ─────────────────────────────────────────────── */

// TODO: Replace with your Formspree form ID from https://formspree.io
// Create a free account, make a form, and paste the ID here.
const FORMSPREE_ID = "xqayrgne";

const ASSESSMENT_SECTIONS = [
  {
    key: "copilot",
    title: "Productivity & Copilot Readiness",
    product: "Copilot Accelerator",
    questions: [
      {
        id: "cp1",
        text: "Does your team use Microsoft 365 (Outlook, Teams, Word, Excel, PowerPoint) as its core productivity suite?",
        options: [
          {
            label: "No \u2014 we use Google Workspace or other tools",
            value: 1,
          },
          {
            label:
              "Partially \u2014 we use some Microsoft 365 apps alongside other tools",
            value: 2,
          },
          {
            label:
              "Yes \u2014 Microsoft 365 is our primary productivity platform",
            value: 3,
          },
        ],
      },
      {
        id: "cp2",
        text: "How much staff time goes to routine tasks like drafting emails, summarizing meetings, creating reports, or organizing documents?",
        options: [
          {
            label: "Not much \u2014 most time is spent on higher-value work",
            value: 1,
          },
          {
            label: "A fair amount \u2014 these tasks add up across the team",
            value: 2,
          },
          {
            label:
              "A lot \u2014 routine document and communication work is a major time drain",
            value: 3,
          },
        ],
      },
      {
        id: "cp3",
        text: "Has your organization explored Microsoft Copilot or similar AI assistants for everyday productivity?",
        options: [
          { label: "No \u2014 we haven\u2019t looked into it", value: 1 },
          { label: "Some people have tried it informally", value: 2 },
          {
            label:
              "We\u2019re interested or have licenses, but haven\u2019t rolled it out effectively",
            value: 3,
          },
        ],
      },
    ],
  },
  {
    key: "integration",
    title: "System Connectivity",
    product: "Integration Foundation",
    questions: [
      {
        id: "ig1",
        text: "How often does your team copy, re-enter, or manually move information between different software tools?",
        options: [
          {
            label: "Rarely \u2014 our tools mostly talk to each other",
            value: 1,
          },
          {
            label: "Regularly \u2014 some manual steps between key systems",
            value: 2,
          },
          {
            label:
              "Constantly \u2014 staff spend significant time transferring data by hand",
            value: 3,
          },
        ],
      },
      {
        id: "ig2",
        text: "If someone on your team leaves, would others know how your systems are connected and where data flows?",
        options: [
          {
            label: "Yes \u2014 it\u2019s well-documented and understood",
            value: 1,
          },
          {
            label:
              "Somewhat \u2014 some things are documented, others are in people\u2019s heads",
            value: 2,
          },
          {
            label:
              "No \u2014 most of it depends on specific people knowing how things work",
            value: 3,
          },
        ],
      },
      {
        id: "ig3",
        text: "How often do errors or delays happen because information didn\u2019t transfer correctly between systems?",
        options: [
          { label: "Rarely", value: 1 },
          { label: "A few times a week", value: 2 },
          {
            label: "Daily \u2014 it\u2019s a consistent source of problems",
            value: 3,
          },
        ],
      },
    ],
  },
  {
    key: "agent",
    title: "Automation Opportunity",
    product: "Automation Program",
    questions: [
      {
        id: "ag1",
        text: "Does your team follow step-by-step procedures for tasks like processing requests, reviewing documents, or routing work?",
        options: [
          {
            label: "Not many \u2014 most of our work requires judgment calls",
            value: 1,
          },
          {
            label: "Some \u2014 we have checklists or SOPs for common tasks",
            value: 2,
          },
          {
            label:
              "Many \u2014 a large share of daily work follows predictable steps",
            value: 3,
          },
        ],
      },
      {
        id: "ag2",
        text: "How much staff time goes to sorting, categorizing, or routing incoming work before someone can act on it?",
        options: [
          { label: "Very little", value: 1 },
          { label: "A noticeable amount each day", value: 2 },
          { label: "It\u2019s one of our biggest time sinks", value: 3 },
        ],
      },
      {
        id: "ag3",
        text: "Does your organization use any cloud-based business tools (e.g., Microsoft 365, cloud CRM, cloud ERP)?",
        options: [
          {
            label: "No \u2014 most of our tools run locally or on paper",
            value: 1,
          },
          { label: "Some \u2014 a mix of cloud and local tools", value: 2 },
          {
            label: "Yes \u2014 most of our core business tools are cloud-based",
            value: 3,
          },
        ],
      },
    ],
  },
];

function readinessLevel(score) {
  if (score <= 4) return { label: "Low", className: "level-low" };
  if (score <= 6) return { label: "Moderate", className: "level-mod" };
  return { label: "High", className: "level-high" };
}

function readinessInsight(section, level) {
  const insights = {
    copilot: {
      Low: "Microsoft Copilot may not be the highest-impact starting point without Microsoft 365 as your core platform.",
      Moderate:
        "Your team is spending real time on routine productivity tasks. A structured Copilot rollout could free up meaningful capacity across the organization.",
      High: "Strong fit \u2014 your team runs on Microsoft 365 and has clear productivity gains available through a Copilot Accelerator engagement.",
    },
    integration: {
      Low: "Your systems seem reasonably connected today. Worth revisiting as your tool count or team size grows.",
      Moderate:
        "Manual handoffs between systems are costing your team time and creating risk. A targeted integration project could cut that friction quickly.",
      High: "Disconnected systems are clearly slowing your operations. Connecting them would have immediate, measurable impact on speed and accuracy.",
    },
    agent: {
      Low: "Automation may not be the highest-impact starting point. Consider streamlining your processes and system connections first.",
      Moderate:
        "You have routine tasks that follow clear rules \u2014 good candidates for automation. A focused pilot could prove the value fast.",
      High: "Strong automation opportunity \u2014 you have predictable, high-volume work and cloud tools in place to support it.",
    },
  };
  return insights[section][level];
}

function renderAssessmentForm() {
  const root = document.getElementById("assessment-root");
  if (!root) return;

  const allQuestions = ASSESSMENT_SECTIONS.flatMap((s) => s.questions);
  const questionCount = allQuestions.length;

  let html = `<form id="assessment-form" class="assessment-form" novalidate>`;
  html += `<div class="assessment-contact">`;
  html += `<div class="form-field"><label for="assess-name">Name</label><input type="text" id="assess-name" name="name" required /></div>`;
  html += `<div class="form-field"><label for="assess-email">Work email</label><input type="email" id="assess-email" name="email" required /></div>`;
  html += `<div class="form-field"><label for="assess-company">Company</label><input type="text" id="assess-company" name="company" required /></div>`;
  html += `<div class="form-field"><label for="assess-size">Team size</label><select id="assess-size" name="team_size"><option value="">Select\u2026</option><option>1\u201310</option><option>11\u201350</option><option>51\u2013200</option><option>200+</option></select></div>`;
  html += `</div>`;

  ASSESSMENT_SECTIONS.forEach((section) => {
    html += `<fieldset class="assess-section"><legend>${section.title}</legend>`;
    section.questions.forEach((q) => {
      html += `<div class="assess-question"><p class="assess-q-text">${q.text}</p>`;
      q.options.forEach((opt, i) => {
        const inputId = `${q.id}-${i}`;
        html += `<label class="assess-option" for="${inputId}">`;
        html += `<input type="radio" id="${inputId}" name="${q.id}" value="${opt.value}" required />`;
        html += `<span>${opt.label}</span></label>`;
      });
      html += `</div>`;
    });
    html += `</fieldset>`;
  });

  html += `<div class="assess-submit-row">`;
  html += `<button type="submit" class="btn btn-primary">Get My Scorecard</button>`;
  html += `<p class="assess-note">Instant results on screen. Personalized follow-up within 24\u201348 hours.</p>`;
  html += `</div>`;
  html += `</form>`;
  html += `<div id="assessment-results" class="assessment-results" hidden></div>`;

  root.innerHTML = html;

  document
    .getElementById("assessment-form")
    .addEventListener("submit", handleAssessmentSubmit);
}

function handleAssessmentSubmit(e) {
  e.preventDefault();
  const form = e.target;

  // Validate all radios answered
  const unanswered = ASSESSMENT_SECTIONS.flatMap((s) => s.questions).filter(
    (q) => !form.querySelector(`input[name="${q.id}"]:checked`),
  );
  if (unanswered.length > 0 || !form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Gather contact info
  const contact = {
    name: form.querySelector("#assess-name").value.trim(),
    email: form.querySelector("#assess-email").value.trim(),
    company: form.querySelector("#assess-company").value.trim(),
    team_size: form.querySelector("#assess-size").value,
  };

  // Score each section
  const scores = {};
  const answers = {};
  ASSESSMENT_SECTIONS.forEach((section) => {
    let total = 0;
    section.questions.forEach((q) => {
      const val = parseInt(
        form.querySelector(`input[name="${q.id}"]:checked`).value,
        10,
      );
      total += val;
      const chosen = q.options.find((o) => o.value === val);
      answers[q.text] = chosen.label;
    });
    scores[section.key] = { total, level: readinessLevel(total) };
  });

  // Show scorecard
  showScorecard(scores, contact);

  // Submit to Formspree (or fallback)
  submitAssessment(contact, scores, answers);
}

function showScorecard(scores, contact) {
  const resultsEl = document.getElementById("assessment-results");
  const formEl = document.getElementById("assessment-form");
  formEl.hidden = true;
  resultsEl.hidden = false;

  // Find the highest-scoring area
  const sorted = Object.entries(scores).sort((a, b) => b[1].total - a[1].total);
  const topKey = sorted[0][0];
  const topSection = ASSESSMENT_SECTIONS.find((s) => s.key === topKey);

  let html = `<div class="scorecard">`;
  html += `<h3>Your Readiness Scorecard</h3>`;
  html += `<p class="product-meta">Results for ${contact.name} at ${contact.company}</p>`;
  html += `<div class="score-grid">`;

  ASSESSMENT_SECTIONS.forEach((section) => {
    const s = scores[section.key];
    const pct = Math.round(((s.total - 3) / 6) * 100);
    html += `<div class="score-card ${s.level.className}">`;
    html += `<h4>${section.title}</h4>`;
    html += `<div class="score-bar-track"><div class="score-bar-fill" style="width:${pct}%"></div></div>`;
    html += `<p class="score-label">${s.level.label} readiness <span class="score-num">${s.total}/9</span></p>`;
    html += `<p class="score-insight">${readinessInsight(section.key, s.level.label)}</p>`;
    html += `<p class="score-product">Recommended: <strong>${section.product}</strong></p>`;
    html += `</div>`;
  });

  html += `</div>`;
  html += `<div class="scorecard-next">`;
  html += `<h4>Recommended starting point: ${topSection.product}</h4>`;
  html += `<p>We\u2019ll review your full answers and send personalized recommendations within 24\u201348 hours.</p>`;
  html += `<div class="scorecard-cta">`;
  html += `<a class="btn btn-primary" href="https://calendly.com/rproblems/discovery" target="_blank" rel="noreferrer">Book Discovery Call Now</a>`;
  html += `<button type="button" class="btn btn-secondary" id="retake-btn">Retake Assessment</button>`;
  html += `</div></div></div>`;

  resultsEl.innerHTML = html;
  resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });

  document.getElementById("retake-btn").addEventListener("click", () => {
    resultsEl.hidden = true;
    resultsEl.innerHTML = "";
    formEl.hidden = false;
    formEl.reset();
    formEl.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function submitAssessment(contact, scores, answers) {
  const payload = {
    ...contact,
    scores: Object.fromEntries(
      ASSESSMENT_SECTIONS.map((s) => [
        s.title,
        `${scores[s.key].level.label} (${scores[s.key].total}/9)`,
      ]),
    ),
    answers,
    _subject: `New Readiness Assessment: ${contact.company} (${contact.name})`,
  };

  if (FORMSPREE_ID) {
    fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    }).catch(() => {});
  } else {
    // Fallback: encode into mailto
    const body = encodeURIComponent(JSON.stringify(payload, null, 2));
    const subject = encodeURIComponent(payload._subject);
    const fallback = document.createElement("a");
    fallback.href = `mailto:hello@rproblems.com?subject=${subject}&body=${body}`;
    fallback.click();
  }
}

function init() {
  renderProcessSteps();
  renderProductTiers();
  renderAssessmentForm();
  setupRevealAnimations();
  setupMobileMenu();
  setupScrollHeader();
  setFooterYear();
}

document.addEventListener("DOMContentLoaded", init);
