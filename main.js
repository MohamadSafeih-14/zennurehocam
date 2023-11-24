document.addEventListener("DOMContentLoaded", function() {
    // Animate elements on load
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    });
  

  });
  
//   const text = "        Emekleriniz için teşekkürler öğretmenim Teknoloji bilişimi çalışmasını çok güzel yaptınız Başarılar dileriz Mohammed Safieh."; 
//   let index = 0;
//   const speed = 50; // Adjust the typing speed (milliseconds)
  
//   function typeWriter() {
//     if (index < text.length) {
//       document.getElementById('typewriter').textContent += text.charAt(index);
//       index++;
//       setTimeout(typeWriter, speed);
//     }
//   }
  
//   // Start the typing animation after 3 seconds when the window loads
//   window.onload = function() {
//     setTimeout(typeWriter, 1500);
//   };
  