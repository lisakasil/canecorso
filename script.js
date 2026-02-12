// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple lightbox for gallery
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, alt) {
  if (!lightbox) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || "Cane Corso photo preview";
  lightboxCaption.textContent = alt || "";
  lightbox.removeAttribute("hidden");
  // Trap focus
  lightboxClose.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.setAttribute("hidden", "");
  lightboxImg.src = "";
  lightboxImg.alt = "";
}

document.querySelectorAll(".gallery-item").forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    // Close if clicking backdrop (but not when clicking the image/caption/close)
    if (e.target === lightbox) closeLightbox();
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

// Escape key closes lightbox
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
