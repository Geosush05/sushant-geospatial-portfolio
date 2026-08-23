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

  /* -------------------------------------------------------------
     Experience Section
  ------------------------------------------------------------- */
  function renderExperience() {
    const root = $("#experience-grid");
    if (!root) return;
    root.innerHTML = data.experience.map((item) => `
      <article class="experience-card" id="exp-${esc(item.id)}">
        <div class="experience-meta">
          <span class="kind-badge">${esc(item.kind)}</span>
          <span class="period-badge">${esc(item.period)} · ${esc(item.location)}</span>
        </div>
        <h3>${esc(item.role)}</h3>
        <p class="experience-org">${esc(item.organization)}</p>
        <p class="experience-summary">${esc(item.summary)}</p>
        <ul class="experience-bullets">
          ${item.bullets.map((bullet) => `<li>${esc(bullet)}</li>`).join("")}
        </ul>
        <div class="tag-row">${tags(item.evidence)}</div>
      </article>`).join("");
  }

  /* -------------------------------------------------------------
     Featured Case Studies
  ------------------------------------------------------------- */
  const droneDeliverables = [
    { id: "ortho", name: "Orthomosaic", icon: "🗺️", badge: "Sub-dm Ortho", src: "assets/projects/drone/orthomosaic.webp", alt: "Seamless High-Resolution Orthomosaic in Agisoft Metashape", desc: "Sub-decimeter seamless, geometrically corrected aerial orthophoto mosaic" },
    { id: "dsm", name: "DSM (Surface)", icon: "📐", badge: "Digital Surface Model", src: "assets/projects/drone/dsm.webp", alt: "Digital Surface Model from UAV data", desc: "Captures natural canopy tops, buildings, and above-ground surface elevations" },
    { id: "dtm", name: "DTM (Bare-Earth)", icon: "⛰️", badge: "Digital Terrain Model", src: "assets/projects/drone/dtm.webp", alt: "Classified Bare-Earth Digital Terrain Model", desc: "Bare-earth terrain model derived post dense point-cloud ground classification" },
    { id: "dem", name: "DEM (Elevation)", icon: "📊", badge: "Elevation Raster", src: "assets/projects/drone/dem.webp", alt: "Drone-derived Digital Elevation Model", desc: "Calibrated elevation raster for morphometric slope and drainage analysis" },
    { id: "contours", name: "Vector Contours", icon: "〰️", badge: "Topographic Contours", src: "assets/projects/drone/contours.webp", alt: "Contour lines extracted from drone DEM", desc: "Vector contour line extractions at customized vertical elevation intervals" },
    { id: "mesh", name: "3D Textured Mesh", icon: "🧊", badge: "3D Terrain Model", src: "assets/projects/drone/model-3d.webp", alt: "Textured 3D photogrammetric mesh model", desc: "Full polygonal 3D terrain reconstruction with high-resolution photographic texture" }
  ];

  function renderFeaturedUavCard(project) {
    const defaultDeliverable = droneDeliverables[0];
    return `
      <article class="featured-card featured-uav-card" id="featured-${esc(project.id)}">
        <!-- Visual & Photogrammetry Media Area -->
        <div class="uav-media-column">
          <div class="uav-preview-frame">
            <button class="uav-main-viewer" type="button" data-lightbox-src="${esc(defaultDeliverable.src)}" data-lightbox-alt="${esc(defaultDeliverable.alt)}" data-lightbox-caption="${esc(defaultDeliverable.desc)}" aria-label="Enlarge ${esc(defaultDeliverable.name)}">
              <img id="uav-active-img" src="${esc(defaultDeliverable.src)}" alt="${esc(defaultDeliverable.alt)}" loading="lazy">
              <div class="uav-viewer-overlay">
                <span id="uav-active-badge" class="uav-badge-pill">${esc(defaultDeliverable.badge)}</span>
                <span class="uav-zoom-hint">🔍 Click to zoom full-resolution</span>
              </div>
            </button>
            <p id="uav-active-caption" class="uav-caption-text">${esc(defaultDeliverable.desc)}</p>
          </div>

          <!-- Interactive Deliverables Selector Switcher -->
          <div class="uav-switcher-bar">
            <span class="uav-switcher-title">Select Photogrammetric Deliverable:</span>
            <div class="uav-switcher-pills" role="tablist" aria-label="UAV Project Deliverables">
              ${droneDeliverables.map((item, idx) => `
                <button class="uav-pill-btn${idx === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${idx === 0}" data-uav-switch="${esc(item.id)}" data-src="${esc(item.src)}" data-alt="${esc(item.alt)}" data-badge="${esc(item.badge)}" data-desc="${esc(item.desc)}">
                  <span class="pill-icon">${item.icon}</span>
                  <span class="pill-name">${esc(item.name)}</span>
                </button>`).join("")}
            </div>
          </div>
        </div>

        <!-- Rich Technical & Survey Information -->
        <div class="uav-content-column">
          <div class="uav-header">
            <div class="uav-seq-tag">
              <span class="seq-num">02</span>
              <span class="seq-label">Featured Photogrammetry & Terrain Project</span>
            </div>
            <span class="uav-year-badge">${esc(project.year)}</span>
          </div>

          <h3 class="uav-title">${esc(project.title)}</h3>
          <p class="uav-study-loc">📍 <strong>Survey Context:</strong> ${esc(project.studyArea)}</p>
          <p class="uav-summary">${esc(project.summary)}</p>

          <!-- Core Survey & Accuracy Metrics -->
          <div class="uav-metrics-row">
            ${resultChips(project.results, 4)}
          </div>

          <!-- Photogrammetry Workflow Pipeline -->
          <div class="uav-workflow-box">
            <div class="uav-box-label">End-to-End Structure-from-Motion (SfM) Workflow:</div>
            <ol class="uav-pipeline-steps">
              <li><span>1</span> Flight & GCP Survey</li>
              <li><span>2</span> SfM Tie Points</li>
              <li><span>3</span> Dense Cloud & Class</li>
              <li><span>4</span> DSM & Bare-Earth DTM</li>
              <li><span>5</span> Sub-dm Ortho & Contours</li>
              <li><span>6</span> 3D Textured Mesh</li>
            </ol>
          </div>

          <!-- Software & Survey Control Badges -->
          <div class="uav-specs-row">
            <div class="spec-group">
              <span class="spec-label">Software:</span>
              <span class="spec-value">Agisoft Metashape Professional · ArcGIS Pro / ArcMap</span>
            </div>
            <div class="spec-group">
              <span class="spec-label">Ground Control:</span>
              <span class="spec-value">Survey GCPs · High Overlap (>80% Fwd, >75% Side)</span>
            </div>
          </div>

          <!-- 5 Original Lab Documentation PDFs -->
          <div class="uav-reports-block">
            <span class="reports-title">Original Lab Documentation Reports (PDFs):</span>
            <div class="uav-pdf-chips">
              ${(project.reports || []).map((rep) => `
                <a class="uav-pdf-link" href="${esc(rep.href)}" target="_blank" rel="noopener noreferrer">
                  📄 ${esc(rep.label)} ↗
                </a>`).join("")}
            </div>
          </div>

          <div class="uav-actions-row">
            <button class="button button-uav-primary" type="button" data-open-project="${esc(project.id)}">Inspect Full UAV Case Study →</button>
          </div>
        </div>
      </article>`;
  }

  function renderFeatured() {
    const root = $("#featured-projects");
    if (!root) return;
    const featured = data.projects.filter((project) => project.featured).sort((a, b) => a.priority - b.priority);
    
    root.innerHTML = featured.map((project, idx) => {
      if (project.id === "uav-photogrammetry") {
        return renderFeaturedUavCard(project);
      }

      const seqNumber = String(idx + 1).padStart(2, "0");
      const isFirst = idx === 0;

      return `
        <article class="featured-card ${isFirst ? "featured-flagship-card" : ""}" id="featured-${esc(project.id)}">
          <button class="featured-media" type="button" data-open-project="${esc(project.id)}" data-label="${esc(project.heroImage?.caption || "View Evidence")}" aria-label="Open ${esc(project.title)} case study">
            ${project.heroImage ? `<img src="${esc(project.heroImage.src)}" alt="${esc(project.heroImage.alt)}" loading="lazy">` : `<div class="media-fallback"><div class="layer-stack"><span></span><span></span><span></span><small>${esc(project.shortTitle)}</small></div></div>`}
          </button>
          <div class="featured-content">
            <div class="featured-header">
              <div class="featured-seq">
                <span class="seq-badge">${seqNumber}</span>
                <span class="project-type">${esc(project.type)}</span>
              </div>
              <span class="project-year">${esc(project.year)}</span>
            </div>
            <h3>${esc(project.title)}</h3>
            <p class="featured-summary">${esc(project.summary)}</p>
            <div class="result-row">${resultChips(project.results, 4)}</div>
            <div class="tag-row">${tags(project.categories, 4)}</div>
            <div class="featured-actions">
              <button class="button button-primary" type="button" data-open-project="${esc(project.id)}">Inspect Case Study →</button>
              ${project.report ? `<a class="button button-secondary" href="${esc(project.report)}" target="_blank" rel="noopener noreferrer">📄 ${esc(project.reportLabel || "Report PDF")}</a>` : ""}
            </div>
          </div>
        </article>`;
    }).join("");
  }

  /* -------------------------------------------------------------
     Filterable Project Library
  ------------------------------------------------------------- */
  const preferredFilters = ["All", "Environmental & Wildlife", "Remote Sensing", "Machine Learning", "Python / ArcPy", "Web & Field GIS", "Terrain & Drone", "Spatial Analysis"];
  let activeFilter = "All";

  function renderFilters() {
    const root = $("#project-filters");
    if (!root) return;
    const available = new Set(data.projects.flatMap((project) => project.categories));
    const filters = preferredFilters.filter((filter) => filter === "All" || available.has(filter));
    root.innerHTML = filters.map((filter) => `
      <button class="filter-button" type="button" data-filter="${esc(filter)}" aria-pressed="${filter === activeFilter}">
        ${esc(filter)}
      </button>`).join("");
  }

  function cardMedia(project) {
    if (project.heroImage) {
      return `<div class="project-card-media"><img src="${esc(project.heroImage.src)}" alt="${esc(project.heroImage.alt)}" loading="lazy"></div>`;
    }
    return `<div class="project-card-media project-placeholder" aria-hidden="true"><div class="layer-stack"><span></span><span></span><span></span><small>Client GIS data protected</small></div></div>`;
  }

  function renderProjects() {
    const root = $("#project-grid");
    if (!root) return;
    const sorted = [...data.projects].sort((a, b) => a.priority - b.priority);
    root.innerHTML = sorted.map((project) => {
      const hidden = activeFilter !== "All" && !project.categories.includes(activeFilter);
      return `
        <article class="project-card${hidden ? " is-hidden" : ""}" data-project-id="${esc(project.id)}">
          ${cardMedia(project)}
          <div class="project-card-content">
            <div class="card-meta">
              <span class="project-type">${esc(project.type)}</span>
              <span class="project-year">${esc(project.year)}</span>
            </div>
            <h3>${esc(project.title)}</h3>
            <p class="card-summary">${esc(project.summary)}</p>
            <p class="card-study-area">📍 ${esc(project.studyArea)}</p>
            <div class="card-tags">${tags(project.categories, 3)}</div>
            <div class="card-actions">
              <button class="button button-secondary button-small" type="button" data-open-project="${esc(project.id)}">View Full Case Study →</button>
            </div>
          </div>
        </article>`;
    }).join("");
    updateProjectCount();
  }

  function updateProjectCount() {
    const countEl = $("#project-count");
    if (!countEl) return;
    const visible = data.projects.filter((project) => activeFilter === "All" || project.categories.includes(activeFilter)).length;
    countEl.textContent = activeFilter === "All" 
      ? `Showing all ${visible} verified projects and applied GIS workflows` 
      : `Showing ${visible} item${visible === 1 ? "" : "s"} filtered by "${activeFilter}"`;
  }

  /* -------------------------------------------------------------
     Skills Matrix
  ------------------------------------------------------------- */
  function renderSkills() {
    const root = $("#skills-grid");
    if (!root) return;
    root.innerHTML = data.skillEvidence.map((skill) => `
      <article class="skill-card">
        <header class="skill-header">
          <div>
            <h3>${esc(skill.name)}</h3>
            <span class="skill-badge">${esc(skill.badge || "Capability")}</span>
          </div>
          <span class="skill-level">${esc(skill.level)}</span>
        </header>
        <p class="skill-summary">${esc(skill.summary)}</p>
        <div class="skill-evidence-list">
          <strong>Applied Evidence:</strong>
          <ul>
            ${skill.evidence.map((item) => `<li>${esc(item)}</li>`).join("")}
          </ul>
        </div>
        <div class="skill-links">
          <span class="skill-links-label">Linked Case Studies:</span>
          ${skill.projectIds.map((id) => {
            const project = projectById.get(id);
            return project ? `<button class="skill-link" type="button" data-open-project="${esc(id)}">${esc(project.shortTitle || project.title)} ↗</button>` : "";
          }).join("")}
        </div>
      </article>`).join("");
  }

  /* -------------------------------------------------------------
     Journey Timeline
  ------------------------------------------------------------- */
  function renderJourney() {
    const root = $("#journey-list");
    if (!root) return;
    root.innerHTML = data.journey.map((item) => `
      <li class="journey-item" data-location-key="${esc(item.locationKey || "")}">
        <span class="journey-period">${esc(item.period)}</span>
        <div class="journey-copy">
          <h3>${esc(item.title)}</h3>
          <span class="journey-inst">${esc(item.institution)}</span>
          <p>${esc(item.detail)}</p>
          ${item.locationKey ? `<button class="button-fly-map" type="button" data-fly-to="${esc(item.locationKey)}">🎯 Fly to Study Area on Map</button>` : ""}
        </div>
      </li>`).join("");
  }

  /* -------------------------------------------------------------
     Interactive Leaflet Journey Map
  ------------------------------------------------------------- */
  let journeyMapInstance = null;
  const markerMap = new Map();

  function initJourneyMap() {
    const mapContainer = $("#journey-map");
    if (!mapContainer) return;

    if (typeof L === "undefined") {
      mapContainer.innerHTML = `
        <div class="map-fallback-view">
          <h4>Geospatial Study Areas · Western Ghats & Maharashtra</h4>
          <p>Interactive map library loading in background. View listed study nodes below:</p>
          <div class="map-node-pills">
            ${data.mapLocations.map((loc) => `<button type="button" class="node-pill" data-open-project="${esc(loc.projectId || "")}"><strong>${esc(loc.name)}</strong><span>${esc(loc.badge)}</span></button>`).join("")}
          </div>
        </div>`;
      return;
    }

    try {
      // Initialize Leaflet map centered over Western Ghats / Maharashtra corridor
      const defaultCenter = [17.2, 74.1];
      const defaultZoom = 7.5;

      journeyMapInstance = L.map("journey-map", {
        center: defaultCenter,
        zoom: defaultZoom,
        zoomControl: true,
        scrollWheelZoom: true,
        smoothWheelZoom: true,
        wheelDebounceTime: 40,
        attributionControl: true
      });

      // Crisp, high-contrast light cartographic basemap (CartoDB Positron / Light)
      const basemap = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
      });
      basemap.addTo(journeyMapInstance);

      // Marker colors optimized for contrast on white/light basemap
      const getMarkerColor = (badge) => {
        if (badge.includes("Wildlife") || badge.includes("Conservation")) return "#1d733a"; // Forest Emerald
        if (badge.includes("GeoAI") || badge.includes("Machine Learning")) return "#c45a0b"; // Rich Amber/Terracotta
        if (badge.includes("Industry") || badge.includes("Practice")) return "#0c6896"; // Deep Marine Blue
        return "#236d4b";
      };

      // Add markers with permanent small labels
      data.mapLocations.forEach((loc) => {
        const markerColor = getMarkerColor(loc.badge);
        const customIcon = L.divIcon({
          className: "custom-map-pin-container",
          html: `<div class="custom-map-pin" style="--pin-color: ${markerColor}">
                  <span class="pin-pulse"></span>
                  <span class="pin-core"></span>
                 </div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
          popupAnchor: [0, -14],
          tooltipAnchor: [0, 16]
        });

        const marker = L.marker(loc.coords, { icon: customIcon }).addTo(journeyMapInstance);
        markerMap.set(loc.id, { marker, loc });

        // Permanent small label underneath each marker point
        marker.bindTooltip(
          `<span class="map-point-label" style="--label-color: ${markerColor}">${esc(loc.name)}</span>`,
          {
            permanent: true,
            direction: "bottom",
            className: "custom-map-tooltip",
            offset: [0, 10]
          }
        );

        const popupContent = `
          <div class="map-popup-card">
            <span class="popup-badge">${esc(loc.badge)}</span>
            <h4>${esc(loc.name)}</h4>
            <span class="popup-region">📍 ${esc(loc.region)}</span>
            <p class="popup-role"><strong>${esc(loc.role)}</strong></p>
            <p class="popup-desc">${esc(loc.description)}</p>
            ${loc.projectId ? `<button class="popup-action-btn" type="button" data-open-project="${esc(loc.projectId)}">Inspect Case Study →</button>` : ""}
          </div>
        `;

        marker.bindPopup(popupContent, { maxWidth: 300, className: "custom-leaflet-popup" });

        marker.on("click", () => {
          $("#map-active-label").textContent = `${loc.name} · ${loc.badge}`;
          $("#map-coords-badge").textContent = `${loc.coords[0].toFixed(2)}° N, ${loc.coords[1].toFixed(2)}° E (Zoom: ${journeyMapInstance.getZoom()})`;
        });
      });

      // Update coordinate badge on map pan / zoom scroll
      journeyMapInstance.on("move", () => {
        const center = journeyMapInstance.getCenter();
        const zoom = journeyMapInstance.getZoom();
        const badge = $("#map-coords-badge");
        if (badge) {
          badge.textContent = `${center.lat.toFixed(2)}° N, ${center.lng.toFixed(2)}° E (Zoom: ${zoom})`;
        }
      });

      // Update map bounds to comfortably fit all markers
      const group = new L.featureGroup(Array.from(markerMap.values()).map((v) => v.marker));
      journeyMapInstance.fitBounds(group.getBounds().pad(0.12));

    } catch (err) {
      console.warn("Leaflet map initialization fallback:", err);
    }
  }

  function flyToMapLocation(locationKey) {
    if (!journeyMapInstance) return;
    const entry = markerMap.get(locationKey);
    if (!entry) return;

    journeyMapInstance.flyTo(entry.loc.coords, entry.loc.zoom || 10, {
      duration: reducedMotion ? 0.001 : 1.4,
      easeLinearity: 0.25
    });

    setTimeout(() => {
      entry.marker.openPopup();
      $("#map-active-label").textContent = `${entry.loc.name} · ${entry.loc.badge}`;
      $("#map-coords-badge").textContent = `${entry.loc.coords[0].toFixed(2)}° N, ${entry.loc.coords[1].toFixed(2)}° E`;
    }, reducedMotion ? 10 : 800);
  }

  /* -------------------------------------------------------------
     Case Study Deep Dive: Problem → Data → Workflow → Tools → Analysis → Result → Application
  ------------------------------------------------------------- */
  function listBlock(title, items, icon = "↳") {
    if (!items?.length) return "";
    return `
      <article class="case-detail">
        <h4>${esc(title)}</h4>
        <ul class="case-detail-list">
          ${items.map((item) => `<li><span class="bullet-icon">${icon}</span> <span>${esc(item)}</span></li>`).join("")}
        </ul>
      </article>`;
  }

  function textBlock(title, text) {
    if (!text) return "";
    return `
      <article class="case-detail">
        <h4>${esc(title)}</h4>
        <p>${esc(text)}</p>
      </article>`;
  }

  function projectHeroMedia(project) {
    if (project.heroImage) {
      return `
        <button class="case-hero-media" type="button" data-lightbox-src="${esc(project.heroImage.src)}" data-lightbox-alt="${esc(project.heroImage.alt)}" data-lightbox-caption="${esc(project.heroImage.caption)}" aria-label="Enlarge ${esc(project.heroImage.caption)}">
          <img src="${esc(project.heroImage.src)}" alt="${esc(project.heroImage.alt)}">
          <span class="media-zoom-hint">🔍 Click to zoom full-resolution cartographic map</span>
        </button>`;
    }
    return `
      <div class="case-placeholder">
        <div class="case-placeholder-inner">
          <strong>Enterprise Municipal GIS Data</strong>
          <p>${esc(project.confidentiality || "Production client geospatial datasets and live web portals are proprietary.")}</p>
        </div>
      </div>`;
  }

  function compareMarkup(compare) {
    if (!compare) return "";
    return `
      <section class="case-section">
        <div class="case-section-title">
          <span>Temporal Analysis</span>
          <h3>Multi-Temporal Satellite Comparison (Before vs After)</h3>
        </div>
        <p class="case-section-sub">Drag slider left/right to compare baseline and terminal land-cover transition states:</p>
        <div class="compare-shell">
          <div class="compare-viewport">
            <img src="${esc(compare.before.src)}" alt="${esc(compare.before.alt)}">
            <div class="compare-after" data-compare-after>
              <img src="${esc(compare.after.src)}" alt="${esc(compare.after.alt)}">
            </div>
            <span class="compare-label before">◀ ${esc(compare.before.label)}</span>
            <span class="compare-label after">${esc(compare.after.label)} ▶</span>
          </div>
          <input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Adjust temporal comparison swipe position" data-compare-range>
        </div>
      </section>`;
  }

  function galleryMarkup(project) {
    if (!project.gallery?.length) return "";
    return `
      <section class="case-section">
        <div class="case-section-title">
          <span>Map & Output Gallery</span>
          <h3>Cartographic Maps, Charts & Spatial Factor Evidence</h3>
        </div>
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
    if (project.report) links.push({ href: project.report, label: project.reportLabel || "Read Full Report PDF" });
    if (project.reports) links.push(...project.reports);
    if (!links.length && !project.confidentiality) return "";
    return `
      <section class="case-section">
        <div class="case-section-title">
          <span>Documentation & Evidence</span>
          <h3>Original Reports & Project Deliverables</h3>
        </div>
        ${links.length ? `<div class="case-report-links">${links.map((link) => `<a class="button button-primary" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">📄 ${esc(link.label)} ↗</a>`).join("")}</div>` : ""}
        ${project.confidentiality ? `<p class="confidentiality-note">🔒 ${esc(project.confidentiality)}</p>` : ""}
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
          <div class="case-meta-top">
            <span class="project-type">${esc(project.type)}</span>
            <span class="project-year">${esc(project.year)}</span>
          </div>
          <h2 id="project-dialog-title">${esc(project.title)}</h2>
          <p class="case-hero-summary">${esc(project.summary)}</p>
          <p class="case-study-area"><strong>📍 Study Area / Location:</strong> ${esc(project.studyArea)}</p>
          <div class="result-row">${resultChips(project.results, 4)}</div>
          <div class="tag-row">${tags(project.categories)}</div>
        </div>
        ${projectHeroMedia(project)}
      </section>

      <!-- Structured Workflow Pipeline: Problem → Data → Workflow → Tools → Analysis → Result → Application -->
      <section class="case-section">
        <div class="case-section-title">
          <span>Methodological Framework</span>
          <h3>Problem → Data → Workflow → Tools → Analysis → Result → Application</h3>
        </div>

        <div class="case-pipeline-grid">
          <div class="pipeline-step-card">
            <div class="pipeline-step-header">
              <span class="step-num">01</span>
              <h4>Problem & Spatial Objective</h4>
            </div>
            <p>${esc(project.objective)}</p>
          </div>

          <div class="pipeline-step-card">
            <div class="pipeline-step-header">
              <span class="step-num">02</span>
              <h4>Data Sources & Sensors</h4>
            </div>
            <ul>
              ${project.data.map((d) => `<li>${esc(d)}</li>`).join("")}
            </ul>
          </div>

          <div class="pipeline-step-card">
            <div class="pipeline-step-header">
              <span class="step-num">03</span>
              <h4>Geoprocessing Workflow</h4>
            </div>
            <ol class="workflow-num-list">
              ${(project.workflow || project.methods || []).map((w) => `<li>${esc(w)}</li>`).join("")}
            </ol>
          </div>

          <div class="pipeline-step-card">
            <div class="pipeline-step-header">
              <span class="step-num">04</span>
              <h4>Tools, SDKs & Technologies</h4>
            </div>
            <div class="tag-row">${tags(project.tools)}</div>
          </div>

          <div class="pipeline-step-card">
            <div class="pipeline-step-header">
              <span class="step-num">05</span>
              <h4>Spatial & Statistical Analysis</h4>
            </div>
            <p>${esc(project.analysis || project.findings?.[0] || "Rigorous spatial and statistical evaluation executed.")}</p>
          </div>

          <div class="pipeline-step-card">
            <div class="pipeline-step-header">
              <span class="step-num">06</span>
              <h4>Real-World Application & Impact</h4>
            </div>
            <p>${esc(project.application || "Directly applicable for environmental conservation, hazard zoning, and spatial decision-making.")}</p>
          </div>
        </div>
      </section>

      ${project.results?.length ? `
        <section class="case-section">
          <div class="case-section-title">
            <span>Validated Metrics</span>
            <h3>Quantifiable Results & Performance Findings</h3>
          </div>
          <div class="case-result-grid">
            ${project.results.map((result) => `
              <div class="case-result">
                <strong>${esc(result.value)}</strong>
                <span>${esc(result.label)}</span>
              </div>`).join("")}
          </div>
          ${project.findings?.length ? `
            <div class="findings-box">
              <h4>Key Insights:</h4>
              <ul>${project.findings.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
            </div>` : ""}
          ${project.evidenceNote ? `<p class="case-evidence-note">ℹ️ ${esc(project.evidenceNote)}</p>` : ""}
        </section>` : ""}

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

  /* -------------------------------------------------------------
     Lightbox Modal
  ------------------------------------------------------------- */
  const lightboxDialog = $("#lightbox-dialog");
  const lightboxImage = $("#lightbox-image");
  const lightboxCaption = $("#lightbox-caption");

  function openLightbox(button) {
    const src = button.dataset.lightboxSrc;
    if (!src) return;
    lightboxImage.src = src;
    lightboxImage.alt = button.dataset.lightboxAlt || "Full-resolution project map";
    lightboxCaption.textContent = button.dataset.lightboxCaption || "Cartographic evidence";
    lightboxDialog.showModal();
  }

  function closeLightbox() {
    if (lightboxDialog.open) lightboxDialog.close();
  }

  /* -------------------------------------------------------------
     Global Event Listeners
  ------------------------------------------------------------- */
  document.addEventListener("click", (event) => {
    // UAV Deliverable Switcher
    const uavBtn = event.target.closest("[data-uav-switch]");
    if (uavBtn) {
      event.preventDefault();
      const parentPills = uavBtn.closest(".uav-switcher-pills");
      if (parentPills) {
        parentPills.querySelectorAll(".uav-pill-btn").forEach((b) => {
          b.classList.toggle("is-active", b === uavBtn);
          b.setAttribute("aria-selected", String(b === uavBtn));
        });
      }
      const activeImg = $("#uav-active-img");
      const activeBadge = $("#uav-active-badge");
      const activeCaption = $("#uav-active-caption");
      const mainViewer = $(".uav-main-viewer");

      const src = uavBtn.dataset.src;
      const alt = uavBtn.dataset.alt;
      const badge = uavBtn.dataset.badge;
      const desc = uavBtn.dataset.desc;

      if (activeImg && src) {
        activeImg.src = src;
        activeImg.alt = alt;
      }
      if (activeBadge && badge) activeBadge.textContent = badge;
      if (activeCaption && desc) activeCaption.textContent = desc;
      if (mainViewer && src) {
        mainViewer.dataset.lightboxSrc = src;
        mainViewer.dataset.lightboxAlt = alt;
        mainViewer.dataset.lightboxCaption = desc;
      }
      return;
    }

    // Project trigger
    const openButton = event.target.closest("[data-open-project]");
    if (openButton && openButton.dataset.openProject) {
      event.preventDefault();
      openProject(openButton.dataset.openProject);
      return;
    }

    // Filter trigger
    const filterButton = event.target.closest("[data-filter]");
    if (filterButton) {
      activeFilter = filterButton.dataset.filter;
      $$(".filter-button").forEach((button) => button.setAttribute("aria-pressed", String(button === filterButton)));
      renderProjects();
      return;
    }

    // Map fly-to trigger
    const flyButton = event.target.closest("[data-fly-to]");
    if (flyButton) {
      event.preventDefault();
      const locationKey = flyButton.dataset.flyTo;
      flyToMapLocation(locationKey);
      $("#journey-map")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Lightbox trigger
    const lightboxButton = event.target.closest("[data-lightbox-src]");
    if (lightboxButton) {
      event.preventDefault();
      openLightbox(lightboxButton);
      return;
    }
  });

  $("[data-close-project]")?.addEventListener("click", () => closeProject());
  $("[data-close-lightbox]")?.addEventListener("click", closeLightbox);

  projectDialog?.addEventListener("click", (event) => {
    if (event.target === projectDialog) closeProject();
  });
  lightboxDialog?.addEventListener("click", (event) => {
    if (event.target === lightboxDialog) closeLightbox();
  });

  projectContent?.addEventListener("input", (event) => {
    if (!event.target.matches("[data-compare-range]")) return;
    const wrapper = event.target.closest(".case-section");
    const viewport = $(".compare-viewport", wrapper);
    if (viewport) viewport.style.setProperty("--compare", `${event.target.value}%`);
  });

  projectDialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));

  /* -------------------------------------------------------------
     Mobile Navigation
  ------------------------------------------------------------- */
  const navToggle = $(".nav-toggle");
  const siteNav = $("#site-nav");
  function setNav(open) {
    navToggle.setAttribute("aria-expanded", String(open));
    siteNav.classList.toggle("is-open", open);
  }
  navToggle?.addEventListener("click", () => setNav(navToggle.getAttribute("aria-expanded") !== "true"));
  siteNav?.addEventListener("click", (event) => { if (event.target.closest("a")) setNav(false); });
  document.addEventListener("click", (event) => {
    if (!siteNav || !siteNav.classList.contains("is-open")) return;
    if (!event.target.closest(".site-header")) setNav(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (siteNav && siteNav.classList.contains("is-open")) setNav(false);
      if (projectDialog && projectDialog.open) closeProject();
      if (lightboxDialog && lightboxDialog.open) closeLightbox();
    }
  });

  /* -------------------------------------------------------------
     Active Nav Intersection Observer
  ------------------------------------------------------------- */
  if ("IntersectionObserver" in window) {
    const navLinks = $$(".site-nav a[href^='#']");
    const targets = navLinks.map((link) => $(link.getAttribute("href"))).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => link.toggleAttribute("aria-current", link.getAttribute("href") === `#${visible.target.id}`));
    }, { rootMargin: "-30% 0px -55%", threshold: [0, .2, .5] });
    targets.forEach((target) => observer.observe(target));
  }

  /* -------------------------------------------------------------
     Initial Mount
  ------------------------------------------------------------- */
  renderExperience();
  renderFeatured();
  renderFilters();
  renderProjects();
  renderSkills();
  renderJourney();

  // Initialize interactive journey map on load
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(initJourneyMap, 100);
  });

  // Handle direct hash navigation
  const initialMatch = location.hash.match(/^#project=([^&]+)/);
  if (initialMatch) {
    const id = decodeURIComponent(initialMatch[1]);
    window.setTimeout(() => openProject(id, false), reducedMotion ? 0 : 80);
  }
})();
