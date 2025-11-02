let imagens = [
  "../assets/perfume0.png",
  "../assets/perfume1.png",
  "../assets/perfume2.png",
  "../assets/perfume3.png",
  "../assets/perfume4.png",
  "../assets/perfume5.png",
  "../assets/perfume6.png",
  "../assets/perfume7.png",
  "../assets/perfume8.png"
];

let i = 0;
let tempo = 4000; // troca a cada 5 segundos

function slideShow() {
  const img = document.getElementById("image");
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = imagens[i];
    img.style.opacity = 1;
  }, 500);

  i++;
  if (i === imagens.length) {
    i = 0;
  }

  setTimeout(slideShow, tempo);
}

slideShow();
