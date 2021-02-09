// Menu Template Tag and Literal
const menuTemplate = document.createElement('template');
menuTemplate.innerHTML = `
      <!-- Menu -->
      <!-- Mobile Menu -->
      <nav id="menu-mobile" class="menu-mobile">
         <ul class="menu-mobile__links">
            <li class="menu-mobile__list">
               <a class="menu__link" href="https://github.com/nodbos">
                  <i class="fab fa-github-square"></i>
                  Github
               </a>
            </li>
            <li class="menu-mobile__list">
               <a class="menu__link" href="https://www.linkedin.com/in/felipe-aven/">
                  <i class="fab fa-linkedin"></i>
                  LinkedIn
               </a>
            </li>
         </ul>
      </nav>
      <!-- Desktop Menu -->
      <nav id="menu-desktop" class="menu-desktop">
         <section class="menu-desktop__logo">
            <a href="/index.html">
               <div class="menu-desktop__logo--icon">
                  <img src="/assets/ico/neva-logo.ico" alt="Code Neva Logo" />
               </div>
               <h2 class="menu-desktop__logo--text">Code <span>Neva</span></h2>
            </a>
         </section>
         <section class="menu-desktop__links">
            <a class="menu-desktop__link" href="https://github.com/nodbos">
               <i class="fab fa-github-square"></i>
               <p>Github</p>
            </a>
            <a class="menu-desktop__link" href="https://www.linkedin.com/in/felipe-aven/">
               <i class="fab fa-linkedin"></i>
               <p>LinkedIn</p>
            </a>
         </section>
         <!-- Mobile Button -->
         <button class="menu-mobile__btn">
            <!--<a id="menu-mobile__btn" class="fa fa-bars fa-2x"></a>-->
            <div id="menu-mobile__icon" class="menu-mobile__icon">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
            </div>
         </button>
      </nav>`;
// Menu Class
class Menu extends DOMHelper {
   constructor(header) {
      super();
      this.createMenu(header);
   }
   // Show and Hide Mobile Menu
   mobileToggle = (menuMobile, menuMobileIcon) => {
      DOMHelper.toggleDisplay(menuMobile, menuMobile.style.display === 'none');
      DOMHelper.toggleClass(
         menuMobileIcon,
         menuMobile.style.display === 'block',
         'menu-mobile__icon--open'
      );
   };
   // Creates Menu in Header
   createMenu(header) {
      header.appendChild(menuTemplate.content);
      this.mobileInteractivity(
         DOMHelper.getEle('menu-mobile'),
         DOMHelper.getEle('menu-mobile__icon')
      );
   }
   // Mobile Menu Toggle Button Event Listener
   mobileInteractivity = (menuMobile, menuMobileIcon) => {
      DOMHelper.eventListenerHelper(
         menuMobileIcon,
         'click',
         this.mobileToggle.bind(this, menuMobile, menuMobileIcon)
      );
      this.mobileToggle(menuMobile, menuMobileIcon);
   };
}
