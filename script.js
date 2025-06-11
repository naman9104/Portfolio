const text =`Hello 👋
I'm Naman Sachdeva,
a 16-year-old student.
Who's passionate about building things for the web.
I love turning ideas into small functional projects using :
HTML, CSS, and JavaScript.`;

let index = 0;
function type() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(type, 50);
  }
}
window.onload = type;
