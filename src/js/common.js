// Đưa dư liệu ra màn hình
export function render( element, content) {
   const elementId = document.getElementById(element)
   // Nếu có giá trị thì hiển thị
   if(!element) return; {
      element.innerHTML = content;
   }
}