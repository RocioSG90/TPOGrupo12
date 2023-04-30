window.addEventListener("resize", function() {
    const navHeight = document.querySelector("nav").offsetHeight;
    const h1 = document.querySelector("h1");
    h1.style.marginTop = navHeight + "px";
  });