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

function mudarCor(cor) {
  const hero = document.getElementById('hero-sultana');
 
  if (cor === 'bege') {
    hero.style.backgroundColor = '#d6b896';
  } else if (cor === 'caramelo') {
    hero.style.backgroundColor = '#c48a4a';
  } else if (cor === 'dourado') {
    hero.style.backgroundColor = '#f4ce84';
  }
 
  hero.style.transition = "background-color 0.6s ease-in-out";
}
