class DOMHelper {
   // GetElementById Helper / Shorthand
   static getEle(id) {
      return document.getElementById(id);
   }
   // Event Listener Helper with Fallback
   static eventListenerHelper(ele, event, func) {
      if (ele.addEventListener) {
         ele.addEventListener(event, func, false);
      } else if (ele.attachEvent) {
         ele.attachEvent('on' + event, func);
      }
   }
   // Toggle Display Block/None of an Element
   static toggleDisplay(element, condition) {
      condition ? (element.style.display = 'block') : (element.style.display = 'none');
   }
   // Toggle Class of an Element
   static toggleClass(element, condition, className) {
      condition ? element.classList.add(className) : element.classList.remove(className);
   }
}
