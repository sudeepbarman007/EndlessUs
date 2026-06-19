// yearbook section - extended student data (nickname, department, hometown, socials)
const students = [
  { name: "Sudeep Barman", nickname: "Mangru", dept: "ECE", hometown: "Siliguri, West Bengal", img: "images/yearbook/sudeep123.webp", quote: "Coding memories into a digital legacy.", socials: { facebook: "https://www.facebook.com/profile.php?id=100078058887799", instagram: "https://www.instagram.com/sudeepzzz/", linkedin: "https://www.linkedin.com/in/sudeepbarman/" } },
  { name: "Koushik Das", nickname: "Billa", dept: "ECE", hometown: "Nalbari, Assam", img: "images/yearbook/koushik.webp", quote: "Consistency beats talent", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Rohit Sarkar", nickname: "Rohit", dept: "ECE", hometown: "Bongaigaon, Assam", img: "images/yearbook/rohit.webp", quote: "Work hard in silence", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Ankit Gupta", nickname: "Ankit", dept: "ECE", hometown: "Assam", img: "images/yearbook/ankit.webp", quote: "Dream big, act bigger", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Moon Basumatary", nickname: "Moonnu", dept: "ECE", hometown: "Guwahati, Assam", img: "images/yearbook/moon.webp", quote: "Keep moving forward", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Triparna Boro", nickname: "Tipu", dept: "ECE", hometown: "Nagaon, Assam", img: "images/yearbook/triparna.webp", quote: "Believe in yourself", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Ankita Doley", nickname: "coco", dept: "ECE", hometown: "Jorhat, Assam", img: "images/yearbook/Ankita Doley.webp", quote: "Make it happen", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
// ===== ECE Department =====
{ name: "Barnil Das", nickname: "Barnil", dept: "ECE", hometown: "Guwahati, Assam", img: "images/yearbook/barnil.webp", quote: "Keep moving forward", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Prithibiraj Brahma", nickname: "Prithi", dept: "ECE", hometown: "Assam", img: "images/yearbook/prithibiraj.webp", quote: "Dream big", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Lakhyajit Boro", nickname: "Lakhya", dept: "ECE", hometown: "Assam", img: "images/yearbook/lakhyajit.webp", quote: "Stay focused", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Partha Parashar", nickname: "Partha", dept: "ECE", hometown: "Guwahati, Assam", img: "images/yearbook/partha.webp", quote: "Create your own path", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Aminur Rehman", nickname: "Amin", dept: "ECE", hometown: "Nalbari, Assam", img: "images/yearbook/aminur.webp", quote: "Work hard in silence", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Tanmoy Day", nickname: "Tanmoy", dept: "ECE", hometown: "Nalbari, Assam", img: "images/yearbook/tanmoy.webp", quote: "Enjoy every moment", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Kuladip Rajbongshi", nickname: "Kuladip", dept: "ECE", hometown: "Nalbari, Assam", img: "images/yearbook/kuladip.webp ", quote: "Stay humble", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Youanchi Kwan", nickname: "Youanchi", dept: "ECE", hometown: "Assam", img: "images/yearbook/youanchi.webp", quote: "Be limitless", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

// ===== CSE Department =====




{ name: "Nikita Sharma", nickname: "Niks", dept: "CSE", hometown: "Mirza, Assam", img: "images/yearbook/nikita.webp", quote: "Confidence is key", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Bibek Roy", nickname: "Niki Paglu", dept: "CSE", hometown: "Siliuri,West Bengal", img: "images/yearbook/bibek.webp", quote: "Code. Learn. Repeat.", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Saifuddin Choudhury", nickname: "Bulla", dept: "CSE", hometown: "Dhubri,Assam", img: "images/yearbook/saiff.webp", quote: "Stay curious", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Pradyot Paul", nickname: "Podu", dept: "CSE", hometown: "Bongaigaon", img: "images/yearbook/pradyot.webp", quote: "Debugging life daily", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Krishnik Barman", nickname: "Krishu", dept: "CSE", hometown: "Jorhat, Assam", img: "images/yearbook/krishh.webp", quote: "Think different", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Rahul Talukdar", nickname: "Rahul", dept: "CSE", hometown: "Guwahati", img: "images/yearbook/rahul.webp", quote: "Stay hungry, stay foolish", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Bishal Karmakar", nickname: "Bishal", dept: "CSE", hometown: "Rangia", img: "images/yearbook/bishal.webp", quote: "Push beyond limits", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Rishi Raj Bharali", nickname: "Rishi", dept: "CSE", hometown: "Sualkuchi", img: "images/yearbook/rishi.webp", quote: "Create your own path", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Afrina Ahmed", nickname: "Afrina", dept: "CSE", hometown: "Hojai", img: "images/yearbook/afrina.webp", quote: "Shine brighter every day", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Daiji Kalita", nickname: "Daiji", dept: "CSE", hometown: "Goalpara", img: "images/yearbook/daiji.webp", quote: "Never stop learning", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Rahul Son Boro", nickname: "Rahul", dept: "CSE", hometown: "Assam", img: "images/yearbook/rahulsonboro.webp", quote: "Code your future", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Subham Saha", nickname: "Subham", dept: "CSE", hometown: "Barpeta, Assam", img: "images/yearbook/subham.webp", quote: "Never stop learning", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Jayanta Saha", nickname: "Jayanta", dept: "FET", hometown: "", img: "images/yearbook/jayanta.webp", quote: "Turning ideas into reality", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Viban Van Narzary", nickname: "Viban", dept: "CV", hometown: "", img: "images/viban.webp", quote: "Building the future, brick by brick", socials: { facebook: "#", instagram: "#", linkedin: "#" } }
,
// Appended ECE students (kept at array end so existing card indices remain unchanged)
{ name: "Chris Basumatary", nickname: "Chris-topher", dept: "ECE", hometown: "Gossaigaon, Kokrajhar", img: "images/yearbook/Chris.webp", quote: "Turning signals into possibilities.", socials: { facebook: "Chris chan ", instagram: "@chris_chann_", linkedin: "Chris Basumatary " } },

{ name: "Annesha Singha", nickname: "Panda😂", dept: "ECE", hometown: "Diphu", img: "images/yearbook/ANNESHA SINGHA 2.02E+11.webp", quote: "Where circuits connect, friendships last.", socials: { facebook: "Annesha Singha", instagram: "_annesha_singha_", linkedin: "https://www.linkedin.com/in/annesha-singha-351818330" } }
,
{ name: "Sumi Basumatary", nickname: "Sumi", dept: "ECE", hometown: "Kokrajhar", img: "images/yearbook/Sumi Basumatary.webp", quote: "Small signals, big dreams.", socials: { facebook: "", instagram: "sumi_24__", linkedin: "" } },

{ name: "Akash Neelim Baruah", nickname: "Akash", dept: "ECE", hometown: "Mangaldai", img: "images/yearbook/AKASH NEELIM BARUAH 202202031013.webp", quote: "Engineering tomorrow, one circuit at a time.", socials: { facebook: "", instagram: "hsaka.baruah", linkedin: "" } },

{ name: "Prity Kumari Sah", nickname: "Sah_Pani", dept: "ECE", hometown: "Tamulpur", img: "images/yearbook/PRITY KUMARI SAH 2.02E+11.webp", quote: "Every connection tells a story.", socials: { facebook: "", instagram: "", linkedin: "" } },

{ name: "Humen Pegu", nickname: "Pegu", dept: "ECE", hometown: "Lakhimpur", img: "images/yearbook/Humen Pegu.webp", quote: "From classroom theories to real-world innovation.", socials: { facebook: "", instagram: "humen_megu", linkedin: "" } },

{ name: "Arnab Sashi", nickname: "Sashi", dept: "ECE", hometown: "Guwahati", img: "images/yearbook/Arnab Sashi.webp", quote: "Built by ECE, powered by determination.", socials: { facebook: "", instagram: "leishigo_arnab", linkedin: "" } },

{ name: "Kongkana Barman", nickname: "Depressioned walli", dept: "ECE", hometown: "Guwahati", img: "images/yearbook/Kongkona Barman.webp", quote: "Communication is the bridge between ideas.", socials: { facebook: "", instagram: "kan__19", linkedin: "" } },

{ name: "Bharista Deka", nickname: "", dept: "ECE", hometown: "Guwahati", img: "images/yearbook/BHARISTA DEKA 202202031029.webp", quote: "Creating connections beyond circuits.", socials: { facebook: "", instagram: "_bharista_", linkedin: "" } }
];

// Storage shim: provide async get/set to mimic a simple persistent store
// Falls back to `localStorage` when no platform storage API is available.
if (!window.storage) {
  window.storage = {
    async get(key, shared = false) {
      try {
        const v = localStorage.getItem(key);
        return v === null ? null : { value: v };
      } catch (e) {
        return Promise.reject(e);
      }
    },
    async set(key, value, shared = false) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (e) {
        return Promise.reject(e);
      }
    }
  };
}

function openProfile(index) {
  const popup = document.getElementById("profilePopup");
  if (!popup) return;

  const student = students[index] || {};
  const img = document.getElementById("popup-img");
  const name = document.getElementById("popup-name");
  const dept = document.getElementById("popup-dept");
  const nick = document.getElementById("popup-nickname");
  const home = document.getElementById("popup-hometown");
  const quote = document.getElementById("popup-quote");

  if (img) img.src = student.img || "";
  if (name) name.innerText = student.name || "";
  if (dept) dept.innerText = student.dept ? student.dept : "";
  if (nick) nick.innerText = student.nickname ? `Nickname: ${student.nickname}` : "";
  if (home) home.innerText = student.hometown ? `Hometown: ${student.hometown}` : "";
  if (quote) quote.innerText = student.quote || "";

  // socials
  const fb = document.getElementById('popup-facebook');
  const ig = document.getElementById('popup-insta');
  const li = document.getElementById('popup-linkedin');
  // helper: show message (tries to reuse an existing toast, falls back to alert)
  function showSocialMessage(msg) {
    const t = document.getElementById('wallToast') || document.getElementById('toast') || document.getElementById('siteToast');
    if (t) {
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 3000);
      return;
    }
    try { alert(msg); } catch (e) { console.log(msg); }
  }

  function buildSocialUrl(platform, raw) {
    if (!raw && raw !== 0) return null;
    let v = String(raw).trim();
    if (!v) return null;

    // treat placeholder hashes and explicit null/undefined strings as missing
    if (v === '#' || v.toLowerCase() === 'null' || v.toLowerCase() === 'undefined') return null;

    // helper to ensure https prefix
    const ensureHttps = (u) => {
      try {
        const parsed = new URL(u, 'https://example.com');
        if (!/^https?:/.test(parsed.protocol)) parsed.protocol = 'https:';
        return parsed.href;
      } catch (e) {
        return null;
      }
    };

    if (platform === 'instagram') {
      // allow full urls
      if (/instagram\.com/i.test(v)) return ensureHttps(v.replace(/\/$/, ''));
      // strip leading @
      v = v.replace(/^@+/, '');
      if (!v) return null;
      return `https://www.instagram.com/${encodeURIComponent(v)}/`;
    }

    if (platform === 'facebook') {
      if (/facebook\.com/i.test(v)) return ensureHttps(v.replace(/\/$/, ''));
      // replace spaces with dots for display names like "John Doe" -> John.Doe
      v = v.replace(/\s+/g, '.');
      return `https://www.facebook.com/${encodeURIComponent(v)}`;
    }

    if (platform === 'linkedin') {
      if (/^https?:\/\/www\.linkedin\.com\//i.test(v)) return ensureHttps(v);
      if (/linkedin\.com/i.test(v)) return ensureHttps(v);
      // normalize a simple username or full name
      v = v.replace(/^@+/, '').trim();
      if (!v) return null;
      // LinkedIn profile URLs commonly use dashes for names
      v = v.replace(/\s+/g, '-');
      return `https://www.linkedin.com/in/${encodeURIComponent(v)}`;
    }

    return null;
  }

  function setupSocialAnchor(anchor, platform, rawVal) {
    if (!anchor) return;
    // remove any previous handler
    if (anchor._socialHandler) { anchor.removeEventListener('click', anchor._socialHandler); anchor._socialHandler = null; }

    const hasProp = rawVal !== null && rawVal !== undefined && String(rawVal).length > 0;
    // preserve original show/hide behavior: show when property exists and truthy
    if (hasProp) {
      anchor.style.display = 'inline-flex';
    } else {
      anchor.style.display = 'none';
      anchor.href = '#';
      return;
    }

    const url = buildSocialUrl(platform, rawVal);
    if (url) {
      anchor.href = url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    } else {
      // keep href inert to avoid same-origin PJAX intercepts
      anchor.href = 'javascript:void(0)';
      anchor.removeAttribute('target');
      anchor.removeAttribute('rel');
    }

    const handler = (ev) => {
      // left-click or activation should open external URL or show message
      ev.preventDefault();
      if (!url) {
        showSocialMessage('Social profile not available');
        return;
      }
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (e) {
        // fallback to normal navigation if window.open is blocked
        window.location.href = url;
      }
    };

    anchor._socialHandler = handler;
    anchor.addEventListener('click', handler);
  }

  if (fb) setupSocialAnchor(fb, 'facebook', (student.socials && student.socials.facebook) || '');
  if (ig) setupSocialAnchor(ig, 'instagram', (student.socials && student.socials.instagram) || '');
  if (li) setupSocialAnchor(li, 'linkedin', (student.socials && student.socials.linkedin) || '');

  // Cleanup any previous creator-specific popup nodes
  const existingBadge = document.querySelector('#profilePopup .creator-badge');
  if (existingBadge) existingBadge.remove();
  const existingNote = document.querySelector('#profilePopup .creator-note');
  if (existingNote) existingNote.remove();

  // If this is Sudeep (creator), inject popup badge and creator note
  if (student && student.name === 'Sudeep Barman') {
    // badge under the name
    const nameEl = document.getElementById('popup-name');
    if (nameEl) {
      const badge = document.createElement('div');
      badge.className = 'creator-badge';
      badge.textContent = '⭐ Creator of EndlessUs';
      nameEl.insertAdjacentElement('afterend', badge);
    }

    // creator note below hometown
    const homeEl = document.getElementById('popup-hometown');
    const note = document.createElement('div');
    note.className = 'creator-note';
    note.innerHTML = '<strong>💻 Creator Note</strong><div>EndlessUs was built to preserve our ECE memories, friendships, and moments forever.</div>';
    if (homeEl && homeEl.parentNode) {
      // insert after hometown
      homeEl.insertAdjacentElement('afterend', note);
    } else {
      // fallback: append near the quote
      const quoteEl = document.getElementById('popup-quote');
      if (quoteEl) quoteEl.insertAdjacentElement('afterend', note);
    }
  }

  // prepare hometown with a location icon
  if (home) {
    if (student.hometown) {
      home.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z\"/></svg> <span>Hometown: ${student.hometown}</span>`;
      home.style.display = 'block';
    } else {
      home.innerHTML = '';
      home.style.display = 'none';
    }
  }

  // show popup with open animation
  popup.style.display = "flex";
  // prevent background scroll while popup open
  try { document.body.style.overflow = 'hidden'; } catch(e) {}
  popup.classList.remove('closing');
  // force reflow then add open class for transition
  requestAnimationFrame(() => popup.classList.add('open'));
}

function closeProfile() {
  const popup = document.getElementById("profilePopup");
  if (!popup) return;
  popup.classList.remove('open');
  popup.classList.add('closing');
  // match CSS transition duration (250ms)
  setTimeout(() => {
    popup.style.display = 'none';
    popup.classList.remove('closing');
    try { document.body.style.overflow = ''; } catch(e) {}
  }, 260);
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener("DOMContentLoaded", () => {

  // mark that JS is enabled so CSS can safely enable animated reveal states
  try { document.documentElement.classList.add('js'); } catch(e) {}

  // Feature flags
  const ENABLE_MUSIC = false; // set true to enable background music

  /* =========================
     🎵 MUSIC CONTROL (safe)
  ========================= */
  const topNav = document.getElementById('topNav');

  // music variables - either will remain null when music is disabled
  let music = null;
  let toggle = null;

  function safeInitMusic() {
    if (!ENABLE_MUSIC) {
      console.debug('Music disabled by feature flag');
      return;
    }
    // avoid double-init
    if (music) return;
    music = document.getElementById('bgMusic');
    if (!music) {
      music = document.createElement('audio');
      music.id = 'bgMusic';
      music.loop = true;
      const src = document.createElement('source');
      src.src = 'music/bg.mp3';
      src.type = 'audio/mpeg';
      music.appendChild(src);
      music.style.display = 'none';
      music.setAttribute('aria-hidden', 'true');
      try { music.tabIndex = -1; } catch(e) {}
      document.body.appendChild(music);
    } else {
      music.loop = true;
    }

    // toggle
    toggle = document.getElementById('musicToggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.id = 'musicToggle';
      toggle.setAttribute('aria-label', 'Toggle background music');
      if (topNav) topNav.appendChild(toggle);
      else document.body.appendChild(toggle);
    }
    if (topNav && toggle.parentNode !== topNav) topNav.appendChild(toggle);

    const stored = localStorage.getItem('musicPlaying');
    if (stored === 'true') {
      music.play()
        .then(() => { toggle.textContent = '🔊'; })
        .catch(() => { toggle.textContent = '🔇'; });
    } else {
      toggle.textContent = '🔇';
    }

    // attach handler
    if (toggle) {
      if (toggle._handler) toggle.removeEventListener('click', toggle._handler);
      const handler = () => {
        if (!music) return;
        if (music.paused) {
          music.play()
            .then(() => { toggle.textContent = '🔊'; localStorage.setItem('musicPlaying', 'true'); })
            .catch(err => { console.log(err); toggle.textContent = '🔇'; });
        } else {
          music.pause();
          toggle.textContent = '🔇';
          localStorage.setItem('musicPlaying', 'false');
        }
      };
      toggle._handler = handler;
      toggle.addEventListener('click', handler);
    }
  }

  // If you want music enabled automatically later, call `safeInitMusic()`
  // safeInitMusic();


  /* =========================
     🎬 START JOURNEY SCROLL
  ========================= */
  function attachStartButton() {
    const startBtn = document.getElementById("startBtn");
    const journey = document.getElementById("journey");
    if (!startBtn || !journey) return;
    // remove previous handler if present to avoid duplicates
    if (startBtn._startHandler) startBtn.removeEventListener('click', startBtn._startHandler);
    const handler = () => journey.scrollIntoView({ behavior: 'smooth' });
    startBtn._startHandler = handler;
    startBtn.addEventListener('click', handler);
  }

  // Attach on initial load
  attachStartButton();

  // Re-attach after BFCache restoration
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) attachStartButton();
  });


  /* =========================
     ☰ MENU TOGGLE
  ========================= */
  const menuBtn = document.getElementById("menuBtn");
  const sideNav = document.getElementById("topNav");
  const overlay = document.getElementById("navOverlay");

 if (menuBtn && sideNav) {
  menuBtn.addEventListener("click", () => {
    sideNav.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
  });
}

if (sideNav) {
  document.querySelectorAll("#sideNav a").forEach(link => {
    link.addEventListener("click", () => {
      sideNav.classList.remove("active");
      if (overlay) overlay.classList.remove("active");
    });
  });
}

  if (overlay) {
    overlay.addEventListener("click", () => {
      sideNav.classList.remove("active");
      overlay.classList.remove("active");
    });
  }


  /* =========================
     🔥 SCROLL REVEAL (UPGRADED)
  ========================= */
  const hiddenElements = document.querySelectorAll(".story-block");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  hiddenElements.forEach(el => {
    el.classList.add("hidden"); // add hidden class automatically
    observer.observe(el);
  });

  /* =========================
     👋 REVEAL: for .reveal elements (yearbook, sections)
  ========================= */
  let revealEls = document.querySelectorAll('.reveal');

  function checkReveal() {
    // always query current document nodes to support PJAX content swaps
    revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', checkReveal);
  // initial check
  checkReveal();


  /* =========================
     🖼️ IMAGE LIGHTBOX
  ========================= */
  const images = document.querySelectorAll(".story-img img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

    /* =========================
      🛟 STUDENT IMAGE FALLBACK
      Replace broken images with a neutral SVG placeholder so no broken icon appears
    ========================= */
    const placeholder = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23222'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23bbb' font-size='20'>No image</text></svg>";
    document.querySelectorAll('.students-container img').forEach(img => {
     img.addEventListener('error', () => { img.src = placeholder; img.style.objectFit = 'cover'; });
    });

  images.forEach(img => {
    img.addEventListener("click", () => {
      if (!lightbox || !lightboxImg) return; // only proceed if lightbox exists
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  /* =========================
     DEPT NAV: smooth scroll + active highlight (non-destructive)
  ========================= */
  const deptNav = document.getElementById('deptNav');

  // DEPT NAV (robust delegated listener on document)
  // Use delegated clicks on `document` so first-click works even if buttons are added later.
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.dept-btn');
    if (!btn) return;
    // ensure clicked button belongs to the deptNav area when present
    if (deptNav && !deptNav.contains(btn)) return;
    e.preventDefault();

    const target = btn.dataset.target;
    if (!target) return;
    const el = document.querySelector(target);
    if (!el) return;

    // compute scroll position adjusted for fixed topNav height
    const nav = document.getElementById('topNav');
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;
    const buffer = 12; // small gap below navbar
    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - buffer;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  // IntersectionObserver to toggle active state on buttons; query buttons live each time
  const sections = document.querySelectorAll('.department');
  if (sections.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          const id = '#' + ent.target.id;
          const buttons = (document.getElementById('deptNav') || document).querySelectorAll('.dept-btn');
          buttons.forEach(b => b.classList.toggle('active', b.dataset.target === id));
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(s => obs.observe(s));
  }

  // Observe student-cards to add in-view class
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.student-card').forEach(c => cardObserver.observe(c));

  // Fallback: if IntersectionObserver doesn't trigger (older browsers or quick load), reveal cards after short delay
  setTimeout(() => {
    const anyInView = document.querySelectorAll('.student-card.in-view').length > 0;
    if (!anyInView) document.querySelectorAll('.student-card').forEach(c => c.classList.add('in-view'));
  }, 450);

  // Minimal re-initializer used after PJAX swaps
  function initPage() {
    try { revealEls = document.querySelectorAll('.reveal'); } catch(e) {}
    try { if (typeof checkReveal === 'function') checkReveal(); } catch(e) {}
    try {
      // re-run gallery build if present (mediavault page)
      if (typeof buildGallery === 'function') buildGallery(activeFilter || 'all');
    } catch(e) {}
    try { document.querySelectorAll('.student-card').forEach(c => cardObserver.observe(c)); } catch(e) {}
    try {
      // update nav-active
      const links = document.querySelectorAll('#topNav a');
      const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
      links.forEach(a => {
        try {
          const linkPath = (new URL(a.getAttribute('href'), location.href).pathname.split('/').pop() || 'index.html').toLowerCase();
          a.classList.toggle('nav-active', linkPath === current);
        } catch(e) {}
      });
    } catch(e) {}
    try { attachToggleHandler(); } catch(e) {}
    try { attachStartButton(); } catch(e) {}
  }


  /* =========================
     🚀 PJAX (targeted): keep `#bgMusic` playing across internal navigation
     - Intercepts same-origin link clicks and replaces page body content while preserving audio and nav
  ========================= */
  (function(){
    const PRESERVE_IDS = ['bgMusic','topNav','musicToggle','loader','vaultLightbox','profilePopup','lightbox'];

    function isSameOrigin(href) {
      try { return new URL(href, location.href).origin === location.origin; } catch(e) { return false; }
    }

    function extractAndReplace(doc) {
      console.debug('PJAX: extractAndReplace start — fetched body class:', doc.body && doc.body.className);
      // collect preserved nodes from current document
      const preserved = PRESERVE_IDS.map(id => document.getElementById(id)).filter(Boolean);
      // ensure preserved nodes are appended in the same document order they currently have
      try {
        preserved.sort((a, b) => {
          if (a === b) return 0;
          return (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1;
        });
      } catch (e) {}

      // build fragment from fetched doc excluding preserved and <audio>
      const frag = document.createDocumentFragment();
      Array.from(doc.body.childNodes).forEach(node => {
        // import non-element nodes (text, comments)
        if (node.nodeType !== 1) return frag.appendChild(document.importNode(node, true));
        const id = node.id || '';
        if (PRESERVE_IDS.includes(id)) return; // skip preserved from fetched doc
        // skip audio elements from fetched doc
        if (node.tagName === 'AUDIO') return;

        // handle scripts specially so they execute
        if (node.tagName === 'SCRIPT') {
          const s = document.createElement('script');
          if (node.src) {
            // avoid reloading the main script file (script.js) which is already present
            try {
              const srcUrl = new URL(node.getAttribute('src'), location.href).href;
              const mainScript = new URL('script.js', location.href).href;
              if (srcUrl === mainScript) return; // skip
            } catch (e) {}
            s.src = node.getAttribute('src');
            s.async = false;
            frag.appendChild(s);
          } else {
            s.textContent = node.textContent;
            frag.appendChild(s);
          }
          return;
        }

        frag.appendChild(document.importNode(node, true));
      });

      // copy body attributes from fetched doc (classes, data-attrs, inline styles)
      try {
        // replace className first
        document.body.className = doc.body.className || '';
        // copy other attributes
        Array.from(doc.body.attributes || []).forEach(attr => {
          if (attr.name === 'class') return;
          document.body.setAttribute(attr.name, attr.value);
        });
      } catch (e) {}

      // replace body content: clear then re-append preserved then new content
      document.body.innerHTML = '';
      preserved.forEach(n => document.body.appendChild(n));
      document.body.appendChild(frag);

      // Ensure styles from fetched document head (stylesheets and inline <style>)
      // are present in the current document head so page-specific CSS (like
      // the large inline styles in mediavault.html) continues to work after PJAX.
      try {
        const head = document.head;
        Array.from((doc.head || document.createElement('head')).querySelectorAll('link[rel="stylesheet"], style')).forEach(node => {
          if (node.tagName === 'LINK') {
            const href = node.getAttribute('href');
            if (href && !head.querySelector(`link[rel="stylesheet"][href="${href}"]`)) {
              const l = document.createElement('link');
              l.rel = 'stylesheet';
              l.href = href;
              head.appendChild(l);
            }
          } else if (node.tagName === 'STYLE') {
            const txt = node.textContent || '';
            const exists = Array.from(head.querySelectorAll('style')).some(s => s.textContent === txt);
            if (!exists) {
              const s = document.createElement('style');
              s.textContent = txt;
              head.appendChild(s);
            }
          }
        });
      } catch (e) {}

      console.debug('PJAX: extractAndReplace complete — preserved nodes:', preserved.map(n=>n.id));

        // remove any duplicate music toggle/audio elements that came from the fetched page
      try {
        // If our runtime `toggle`/`music` references exist, remove other nodes keeping the runtime ones.
        if (toggle) {
          document.querySelectorAll('#musicToggle').forEach(el => { if (el !== toggle) el.remove(); });
        } else {
          // If `toggle` isn't initialized (feature may be page-local), avoid removing the existing DOM node.
          // Instead, ensure we don't leave multiple buttons by keeping the first and removing extras.
          const toggles = document.querySelectorAll('#musicToggle');
          if (toggles.length > 1) {
            for (let i = 1; i < toggles.length; i++) toggles[i].remove();
          }
        }

        if (music) {
          document.querySelectorAll('#bgMusic').forEach(el => { if (el !== music) el.remove(); });
        } else {
          const audios = document.querySelectorAll('#bgMusic');
          if (audios.length > 1) {
            for (let i = 1; i < audios.length; i++) audios[i].remove();
          }
        }
      } catch (e) {}
    }

    async function pjaxLoad(url, push = true) {
      try {
        console.debug('PJAX: load start', url);
        const res = await fetch(url, { credentials: 'same-origin' });
        if (!res.ok) return window.location.href = url; // fallback
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // replace content
        extractAndReplace(doc);
        console.debug('PJAX: content replaced for', url);

        // ensure we land at the top after PJAX swaps (helps top-nav links)
        try { window.scrollTo({ top: 0, behavior: 'instant' }); } catch(e) { window.scrollTo(0,0); }
        if (doc.title) document.title = doc.title;
        if (push) history.pushState({ url }, '', url);

        // reattach handlers and init page features
        try { if (ENABLE_MUSIC) safeInitMusic(); } catch(e){}
        try { initPage(); } catch(e){}
        console.debug('PJAX: initPage called for', url);

        // Extra: ensure we reliably land at the top after PJAX swaps.
        // Some layouts shift as images/fonts load, so perform a couple of scroll-to-top passes
        // and also listen for image load completion to re-assert the top position.
        try {
          window.scrollTo({ top: 0, behavior: 'instant' });
          setTimeout(() => {
            try { window.scrollTo({ top: 0, behavior: 'instant' }); } catch(e) { window.scrollTo(0,0); }
            try { if (typeof checkReveal === 'function') checkReveal(); } catch(e) {}
          }, 120);

          const imgs = Array.from(document.images || []);
          if (imgs.length) {
            let loaded = 0;
            const onImg = () => {
              loaded += 1;
              if (loaded >= imgs.length) {
                try { window.scrollTo({ top: 0, behavior: 'instant' }); } catch(e) { window.scrollTo(0,0); }
                try { if (typeof checkReveal === 'function') checkReveal(); } catch(e) {}
              }
            };
            imgs.forEach(img => {
              if (img.complete) { onImg(); return; }
              img.addEventListener('load', onImg, { once: true });
              img.addEventListener('error', onImg, { once: true });
            });
          }
        } catch(e) {}
      } catch (err) {
        console.log('PJAX failed, navigating normally', err);
        window.location.href = url;
      }
    }

    // intercept clicks on internal links
    document.addEventListener('click', (e) => {
      const a = e.target.closest && e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;
      // allow anchors and external links
      if (href.startsWith('#')) return;
      if (!isSameOrigin(href)) return;
      if (a.target && a.target !== '' && a.target !== '_self') return;
      e.preventDefault();
      pjaxLoad(new URL(href, location.href).href);
    });

    window.addEventListener('popstate', (e) => {
      const url = (e.state && e.state.url) || location.href;
      pjaxLoad(url, false);
    });
  })();


  /* =========================
     🔄 FORCE SCROLL TOP ON REFRESH
  ========================= */
 window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 10);
});
  /* =========================
     🔄 LOADER REMOVE
  ========================= */
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
  });

});