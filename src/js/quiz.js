alert("Você entende o que está cheirando?\nVamos entender melhor os perfumes com esse quiz!")

const perguntas= [ 
    { 
        pergunta:"O que é uma nota de coração em um perfume?\n A) O aroma que aparece primeiro\n B) O aroma que aparece após alguns minutos\n C) A base fixa\n D) O cheiro da embalagem\n", 
        resposta:"B" 
    }, 
    { 
        pergunta:"O que são “notas de topo” em um perfume?\n A) As que duram mais tempo\n B) As que aparecem primeiro\n C) As que vêm do fundo do frasco\n D) As que não têm cheiro\n", 
        resposta:"B" 
    }, 
    { 
        pergunta:"Qual destes ingredientes é mais usado para dar um toque cítrico a um perfume?\n A) Baunilha\n B) Âmbar\n C) Bergamota\n D) As que não têm cheiro\n", 
        resposta:"C" 
    }, 
    {
        pergunta:"O que significa quando um perfume é “Eau de Parfum”?\n A) Que é mais leve que uma colônia\n B) Que é feito com água minera\n C) Que deve ser usado apenas à noite\n D) Que tem maior concentração de essência\n",
        resposta:"D"
    },
    {
        pergunta:"Qual destes aromas é considerado uma “nota de base”?\n A) Almíscar\n B) Jasmim\n C) Lavanda\n D) Limão\n",
        resposta:"A"
    }

];

//declarando a variavel de acertos que recebe 0 
let acertos = 0;

// criar um laço de repetição para verificar as perguntas 
for(let i=0; i<perguntas.length;i++) { 
    const respostaUsuario=prompt(perguntas[i].pergunta);

    //verifica se o que o usuario digitou for minusculo e se não for converte para ser 
    if(respostaUsuario.toLowerCase() === perguntas[i].resposta.toLocaleLowerCase()){ 
        acertos++; 
    } 
}

document.getElementById("msg").innerHTML=(`Você acertou ${acertos} de ${perguntas.length}! Bora conhecer mais fragrâncias? Veja nossos perfumes mais populares!`);

