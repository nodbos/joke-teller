// Footer Template Tag and Literal
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
         <p>
            Made by
            <span> Felipe </span>
            in
            <img
               class="emoji"
               src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f1e8-1f1f4.png"
               alt="Colombian Flag"
               width="20"
               height="20"
            />
         </p>`;
// Footer Class
class Footer {
   constructor(footer) {
      this.createFooter(footer);
   }
   // Adds content to Footer
   createFooter(footer) {
      footer.appendChild(footerTemplate.content);
   }
}
