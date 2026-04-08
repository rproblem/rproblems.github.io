const PROCESS_STEPS = [
  {
    id: "briefing",
    title: "Mission Briefing",
    summary:
      "We get on a call, understand your objective, and assess what's needed.",
    details: [
      "Define the mission-critical objective",
      "Identify gaps in talent, strategy, or systems",
      "Determine urgency and success criteria",
    ],
  },
  {
    id: "planning",
    title: "Mission Planning",
    summary:
      "We design the approach\u2014who, what, and how\u2014tailored to your specific challenge.",
    details: [
      "Build a custom engagement plan",
      "Align on timeline, milestones, and outcomes",
      "Identify the right talent and tools",
    ],
  },
  {
    id: "launch",
    title: "Launch & Execute",
    summary:
      "We deploy talent, strategy, or systems and work alongside your team.",
    details: [
      "Assemble and onboard the crew",
      "Execute the flight plan with your team",
      "Deploy AI systems where they create leverage",
    ],
  },
  {
    id: "expand",
    title: "Monitor & Expand",
    summary:
      "We measure results and identify the next mission when you're ready.",
    details: [
      "Track outcomes against success criteria",
      "Surface new opportunities",
      "Expand into additional capabilities as trust builds",
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
        <ul class="meta-list">${listToHtml(step.details)}</ul>
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
            ".card, .reason, .process-card, details",
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

function setupSmoothScrollCards() {
  document.querySelectorAll(".mission-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(card.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function init() {
  renderProcessSteps();
  setupRevealAnimations();
  setupMobileMenu();
  setupScrollHeader();
  setFooterYear();
  setupSmoothScrollCards();
}

document.addEventListener("DOMContentLoaded", init);
