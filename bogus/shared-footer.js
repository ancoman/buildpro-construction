/* Shared contact defaults and public footer rendering for every page. */
(() => {
  const defaults = {
    contactFooterAddress: "Sweden Office Building, Str. Somesului, Nr. 12",
    contactFooterPhone: "+40 700 000 000",
    contactFooterEmail: "office@buildpro.com",
    contactProgramText: "Mon – Fri: 09:00 – 17:00\nSaturday – Sunday: Closed",
    footerLegalTitle: "",
    footerLegalText: ""
  };
  defaults.contactInfoText = `${defaults.contactFooterAddress}\n\nEmail: ${defaults.contactFooterEmail}\n\nTelefon: ${defaults.contactFooterPhone}`;

  function normalize(content = {}) {
    const result = { ...defaults, ...content };
    // Apply the new mark to older text-only settings once; later admin edits remain editable.
    if (!content.logoMarkVersion && !content.logoImage) result.logoImage = "assets/steel-hall-mark-light.svg";
    result.logoMarkVersion = 1;
    // Replace only the imported example data; keep the owner's other edits.
    const obsolete = /terragres\.ro|Clădirea VIA Office|Str\. Colinei|754 087 602|755 110 102/i;
    for (const key of ["contactFooterAddress", "contactFooterPhone", "contactFooterEmail", "contactInfoText"]) {
      if (obsolete.test(result[key] || "")) result[key] = defaults[key];
    }
    if (result.contactProgramText === "Luni – Vineri: 09:00 – 17:00\nSâmbătă - Duminică: Închis") result.contactProgramText = defaults.contactProgramText;
    if (result.footerLegalTitle === "Protecția datelor") result.footerLegalTitle = "";
    if (result.footerLegalText === "Termeni și Condiții & Politica de Confidențialitate") result.footerLegalText = "";
    return result;
  }

  function sync(source) {
    if (!source) return;
    const targets = document.querySelectorAll(".team-screen-page, .contact-screen-page, .detail-screen > .detail-panel");
    for (const target of targets) {
      const previous = target.querySelector(":scope > [data-shared-footer]");
      const footer = source.cloneNode(true);
      footer.setAttribute("data-shared-footer", "");
      footer.setAttribute("aria-label", "Company information");
      footer.querySelectorAll("[data-admin-only]").forEach(el => el.remove());
      footer.querySelectorAll("[id]").forEach(el => el.removeAttribute("id"));
      footer.querySelectorAll("a[href^='#']").forEach(el => el.setAttribute("href", "index.html" + el.getAttribute("href")));
      if (previous) previous.replaceWith(footer);
      else target.append(footer);
    }
  }

  function renderCategoryFooter() {
    // The main page uses its existing admin editor and calls sync after rendering.
    if (document.getElementById("site-footer-address")) return;
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem("buildpro-site-data-v2") || localStorage.getItem("buildpro-site-data-v1") || "{}"); } catch {}
    const c = normalize(saved.content);
    const footer = document.querySelector("body > footer");
    if (!footer) return;
    footer.querySelector(".site-footer-address").textContent = c.contactFooterAddress;
    const phone = footer.querySelector("a[href^='tel:']");
    phone.textContent = c.contactFooterPhone;
    phone.href = "tel:" + c.contactFooterPhone.replace(/[^\d+]/g, "");
    const email = footer.querySelector("a[href^='mailto:']");
    email.textContent = c.contactFooterEmail;
    email.href = "mailto:" + c.contactFooterEmail;
    const program = footer.querySelector(".site-footer-col--program");
    program.querySelectorAll(".site-footer-program-text").forEach(el => el.remove());
    for (const line of c.contactProgramText.split("\n").filter(Boolean)) {
      const p = document.createElement("p");
      p.className = "site-footer-program-text";
      p.textContent = line;
      program.append(p);
    }
    const list = footer.querySelector(".site-footer-list");
    if (Array.isArray(saved.services) && saved.services.length) {
      list.replaceChildren();
      for (const service of saved.services) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "index.html#services";
        a.textContent = "· " + service.title;
        li.append(a);
        list.append(li);
      }
    }
    const servicesTitle = footer.querySelector(".site-footer-col--services h3");
    servicesTitle.textContent = c.servicesTitle || "Services";
    if (c.footerText) footer.querySelector(".site-footer-copyright-text").textContent = c.footerText;
    document.querySelectorAll(".logo-brand-visual").forEach(visual => {
      const text = visual.querySelector(".logo-brand-text");
      const image = visual.querySelector(".logo-brand-image");
      if (c.logoText && text) text.textContent = c.logoText;
      const url = (c.logoImage || "").trim();
      visual.classList.toggle("has-logo-image", Boolean(url));
      if (image) {
        image.hidden = !url;
        if (url) image.src = url;
        else image.removeAttribute("src");
      }
    });
  }

  window.BuildProFooter = { defaults, normalize, sync };
  document.addEventListener("DOMContentLoaded", renderCategoryFooter);
  window.addEventListener("storage", event => {
    if (event.key === "buildpro-site-data-v2" || event.key === "buildpro-site-data-v1") renderCategoryFooter();
  });
})();
