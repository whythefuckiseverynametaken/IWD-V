
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    startTypewriter();
  };

  function startTypewriter() {
    const textContainer = document.createElement("div");
    textContainer.className = "typewriter-text";
    textContainer.style.position = "absolute";
    textContainer.style.top = "10%";
    textContainer.style.left = "50%";
    textContainer.style.transform = "translateX(-50%)";
    textContainer.style.fontSize = "3em";
    textContainer.style.color = "white";
    textContainer.style.textAlign = "center";
    textContainer.style.fontFamily = "Abrakatebra";
    textContainer.style.opacity = 0.8;
    document.body.appendChild(textContainer);

    const texts = ["Waddup nerd", "Pretty cool right?", "Heres sum kind words", "Ur amazing", "Smort", "Beautiful", "Kill it out there alright?", "Love yaa"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting) {
            if (charIndex < texts[index].length) {
                textContainer.innerHTML += texts[index][charIndex];
                charIndex++;
                setTimeout(typeEffect, 50);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, 2000);
            }
        } else {
            if (charIndex > 0) {
                textContainer.innerHTML = texts[index].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeEffect, 50);
            } else {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(typeEffect, 500);
            }
        }
    }
    typeEffect();
}
