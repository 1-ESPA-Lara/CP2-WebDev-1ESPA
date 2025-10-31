let imagens = [
  "../assets/Perfume0.png",
  "../assets/Perfume1.png",
  "../assets/Perfume2.png",
  "../assets/Perfume3.png",
  "../assets/Perfume4.png",
  "../assets/Perfume5.png",
  "../assets/Perfume6.png",
  "../assets/Perfume7.png",
  "../assets/Perfume8.png"
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
