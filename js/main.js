
const WHATSAPP_NUMBER = "5491166784500"


/* =========================
   FETCH CONTENT
========================= */
fetch("./data/data.json")
  .then(res => res.json())
  .then(data => {
    renderHero(data.hero)
    renderSolutions(data.solutions)
    renderProjects(data.projects)
    renderProcess(data.process)
    renderPricing(data.pricing)
    // renderCTA(data.cta)
    renderContact(data.contact)
    renderFooter(data.footer)

    initUI()
    initAnimations()
  })

/* =========================
   HERO
========================= */
function renderHero(hero) {
  document.querySelector("#hero").innerHTML = `
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
  <span class="sr-only">Diseño y desarrollo web profesional</span>
  ${hero.title}
</h1>

      <p class="text-lg md:text-xl max-w-2xl mx-auto mb-10">
        ${hero.subtitle}
      </p>
      <a href="#pricing"
         class="inline-block px-12 py-4 rounded-full bg-violet text-white font-semibold shadow-xl">
        ${hero.buttonText}
      </a>
    </div>
  `
}

/* =========================
   SOLUTIONS
========================= */
function renderSolutions(solutions) {
  document.querySelector("#solutions").innerHTML = `
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold mb-4">
  <span class="sr-only">Servicios de diseño y desarrollo web</span>
  ${solutions.title}
</h2>


      <p class="max-w-2xl mx-auto mb-14">${solutions.description}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        ${solutions.items.map(item => `
          <div class="bg-card p-10" data-aos="fade-up">
            <h3 class="text-2xl font-bold mb-4">${item.title}</h3>
            <p>${item.description}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `
}

/* =========================
   PROJECTS
========================= */
function renderProjects(projects) {
  document.querySelector("#projects").innerHTML = `
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold mb-4">${projects.title}</h2>
      <p class="max-w-2xl mx-auto mb-14">${projects.description}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        ${projects.items.map(project => `
          <div class="bg-card rounded-3xl overflow-hidden shadow-xl" data-aos="fade-up">
            
            <img 
              src="${project.image}" 
              alt="Proyecto ${project.title}"
              loading="lazy"
              class="w-full h-64 object-cover"
            >

            <div class="p-8 text-left">
              <h3 class="text-2xl font-bold mb-3">${project.title}</h3>
              <p class="mb-6">${project.description}</p>

              <a 
                href="${project.link}" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block px-6 py-3 rounded-full bg-violet text-white font-semibold hover:opacity-90 transition"
              >
                Ver sitio
              </a>
            </div>

          </div>
        `).join("")}
      </div>
    </div>
  `
}


/* =========================
   PROCESS
========================= */
function renderProcess(process) {
  document.querySelector("#process").innerHTML = `
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="font-extrabold mb-14">${process.title}</h2>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        ${process.steps.map((step, i) => `
          <div class="bg-card p-8" data-aos="fade-up" data-aos-delay="${i * 100}">
            <span class="text-violet text-4xl font-extrabold block mb-4">
              0${i + 1}
            </span>
            <h3 class="text-xl font-bold mb-3">${step.title}</h3>
            <p>${step.description}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `
}

/* =========================
   PRICING
========================= */
function renderPricing(pricing) {
  document.querySelector("#pricing").innerHTML = `
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="font-extrabold mb-4">${pricing.title}</h2>
      <p class="max-w-2xl mx-auto mb-14">${pricing.description}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        ${pricing.plans.map(plan => {
          const message = `Hola Gonzalo, quiero consultar por el plan ${plan.name}`

          return `
            <div class="p-10 rounded-3xl ${
              plan.featured ? "bg-violet text-white scale-105" : "bg-card"
            }" data-aos="fade-up">

              <h3 class="text-2xl font-bold mb-3">${plan.name}</h3>
              <p class="text-xl font-semibold mb-6">${plan.price}</p>

              <ul class="space-y-3 mb-8 text-left">
                ${plan.features.map(f => `<li>✔ ${f}</li>`).join("")}
              </ul>

              <a
                href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block w-full text-center py-3 rounded-full font-semibold ${
                  plan.featured
                    ? "bg-white text-violet"
                    : "bg-violet text-white"
                }"
              >
                ${plan.buttonText}
              </a>
            </div>
          `
        }).join("")}
      </div>
    </div>
  `
}


/* =========================
   CTA
========================= */
// function renderCTA(cta) {
//   document.querySelector("#cta").innerHTML = `
//     <div class="max-w-5xl mx-auto text-center">
//       <h2 class="font-extrabold mb-8">${cta.title}</h2>
//       <a href="#contact"
//          class="inline-block px-12 py-4 rounded-full bg-white text-violet font-bold">
//         ${cta.buttonText}
//       </a>
//     </div>
//   `
// }

/* =========================
   CONTACT
========================= */
function renderContact(contact) {
  document.querySelector("#contact").innerHTML = `
    <div class="max-w-4xl mx-auto text-center space-y-8">

      <h2 class="text-3xl md:text-4xl font-extrabold">
        ${contact.title}
      </h2>

      <div class="flex flex-col md:flex-row justify-center gap-6">

        <!-- WhatsApp -->
        <a 
          href="${contact.whatsapp}"
          target="_blank"
          data-track="whatsapp"
          class="cta-btn whatsapp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.486 2 2 6.262 2 11.517C2 13.683 2.743 15.786 4.019 17.502L2.7 22L7.372 20.74C8.956 21.606 10.742 22.069 12 22.069C17.514 22.069 22 17.806 22 12.551C22 7.296 17.514 2 12 2Z" fill="#25D366"/>
          </svg>
          WhatsApp
        </a>

        <!-- Gmail -->
        <a 
          href="mailto:${contact.email}?subject=Consulta%20Web%20-%20Portafolio&body=Hola%20Gonzalo,%20quiero%20consultar%20por%20un%20proyecto%20web."
          data-track="email"
          class="cta-btn gmail"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 6.75V17.25C3 18.2165 3.7835 19 4.75 19H6V9.5L12 14L18 9.5V19H19.25C20.2165 19 21 18.2165 21 17.25V6.75L12 13.25L3 6.75Z" fill="#EA4335"/>
          </svg>
          Gmail
        </a>

      </div>
    </div>
  `
}



/* =========================
   FOOTER
========================= */
function renderFooter(footer) {
  document.querySelector("footer").innerHTML = `
    <p class="text-sm text-center py-10 text-gray-500">
      ${footer.text}
    </p>
  `
}

/* =========================
   UI (NAVBAR / MENU)
========================= */
function initUI() {
  const menuToggle = document.getElementById("menuToggle")
  const nav = document.getElementById("navigation-menu")

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open")
  })
}

/* =========================
   ANIMATIONS
========================= */
function initAnimations() {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-cubic"
  })

  const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  gsap.from("#hero h1, #hero p, #hero a", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
  })

 

}

// Loader animation
gsap.to(".loader-progress", {
  width: "100%",
  duration: 1.2,
  ease: "power2.out"
})

gsap.to("#loader", {
  opacity: 0,
  delay: 1.4,
  duration: 0.6,
  onComplete: () => {
    document.getElementById("loader").remove()
  }
})


document.addEventListener("click", (e) => {
  const track = e.target.closest("[data-track]")
  if (!track) return

  const action = track.dataset.track

  // Google Analytics
  if (window.gtag) {
    gtag("event", "click", {
      event_category: "contact",
      event_label: action
    })
  }

  // Meta Pixel
  if (window.fbq) {
    fbq("track", "Contact", {
      method: action
    })
  }
})