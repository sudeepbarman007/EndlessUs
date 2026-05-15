// yearbook section - extended student data (nickname, department, hometown, socials)
const students = [
  { name: "Sudeep Barman", nickname: "Mangru", dept: "ECE", hometown: "Siliguri, West Bengal", img: "images/yearbook/sudeep.jpg", quote: "Turning ideas into reality", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Koushik Das", nickname: "Billa", dept: "ECE", hometown: "Nalbari, Assam", img: "images/yearbook/koushik.jpeg", quote: "Consistency beats talent", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Rohit Sarkar", nickname: "Rohit", dept: "ECE", hometown: "Bongaigaon, Assam", img: "images/yearbook/rohit.jpeg", quote: "Work hard in silence", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Ankit Gupta", nickname: "Ankit", dept: "ECE", hometown: "Assam", img: "images/yearbook/ankit.jpeg", quote: "Dream big, act bigger", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Moon Basumatary", nickname: "Moonnu", dept: "ECE", hometown: "Guwahati, Assam", img: "images/yearbook/moon.jpeg", quote: "Keep moving forward", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Triparna Boro", nickname: "Tipu", dept: "ECE", hometown: "Nagaon, Assam", img: "images/yearbook/triparna.jpeg", quote: "Believe in yourself", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
  { name: "Ankita Doley", nickname: "Anki", dept: "ECE", hometown: "Jorhat, Assam", img: "images/yearbook/ankita.jpeg", quote: "Make it happen", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
// ===== ECE Department =====
{ name: "Barnil Das", nickname: "Barnil", dept: "ECE", hometown: "Guwahati, Assam", img: "images/yearbook/barnil.jpeg", quote: "Keep moving forward", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Prithibiraj Brahma", nickname: "Prithi", dept: "ECE", hometown: "Assam", img: "images/yearbook/prithibiraj.jpeg", quote: "Dream big", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Lakhyajit Boro", nickname: "Lakhya", dept: "ECE", hometown: "Assam", img: "images/yearbook/lakhyajit.jpeg", quote: "Stay focused", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Partha Parashar", nickname: "Partha", dept: "ECE", hometown: "Guwahati, Assam", img: "images/yearbook/partha.jpeg", quote: "Create your own path", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Aminur Rehman", nickname: "Amin", dept: "ECE", hometown: "Nalbari, Assam", img: "images/yearbook/aminur.jpeg", quote: "Work hard in silence", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Tanmoy Day", nickname: "Tanmoy", dept: "ECE", hometown: "Nalbari, Assam", img: "images/yearbook/tanmoy.jpeg", quote: "Enjoy every moment", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Kuladip Rajbongshi", nickname: "Kuladip", dept: "ECE", hometown: "Nalbari, Assam", img: "images/yearbook/kuladip.jpeg ", quote: "Stay humble", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

{ name: "Youanchi Kwan", nickname: "Youanchi", dept: "ECE", hometown: "Assam", img: "images/yearbook/youanchi.jpeg", quote: "Be limitless", socials: { facebook: "#", instagram: "#", linkedin: "#" } },

// ===== CSE Department =====



{ name: "Nikita Sharma", nickname: "Niks", dept: "CSE", hometown: "Mirza, Assam", img: "images/yearbook/nikita.jpeg", quote: "Confidence is key", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Bibek Roy", nickname: "Niki Paglu", dept: "CSE", hometown: "Siliuri,West Bengal", img: "images/yearbook/bibek.jpg", quote: "Code. Learn. Repeat.", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Saifuddin Choudhury", nickname: "Bulla", dept: "CSE", hometown: "Dhubri,Assam", img: "images/yearbook/saiff.jpeg", quote: "Stay curious", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Pradyot Paul", nickname: "Podu", dept: "CSE", hometown: "Bongaigaon", img: "images/yearbook/pradyot.jpeg", quote: "Debugging life daily", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Krishnik Barman", nickname: "Krishu", dept: "CSE", hometown: "Jorhat, Assam", img: "images/yearbook/krishh.jpeg", quote: "Think different", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Rahul Talukdar", nickname: "Rahul", dept: "CSE", hometown: "Guwahati", img: "images/yearbook/rahul.jpeg", quote: "Stay hungry, stay foolish", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Bishal Karmakar", nickname: "Bishal", dept: "CSE", hometown: "Rangia", img: "images/yearbook/bishal.jpeg", quote: "Push beyond limits", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Rishi Raj Bharali", nickname: "Rishi", dept: "CSE", hometown: "Sualkuchi", img: "images/yearbook/rishi.jpeg", quote: "Create your own path", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Afrina Ahmed", nickname: "Afrina", dept: "CSE", hometown: "Hojai", img: "images/yearbook/afrina.jpeg", quote: "Shine brighter every day", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Daiji Kalita", nickname: "Daiji", dept: "CSE", hometown: "Goalpara", img: "images/yearbook/daiji.jpeg", quote: "Never stop learning", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Rahul Son Boro", nickname: "Rahul", dept: "CSE", hometown: "Assam", img: "images/yearbook/rahulsonboro.jpg", quote: "Code your future", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Subham Saha", nickname: "Subham", dept: "CSE", hometown: "Barpeta, Assam", img: "images/yearbook/subham.jpeg", quote: "Never stop learning", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Jayanta Saha", nickname: "Jayanta", dept: "FET", hometown: "", img: "images/yearbook/jayanta.jpeg", quote: "Turning ideas into reality", socials: { facebook: "#", instagram: "#", linkedin: "#" } },
{ name: "Viban Van Narzary", nickname: "Viban", dept: "CV", hometown: "", img: "images/viban.jpg", quote: "Building the future, brick by brick", socials: { facebook: "#", instagram: "#", linkedin: "#" } }
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

  if (fb) {
    if (student.socials && student.socials.facebook) { fb.href = student.socials.facebook; fb.style.display = 'inline-flex'; } else { fb.style.display = 'none'; }
  }
  if (ig) {
    if (student.socials && student.socials.instagram) { ig.href = student.socials.instagram; ig.style.display = 'inline-flex'; } else { ig.style.display = 'none'; }
  }
  if (li) {
    if (student.socials && student.socials.linkedin) { li.href = student.socials.linkedin; li.style.display = 'inline-flex'; } else { li.style.display = 'none'; }
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
  }, 260);
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

document.addEventListener("DOMContentLoaded", () => {

  // mark that JS is enabled so CSS can safely enable animated reveal states
  try { document.documentElement.classList.add('js'); } catch(e) {}


  /* =========================
     🎵 MUSIC CONTROL
  ========================= */
  const topNav = document.getElementById('topNav');

  // Ensure a background audio element exists site-wide (create if missing)
  let music = document.getElementById('bgMusic');
  if (!music) {
    music = document.createElement('audio');
    music.id = 'bgMusic';
    music.loop = true;
    const src = document.createElement('source');
    src.src = 'music/bg.mp3';
    src.type = 'audio/mpeg';
    music.appendChild(src);
    // hide audio element visually but keep accessible
    music.style.display = 'none';
    document.body.appendChild(music);
  } else {
    music.loop = true;
  }

  // Ensure a music toggle exists on every page (reuse if present)
  let toggle = document.getElementById('musicToggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.id = 'musicToggle';
    toggle.setAttribute('aria-label', 'Toggle background music');
    // place toggle into topNav if available, otherwise append to body
    if (topNav) topNav.appendChild(toggle);
    else document.body.appendChild(toggle);
  }

  // ensure toggle visually sits in topNav for consistent placement
  if (topNav && toggle.parentNode !== topNav) topNav.appendChild(toggle);

  // Initialize toggle state from localStorage so music persists across pages
  const stored = localStorage.getItem('musicPlaying');
  if (stored === 'true') {
    music.play()
      .then(() => { toggle.textContent = '🔊'; })
      .catch(() => { toggle.textContent = '🔇'; });
  } else {
    toggle.textContent = '🔇';
  }

  // Click handler: play/pause and persist choice (attachable for PJAX re-init)
  function attachToggleHandler() {
    if (!toggle) return;
    // remove previous handler if present
    if (toggle._handler) toggle.removeEventListener('click', toggle._handler);
    const handler = () => {
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

  attachToggleHandler();


  /* =========================
     🎬 START JOURNEY SCROLL
  ========================= */
  const startBtn = document.getElementById("startBtn");
  const journey = document.getElementById("journey");

 if (startBtn && journey) {
  startBtn.addEventListener("click", () => {
    journey.scrollIntoView({ behavior: "smooth" });
  });
}


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
  const revealEls = document.querySelectorAll('.reveal');

  function checkReveal() {
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
  if (deptNav) {
    const buttons = deptNav.querySelectorAll('.dept-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = btn.dataset.target;
        if (!target) return;
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    const sections = document.querySelectorAll('.department');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          const id = '#' + ent.target.id;
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
      // collect preserved nodes from current document
      const preserved = PRESERVE_IDS.map(id => document.getElementById(id)).filter(Boolean);

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

      // replace body: clear then re-append preserved then new content
      document.body.innerHTML = '';
      preserved.forEach(n => document.body.appendChild(n));
      document.body.appendChild(frag);

      // remove any duplicate music toggle/audio elements that came from the fetched page
      try {
        document.querySelectorAll('#musicToggle').forEach(el => { if (el !== toggle) el.remove(); });
        document.querySelectorAll('#bgMusic').forEach(el => { if (el !== music) el.remove(); });
      } catch (e) {}
    }

    async function pjaxLoad(url, push = true) {
      try {
        const res = await fetch(url, { credentials: 'same-origin' });
        if (!res.ok) return window.location.href = url; // fallback
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // replace content
        extractAndReplace(doc);
        if (doc.title) document.title = doc.title;
        if (push) history.pushState({ url }, '', url);

        // reattach handlers and init page features
        try { attachToggleHandler(); } catch(e){}
        try { initPage(); } catch(e){}
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