const STORAGE_KEY = "buildpro-site-data-v2";
const THEME_PREF_KEY = "buildpro-theme-preference";
const THEME_BACKUP_KEY = "buildpro-site-data-backup-before-terragres";
const TERRAGRES_LOGO =
  "https://terragres.ro/wp-content/uploads/2021/12/logo_terragres.png";
const TERRAGRES_HERO =
  "https://terragres.ro/wp-content/uploads/2022/03/5.png";
const ADMIN_SESSION_KEY = "buildpro-admin-session";
const TICKETS_KEY = "buildpro-tickets-v1";
const NOTIFY_SETTINGS_KEY = "buildpro-notify-settings-v1";
const DEFAULT_ADMIN_NOTIFY_EMAIL = "bogdan.coman456@gmail.com";
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop";
const SERVICE_CONTENT_MAX = 500;
const DEFAULT_SERVICE_ICONS = ["home", "building2", "hammer"];

const SERVICE_LUCIDE_ICONS = {
  home: "home",
  building2: "building-2",
  hammer: "hammer",
  tile: "layout-grid",
  pool: "waves",
  materials: "package",
  build: "building-2",
  design: "hammer"
};

function serviceIconHtml(type) {
  const lucideName = SERVICE_LUCIDE_ICONS[type] || "home";
  return `<i data-lucide="${lucideName}" class="lucide-service-icon" aria-hidden="true"></i>`;
}

function refreshLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

const defaultData = {
  role: "public",
  content: {
    heroTitle: "Building Your Future",
    heroDescription: "Reliable construction services for homes and businesses.",
    heroBackground:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    whoTitle: "Who We Are",
    whoText:
      "We are a dedicated construction team focused on quality delivery, safety, and customer satisfaction in every project.",
    whoSectionImage: PLACEHOLDER,
    teamTitle: "Our Team",
    servicesTitle: "Services",
    servicesAboutHeading: "Built for strength and scale",
    servicesAboutText:
      "We specialize in steel-frame and large-scale construction projects that demand precision, safety, and long-term durability. From industrial halls to commercial buildings, our team manages every phase — design coordination, structural assembly, and final delivery — with clear communication and reliable timelines.\n\nWhether you are expanding operations or starting a new facility, we provide practical solutions tailored to your site, budget, and goals.",
    servicesAboutImage: "assets/services-feature.png",
    projectsTitle: "Recent Projects",
    aboutTitle: "About Us",
    aboutText:
      "We are a trusted construction company with years of experience delivering quality projects on time and within budget.",
    contactTitle: "Contact Us",
    contactText: "Get in touch for quotes and project consultations.",
    contactInfoText:
      "Clădirea VIA Office, Str. Colinei, Nr. 2, Etaj 3\n400520 Cluj-Napoca\nCluj, România\n\nEmail: office@terragres.ro\n\nTelefon: +40 754 087 602 / +40 755 110 102\n\nFax: +40 374 096 444\n\nUrmărește-ne aici:",
    contactProgramText: "Luni – Vineri: 09:00 – 17:00\nSâmbătă - Duminică: Închis",
    contactFooterAddress:
      "Clădirea VIA Office, Str. Colinei, Nr. 2, Etaj 3, 400520 Cluj-Napoca Cluj, România",
    contactFooterPhone: "+40 754 087 602",
    contactFooterEmail: "office@terragres.ro",
    footerLegalTitle: "Protecția datelor",
    footerLegalText: "Termeni și Condiții & Politica de Confidențialitate",
    footerText: "© 2026 BuildPro Construction. All rights reserved.",
    logoText: "BuildPro Construction",
    logoImage: ""
  },
  services: [
    {
      id: "residential",
      icon: "home",
      title: "Residential Construction",
      content:
        "We deliver complete residential builds from foundation to finish. Our team manages permits, scheduling, and quality checks at every stage. Clients receive clear timelines, transparent pricing, and workmanship that meets modern safety and energy standards for lasting homes."
    },
    {
      id: "commercial",
      icon: "building2",
      title: "Commercial Projects",
      content:
        "Our commercial division handles offices, retail, and industrial spaces built for daily operations and growth. We coordinate subcontractors, logistics, and compliance so your business can open on schedule. Every project is planned around safety, efficiency, and long-term performance."
    },
    {
      id: "renovation",
      icon: "hammer",
      title: "Renovations",
      content:
        "Renovation services cover structural updates, interior modernization, and full property refreshes. We work with existing buildings carefully to minimize disruption while improving layout, finishes, and systems. From kitchens to full building upgrades, we deliver practical results on time."
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Project 1",
      description: "Recent home construction sample.",
      cover:
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1200&auto=format&fit=crop",
      media: []
    },
    {
      id: "project-2",
      title: "Project 2",
      description: "Recent commercial build sample.",
      cover:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      media: []
    },
    {
      id: "project-3",
      title: "Project 3",
      description: "Recent renovation sample.",
      cover:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      media: []
    }
  ],
  whoPeople: [
    {
      id: "person-1",
      name: "Person 1",
      bio: "Team member profile. Add role and experience here.",
      cover: PLACEHOLDER,
      media: []
    },
    {
      id: "person-2",
      name: "Person 2",
      bio: "Team member profile. Add role and experience here.",
      cover: PLACEHOLDER,
      media: []
    },
    {
      id: "person-3",
      name: "Person 3",
      bio: "Team member profile. Add role and experience here.",
      cover: PLACEHOLDER,
      media: []
    }
  ]
};

/** Content snapshot modeled on https://terragres.ro/ */
const terragresSitePreset = {
  role: "public",
  content: {
    heroTitle: "Placări cu materiale ceramice",
    heroDescription:
      "Realizăm placări cu materiale ceramice pentru proiecte de orice amploare oriunde în România. Folosim atât tehnologia montajului în pat vibrat, cât și cea prin lipire, în funcție de nevoile și cerințele lucrării.",
    heroBackground: TERRAGRES_HERO,
    whoTitle: "Despre noi",
    whoText:
      "De peste 18 ani oferim soluții complexe și integrate în domeniul placărilor cu material ceramic. Dezvoltarea colaborărilor de durată, bazate pe încredere, constituie unul dintre obiectivele noastre principale.",
    whoSectionImage:
      "https://terragres.ro/wp-content/uploads/2022/11/ceramic_.png",
    teamTitle: "Echipa",
    servicesTitle: "Servicii",
    servicesAboutHeading: "Placări cu materiale ceramice",
    servicesAboutText:
      "Avantajul nostru competitiv stă în capacitatea și experiența noastră de a oferi servicii diverse de montaj pentru diferite tipuri de plăci ceramice: mozaic de sticlă, plăci ceramice industriale, format mare și extra-large (1000 x 3000 mm). Pentru majoritatea proiectelor contractăm un pachet complet de furnizare ceramică și materiale auxiliare + manoperă.",
    servicesAboutImage:
      "https://terragres.ro/wp-content/uploads/2022/11/ceramic_.png",
    projectsTitle: "Proiecte",
    aboutTitle: "De ce să lucrezi cu noi?",
    aboutText:
      "Suntem un partener de încredere pentru care relația, profesionalismul, calitatea și eficiența sunt cele mai importante obiective. Ne mândrim cu exigența privind calitatea serviciilor și cu viteza mare de execuție a echipelor noastre.",
    contactTitle: "Ia legătura cu noi!",
    contactText: "Executăm lucrări oriunde în țară.",
    contactInfoText:
      "Clădirea VIA Office, Str. Colinei, Nr. 2, Etaj 3\n400520 Cluj-Napoca\nCluj, România\n\nEmail: office@terragres.ro\n\nTelefon: +40 754 087 602 / +40 755 110 102\n\nFax: +40 374 096 444\n\nUrmărește-ne aici:",
    contactProgramText: "Luni – Vineri: 09:00 – 17:00\nSâmbătă - Duminică: Închis",
    contactFooterAddress:
      "Clădirea VIA Office, Str. Colinei, Nr. 2, Etaj 3, 400520 Cluj-Napoca Cluj, România",
    contactFooterPhone: "+40 754 087 602",
    contactFooterEmail: "office@terragres.ro",
    footerLegalTitle: "Protecția datelor",
    footerLegalText: "Termeni și Condiții & Politica de Confidențialitate",
    footerText: "© 2026 Terra Gres SRL. Toate drepturile rezervate.",
    logoText: "Terra Gres",
    logoImage: TERRAGRES_LOGO
  },
  services: [
    {
      id: "placari",
      icon: "tile",
      title: "Placări cu materiale ceramice",
      content:
        "Acordăm o atenție deosebită tuturor proiectelor noastre, de la rețele de supermarketuri și hipermarketuri, la proiecte de centre și galerii comerciale. Punctele noastre forte sunt atenția la detalii, exigența privind calitatea serviciilor și o viteză mare de execuție."
    },
    {
      id: "piscine",
      icon: "pool",
      title: "Piscine și proiecte aqua & fun",
      content:
        "În 2015, acest domeniu a devenit un nou capitol în dezvoltarea companiei noastre. Astăzi ne mândrim cu un portofoliu variat, Aquapark Nymphaea fiind cel mai mare din această categorie."
    },
    {
      id: "materiale",
      icon: "materials",
      title: "Furnizor de materiale pentru placări",
      content:
        "Dezvoltarea colaborărilor de durată, bazate pe încredere, constituie unul dintre obiectivele noastre principale. Creăm constant noi parteneriate cu producătorii și importatorii materialelor pe care le folosim."
    }
  ],
  projects: [
    {
      id: "aquapark",
      title: "Aquapark Nymphaea",
      description: "Piscine și proiecte Aqua & Fun — Oradea.",
      cover:
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop",
      media: []
    },
    {
      id: "trade-center",
      title: "Trade Center",
      description: "Clădiri de birouri — proiect complex, termene respectate.",
      cover:
        "https://terragres.ro/wp-content/uploads/2016/09/Trade-Center-Terra-Gres-featured.png",
      media: []
    },
    {
      id: "coresi",
      title: "Coresi Shopping Resort",
      description: "Galerii comerciale — placări ceramice la scară largă.",
      cover:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      media: []
    },
    {
      id: "bmw",
      title: "Showroom și service BMW",
      description: "Showroom / Service auto.",
      cover:
        "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1200&auto=format&fit=crop",
      media: []
    },
    {
      id: "penny",
      title: "Penny Market",
      description: "Supermarket și hipermarket.",
      cover:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop",
      media: []
    }
  ],
  whoPeople: [
    {
      id: "bogdan",
      name: "Bogdan Crișan",
      bio: "Director Executiv",
      cover: PLACEHOLDER,
      media: []
    },
    {
      id: "corneliu",
      name: "Corneliu Crișan",
      bio: "Director Tehnic",
      cover: PLACEHOLDER,
      media: []
    },
    {
      id: "andrei",
      name: "Andrei Năndreanu",
      bio: "Director Tehnic",
      cover: PLACEHOLDER,
      media: []
    },
    {
      id: "ada",
      name: "Ada Zerghea",
      bio: "Finance & Office Manager",
      cover: PLACEHOLDER,
      media: []
    }
  ]
};

let siteData = loadData();
let tickets = loadTickets();
let notifySettings = loadNotifySettings();
let activeProjectId = null;
let activePersonId = null;
let editingServiceId = null;
let selectedTicketId = null;
let scrollEffectsInitialized = false;

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const loginOpenBtn = document.getElementById("login-open-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const projectGalleryScreen = document.getElementById("project-gallery-screen");
const personScreen = document.getElementById("person-screen");
const teamScreen = document.getElementById("team-screen");
const contactScreen = document.getElementById("contact-screen");
let teamScreenOpen = false;
let contactScreenOpen = false;
let projectGalleryOpen = false;
let editingProjectId = null;
let suppressHistoryNav = false;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  setupMenu();
  setupWhoTeamScreen();
  setupContactScreen();
    setupContactForm();
    setupAuth();
    setupInbox();
    setupSectionToolbars();
    bindMainAdmin();
    bindProjectEditAdmin();
    bindProjectGalleryAdmin();
    bindPersonAdmin();
    document.getElementById("close-project-gallery")?.addEventListener("click", closeProjectGallery);
    document.getElementById("close-person-screen")?.addEventListener("click", closePersonDetails);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && projectGalleryOpen) closeProjectGallery();
      if (e.key === "Escape" && contactScreenOpen) closeContactScreen();
      if (e.key === "Escape" && teamScreenOpen) closeTeamScreen();
    });
  renderAll();
}

function isTerragresTheme() {
  return document.body.classList.contains("theme-terragres");
}

function setupTheme() {
  const btn = document.getElementById("theme-revert-toggle");
  btn?.addEventListener("click", toggleTheme);
  if (localStorage.getItem(THEME_PREF_KEY) === "terragres") {
    document.body.classList.add("theme-terragres");
    document.documentElement.lang = "ro";
    const topBar = document.getElementById("terragres-top-bar");
    if (topBar) topBar.setAttribute("aria-hidden", "false");
    applyThemeChrome(true);
    updateThemeToggleButton();
  } else {
    applyOriginalThemeChrome();
  }
}

function toggleTheme() {
  if (isTerragresTheme()) {
    restoreOriginalTheme();
  } else {
    applyTerragresTheme(true);
  }
}

function applyTerragresTheme(saveBackup) {
  if (saveBackup) {
    if (!localStorage.getItem(THEME_BACKUP_KEY)) {
      localStorage.setItem(THEME_BACKUP_KEY, JSON.stringify(siteData));
    }
    const preset = structuredClone(terragresSitePreset);
    preset.role = siteData.role;
    siteData = preset;
  }
  localStorage.setItem(THEME_PREF_KEY, "terragres");
  document.body.classList.add("theme-terragres");
  document.documentElement.lang = "ro";
  const topBar = document.getElementById("terragres-top-bar");
  if (topBar) topBar.setAttribute("aria-hidden", "false");
  applyThemeChrome(true);
  persistAndRender();
  updateThemeToggleButton();
}

function restoreOriginalTheme() {
  const backup = localStorage.getItem(THEME_BACKUP_KEY);
  if (backup) {
    try {
      const parsed = JSON.parse(backup);
      siteData = {
        ...structuredClone(defaultData),
        ...parsed,
        content: { ...defaultData.content, ...(parsed.content || {}) },
        services: normalizeServices(parsed.services),
        projects: Array.isArray(parsed.projects) ? parsed.projects : defaultData.projects,
        whoPeople: normalizeWhoPeople(parsed)
      };
      siteData.role = sessionStorage.getItem(ADMIN_SESSION_KEY) === "true" ? "admin" : "public";
    } catch {
      siteData = loadData();
    }
  } else {
    siteData = structuredClone(defaultData);
    siteData.role = sessionStorage.getItem(ADMIN_SESSION_KEY) === "true" ? "admin" : "public";
  }
  localStorage.removeItem(THEME_PREF_KEY);
  document.body.classList.remove("theme-terragres");
  document.documentElement.lang = "en";
  const topBar = document.getElementById("terragres-top-bar");
  if (topBar) topBar.setAttribute("aria-hidden", "true");
  applyThemeChrome(false);
  persistAndRender();
  updateThemeToggleButton();
}

function applyOriginalThemeChrome() {
  applyThemeChrome(false);
  updateThemeToggleButton();
}

function applyThemeChrome(terragres) {
  const attr = terragres ? "data-label-terragres" : "data-label-original";
  const phAttr = terragres ? "data-ph-terragres" : "data-ph-original";
  document.querySelectorAll(`[${attr}]`).forEach((el) => {
    const text = el.getAttribute(attr);
    if (text) el.textContent = text;
  });
  document.querySelectorAll(`[${phAttr}]`).forEach((el) => {
    const ph = el.getAttribute(phAttr);
    if (ph) el.placeholder = ph;
  });
  const title = terragres
    ? "Terra Gres - Partener de încredere în domeniul placărilor ceramice"
    : "BuildPro Construction";
  document.title = title;
}

function updateThemeToggleButton() {
  const btn = document.getElementById("theme-revert-toggle");
  if (!btn) return;
  if (isTerragresTheme()) {
    btn.textContent = "← Back to original design";
    btn.title = "Restore your previous content and BuildPro styling";
  } else {
    btn.textContent = "Try Terra Gres style";
    btn.title = "Preview look and content based on terragres.ro (you can switch back)";
  }
}

function dismissContactForNav() {
  if (!contactScreenOpen) return;
  hideContactUI();
  if (location.hash === "#contact") {
    history.replaceState(null, "", "#home");
  }
}

function dismissTeamForNav() {
  if (!teamScreenOpen) return;
  hideTeamUI();
  if (location.hash === "#team") {
    history.replaceState(null, "", "#home");
  }
}

function setupSectionToolbars() {
  document.querySelectorAll("[data-edit-panel]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!isAdmin()) return;
      const panel = document.getElementById(btn.dataset.editPanel);
      if (!panel) return;
      closeAllAdminPanels();
      panel.classList.add("open");
      if (isAdmin()) initImageEditors();
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });

  document.querySelectorAll("[data-close-panel]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.dataset.closePanel);
      if (panel) panel.classList.remove("open");
      if (btn.dataset.closePanel === "project-edit-admin") closeProjectEdit();
    });
  });

  document.querySelectorAll("[data-delete-section]").forEach((btn) => {
    btn.addEventListener("click", () => deleteSectionContent(btn.dataset.deleteSection));
  });
}

function closeAllAdminPanels() {
  document.querySelectorAll(".admin-panel.open").forEach((p) => p.classList.remove("open"));
  if (editingProjectId) editingProjectId = null;
}

function deleteSectionContent(section) {
  if (!isAdmin()) return;
  if (!confirm("Delete this content? This cannot be undone.")) return;

  const d = defaultData.content;
  const c = siteData.content;

  switch (section) {
    case "hero":
      c.heroTitle = "";
      c.heroDescription = "";
      c.heroBackground = d.heroBackground;
      break;
    case "services-about":
      c.servicesAboutHeading = "";
      c.servicesAboutText = "";
      c.servicesAboutImage = d.servicesAboutImage;
      break;
    case "who-section":
      c.whoTitle = "";
      c.whoText = "";
      c.whoSectionImage = "";
      break;
    case "about":
      c.aboutTitle = "";
      c.aboutText = "";
      break;
    case "contact":
      c.contactTitle = "";
      c.contactText = "";
      c.contactInfoText = "";
      c.contactProgramText = "";
      c.contactFooterAddress = "";
      c.contactFooterPhone = "";
      c.contactFooterEmail = "";
      break;
    case "footer":
      c.footerText = "";
      break;
    default:
      return;
  }

  closeAllAdminPanels();
  persistAndRender();
  toast("Content deleted.");
}

function isAdmin() {
  return siteData.role === "admin";
}

function setupMenu() {
  if (!menuToggle || !nav) return;
  menuToggle.addEventListener("click", () => nav.classList.toggle("active"));
  nav.addEventListener("click", (e) => {
    const projectLink = e.target.closest("[data-nav-project]");
    if (projectLink) {
      e.preventDefault();
      dismissContactForNav();
      openProjectGallery(projectLink.dataset.navProject);
      nav.classList.remove("active");
      return;
    }
    const personLink = e.target.closest("[data-nav-person]");
    if (personLink) {
      e.preventDefault();
      dismissContactForNav();
      dismissTeamForNav();
      openTeamScreen();
      openPersonDetails(personLink.dataset.navPerson);
      nav.classList.remove("active");
      return;
    }
    const hashLink = e.target.closest('a[href^="#"]');
    if (hashLink) {
      dismissContactForNav();
      dismissTeamForNav();
      nav.classList.remove("active");
    }
  });
}

function setupContactScreen() {
  if (!contactScreen) return;

  document.addEventListener(
    "click",
    (e) => {
      if (e.target.closest("#nav-contact-open, #hero-contact-open")) {
        e.preventDefault();
        e.stopPropagation();
        nav?.classList.remove("active");
        openContactScreen();
      }
    },
    true
  );

  document.getElementById("contact-screen-logo-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    closeContactScreen();
  });

  window.addEventListener("popstate", onOverlayPopState);

  if (location.hash === "#contact") {
    showContactUI();
    history.replaceState({ contact: true }, "", "#contact");
  } else if (location.hash === "#team") {
    showTeamUI();
    history.replaceState({ team: true }, "", "#team");
  }

  window.openContactScreen = openContactScreen;
  window.closeContactScreen = closeContactScreen;
  window.openTeamScreen = openTeamScreen;
  window.closeTeamScreen = closeTeamScreen;
}

function onOverlayPopState() {
  if (suppressHistoryNav) {
    suppressHistoryNav = false;
    return;
  }
  const hash = location.hash;
  if (hash === "#contact") {
    if (teamScreenOpen) hideTeamUI();
    if (!contactScreenOpen) showContactUI();
    return;
  }
  if (hash === "#team") {
    if (contactScreenOpen) hideContactUI();
    if (!teamScreenOpen) showTeamUI();
    return;
  }
  if (contactScreenOpen) hideContactUI();
  if (teamScreenOpen) hideTeamUI();
}

function showContactUI() {
  if (!contactScreen) return;
  contactScreenOpen = true;
  contactScreen.classList.remove("hidden-screen");
  contactScreen.classList.add("is-open");
  contactScreen.removeAttribute("hidden");
  contactScreen.setAttribute("aria-hidden", "false");
  document.body.classList.add("contact-screen-open");
  document.body.style.overflow = "hidden";
  try {
    renderContactScreen();
  } catch (err) {
    console.error("Contact screen render failed:", err);
  }
  refreshLucideIcons();
}

function hideContactUI() {
  if (!contactScreen) return;
  contactScreenOpen = false;
  contactScreen.classList.add("hidden-screen");
  contactScreen.classList.remove("is-open");
  contactScreen.setAttribute("hidden", "");
  contactScreen.setAttribute("aria-hidden", "true");
  document.body.classList.remove("contact-screen-open");
  if (!teamScreenOpen) {
    document.body.style.overflow = "";
  }
}

function openContactScreen() {
  if (contactScreenOpen) return;
  if (teamScreenOpen) hideTeamUI();
  showContactUI();
  if (location.hash !== "#contact") {
    history.pushState({ contact: true }, "", "#contact");
  }
}

function closeContactScreen() {
  if (!contactScreenOpen) return;
  hideContactUI();
  if (location.hash === "#contact") {
    suppressHistoryNav = true;
    if (window.history.length > 1) {
      history.back();
    } else {
      history.replaceState(null, "", "#home");
      suppressHistoryNav = false;
    }
  }
}

function renderContactScreen() {
  const c = siteData.content;
  const d = defaultData.content;
  document.getElementById("contact-title").textContent = c.contactTitle || d.contactTitle;
  document.getElementById("contact-text").textContent = c.contactText || d.contactText;
  document.getElementById("contact-info-body").innerHTML = formatContactInfoHtml(
    c.contactInfoText || d.contactInfoText || ""
  );
  applyLogoBrand(
    document.getElementById("contact-screen-logo-text"),
    document.getElementById("contact-screen-logo-image"),
    document.getElementById("contact-screen-logo-visual"),
    c.logoText,
    c.logoImage
  );
  const copyrightEl = document.getElementById("contact-screen-footer-text");
  if (copyrightEl) {
    copyrightEl.textContent = c.footerText || d.footerText || "";
  }
}
function setupWhoTeamScreen() {
  document.getElementById("nav-team-open")?.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.remove("active");
    openTeamScreen();
  });
}

function showTeamUI() {
  if (!teamScreen) return;
  teamScreenOpen = true;
  teamScreen.classList.remove("hidden-screen");
  teamScreen.classList.add("is-open");
  teamScreen.removeAttribute("hidden");
  teamScreen.setAttribute("aria-hidden", "false");
  document.body.classList.add("team-screen-open");
  document.body.style.overflow = "hidden";
  try {
    renderTeamScreen();
  } catch (err) {
    console.error("Team screen render failed:", err);
  }
  refreshLucideIcons();
}

function hideTeamUI() {
  if (!teamScreen) return;
  teamScreenOpen = false;
  teamScreen.classList.add("hidden-screen");
  teamScreen.classList.remove("is-open");
  teamScreen.setAttribute("hidden", "");
  teamScreen.setAttribute("aria-hidden", "true");
  document.body.classList.remove("team-screen-open");
  if (!contactScreenOpen) {
    document.body.style.overflow = "";
  }
  closeAllAdminPanels();
}

function openTeamScreen() {
  if (teamScreenOpen) return;
  if (contactScreenOpen) hideContactUI();
  showTeamUI();
  if (location.hash !== "#team") {
    history.pushState({ team: true }, "", "#team");
  }
}

function closeTeamScreen() {
  if (!teamScreenOpen) return;
  hideTeamUI();
  if (location.hash === "#team") {
    suppressHistoryNav = true;
    if (window.history.length > 1) {
      history.back();
    } else {
      history.replaceState(null, "", "#home");
      suppressHistoryNav = false;
    }
  }
}

function renderTeamScreen() {
  const c = siteData.content;
  const d = defaultData.content;
  const whoImg = c.whoSectionImage || d.whoSectionImage || PLACEHOLDER;

  document.getElementById("team-screen-who-title").textContent =
    c.whoTitle || d.whoTitle || "Who We Are";
  document.getElementById("team-screen-image").src = whoImg;
  document.getElementById("team-screen-image").alt = c.whoTitle || d.whoTitle || "Team";
  document.getElementById("team-screen-text").innerHTML = formatAboutText(c.whoText || d.whoText || "");
  document.getElementById("team-screen-team-title").textContent =
    c.teamTitle || d.teamTitle || "Our Team";

  if (isAdmin()) {
    document.getElementById("who-title-input").value = c.whoTitle ?? d.whoTitle ?? "";
    document.getElementById("who-text-input").value = c.whoText ?? d.whoText ?? "";
    document.getElementById("who-section-image-url").value =
      c.whoSectionImage ?? d.whoSectionImage ?? "";
    setImageEditorPreview("who-section-preview", whoImg);
    document.getElementById("team-title-input").value = c.teamTitle ?? d.teamTitle ?? "";
  }
  renderTeamScreenList();
}

function renderTeamScreenList() {
  const gallery = document.getElementById("team-screen-list");
  if (!gallery) return;
  gallery.innerHTML = "";
  if (!siteData.whoPeople.length) {
    gallery.innerHTML = '<p class="inbox-hint">No team members yet. Add a person as admin.</p>';
    return;
  }

  siteData.whoPeople.forEach((person) => {
    const row = document.createElement("article");
    row.className = "who-person-row";
    row.dataset.id = person.id;

    const mediaCol = document.createElement("div");
    mediaCol.className = "who-person-media";
    const coverHost = document.createElement("div");
    coverHost.className = "cover-carousel-host";
    mediaCol.appendChild(coverHost);
    const slides = personSlides(person);
    renderMediaCarousel(
      coverHost,
      slides.length ? slides : [{ type: "image", url: person.cover || PLACEHOLDER }],
      { variant: "card", alt: person.name }
    );

    const textCol = document.createElement("div");
    textCol.className = "who-person-text";
    textCol.innerHTML = `
      <h3>${escapeHtml(person.name)}</h3>
      <p>${escapeHtml(person.bio || "")}</p>
      ${adminCardActionsHtml("person", person.id)}
    `;

    row.appendChild(mediaCol);
    row.appendChild(textCol);
    row.addEventListener("click", (e) => {
      if (e.target.closest(".card-admin-bar") || e.target.closest(".media-carousel-arrow")) return;
      openPersonDetails(person.id);
    });
    gallery.appendChild(row);
  });
  bindCardAdmin(gallery);
}

function renderNavDropdowns() {
  const c = siteData.content;
  const d = defaultData.content;

  fillNavDropdown(
    "nav-services-dropdown",
    siteData.services.map(
      (service) =>
        `<li><a href="#service-${escapeAttr(service.id)}">${escapeHtml(service.title)}</a></li>`
    ),
    "#services",
    "View all services",
    false
  );

  fillNavDropdown(
    "nav-projects-dropdown",
    siteData.projects.map(
      (project) =>
        `<li><a href="#projects" data-nav-project="${escapeAttr(project.id)}">${escapeHtml(project.title)}</a></li>`
    ),
    "#projects",
    "View all projects",
    false
  );

  const aboutTitle = (c.aboutTitle || "About Us").trim();
  fillNavDropdown(
    "nav-about-dropdown",
    [`<li><a href="#about">${escapeHtml(aboutTitle)}</a></li>`],
    "#about",
    aboutTitle,
    false
  );

}

function fillNavDropdown(
  containerId,
  itemHtmlList,
  sectionHref,
  allLabel,
  showAllLink = true,
  allLinkExtra = ""
) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = itemHtmlList.filter(Boolean);
  if (!items.length) {
    container.innerHTML = `<li><a href="${sectionHref}" ${allLinkExtra}>${escapeHtml(allLabel)}</a></li>`;
    return;
  }
  const allLinkHtml = showAllLink
    ? `<li><a class="nav-dropdown-all" href="${sectionHref}" ${allLinkExtra}>${escapeHtml(allLabel)}</a></li>`
    : "";
  container.innerHTML = `${items.join("")}${allLinkHtml}`;
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const consent = document.getElementById("contact-consent");
    if (!consent.checked) {
      window.alert("Please agree to the processing of your personal data before sending.");
      return;
    }

    const ticket = {
      id: `ticket-${Date.now()}`,
      name: document.getElementById("contact-name").value.trim(),
      email: document.getElementById("contact-email").value.trim(),
      subject: document.getElementById("contact-subject").value.trim(),
      message: document.getElementById("contact-message").value.trim(),
      createdAt: new Date().toISOString(),
      read: false
    };

    tickets.unshift(ticket);
    saveTickets();
    await sendTicketEmailNotification(ticket);
    notifyAdminNewTicket(ticket);

    window.alert("Thank you! Your message has been received. We will contact you soon.");
    form.reset();
  });
}

function loadTickets() {
  try {
    const raw = localStorage.getItem(TICKETS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveTickets() {
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
  updateUnreadBadge();
  if (document.getElementById("inbox-screen") && !document.getElementById("inbox-screen").classList.contains("hidden-screen")) {
    renderTicketsList();
  }
}

function defaultNotifySettings() {
  return {
    adminEmail: DEFAULT_ADMIN_NOTIFY_EMAIL,
    adminPhone: "",
    web3formsKey: ""
  };
}

function loadNotifySettings() {
  const defaults = defaultNotifySettings();
  try {
    const raw = localStorage.getItem(NOTIFY_SETTINGS_KEY);
    if (!raw) return { ...defaults };
    const saved = JSON.parse(raw);
    return {
      ...defaults,
      ...saved,
      adminEmail: (saved.adminEmail || "").trim() || defaults.adminEmail,
      adminPhone: saved.adminPhone || defaults.adminPhone,
      web3formsKey: saved.web3formsKey || defaults.web3formsKey
    };
  } catch {
    return { ...defaults };
  }
}

function ticketNotifyEmail() {
  return DEFAULT_ADMIN_NOTIFY_EMAIL;
}

function saveNotifySettingsToStorage() {
  localStorage.setItem(NOTIFY_SETTINGS_KEY, JSON.stringify(notifySettings));
}

async function sendTicketEmailNotification(ticket) {
  const toEmail = DEFAULT_ADMIN_NOTIFY_EMAIL;
  const emailSubject = `New contact ticket: ${ticket.subject}`;
  const bodyText = `Name: ${ticket.name}\nEmail: ${ticket.email}\nSubject: ${ticket.subject}\n\n${ticket.message}`;
  const key = (notifySettings.web3formsKey || "").trim();

  if (key) {
    const sent = await sendTicketViaWeb3Forms(ticket, toEmail, emailSubject, bodyText, key);
    if (sent) return;
  }

  const sentAjax = await sendTicketViaFormSubmitAjax(ticket, toEmail, emailSubject, bodyText);
  if (!sentAjax) {
    sendTicketViaFormSubmitForm(ticket, toEmail, emailSubject, bodyText);
  }
}

async function sendTicketViaWeb3Forms(ticket, toEmail, emailSubject, bodyText, key) {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject: emailSubject,
        from_name: ticket.name,
        email: ticket.email,
        message: bodyText,
        to: toEmail
      })
    });
    const data = await res.json();
    return res.ok && data.success;
  } catch (err) {
    console.warn("Web3Forms email failed:", err);
    return false;
  }
}

async function sendTicketViaFormSubmitAjax(ticket, toEmail, emailSubject, bodyText) {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: ticket.name,
        email: ticket.email,
        subject: emailSubject,
        message: bodyText,
        _subject: emailSubject,
        _template: "table",
        _replyto: ticket.email,
        _captcha: "false"
      })
    });
    const data = await res.json();
    return res.ok && (data.success === true || data.success === "true");
  } catch (err) {
    console.warn("FormSubmit AJAX email failed:", err);
    return false;
  }
}

function sendTicketViaFormSubmitForm(ticket, toEmail, emailSubject, bodyText) {
  try {
    const iframeName = `formsubmit-${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.action = `https://formsubmit.co/${encodeURIComponent(toEmail)}`;
    form.target = iframeName;

    const fields = {
      name: ticket.name,
      email: ticket.email,
      subject: emailSubject,
      message: bodyText,
      _subject: emailSubject,
      _template: "table",
      _replyto: ticket.email,
      _captcha: "false"
    };

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      form.remove();
      iframe.remove();
    }, 4000);
  } catch (err) {
    console.warn("FormSubmit form email failed:", err);
  }
}

function notifyAdminNewTicket(ticket) {
  if (!isAdmin()) return;
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("New contact ticket", {
      body: `${ticket.name}: ${ticket.subject}`,
      icon: "/favicon.ico"
    });
  }
}

function setupInbox() {
  const inboxBtn = document.getElementById("admin-inbox-btn");
  const inboxScreen = document.getElementById("inbox-screen");

  inboxBtn.addEventListener("click", openInbox);
  document.getElementById("close-inbox-screen").addEventListener("click", closeInbox);
  inboxScreen.addEventListener("click", (e) => {
    if (e.target === inboxScreen) closeInbox();
  });

  document.querySelectorAll(".inbox-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchInboxTab(tab.dataset.inboxTab));
  });

  document.getElementById("mark-ticket-read").addEventListener("click", () => {
    if (!selectedTicketId) return;
    const t = tickets.find((x) => x.id === selectedTicketId);
    if (t) {
      t.read = true;
      saveTickets();
      renderTicketsList();
      showTicketDetail(selectedTicketId);
    }
  });

  document.getElementById("delete-ticket").addEventListener("click", () => {
    if (!selectedTicketId) return;
    if (!confirm("Delete this ticket?")) return;
    tickets = tickets.filter((x) => x.id !== selectedTicketId);
    selectedTicketId = null;
    saveTickets();
    renderTicketsList();
    document.getElementById("ticket-detail").classList.add("ticket-detail-hidden");
  });

  document.getElementById("save-notify-settings").addEventListener("click", () => {
    notifySettings.adminEmail = ticketNotifyEmail();
    notifySettings.adminPhone = document.getElementById("admin-notify-phone").value.trim();
    notifySettings.web3formsKey = document.getElementById("web3forms-key").value.trim();
    saveNotifySettingsToStorage();
    toast("Notification settings saved.");
  });

  document.getElementById("enable-push-btn").addEventListener("click", async () => {
    if (!("Notification" in window)) {
      window.alert("Browser notifications are not supported on this device.");
      return;
    }
    const perm = await Notification.requestPermission();
    if (perm === "granted") {
      toast("Browser notifications enabled.");
    } else {
      window.alert("Notifications were blocked. Allow them in browser settings.");
    }
  });

  window.addEventListener("storage", (e) => {
    if (e.key === TICKETS_KEY) {
      tickets = loadTickets();
      updateUnreadBadge();
      renderTicketsList();
    }
  });

  fillNotifySettingsForm();
  updateUnreadBadge();
}

function fillNotifySettingsForm() {
  document.getElementById("admin-notify-email").value = ticketNotifyEmail();
  document.getElementById("admin-notify-phone").value = notifySettings.adminPhone || "";
  document.getElementById("web3forms-key").value = notifySettings.web3formsKey || "";
}

function openInbox() {
  if (!isAdmin()) return;
  tickets = loadTickets();
  fillNotifySettingsForm();
  renderTicketsList();
  document.getElementById("ticket-detail").classList.add("ticket-detail-hidden");
  selectedTicketId = null;
  switchInboxTab("tickets");
  document.getElementById("inbox-screen").classList.remove("hidden-screen");
  document.getElementById("inbox-screen").setAttribute("aria-hidden", "false");
}

function closeInbox() {
  document.getElementById("inbox-screen").classList.add("hidden-screen");
  document.getElementById("inbox-screen").setAttribute("aria-hidden", "true");
}

function switchInboxTab(tab) {
  document.querySelectorAll(".inbox-tab").forEach((t) => {
    t.classList.toggle("active", t.dataset.inboxTab === tab);
  });
  document.getElementById("inbox-tickets-panel").classList.toggle("hidden", tab !== "tickets");
  document.getElementById("inbox-settings-panel").classList.toggle("hidden", tab !== "settings");
}

function renderTicketsList() {
  const list = document.getElementById("tickets-list");
  if (!list) return;

  if (!tickets.length) {
    list.innerHTML = '<p class="inbox-hint" style="padding:16px">No tickets yet.</p>';
    return;
  }

  list.innerHTML = tickets
    .map(
      (t) => `
    <div class="ticket-item ${t.read ? "" : "unread"}" data-ticket-id="${t.id}">
      <div class="ticket-item-title">${escapeHtml(t.subject)}</div>
      <div class="ticket-item-meta">${escapeHtml(t.name)} · ${formatTicketDate(t.createdAt)}${t.read ? "" : " · NEW"}</div>
    </div>
  `
    )
    .join("");

  list.querySelectorAll(".ticket-item").forEach((el) => {
    el.addEventListener("click", () => showTicketDetail(el.dataset.ticketId));
  });
}

function showTicketDetail(id) {
  const t = tickets.find((x) => x.id === id);
  if (!t) return;
  selectedTicketId = id;
  if (!t.read) {
    t.read = true;
    saveTickets();
    renderTicketsList();
  }

  document.getElementById("ticket-detail-subject").textContent = t.subject;
  document.getElementById("ticket-detail-name").textContent = t.name;
  const emailEl = document.getElementById("ticket-detail-email");
  emailEl.textContent = t.email;
  emailEl.href = `mailto:${t.email}`;
  document.getElementById("ticket-detail-date").textContent = formatTicketDate(t.createdAt);
  document.getElementById("ticket-detail-message").textContent = t.message;
  document.getElementById("ticket-detail").classList.remove("ticket-detail-hidden");
}

function formatTicketDate(iso) {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

function updateUnreadBadge() {
  const badge = document.getElementById("unread-badge");
  if (!badge) return;
  const count = tickets.filter((t) => !t.read).length;
  badge.textContent = count > 0 ? String(count) : "";
  badge.dataset.count = String(count);
}

function setupAuth() {
  loginOpenBtn?.addEventListener("click", openLogin);
  document.getElementById("close-login-screen")?.addEventListener("click", closeLogin);
  logoutBtn?.addEventListener("click", logoutAdmin);

  loginScreen?.addEventListener("click", (e) => {
    if (e.target === loginScreen) closeLogin();
  });

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
      siteData.role = "admin";
      loginForm.reset();
      loginError.classList.add("hidden");
      closeLogin();
      persistAndRender();
      if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
      }
      return;
    }

    loginError.classList.remove("hidden");
  });
}

function openLogin() {
  if (!loginScreen) return;
  loginError?.classList.add("hidden");
  loginScreen.classList.remove("hidden-screen");
  loginScreen.setAttribute("aria-hidden", "false");
  document.getElementById("login-username")?.focus();
}

function closeLogin() {
  if (!loginScreen) return;
  loginScreen.classList.add("hidden-screen");
  loginScreen.setAttribute("aria-hidden", "true");
  loginForm?.reset();
  loginError?.classList.add("hidden");
}

function logoutAdmin() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  siteData.role = "public";
  closeAllAdminPanels();
  closeProjectGallery();
  closeProjectEdit();
  closeContactScreen();
  if (location.hash === "#contact") {
    history.replaceState({ view: "home" }, "", "#home");
  }
  closePersonDetails();
  editingServiceId = null;
  persistAndRender();
}

function bindMainAdmin() {
  document.getElementById("save-hero").addEventListener("click", saveHero);
  document.getElementById("save-logo").addEventListener("click", saveLogo);
  document.getElementById("save-who-section").addEventListener("click", saveWhoSection);
  document.getElementById("save-team-section").addEventListener("click", saveTeamSection);
  document.getElementById("save-services-section").addEventListener("click", saveServicesSection);
  document.getElementById("save-services-about").addEventListener("click", saveServicesAbout);
  document.getElementById("save-projects-section").addEventListener("click", saveProjectsSection);
  document.getElementById("save-about").addEventListener("click", saveAbout);
  document.getElementById("save-footer").addEventListener("click", saveFooter);
  document.getElementById("add-person-btn").addEventListener("click", () => addPerson());
  document.getElementById("add-service-btn-top").addEventListener("click", () => addService());
  document.getElementById("add-project-btn-top").addEventListener("click", () => addProject());
}

async function saveLogo() {
  if (!isAdmin()) return;
  siteData.content.logoText =
    document.getElementById("logo-text-input").value.trim() || defaultData.content.logoText;
  const logoImage = await resolveUrlOrFile("logo-image-url", "logo-image-file");
  if (logoImage) siteData.content.logoImage = logoImage;
  else if (!document.getElementById("logo-image-url").value.trim()) {
    siteData.content.logoImage = "";
  }
  closeAllAdminPanels();
  persistAndRender();
  toast("Logo saved.");
}

function applyLogoBrand(textEl, imgEl, visual, logoText, logoImage) {
  const text = logoText || defaultData.content.logoText || "BuildPro Construction";
  const imgUrl = (logoImage || "").trim();
  if (textEl) textEl.textContent = text;
  if (!imgEl || !visual) return;
  if (imgUrl) {
    imgEl.src = imgUrl;
    imgEl.alt = text;
    imgEl.hidden = false;
    visual.classList.add("has-logo-image");
  } else {
    imgEl.removeAttribute("src");
    imgEl.hidden = true;
    visual.classList.remove("has-logo-image");
  }
}

function renderLogoBrand() {
  const c = siteData.content;
  applyLogoBrand(
    document.getElementById("site-logo-text"),
    document.getElementById("site-logo-image"),
    document.getElementById("site-logo-visual"),
    c.logoText,
    c.logoImage
  );
}

function bindProjectEditAdmin() {
  document.getElementById("save-project-cover").addEventListener("click", saveProjectCover);
  document.getElementById("delete-project-edit").addEventListener("click", () => {
    if (editingProjectId) deleteProjectById(editingProjectId);
  });
}

function bindProjectGalleryAdmin() {
  document.getElementById("save-project-gallery").addEventListener("click", saveProjectGalleryScreen);
  document.getElementById("project-gallery-add-link")?.addEventListener("click", addOneProjectPhotoFromForm);
  document.getElementById("project-gallery-upload-btn")?.addEventListener("click", () => {
    document.getElementById("project-gallery-multi")?.click();
  });
  document.getElementById("project-gallery-multi")?.addEventListener("change", async (e) => {
    const files = [...(e.target.files || [])];
    e.target.value = "";
    await addPhotosToProjectGallery(files);
  });
  document.getElementById("project-gallery-media-file")?.addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    if (!file || !isAdmin() || !activeProjectId) return;
    const urlInput = document.getElementById("project-gallery-media-url");
    if (urlInput?.value.trim()) return;
    await addPhotosToProjectGallery([file]);
    e.target.value = "";
    resetAddMediaPreview(
      "project-gallery-new-preview",
      "project-gallery-media-url",
      "project-gallery-media-file"
    );
  });
}

function bindPersonAdmin() {
  document.getElementById("save-person").addEventListener("click", savePersonItem);
  document.getElementById("delete-person").addEventListener("click", deletePersonItem);
}

async function saveHero() {
  if (!isAdmin()) return;
  const c = siteData.content;
  c.heroTitle = document.getElementById("hero-title-input").value.trim() || c.heroTitle;
  c.heroDescription =
    document.getElementById("hero-description-input").value.trim() || c.heroDescription;
  const bg = await resolveUrlOrFile("hero-bg-url", "hero-bg-file");
  if (bg) c.heroBackground = bg;
  closeAllAdminPanels();
  persistAndRender();
  toast("Hero saved.");
}

async function saveWhoSection() {
  if (!isAdmin()) return;
  siteData.content.whoTitle = document.getElementById("who-title-input").value.trim();
  siteData.content.whoText = document.getElementById("who-text-input").value.trim();
  const img = await resolveUrlOrFile("who-section-image-url", "who-section-image-file");
  if (img) siteData.content.whoSectionImage = img;
  closeAllAdminPanels();
  persistAndRender();
  toast("Team intro saved.");
}

function saveTeamSection() {
  if (!isAdmin()) return;
  siteData.content.teamTitle = document.getElementById("team-title-input").value.trim();
  closeAllAdminPanels();
  persistAndRender();
  toast("Team section saved.");
}

function saveServicesSection() {
  if (!isAdmin()) return;
  siteData.content.servicesTitle = document.getElementById("services-title-input").value.trim();
  closeAllAdminPanels();
  persistAndRender();
  toast("Services section saved.");
}

async function saveServicesAbout() {
  if (!isAdmin()) return;
  const c = siteData.content;
  c.servicesAboutHeading = document.getElementById("services-about-heading-input").value.trim();
  c.servicesAboutText = document.getElementById("services-about-text-input").value.trim();
  const imageUrl = await resolveUrlOrFile("services-about-image-url", "services-about-image-file");
  if (imageUrl) c.servicesAboutImage = imageUrl;
  closeAllAdminPanels();
  persistAndRender();
  toast("Services story saved.");
}

function saveProjectsSection() {
  if (!isAdmin()) return;
  siteData.content.projectsTitle = document.getElementById("projects-title-input").value.trim();
  closeAllAdminPanels();
  persistAndRender();
  toast("Projects section saved.");
}

function saveAbout() {
  if (!isAdmin()) return;
  siteData.content.aboutTitle = document.getElementById("about-title-input").value.trim();
  siteData.content.aboutText = document.getElementById("about-text-input").value.trim();
  closeAllAdminPanels();
  persistAndRender();
  toast("About saved.");
}

function saveFooter() {
  if (!isAdmin()) return;
  siteData.content.footerText = document.getElementById("footer-text-input").value.trim();
  closeAllAdminPanels();
  persistAndRender();
  toast("Footer saved.");
}

function addPerson() {
  if (!isAdmin()) return;
  const id = `person-${Date.now()}`;
  const n = siteData.whoPeople.length + 1;
  siteData.whoPeople.push({
    id,
    name: `Person ${n}`,
    bio: "Team member profile. Add role and experience here.",
    cover: PLACEHOLDER,
    media: []
  });
  persistAndRender();
  openTeamScreen();
  openPersonDetails(id);
}

function addService() {
  if (!isAdmin()) return;
  const id = `service-${Date.now()}`;
  siteData.services.push({
    id,
    icon: "home",
    title: "New service",
    content: ""
  });
  editingServiceId = id;
  persistAndRender();
  toast("Add title and content (max 500 characters), then Save.");
}

async function addProject() {
  if (!isAdmin()) return;
  const title = (window.prompt("Project title") || "").trim();
  if (!title) return;
  const description = (window.prompt("Project description") || "").trim();
  const cover = (await pickFile("image/*")) || PLACEHOLDER;
  const id = `project-${Date.now()}`;
  siteData.projects.push({
    id,
    title,
    description: description || "",
    cover,
    media: []
  });
  persistAndRender();
  openProjectGallery(id);
  toast("Project added. Add details and more photos on the project screen.");
}

function deletePersonById(id) {
  if (!confirm("Delete this person?")) return;
  siteData.whoPeople = siteData.whoPeople.filter((p) => p.id !== id);
  closePersonDetails();
  persistAndRender();
  toast("Person deleted.");
}

function deleteServiceById(id) {
  if (!confirm("Delete this service field?")) return;
  siteData.services = siteData.services.filter((s) => s.id !== id);
  if (editingServiceId === id) editingServiceId = null;
  persistAndRender();
  toast("Service deleted.");
}

function deleteProjectById(id) {
  if (!confirm("Delete this project?")) return;
  siteData.projects = siteData.projects.filter((p) => p.id !== id);
  closeProjectGallery();
  closeProjectEdit();
  persistAndRender();
  toast("Project deleted.");
}

function renderAll() {
  renderRoleState();
  renderContent();
  renderServices();
  renderProjects();
  renderNavDropdowns();
  if (teamScreenOpen) renderTeamScreen();
  if (contactScreenOpen) renderContactScreen();
  setupScrollEffects();
  if (isAdmin()) initImageEditors();
  if (projectGalleryOpen && activeProjectId) {
    const item = siteData.projects.find((p) => p.id === activeProjectId);
    if (item) {
      renderProjectGalleryScreen(item);
      if (isAdmin()) fillProjectGalleryAdminForm(item);
    } else closeProjectGallery();
  }
  if (editingProjectId) {
    const item = siteData.projects.find((p) => p.id === editingProjectId);
    if (item) fillProjectCoverForm(item);
    else closeProjectEdit();
  }
  if (activePersonId) openPersonDetails(activePersonId);
}

function renderRoleState() {
  const admin = isAdmin();
  document.body.classList.toggle("admin-mode", admin);
  loginOpenBtn?.classList.toggle("hidden", admin);
  logoutBtn?.classList.toggle("hidden", !admin);
  document.getElementById("admin-inbox-btn").classList.toggle("hidden", !admin);
  if (admin) {
    tickets = loadTickets();
    updateUnreadBadge();
  }
  if (!admin) closeAllAdminPanels();
}

function renderContent() {
  const c = siteData.content;
  document.getElementById("hero-title").textContent = c.heroTitle;
  document.getElementById("hero-description").textContent = c.heroDescription;
  document.querySelector(".hero").style.backgroundImage = `url('${c.heroBackground}')`;

  document.getElementById("team-title-input").value =
    c.teamTitle ?? defaultData.content.teamTitle ?? "";
  document.getElementById("services-title").textContent = c.servicesTitle;
  document.getElementById("services-about-heading").textContent =
    c.servicesAboutHeading || "";
  document.getElementById("services-about-body").innerHTML = formatAboutText(
    c.servicesAboutText || ""
  );
  document.getElementById("services-about-img").src =
    c.servicesAboutImage || "assets/services-feature.png";
  document.getElementById("projects-title").textContent = c.projectsTitle;
  document.getElementById("about-title").textContent = c.aboutTitle;
  document.getElementById("about-text").textContent = c.aboutText;
  if (contactScreenOpen) renderContactScreen();
  renderSiteFooter();
  renderLogoBrand();

  document.getElementById("hero-title-input").value = c.heroTitle;
  document.getElementById("hero-description-input").value = c.heroDescription;
  document.getElementById("hero-bg-url").value = c.heroBackground;
  setImageEditorPreview("hero-bg-preview", c.heroBackground);
  document.getElementById("team-title-input").value =
    c.teamTitle ?? defaultData.content.teamTitle ?? "";
  document.getElementById("services-title-input").value = c.servicesTitle;
  document.getElementById("services-about-heading-input").value = c.servicesAboutHeading || "";
  document.getElementById("services-about-text-input").value = c.servicesAboutText || "";
  document.getElementById("services-about-image-url").value =
    c.servicesAboutImage || "assets/services-feature.png";
  setImageEditorPreview(
    "services-about-preview",
    c.servicesAboutImage || "assets/services-feature.png"
  );
  document.getElementById("projects-title-input").value = c.projectsTitle;
  document.getElementById("about-title-input").value = c.aboutTitle;
  document.getElementById("about-text-input").value = c.aboutText;
  document.getElementById("footer-text-input").value = c.footerText;
  document.getElementById("logo-text-input").value = c.logoText || "";
  document.getElementById("logo-image-url").value = c.logoImage || "";
  setImageEditorPreview("logo-image-preview", c.logoImage || "");
}

function adminCardActionsHtml(type, id) {
  if (!isAdmin()) return "";
  return `
    <div class="card-admin-bar" data-admin-only>
      <button type="button" class="btn-edit" data-action="edit" data-type="${type}" data-id="${id}">Edit</button>
      <button type="button" class="btn-delete" data-action="delete" data-type="${type}" data-id="${id}">Delete</button>
    </div>
  `;
}

function bindCardAdmin(container) {
  container.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const type = btn.dataset.type;
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === "delete") {
        if (type === "person") deletePersonById(id);
        else if (type === "service") deleteServiceById(id);
        else if (type === "project") deleteProjectById(id);
        return;
      }
      if (action === "edit") {
        if (type === "person") openPersonDetails(id);
        else if (type === "service") openServiceEdit(id);
        else openProjectEdit(id);
      }
    });
  });
}

function renderWhoGallery() {
  if (teamScreenOpen) renderTeamScreenList();
}

function renderServices() {
  const container = document.getElementById("services-list");
  container.innerHTML = "";
  siteData.services.forEach((service, index) => {
    const block = document.createElement("article");
    block.className = "service-field";
    block.id = `service-${service.id}`;
    block.dataset.id = service.id;

    const isEditing = isAdmin() && editingServiceId === service.id;
    const charCount = (service.content || "").length;
    const iconType = service.icon || DEFAULT_SERVICE_ICONS[index % 3] || "home";

    if (isEditing) {
      block.classList.add("is-editing");
      block.innerHTML = `
        <h3 class="service-field-title">Edit service</h3>
        <label>Icon</label>
        <select class="service-edit-icon">
          <option value="home" ${iconType === "home" ? "selected" : ""}>Home (Residential)</option>
          <option value="building2" ${iconType === "building2" ? "selected" : ""}>Building (Commercial)</option>
          <option value="hammer" ${iconType === "hammer" ? "selected" : ""}>Hammer (Renovations)</option>
        </select>
        <label>Title</label>
        <input class="service-edit-title" type="text" value="${escapeAttr(service.title)}" />
        <label>Content (max ${SERVICE_CONTENT_MAX} characters)</label>
        <textarea class="service-edit-content" maxlength="${SERVICE_CONTENT_MAX}"></textarea>
        <span class="char-count">${charCount} / ${SERVICE_CONTENT_MAX}</span>
        <div class="admin-actions">
          <button type="button" class="btn-save btn-save-service">Save</button>
          <button type="button" class="btn-delete btn-delete-service">Delete</button>
          <button type="button" class="btn-cancel-service">Cancel</button>
        </div>
      `;
      const textarea = block.querySelector(".service-edit-content");
      textarea.value = service.content || "";
      const counter = block.querySelector(".char-count");
      textarea.addEventListener("input", () => {
        counter.textContent = `${textarea.value.length} / ${SERVICE_CONTENT_MAX}`;
      });
      block.querySelector(".btn-save-service").addEventListener("click", () => {
        saveServiceEdit(service.id, block);
      });
      block.querySelector(".btn-delete-service").addEventListener("click", () => {
        deleteServiceById(service.id);
      });
      block.querySelector(".btn-cancel-service").addEventListener("click", () => {
        editingServiceId = null;
        renderServices();
      });
    } else {
      block.innerHTML = `
        <div class="service-icon">${serviceIconHtml(iconType)}</div>
        <h3 class="service-field-title">${escapeHtml(service.title)}</h3>
        <p class="service-field-content">${escapeHtml(service.content || "")}</p>
        ${adminCardActionsHtml("service", service.id)}
      `;
      bindCardAdmin(block);
    }
    container.appendChild(block);
  });
  refreshLucideIcons();
}

function renderSiteFooter() {
  const c = siteData.content;
  const d = defaultData.content;

  const programText = (c.contactProgramText || d.contactProgramText || "").trim();
  const programBody = document.getElementById("site-footer-program-body");
  if (programBody) {
    programBody.innerHTML = programText
      .split("\n")
      .filter(Boolean)
      .map(
        (line) =>
          `<p class="site-footer-program-line"><i data-lucide="clock" class="site-footer-icon" aria-hidden="true"></i><span class="site-footer-program-text">${escapeHtml(line)}</span></p>`
      )
      .join("");
  }

  const legalTitle = document.getElementById("site-footer-legal-title");
  const legalText = document.getElementById("site-footer-legal-text");
  if (legalTitle) {
    legalTitle.textContent = c.footerLegalTitle || d.footerLegalTitle || "";
  }
  if (legalText) {
    legalText.textContent = c.footerLegalText || d.footerLegalText || "";
  }

  const servicesTitle = document.getElementById("site-footer-services-title");
  if (servicesTitle) {
    servicesTitle.textContent = c.servicesTitle || d.servicesTitle || "Servicii";
  }

  const servicesList = document.getElementById("site-footer-services");
  if (servicesList) {
    servicesList.innerHTML = siteData.services
      .map(
        (service) =>
          `<li><a href="#services">· ${escapeHtml(service.title)}</a></li>`
      )
      .join("");
  }

  const contactDetails = getFooterContactDetails(c, d);

  const addressEl = document.getElementById("site-footer-address");
  const phoneEl = document.getElementById("site-footer-phone");
  const emailEl = document.getElementById("site-footer-email");

  if (addressEl) addressEl.innerHTML = contactDetails.addressHtml;
  if (phoneEl) {
    phoneEl.textContent = contactDetails.phone;
    phoneEl.href = contactDetails.phone
      ? `tel:${contactDetails.phone.replace(/\s/g, "")}`
      : "#";
  }
  if (emailEl) {
    emailEl.textContent = contactDetails.email;
    emailEl.href = contactDetails.email ? `mailto:${contactDetails.email}` : "#";
  }

  document.getElementById("footer-text").textContent = c.footerText || d.footerText || "";
  applyLogoBrand(
    document.getElementById("site-footer-logo-text"),
    document.getElementById("site-footer-logo-image"),
    document.getElementById("site-footer-logo-visual"),
    c.logoText,
    c.logoImage
  );

  refreshLucideIcons();
}

function getFooterContactDetails(c, d) {
  const infoText = (c.contactInfoText || d.contactInfoText || "").trim();
  let addressLines = [];
  let email = "";
  let phone = "";

  if (infoText) {
    let pastAddress = false;
    for (const line of infoText.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      const emailMatch = trimmed.match(/^Email:\s*(.+)$/i);
      const phoneMatch = trimmed.match(/^Telefon:\s*(.+)$/i);
      if (emailMatch) {
        pastAddress = true;
        email = emailMatch[1].trim();
        continue;
      }
      if (phoneMatch) {
        pastAddress = true;
        phone = phoneMatch[1].split(/\s*\/\s*/)[0].trim();
        continue;
      }
      if (/^(Fax|Urmă|Urmare)/i.test(trimmed)) {
        pastAddress = true;
        continue;
      }
      if (!pastAddress) addressLines.push(trimmed);
    }
  }

  if (!email) email = (c.contactFooterEmail || d.contactFooterEmail || "").trim();
  if (!phone) phone = (c.contactFooterPhone || d.contactFooterPhone || "").trim();

  if (!addressLines.length) {
    const fallbackAddress = (c.contactFooterAddress || d.contactFooterAddress || "").trim();
    if (fallbackAddress) {
      addressLines = fallbackAddress.includes("\n")
        ? fallbackAddress.split("\n").map((line) => line.trim()).filter(Boolean)
        : [fallbackAddress];
    }
  }

  return {
    addressHtml: formatFooterAddressHtml(addressLines),
    email,
    phone
  };
}

function formatFooterAddressHtml(addressInput) {
  const lines = Array.isArray(addressInput)
    ? addressInput.map((line) => String(line || "").trim()).filter(Boolean)
    : String(addressInput || "")
        .trim()
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

  if (!lines.length) return "";

  const line1 = lines[0];
  const etajOnFirst = line1.match(/^(.*?),\s*(Etaj\s*\d+)\s*$/i);

  if (etajOnFirst && lines.length >= 3) {
    const cityLine = lines[1];
    const regionLine = lines[2];
    const cityPart = regionLine.split(",")[0]?.trim() || "";
    const country = /românia/i.test(regionLine) ? "România" : regionLine.trim();
    return [
      `${escapeHtml(etajOnFirst[1].trim())},`,
      escapeHtml(`${etajOnFirst[2]}, ${cityLine} ${cityPart}, `),
      escapeHtml(country)
    ].join("<br>");
  }

  if (lines.length === 1) {
    const oneLine = lines[0].match(/^(.*?),\s*(Etaj\s*\d+),\s*(.+?),\s*(România)\s*$/i);
    if (oneLine) {
      return [
        `${escapeHtml(oneLine[1].trim())},`,
        escapeHtml(`${oneLine[2]}, ${oneLine[3]}, `),
        escapeHtml(oneLine[4])
      ].join("<br>");
    }
  }

  return lines.map((line) => escapeHtml(line)).join("<br>");
}

function openServiceEdit(id) {
  if (!isAdmin()) return;
  editingServiceId = id;
  renderServices();
  const el = document.querySelector(`.service-field[data-id="${id}"]`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
}

function saveServiceEdit(id, block) {
  if (!isAdmin()) return;
  const service = siteData.services.find((s) => s.id === id);
  if (!service) return;

  const title = block.querySelector(".service-edit-title").value.trim();
  const content = block.querySelector(".service-edit-content").value.trim();

  if (!title) {
    window.alert("Title is required.");
    return;
  }
  if (content.length > SERVICE_CONTENT_MAX) {
    window.alert(`Content must be at most ${SERVICE_CONTENT_MAX} characters. Current: ${content.length}`);
    return;
  }

  const iconSelect = block.querySelector(".service-edit-icon");
  if (iconSelect) service.icon = iconSelect.value;

  service.title = title;
  service.content = content;
  editingServiceId = null;
  persistAndRender();
  toast("Service saved.");
}

function renderProjects() {
  const container = document.getElementById("projects-gallery");
  container.innerHTML = "";
  siteData.projects.forEach((project) => {
    const wrap = document.createElement("div");
    wrap.className = "project-wrap";
    const img = document.createElement("img");
    img.src = project.cover || PLACEHOLDER;
    img.alt = project.title || "Project";
    wrap.appendChild(img);
    if (isAdmin()) {
      const bar = document.createElement("div");
      bar.innerHTML = adminCardActionsHtml("project", project.id);
      wrap.appendChild(bar.firstElementChild);
    }
    wrap.addEventListener("click", (e) => {
      if (e.target.closest(".card-admin-bar")) return;
      openProjectGallery(project.id);
    });
    container.appendChild(wrap);
  });
  bindCardAdmin(container);
}

function projectPhotoSlides(project) {
  return projectSlides(project).filter((s) => s.type !== "video");
}

function openProjectGallery(id) {
  const item = siteData.projects.find((p) => p.id === id);
  if (!item) return;
  activeProjectId = id;
  projectGalleryOpen = true;

  renderProjectGalleryScreen(item);
  if (isAdmin()) {
    fillProjectGalleryAdminForm(item);
    initImageEditors();
  }

  projectGalleryScreen.classList.remove("hidden-screen");
  projectGalleryScreen.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function renderProjectGalleryScreen(item) {
  document.getElementById("project-gallery-heading").textContent = item.title || "";
  document.getElementById("project-gallery-body").innerHTML = formatAboutText(
    item.description || ""
  );

  const box = document.getElementById("project-gallery-carousel");
  const slides = projectPhotoSlides(item);
  renderMediaCarousel(
    box,
    slides.length ? slides : [{ type: "image", url: item.cover || PLACEHOLDER }],
    { variant: "project-detail", alt: item.title || "Project photo" }
  );
}

function openProjectEdit(id) {
  if (!isAdmin()) return;
  const item = siteData.projects.find((p) => p.id === id);
  if (!item) return;
  editingProjectId = id;
  fillProjectCoverForm(item);
  initImageEditors();
  const panel = document.getElementById("project-edit-admin");
  panel.classList.add("open");
  document.getElementById("project-edit-heading").textContent = `Edit cover: ${item.title}`;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closeProjectEdit() {
  editingProjectId = null;
  const panel = document.getElementById("project-edit-admin");
  if (panel) panel.classList.remove("open");
}

function renderMediaCarousel(container, slides, options = {}) {
  if (!container) return;
  const validSlides = (slides || []).filter((s) => s && s.url);
  container.innerHTML = "";
  if (!validSlides.length) return;

  const isCard = options.variant === "card";
  const isFullscreen = options.variant === "fullscreen";
  const isProjectDetail = options.variant === "project-detail";
  const wrap = document.createElement("div");
  wrap.className = `media-carousel${isCard ? " media-carousel--card" : ""}${
    isFullscreen ? " media-carousel--fullscreen" : ""
  }${isProjectDetail ? " media-carousel--project-detail" : ""}`;
  if (validSlides.length <= 1) wrap.classList.add("media-carousel--single");

  const viewport = document.createElement("div");
  viewport.className = "media-carousel-viewport";

  const track = document.createElement("div");
  track.className = "media-carousel-track";

  validSlides.forEach((slide, i) => {
    const slideEl = document.createElement("div");
    slideEl.className = `media-carousel-slide${i === 0 ? " is-active" : ""}`;
    const media =
      slide.type === "video" ? document.createElement("video") : document.createElement("img");
    media.src = slide.url;
    if (slide.type === "video") {
      media.controls = true;
      media.playsInline = true;
    } else {
      media.alt = options.alt || "";
    }
    slideEl.appendChild(media);
    track.appendChild(slideEl);
  });

  const prevBtn = document.createElement("button");
  prevBtn.type = "button";
  prevBtn.className = "media-carousel-arrow media-carousel-prev";
  prevBtn.setAttribute("aria-label", "Previous photo");
  prevBtn.innerHTML = "&#10094;";

  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "media-carousel-arrow media-carousel-next";
  nextBtn.setAttribute("aria-label", "Next photo");
  nextBtn.innerHTML = "&#10095;";

  const counter = document.createElement("div");
  counter.className = "media-carousel-counter";

  viewport.appendChild(track);
  viewport.appendChild(prevBtn);
  viewport.appendChild(nextBtn);
  viewport.appendChild(counter);
  wrap.appendChild(viewport);
  container.appendChild(wrap);

  let index = 0;

  const update = () => {
    track.querySelectorAll(".media-carousel-slide").forEach((el, i) => {
      el.classList.toggle("is-active", i === index);
    });
    const activeSlide = track.querySelector(".media-carousel-slide.is-active video");
    track.querySelectorAll(".media-carousel-slide video").forEach((v) => {
      if (v !== activeSlide) v.pause();
    });
    if (validSlides.length > 1) {
      counter.textContent = `${index + 1} / ${validSlides.length}`;
      counter.hidden = false;
      prevBtn.hidden = false;
      nextBtn.hidden = false;
    } else {
      counter.hidden = true;
      prevBtn.hidden = true;
      nextBtn.hidden = true;
    }
  };

  const go = (delta) => {
    if (validSlides.length <= 1) return;
    index = (index + delta + validSlides.length) % validSlides.length;
    update();
  };

  const stopNav = (e) => e.stopPropagation();

  prevBtn.addEventListener("click", (e) => {
    stopNav(e);
    go(-1);
  });
  nextBtn.addEventListener("click", (e) => {
    stopNav(e);
    go(1);
  });

  wrap.tabIndex = 0;
  wrap.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });

  let touchStartX = 0;
  viewport.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  viewport.addEventListener(
    "touchend",
    (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 50) go(diff > 0 ? -1 : 1);
    },
    { passive: true }
  );

  update();
}

function projectSlides(project) {
  return [{ type: "image", url: project.cover }, ...project.media].filter((s) => s && s.url);
}

function personSlides(person) {
  return [person.cover, ...person.media]
    .filter(Boolean)
    .map((url) => ({ type: "image", url }));
}

function fillProjectCoverForm(item) {
  document.getElementById("project-edit-cover-url").value = item.cover;
  document.getElementById("project-edit-cover-file").value = "";
  setImageEditorPreview("project-edit-cover-preview", item.cover);
}

function fillProjectGalleryAdminForm(item) {
  document.getElementById("project-gallery-admin-heading").textContent = `Edit: ${item.title}`;
  document.getElementById("project-gallery-title-input").value = item.title;
  document.getElementById("project-gallery-description-input").value = item.description || "";
  document.getElementById("project-gallery-media-url").value = "";
  document.getElementById("project-gallery-media-file").value = "";
  resetAddMediaPreview(
    "project-gallery-new-preview",
    "project-gallery-media-url",
    "project-gallery-media-file"
  );

  const list = document.getElementById("project-gallery-media-list");
  list.innerHTML = "";

  item.media.forEach((m, idx) => {
    list.appendChild(
      createGalleryMediaRow({
        label: `Photo ${idx + 1}`,
        url: m.url,
        type: "image",
        onUpdate: ({ url }) => {
          if (!url) return;
          item.media[idx] = { type: "image", url };
          persistAndRender();
          fillProjectGalleryAdminForm(item);
          if (projectGalleryOpen && activeProjectId === item.id) {
            renderProjectGalleryScreen(item);
          }
        },
        onRemove: () => {
          if (!confirm("Remove this photo?")) return;
          item.media.splice(idx, 1);
          persistAndRender();
          fillProjectGalleryAdminForm(item);
          if (projectGalleryOpen && activeProjectId === item.id) {
            renderProjectGalleryScreen(item);
          }
        }
      })
    );
  });
}

function getActiveGalleryProject() {
  if (!activeProjectId) return null;
  return siteData.projects.find((p) => p.id === activeProjectId) || null;
}

function getEditingProject() {
  if (!editingProjectId) return null;
  return siteData.projects.find((p) => p.id === editingProjectId) || null;
}

async function addPhotosToProjectGallery(files) {
  if (!isAdmin() || !activeProjectId || !files.length) return;
  const item = getActiveGalleryProject();
  if (!item) return;

  for (const file of files) {
    const url = await fileToDataUrl(file);
    item.media.push({ type: "image", url });
  }

  persistAndRender();
  fillProjectGalleryAdminForm(item);
  renderProjectGalleryScreen(item);
  toast(files.length === 1 ? "Photo added." : `${files.length} photos added.`);
}

async function addOneProjectPhotoFromForm() {
  if (!isAdmin() || !activeProjectId) return;
  const item = getActiveGalleryProject();
  if (!item) return;

  const mediaUrl = document.getElementById("project-gallery-media-url").value.trim();
  const mediaFile = document.getElementById("project-gallery-media-file").files[0];
  let url = mediaUrl;
  if (!url && mediaFile) url = await fileToDataUrl(mediaFile);
  if (!url) {
    window.alert("Paste a link or upload a file first.");
    return;
  }
  item.media.push({ type: "image", url });
  document.getElementById("project-gallery-media-url").value = "";
  document.getElementById("project-gallery-media-file").value = "";
  resetAddMediaPreview(
    "project-gallery-new-preview",
    "project-gallery-media-url",
    "project-gallery-media-file"
  );
  persistAndRender();
  fillProjectGalleryAdminForm(item);
  renderProjectGalleryScreen(item);
  toast("Photo added.");
}

async function saveProjectGalleryScreen() {
  if (!isAdmin() || !activeProjectId) return;
  const item = getActiveGalleryProject();
  if (!item) return;

  item.title =
    document.getElementById("project-gallery-title-input").value.trim() || item.title;
  item.description = document
    .getElementById("project-gallery-description-input")
    .value.trim();

  persistAndRender();
  renderProjectGalleryScreen(item);
  fillProjectGalleryAdminForm(item);
  toast("Project screen saved.");
}

async function saveProjectCover() {
  if (!isAdmin() || !editingProjectId) return;
  const item = getEditingProject();
  if (!item) return;

  const cover = await resolveUrlOrFile("project-edit-cover-url", "project-edit-cover-file");
  if (cover) item.cover = cover;

  persistAndRender();
  fillProjectCoverForm(item);
  if (projectGalleryOpen && activeProjectId === item.id) {
    renderProjectGalleryScreen(item);
  }
  toast("Cover saved.");
}

function closeProjectGallery() {
  projectGalleryScreen.classList.add("hidden-screen");
  projectGalleryScreen.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  projectGalleryOpen = false;
  activeProjectId = null;
}

function openPersonDetails(personId) {
  const person = siteData.whoPeople.find((p) => p.id === personId);
  if (!person) return;
  activePersonId = personId;

  document.getElementById("person-title").textContent = person.name;
  document.getElementById("person-bio").textContent = person.bio;

  const slides = personSlides(person);
  renderMediaCarousel(
    document.getElementById("person-media"),
    slides.length ? slides : [{ type: "image", url: PLACEHOLDER }],
    { alt: person.name }
  );

  if (isAdmin()) fillPersonAdminForm(person);

  personScreen.classList.remove("hidden-screen");
  personScreen.setAttribute("aria-hidden", "false");
}

function fillPersonAdminForm(person) {
  document.getElementById("person-name-input").value = person.name;
  document.getElementById("person-bio-input").value = person.bio;
  document.getElementById("person-cover-url").value = person.cover;
  document.getElementById("person-cover-file").value = "";
  document.getElementById("person-media-url").value = "";
  document.getElementById("person-media-file").value = "";
  setImageEditorPreview("person-cover-preview", person.cover);
  resetAddMediaPreview("person-new-media-preview", "person-media-url", "person-media-file");

  const list = document.getElementById("person-media-admin-list");
  list.innerHTML = "";

  person.media.forEach((url, idx) => {
    list.appendChild(
      createGalleryMediaRow({
        label: `Photo ${idx + 1}`,
        url,
        type: "image",
        onUpdate: ({ url: newUrl }) => {
          if (!newUrl) return;
          person.media[idx] = newUrl;
          persistAndRender();
          openPersonDetails(person.id);
        },
        onRemove: () => {
          if (!confirm("Remove this photo?")) return;
          person.media.splice(idx, 1);
          persistAndRender();
          openPersonDetails(person.id);
        }
      })
    );
  });
}

async function savePersonItem() {
  if (!isAdmin() || !activePersonId) return;
  const person = siteData.whoPeople.find((p) => p.id === activePersonId);
  if (!person) return;

  person.name = document.getElementById("person-name-input").value.trim() || person.name;
  person.bio = document.getElementById("person-bio-input").value.trim();

  const cover = await resolveUrlOrFile("person-cover-url", "person-cover-file");
  if (cover) person.cover = cover;

  const extra = await resolveUrlOrFile("person-media-url", "person-media-file");
  if (extra) person.media.push(extra);

  persistAndRender();
  openPersonDetails(person.id);
  toast("Person saved.");
}

function deletePersonItem() {
  if (!isAdmin() || !activePersonId) return;
  deletePersonById(activePersonId);
}

function closePersonDetails() {
  personScreen.classList.add("hidden-screen");
  personScreen.setAttribute("aria-hidden", "true");
  activePersonId = null;
}

async function resolveUrlOrFile(urlId, fileId) {
  const urlInput = document.getElementById(urlId);
  const fileInput = document.getElementById(fileId);
  const file = fileInput?.files?.[0];
  if (file) return fileToDataUrl(file);
  return (urlInput?.value || "").trim();
}

function setImageEditorPreview(previewId, url) {
  const preview = document.getElementById(previewId);
  if (!preview) return;
  const src = url || PLACEHOLDER;
  if (preview.tagName === "VIDEO") {
    preview.src = src;
  } else {
    preview.src = src;
    preview.classList.toggle("is-empty", !url);
  }
}

function resetAddMediaPreview(previewId, urlId, fileId) {
  const preview = document.getElementById(previewId);
  const wrap = preview?.closest(".image-editor-preview-wrap");
  if (preview) {
    preview.removeAttribute("src");
    preview.classList.add("is-empty");
  }
  if (wrap) wrap.classList.add("image-editor-preview-wrap--empty");
  const urlInput = document.getElementById(urlId);
  const fileInput = document.getElementById(fileId);
  if (urlInput) urlInput.value = "";
  if (fileInput) fileInput.value = "";
}

function initImageEditors() {
  if (!isAdmin()) return;
  document.querySelectorAll("[data-image-editor]").forEach((root) => {
    if (root.dataset.bound === "1") return;
    root.dataset.bound = "1";
    bindImageEditor(root);
  });
}

function bindImageEditor(root) {
  const urlInput = root.querySelector(".image-editor-url-input");
  const fileInput = root.querySelector(".image-editor-file");
  const preview = root.querySelector(".image-editor-preview");
  const previewWrap = root.querySelector(".image-editor-preview-wrap");
  const clearBtn = root.querySelector(".btn-clear-image-url");
  if (!urlInput || !fileInput || !preview || !previewWrap) return;

  const syncPreviewFromUrl = () => {
    const url = urlInput.value.trim();
    if (url) {
      if (preview.tagName === "VIDEO") preview.src = url;
      else preview.src = url;
      preview.classList.remove("is-empty");
      previewWrap.classList.remove("image-editor-preview-wrap--empty");
    } else if (!fileInput.files?.[0]) {
      if (root.classList.contains("image-editor--add")) {
        preview.removeAttribute("src");
        preview.classList.add("is-empty");
        previewWrap.classList.add("image-editor-preview-wrap--empty");
      }
    }
  };

  previewWrap.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener("change", async () => {
    const file = fileInput.files[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    urlInput.value = dataUrl;
    if (preview.tagName === "VIDEO" || file.type.startsWith("video/")) {
      if (preview.tagName !== "VIDEO") {
        /* keep img for add panel until save */
        preview.src = dataUrl;
      } else preview.src = dataUrl;
    } else {
      preview.src = dataUrl;
    }
    preview.classList.remove("is-empty");
    previewWrap.classList.remove("image-editor-preview-wrap--empty");
  });

  urlInput.addEventListener("input", () => {
    fileInput.value = "";
    syncPreviewFromUrl();
  });

  clearBtn.addEventListener("click", () => {
    urlInput.value = "";
    fileInput.value = "";
    if (root.classList.contains("image-editor--add")) {
      preview.removeAttribute("src");
      preview.classList.add("is-empty");
      previewWrap.classList.add("image-editor-preview-wrap--empty");
    } else if (preview) {
      preview.src = PLACEHOLDER;
      preview.classList.remove("is-empty");
      previewWrap.classList.remove("image-editor-preview-wrap--empty");
    }
  });

  syncPreviewFromUrl();
}

function createGalleryMediaRow({ label, url, type = "image", onUpdate, onRemove }) {
  const row = document.createElement("div");
  row.className = "media-admin-row image-editor image-editor--row";
  const isVideo = type === "video";
  const accept = isVideo ? "video/*,image/*" : "image/*";
  const previewHtml = isVideo
    ? `<video class="image-editor-preview media-thumb" src="${escapeAttr(url)}" muted playsinline></video>`
    : `<img class="image-editor-preview media-thumb" src="${escapeAttr(url)}" alt="" />`;

  row.innerHTML = `
    <button type="button" class="image-editor-preview-wrap" aria-label="Replace ${escapeAttr(label)}">
      ${previewHtml}
      <span class="image-editor-overlay"><span>Click to replace</span></span>
    </button>
    <div class="image-editor-row-body">
      <span class="image-editor-row-label">${escapeHtml(label)}</span>
      <div class="image-editor-url-row">
        <input type="text" class="image-editor-url-input" value="${escapeAttr(url)}" placeholder="Paste link or click image to upload" />
        <button type="button" class="btn-clear-image-url">Clear link</button>
      </div>
      <input type="file" class="image-editor-file" accept="${accept}" hidden />
      <button type="button" class="btn-delete btn-remove-media">Remove</button>
    </div>
  `;

  const previewWrap = row.querySelector(".image-editor-preview-wrap");
  const fileInput = row.querySelector(".image-editor-file");
  const urlInput = row.querySelector(".image-editor-url-input");
  const preview = row.querySelector(".image-editor-preview");
  const clearBtn = row.querySelector(".btn-clear-image-url");
  const removeBtn = row.querySelector(".btn-remove-media");

  const applyPreview = (src) => {
    if (preview.tagName === "VIDEO") preview.src = src;
    else preview.src = src;
  };

  previewWrap.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
  });

  fileInput.addEventListener("change", async () => {
    const file = fileInput.files[0];
    if (!file) return;
    const newUrl = await fileToDataUrl(file);
    const newType = file.type.startsWith("video/") ? "video" : type;
    urlInput.value = newUrl;
    applyPreview(newUrl);
    onUpdate({ url: newUrl, type: newType });
  });

  urlInput.addEventListener("change", () => {
    const v = urlInput.value.trim();
    if (!v) return;
    fileInput.value = "";
    applyPreview(v);
    onUpdate({ url: v, type });
  });

  clearBtn.addEventListener("click", () => {
    urlInput.value = "";
    fileInput.value = "";
    applyPreview(PLACEHOLDER);
    onUpdate({ url: "", type });
  });

  removeBtn.addEventListener("click", onRemove);

  return row;
}

function pickFile(accept) {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = accept;
    input.onchange = async () => {
      const f = input.files && input.files[0];
      resolve(f ? await fileToDataUrl(f) : "");
    };
    input.click();
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function persistAndRender() {
  const dataToSave = { ...siteData, role: "public" };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  renderAll();
}

function toast(msg) {
  if (isAdmin()) window.alert(msg);
}

function formatAboutText(text) {
  return escapeHtml(text)
    .split(/\n\n+/)
    .map((para) => `<p>${para.replace(/\n/g, "<br>")}</p>`)
    .join("");
}

function formatContactInfoHtml(text) {
  const raw = String(text || "").trim();
  if (!raw) return "";

  return raw
    .split(/\n\n+/)
    .map((para) => {
      const lines = para.split(/\n/).map((line) => formatContactInfoLine(line));
      return `<p>${lines.join("<br>")}</p>`;
    })
    .join("");
}

function formatContactInfoLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return "";

  const emailMatch = trimmed.match(/^Email:\s*(.+)$/i);
  if (emailMatch) {
    const email = emailMatch[1].trim();
    return `Email: <a href="mailto:${escapeAttr(email)}">${escapeHtml(email)}</a>`;
  }

  const phoneMatch = trimmed.match(/^Telefon:\s*(.+)$/i);
  if (phoneMatch) {
    const parts = phoneMatch[1].split(/\s*\/\s*/).filter(Boolean);
    const linked = parts
      .map((part) => {
        const label = part.trim();
        const digits = label.replace(/[^\d+]/g, "");
        if (!digits) return escapeHtml(label);
        return `<a href="tel:${escapeAttr(digits)}">${escapeHtml(label)}</a>`;
      })
      .join(" / ");
    return `Telefon: ${linked}`;
  }

  const faxMatch = trimmed.match(/^Fax:\s*(.+)$/i);
  if (faxMatch) {
    const fax = faxMatch[1].trim();
    const digits = fax.replace(/[^\d+]/g, "");
    if (digits) {
      return `Fax: <a href="tel:${escapeAttr(digits)}">${escapeHtml(fax)}</a>`;
    }
    return `Fax: ${escapeHtml(fax)}`;
  }

  return escapeHtml(trimmed);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, "&#39;");
}

function setupScrollEffects() {
  const header = document.querySelector("header");
  if (scrollEffectsInitialized) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  });
  document
    .querySelectorAll(".card, .project-wrap, .who-person-row, .about")
    .forEach((el) => {
      el.classList.add("hidden");
      observer.observe(el);
    });
  scrollEffectsInitialized = true;
}

function loadData() {
  let raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) raw = localStorage.getItem("buildpro-site-data-v1");
  if (!raw) return structuredClone(defaultData);
  try {
    const parsed = JSON.parse(raw);
    const merged = {
      ...structuredClone(defaultData),
      ...parsed,
      content: { ...defaultData.content, ...(parsed.content || {}) },
      services: normalizeServices(parsed.services),
      projects: Array.isArray(parsed.projects) ? parsed.projects : defaultData.projects,
      whoPeople: normalizeWhoPeople(parsed)
    };
    if (!merged.content.heroBackground) {
      merged.content.heroBackground = defaultData.content.heroBackground;
    }
    if (merged.content.servicesTitle === "Our Services") {
      merged.content.servicesTitle = "Services";
    }
    merged.role = "public";
    if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "true") {
      merged.role = "admin";
    }
    return merged;
  } catch {
    return structuredClone(defaultData);
  }
}

function mapLegacyIcon(icon) {
  if (!icon) return null;
  if (icon === "tile") return "tile";
  if (icon === "pool") return "pool";
  if (icon === "materials") return "materials";
  if (icon === "tile-old") return "home";
  if (icon === "pool-old") return "building2";
  if (icon === "build") return "building2";
  return icon;
}

function normalizeServices(services) {
  if (!Array.isArray(services) || !services.length) {
    return structuredClone(defaultData.services);
  }
  return services.map((s, i) => ({
    id: s.id || `service-${i + 1}`,
    icon: mapLegacyIcon(s.icon) || DEFAULT_SERVICE_ICONS[i % 3] || "home",
    title: s.title || `Service ${i + 1}`,
    content: (s.content || s.description || "").slice(0, SERVICE_CONTENT_MAX)
  }));
}

function normalizeWhoPeople(parsed) {
  if (Array.isArray(parsed.whoPeople) && parsed.whoPeople.length) {
    return parsed.whoPeople.map((p, i) => ({
      id: p.id || `person-${i + 1}`,
      name: p.name || `Person ${i + 1}`,
      bio: p.bio || "",
      cover: p.cover || PLACEHOLDER,
      media: Array.isArray(p.media) ? p.media : []
    }));
  }
  return structuredClone(defaultData.whoPeople);
}
