const perguntas = [
 {
    pergunta: "Pergunta 1: Como você se descreveria?\nA) Misterioso(a) e intenso(a)\nB) Romântico(a) e charmoso(a)\nC) Natural e autêntico(a)\nD) Elegante e confiante"
 },
 {
    pergunta: "Pergunta 2: Qual ambiente mais combina com você?\nA) Uma biblioteca antiga\nB) Um jantar elegante\nC) Uma floresta tranquila\nD) Uma noite estrelada"
 },
 {
    pergunta: "Pergunta 3: Qual palavra te representa?\nA) Mistério\nB) Sofisticação\nC) Serenidade\nD) Liberdade"
 },
 {
    pergunta: "Pergunta 4: O que você busca em um perfume?\nA) Algo marcante\nB) Fragrância romântica\nC) Frescor e leveza\nD) Um toque celestial"
 }
];

// grupos de planetas
const grupos = {
    "A": {nome: "Planetas Anões (Plutão)", descricao: "Você é misterioso(a) e intenso(a), com uma essência única e profunda."},
    "B": {nome: "Gigantes Gasosos (Júpiter e Saturno)", descricao: "Você é sofisticado(a) e elegante, transmite presença e confiança."},
    "C": {nome: "Planetas Rochosos (Vênus, Terra e Marte)", descricao: "Você é natural e autêntico(a), equilibrado(a) e conectado(a) à essência da vida."},
    "D": {nome: "Gigantes Gelados (Urano e Netuno)", descricao: "Você é livre, sonhador(a) e tranquilo(a), com um toque de leveza e mistério."}
};

// contador das respostas
let contagem = {A:0, B:0, C:0, D:0};

// laço de perguntas
for (let i = 0; i < perguntas.length; i++) {
    const respostaUsuario = prompt(perguntas[i].pergunta);
    if (respostaUsuario) {
        const letra = respostaUsuario.toUpperCase();
        if (contagem[letra] !== undefined) {
            contagem[letra]++;
        }
    }
}

// encontra o grupo mais escolhido
let maisEscolhido = "A";
for (let letra in contagem) {
    if (contagem[letra] > contagem[maisEscolhido]) {
        maisEscolhido = letra;
    }
}

// mostra o resultado final
const grupo = grupos[maisEscolhido];
document.getElementById("msg").innerHTML = (`Seu grupo planetário é: <b>${grupo.nome}</b><br>${grupo.descricao}`);
