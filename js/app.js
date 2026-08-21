(() => {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const projectById = new Map(data.projects.map((project) => [project.id, project]));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  $("#year").textContent = new Date().getFullYear();

  function tags(items = [], max = items.length) {
    return items.slice(0, max).map((item) => `<span class="tag">${esc(item)}</span>`).join("");
  }

  function resultChips(results = [], max = results.length) {
    return results.slice(0, max).map((result) => `
      <div class="result-chip">
        <strong>${esc(result.value)}</strong>
        <span>${esc(result.label)}</span>
      </div>`).join("");
  }

  function renderExperience() {
    const root = $("#experience-grid");
    root.innerHTML = data.experience.map((item) => `
      <article class="experience-card">
        <div class="experience-meta"><span>${esc(item.kind)}</span><span>${esc(item.period)} · ${esc(item.location)}</span></div>
        <h3>${esc(item.role)}</h3>
        <p class="experience-org">${esc(item.organization)}</p>
        <p class="experience-summary">${esc(item.summary)}</p>
        <ul>${item.bullets.map((bullet) => `<li>${esc(bullet)}</li>`).join("")}</ul>
        <div class="tag-row">${tags(item.evidence)}</div>
      </article>`).join("");
  }

  function renderFeatured() {
    const featured = data.projects.filter((project) => project.featured).sort((a, b) => a.priority - b.priority);
    $("#featured-projects").innerHTML = featured.map((project) => `
      <article class="featured-card">
        <button class="featured-media" type="button" data-open-project="${esc(project.id)}" data-label="${esc(project.heroImage?.caption || "Project evidence")}" aria-label="Open ${esc(project.title)} case study">
          <img src="${esc(project.heroImage.src)}" alt="${esc(project.heroImage.alt)}" loading="lazy">
        </button>
        <div class="featured-content">
          <span class="project-type">${esc(project.type)} · ${esc(project.year)}</span>
          <h3>${esc(project.title)}</h3>
          <p>${esc(project.summary)}</p>
          <div class="result-row">${resultChips(project.results, 4)}</div>
          <div class="tag-row">${tags(project.categories, 4)}</div>
          <div class="featured-actions">
            <button class="button button-primary" type="button" data-open-project="${esc(project.id)}">Open case study</button>
            ${project.report ? `<a class="button button-secondary" href="${esc(project.report)}" target="_blank" rel="noopener noreferrer">Project report</a>` : ""}
          </div>
        </div>
      </article>`).join("");
  }

  const preferredFilters = ["All", "Machine Learning", "Remote Sensing", "Environmental GIS", "Python / ArcPy", "Web GIS", "Terrain / Drone", "GIS"];
  let activeFilter = "All";

  function renderFilters() {
    const available = new Set(data.projects.flatMap((project) => project.categories));
    const filters = preferredFilters.filter((filter) => filter === "All" || available.has(filter));
    $("#project-filters").innerHTML = filters.map((filter) => `
      <button class="filter-button" type="button" data-filter="${esc(filter)}" aria-pressed="${filter === activeFilter}">${esc(filter)}</button>`).join("");
  }

  function cardMedia(project) {
    if (project.heroImage) {
      return `<div class="project-card-media"><img src="${esc(project.heroImage.src)}" alt="${esc(project.heroImage.alt)}" loading="lazy"></div>`;
    }
    return `<div class="project-card-media project-placeholder" aria-hidden="true"><div class="layer-stack"><span></span><span></span><span></span><small>Client data not published</small></div></div>`;
  }

  function renderProjects() {
    const sorted = [...data.projects].sort((a, b) => a.priority - b.priority);
    const root = $("#project-grid");
    root.innerHTML = sorted.map((project) => {
      const hidden = activeFilter !== "All" && !project.categories.includes(activeFilter);
      return `
        <article class="project-card${hidden ? " is-hidden" : ""}" data-project-id="${esc(project.id)}">
          ${cardMedia(project)}
          <div class="project-card-content">
            <span class="project-type">${esc(project.type)} · ${esc(project.year)}</span>
            <h3>${esc(project.title)}</h3>
            <p>${esc(project.summary)}</p>
            <p class="card-study-area">${esc(project.studyArea)}</p>
            <div class="card-tags">${tags(project.categories, 3)}</div>
            <div class="card-actions"><button class="button button-secondary button-small" type="button" data-open-project="${esc(project.id)}">View evidence</button></div>
          </div>
        </article>`;
    }).join("");
    updateProjectCount();
  }

  function updateProjectCount() {
    const visible = data.projects.filter((project) => activeFilter === "All" || project.categories.includes(activeFilter)).length;
    $("#project-count").textContent = activeFilter === "All" ? `${visible} projects / applied work items` : `${visible} item${visible === 1 ? "" : "s"} tagged ${activeFilter}`;
  }

  function renderSkills() {
    $("#skills-grid").innerHTML = data.skillEvidence.map((skill) => `
      <article class="skill-card">
        <header><h3>${esc(skill.name)}</h3><span class="skill-level">${esc(skill.level)}</span></header>
        <p>${esc(skill.evidence.join(" · "))}</p>
        <div class="skill-links">
          ${skill.projectIds.map((id) => {
            const project = projectById.get(id);
            return project ? `<button class="skill-link" type="button" data-open-project="${esc(id)}">${esc(project.shortTitle || project.title)}</button>` : "";
          }).join("")}
        </div>
      </article>`).join("");
  }

  function renderJourney() {
    $("#journey-list").innerHTML = data.journey.map((item) => `
      <li class="journey-item">
        <span class="journey-period">${esc(item.period)}</span>
        <div class="journey-copy"><h3>${esc(item.title)}</h3><p>${esc(item.detail)}</p></div>
      </li>`).join("");
  }

  function listBlock(title, items) {
    if (!items?.length) return "";
    return `<article class="case-detail"><h4>${esc(title)}</h4><ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul></article>`;
  }

  function textBlock(title, text) {
    if (!text) return "";
    return `<article class="case-detail"><h4>${esc(title)}</h4><p>${esc(text)}</p></article>`;
  }

  function projectHeroMedia(project) {
    if (project.heroImage) {
      return `<button class="case-hero-media" type="button" data-lightbox-src="${esc(project.heroImage.src)}" data-lightbox-alt="${esc(project.heroImage.alt)}" data-lightbox-caption="${esc(project.heroImage.caption)}" aria-label="Enlarge ${esc(project.heroImage.caption)}"><img src="${esc(project.heroImage.src)}" alt="${esc(project.heroImage.alt)}"></button>`;
    }
    return `<div class="case-placeholder"><div class="case-placeholder-inner"><strong>Professional Web GIS work</strong><p>${esc(project.confidentiality || "Project imagery is not available for public display.")}</p></div></div>`;
  }

  function compareMarkup(compare) {
    if (!compare) return "";
    return `
      <section class="case-section">
        <div class="case-section-title"><span>Temporal comparison</span><h3>Before / after LULC view</h3></div>
        <div class="compare-shell">
          <div class="compare-viewport">
            <img src="${esc(compare.before.src)}" alt="${esc(compare.before.alt)}">
            <div class="compare-after" data-compare-after><img src="${esc(compare.after.src)}" alt="${esc(compare.after.alt)}"></div>
            <span class="compare-label before">${esc(compare.before.label)}</span>
            <span class="compare-label after">${esc(compare.after.label)}</span>
          </div>
          <input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Adjust before and after comparison" data-compare-range>
        </div>
      </section>`;
  }

  function galleryMarkup(project) {
    if (!project.gallery?.length) return "";
    return `
      <section class="case-section">
        <div class="case-section-title"><span>Map evidence</span><h3>Maps, outputs and analysis figures</h3></div>
        <div class="gallery-grid">
          ${project.gallery.map((image) => `
            <button class="gallery-item" type="button" data-lightbox-src="${esc(image.src)}" data-lightbox-alt="${esc(image.alt)}" data-lightbox-caption="${esc(image.caption)}">
              <img src="${esc(image.src)}" alt="${esc(image.alt)}" loading="lazy">
              <span>${esc(image.caption)}</span>
            </button>`).join("")}
        </div>
      </section>`;
  }

  function reportLinks(project) {
    const links = [];
    if (project.report) links.push({ href: project.report, label: project.reportLabel || "Read full report" });
    if (project.reports) links.push(...project.reports);
    if (!links.length && !project.confidentiality) return "";
    return `
      <section class="case-section">
        <div class="case-section-title"><span>Documentation</span><h3>Source report / publication note</h3></div>
        ${links.length ? `<div class="case-report-links">${links.map((link) => `<a class="button button-secondary" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">${esc(link.label)}</a>`).join("")}</div>` : ""}
        ${project.confidentiality ? `<p class="confidentiality-note">${esc(project.confidentiality)}</p>` : ""}
      </section>`;
  }

  const projectDialog = $("#project-dialog");
  const projectContent = $("#project-dialog-content");
  let lastFocused = null;

  function openProject(id, updateHash = true) {
    const project = projectById.get(id);
    if (!project) return;
    lastFocused = document.activeElement;

    projectContent.innerHTML = `
      <section class="case-hero">
        <div class="case-hero-copy">
          <span class="project-type">${esc(project.type)} · ${esc(project.year)}</span>
          <h2 id="project-dialog-title">${esc(project.title)}</h2>
          <p>${esc(project.summary)}</p>
          <p class="case-study-area"><strong>Study area:</strong> ${esc(project.studyArea)}</p>
          <div class="result-row">${resultChips(project.results, 4)}</div>
          <div class="tag-row">${tags(project.categories)}</div>
        </div>
        ${projectHeroMedia(project)}
      </section>

      <section class="case-section">
        <div class="case-section-title"><span>Project logic</span><h3>Problem → data → processing → result</h3></div>
        <div class="case-detail-grid">
          ${textBlock("Objective", project.objective)}
          ${listBlock("Data", project.data)}
          ${listBlock("Tools & technologies", project.tools)}
          ${listBlock("Methods", project.methods)}
          ${listBlock("Skills demonstrated", project.skills)}
          ${listBlock("Key findings", project.findings)}
        </div>
      </section>

      ${project.results?.length ? `<section class="case-section"><div class="case-section-title"><span>Results</span><h3>Reported / demonstrated outputs</h3></div><div class="case-result-grid">${project.results.map((result) => `<div class="case-result"><strong>${esc(result.value)}</strong><span>${esc(result.label)}</span></div>`).join("")}</div>${project.evidenceNote ? `<p class="case-evidence-note">${esc(project.evidenceNote)}</p>` : ""}</section>` : ""}
      ${compareMarkup(project.compare)}
      ${galleryMarkup(project)}
      ${reportLinks(project)}
    `;

    if (!projectDialog.open) projectDialog.showModal();
    document.body.classList.add("dialog-open");
    if (updateHash) history.replaceState(null, "", `#project=${encodeURIComponent(id)}`);
    const closeButton = $("[data-close-project]", projectDialog);
    closeButton?.focus({ preventScroll: true });
  }

  function closeProject(clearHash = true) {
    if (!projectDialog.open) return;
    projectDialog.close();
    document.body.classList.remove("dialog-open");
    if (clearHash && location.hash.startsWith("#project=")) history.replaceState(null, "", `${location.pathname}${location.search}`);
    if (lastFocused instanceof HTMLElement) lastFocused.focus({ preventScroll: true });
  }

  const lightboxDialog = $("#lightbox-dialog");
  const lightboxImage = $("#lightbox-image");
  const lightboxCaption = $("#lightbox-caption");

  function openLightbox(button) {
    const src = button.dataset.lightboxSrc;
    if (!src) return;
    lightboxImage.src = src;
    lightboxImage.alt = button.dataset.lightboxAlt || "Project image";
    lightboxCaption.textContent = button.dataset.lightboxCaption || "Project evidence";
    lightboxDialog.showModal();
  }

  function closeLightbox() {
    if (lightboxDialog.open) lightboxDialog.close();
  }

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open-project]");
    if (openButton) {
      event.preventDefault();
      openProject(openButton.dataset.openProject);
      return;
    }

    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      activeFilter = filterButton.dataset.filter;
      $$(".filter-button").forEach((button) => button.setAttribute("aria-pressed", String(button === filterButton)));
      renderProjects();
      return;
    }

    const lightboxButton = event.target.closest("[data-lightbox-src]");
    if (lightboxButton) {
      event.preventDefault();
      openLightbox(lightboxButton);
    }
  });

  $("[data-close-project]").addEventListener("click", () => closeProject());
  $("[data-close-lightbox]").addEventListener("click", closeLightbox);

  projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) closeProject();
  });
  lightboxDialog.addEventListener("click", (event) => {
    if (event.target === lightboxDialog) closeLightbox();
  });

  projectContent.addEventListener("input", (event) => {
    if (!event.target.matches("[data-compare-range]")) return;
    const wrapper = event.target.closest(".case-section");
    const viewport = $(".compare-viewport", wrapper);
    if (viewport) viewport.style.setProperty("--compare", `${event.target.value}%`);
  });

  projectDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

  /* Mobile navigation */
  const navToggle = $(".nav-toggle");
  const siteNav = $("#site-nav");
  function setNav(open) {
    navToggle.setAttribute("aria-expanded", String(open));
    siteNav.classList.toggle("is-open", open);
  }
  navToggle.addEventListener("click", () => setNav(navToggle.getAttribute("aria-expanded") !== "true"));
  siteNav.addEventListener("click", (event) => { if (event.target.closest("a")) setNav(false); });
  document.addEventListener("click", (event) => {
    if (!siteNav.classList.contains("is-open")) return;
    if (!event.target.closest(".site-header")) setNav(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) setNav(false);
  });

  /* Active nav section */
  if ("IntersectionObserver" in window) {
    const navLinks = $$(".site-nav a[href^='#']");
    const targets = navLinks.map((link) => $(link.getAttribute("href"))).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => link.toggleAttribute("aria-current", link.getAttribute("href") === `#${visible.target.id}`));
    }, { rootMargin: "-35% 0px -55%", threshold: [0, .2, .6] });
    targets.forEach((target) => observer.observe(target));
  }

  renderExperience();
  renderFeatured();
  renderFilters();
  renderProjects();
  renderSkills();
  renderJourney();

  const initialMatch = location.hash.match(/^#project=([^&]+)/);
  if (initialMatch) {
    const id = decodeURIComponent(initialMatch[1]);
    window.setTimeout(() => openProject(id, false), reducedMotion ? 0 : 80);
  }
})();

/* v3.2 global background video: respect reduced-motion/data-saver and page visibility */
(() => {
  const video = document.querySelector('.site-video');
  if (!video) return;
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection?.saveData === true;
  if (reducedMotion || saveData) {
    video.pause();
    video.removeAttribute('autoplay');
    return;
  }

  const tryPlay = () => video.play().catch(() => {
    /* The poster remains visible if a browser blocks autoplay. */
  });
  if (video.readyState >= 2) tryPlay();
  else video.addEventListener('canplay', tryPlay, { once: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
    else tryPlay();
  });
})();
