const state = { page: 'home', lang: 'en' };

function renderHome(t) {
  return `
    <header class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Community" class="w-full h-full object-cover grayscale brightness-50 scale-105 animate-in" style="animation-duration: 1.5s;" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      <div class="container mx-auto px-6 relative z-10 text-center max-w-5xl mt-20">
        <p class="text-orange-600 font-bold tracking-[0.3em] text-xs uppercase mb-6 animate-in delay-100">Est. 2023 • Denver, CO</p>
        <h1 class="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 leading-[0.9] tracking-tight animate-in delay-200">HOPE<br/>HAS NO<br/>BORDERS</h1>
        <p class="text-lg md:text-2xl text-neutral-200 font-light mb-12 max-w-2xl mx-auto leading-relaxed text-balance animate-in delay-300">${t.hero.subtitle}</p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center animate-in delay-300">
          <button onclick="navigateTo('resources')" class="bg-white text-black px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all duration-300">${t.hero.cta_primary}</button>
          <button onclick="navigateTo('about')" class="border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">${t.hero.cta_secondary}</button>
        </div>
      </div>
    </header>
    <section class="py-32 bg-white">
      <div class="container mx-auto px-6 max-w-4xl text-center">
        <i data-lucide="heart" class="w-6 h-6 text-orange-600 mx-auto mb-10 animate-pulse"></i>
        <h2 class="text-3xl md:text-5xl font-serif leading-snug text-neutral-900 mb-10 text-balance">"${t.mission.statement}"</h2>
      </div>
    </section>
  `;
}

function renderPrograms(t) {
  return `
    <div class="pt-32 pb-24 min-h-screen bg-white animate-in">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mb-24">
          <span class="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">${t.programs_page.label}</span>
          <h1 class="text-5xl md:text-7xl font-serif mb-8 leading-tight">${t.programs_page.title}</h1>
          <p class="text-xl text-neutral-600 font-light leading-relaxed">${t.programs_page.subtitle}</p>
        </div>
        <div class="space-y-32">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="order-2 md:order-1 aspect-[4/5] bg-neutral-100 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div class="order-1 md:order-2">
              <i data-lucide="home" class="w-12 h-12 text-orange-600 mb-6"></i>
              <h2 class="text-4xl font-serif mb-6">${t.programs_page.host.title}</h2>
              <p class="text-lg text-neutral-600 font-light mb-6 leading-relaxed">${t.programs_page.host.body}</p>
              <button onclick="navigateTo('host')" class="bg-black text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">${t.programs_page.host.cta}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderResources(t) {
  return `
    <div class="pt-24 min-h-screen bg-white flex flex-col h-screen animate-in">
      <div class="bg-white border-b border-neutral-100 py-8 px-6 z-20">
        <div class="container mx-auto">
          <h1 class="text-4xl font-serif mb-2">${t.resources.title}</h1>
          <p class="text-neutral-500 font-light">${t.resources.subtitle}</p>
        </div>
      </div>
      <div class="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        <div class="w-full md:w-1/3 border-r border-neutral-100 overflow-y-auto bg-white z-10 p-8">
          <div class="mb-8 group cursor-pointer">
            <span class="text-[0.6rem] font-bold uppercase tracking-widest text-green-600">Open Now</span>
            <h3 class="text-xl font-serif mb-2 group-hover:text-orange-600">Denver Central Food Bank</h3>
            <p class="text-neutral-500 text-sm font-light">123 Broadway, Denver</p>
          </div>
          <div class="mb-8 group cursor-pointer">
            <span class="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-400">Opens 9am</span>
            <h3 class="text-xl font-serif mb-2 group-hover:text-orange-600">Legal Aid Clinic</h3>
            <p class="text-neutral-500 text-sm font-light">Community Center Room B</p>
          </div>
        </div>
        <div class="flex-1 bg-neutral-100 relative h-[50vh] md:h-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d196236.4678822363!2d-105.0210217036495!3d39.76426749298565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfood%20bank%20denver!5e0!3m2!1sen!2sus!4v1697230000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" loading="lazy" class="grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"></iframe>
        </div>
      </div>
    </div>
  `;
}

function renderDonate(t) {
  return `
    <div class="pt-32 min-h-screen bg-white animate-in">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <span class="text-orange-600 font-bold tracking-widest text-xs uppercase mb-4 block">${t.donate_page.take_action}</span>
            <h1 class="text-5xl md:text-6xl font-serif mb-8 leading-tight">${t.donate_page.title}</h1>
            <p class="text-lg text-neutral-600 font-light leading-relaxed mb-8">${t.donate_page.subtitle}</p>
            <button class="bg-orange-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-xl shadow-orange-600/20">${t.donate_page.btn_financial}</button>
          </div>
          <div class="bg-neutral-50 p-12 flex flex-col justify-center items-center text-center border border-neutral-100">
            <h3 class="text-2xl font-serif mb-4">${t.donate_page.corp_title}</h3>
            <p class="text-neutral-500 font-light mb-8">${t.donate_page.corp_desc}</p>
            <button class="border-b border-black pb-1 uppercase text-xs font-bold tracking-widest hover:text-orange-600 hover:border-orange-600 transition-colors">${t.donate_page.btn_check}</button>
          </div>
        </div>
        <div class="border-t border-neutral-200 pt-24 pb-24 text-center">
          <h2 class="text-4xl font-serif mb-4">${t.donate_page.items_title}</h2>
          <p class="text-neutral-500 font-light mb-12">${t.donate_page.items_desc}</p>
          <a href="mailto:hopehasnoborders@gmail.com" class="inline-flex items-center gap-2 text-xl font-serif italic hover:text-orange-600 transition-colors">${t.donate_page.coordinate} <i data-lucide="arrow-right"></i></a>
        </div>
      </div>
    </div>
  `;
}

function renderVolunteer(t) {
  return `
    <div class="pt-32 min-h-screen bg-neutral-50 animate-in">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="bg-white p-12 md:p-20 shadow-sm border border-neutral-100 text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-serif mb-6">${t.volunteer_page.title}</h1>
          <p class="text-xl text-neutral-500 font-light max-w-2xl mx-auto mb-10">${t.volunteer_page.subtitle}</p>
          <button class="bg-orange-600 text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">${t.volunteer_page.cta}</button>
        </div>
      </div>
    </div>
  `;
}

function renderHost(t) {
  return `
    <div class="pt-32 min-h-screen bg-white animate-in">
      <div class="container mx-auto px-6 max-w-3xl">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-serif mb-6">${t.host_page.title}</h1>
          <p class="text-neutral-500">${t.host_page.step}</p>
          <div class="w-full bg-neutral-100 h-1 mt-6 rounded-full overflow-hidden"><div class="bg-orange-600 w-1/3 h-full"></div></div>
        </div>
        <form class="space-y-8 animate-in delay-100">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-neutral-500">${t.host_page.form.first_name}</label>
              <input type="text" class="w-full border-b border-neutral-300 py-3 focus:border-orange-600 outline-none transition-colors bg-transparent" placeholder="Jane" />
            </div>
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-neutral-500">${t.host_page.form.last_name}</label>
              <input type="text" class="w-full border-b border-neutral-300 py-3 focus:border-orange-600 outline-none transition-colors bg-transparent" placeholder="Doe" />
            </div>
          </div>
          <button type="button" class="w-full bg-black text-white py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors">${t.host_page.form.btn}</button>
        </form>
      </div>
    </div>
  `;
}

function renderAbout(t) {
  return `
    <div class="pt-32 min-h-screen bg-white animate-in">
      <div class="container mx-auto px-6 max-w-4xl text-center mb-24">
        <h1 class="text-5xl md:text-7xl font-serif mb-8">${t.nav.about}</h1>
        <p class="text-xl text-neutral-600 font-light leading-relaxed">We are not a large institution. We are moms, neighbors, and community members who refused to look away.</p>
      </div>
    </div>
  `;
}

function renderApp() {
  const t = window.CONTENT[state.lang];
  const root = document.getElementById('app-root');

  switch (state.page) {
    case 'home': root.innerHTML = renderHome(t); break;
    case 'programs': root.innerHTML = renderPrograms(t); break;
    case 'resources': root.innerHTML = renderResources(t); break;
    case 'donate': root.innerHTML = renderDonate(t); break;
    case 'volunteer': root.innerHTML = renderVolunteer(t); break;
    case 'host': root.innerHTML = renderHost(t); break;
    case 'about': root.innerHTML = renderAbout(t); break;
    default: root.innerHTML = renderHome(t);
  }

  updateNavText(t);
  lucide.createIcons();
  handleScroll();
  window.scrollTo(0, 0);
}

function updateNavText(t) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    const val = key.split('.').reduce((obj, k) => (obj ? obj[k] : undefined), t);
    if (val) el.innerText = val;
  });
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) langToggle.innerText = state.lang === 'en' ? 'EN' : 'ES';
}

function navigateTo(page) {
  state.page = page;
  renderApp();
  const menu = document.getElementById('mobile-menu');
  if (menu) { menu.classList.add('hidden'); menu.classList.remove('opacity-100'); }
}

function toggleLang() { state.lang = state.lang === 'en' ? 'es' : 'en'; renderApp(); }

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  if (!menu || !icon) return;

  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    setTimeout(() => menu.classList.add('opacity-100'), 10);
    icon.setAttribute('data-lucide', 'x');
    icon.style.color = 'black';
  } else {
    menu.classList.remove('opacity-100');
    setTimeout(() => menu.classList.add('hidden'), 300);
    icon.setAttribute('data-lucide', 'menu');
    handleScroll();
  }
  lucide.createIcons();
}

function handleScroll() {
  const navbar = document.getElementById('navbar');
  const navDivider = document.getElementById('nav-divider');
  const mobileIcon = document.getElementById('mobile-menu-icon');
  const logo = document.getElementById('nav-logo');
  const isHome = state.page === 'home';
  const scrollY = window.scrollY;

  if (!navbar) return;

  if (scrollY > 50) {
    navbar.classList.remove('bg-transparent', 'text-white');
    navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'text-black', 'shadow-sm');
    if (navDivider) navDivider.classList.replace('bg-white/30', 'bg-neutral-300');
    if (mobileIcon) mobileIcon.style.color = 'black';
    if (logo) { logo.classList.remove('logo-white-filter'); logo.classList.add('logo-normal'); }
  } else {
    navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
    navbar.classList.add('bg-transparent');

    if (isHome) {
      navbar.classList.remove('text-black');
      navbar.classList.add('text-white');
      if (navDivider) navDivider.classList.replace('bg-neutral-300', 'bg-white/30');
      if (mobileIcon) mobileIcon.style.color = 'white';
      if (logo) { logo.classList.remove('logo-normal'); logo.classList.add('logo-white-filter'); }
    } else {
      navbar.classList.remove('text-white');
      navbar.classList.add('text-black');
      if (navDivider) navDivider.classList.replace('bg-white/30', 'bg-neutral-300');
      if (mobileIcon) mobileIcon.style.color = 'black';
      if (logo) { logo.classList.remove('logo-white-filter'); logo.classList.add('logo-normal'); }
    }
  }
}

window.navigateTo = navigateTo;
window.toggleLang = toggleLang;
window.toggleMobileMenu = toggleMobileMenu;

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', () => { renderApp(); });
