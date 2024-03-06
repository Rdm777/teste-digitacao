const paragrafos = [
    "Persistência e determinação são as chaves para alcançar seus objetivos. Mesmo quando os obstáculos parecem intransponíveis, lembre-se de que cada passo o aproxima do sucesso. A vida é como uma jornada de montanha. Cada passo que você dá, por menor que seja, é um passo em direção ao topo. Não importa o quão difícil seja a subida, lembre-se de que a vista do topo vale a pena. Mantenha a fé em si mesmo e continue avançando, mesmo quando a jornada se torna difícil.",

    "As vezes, você enfrenta subidas íngremes e desafios aparentemente impossíveis. Mas, assim como um alpinista, você pode superar qualquer pico. Cada desafio que você enfrenta é uma oportunidade para crescer e se fortalecer. Não importa o quão íngreme seja a subida, lembre-se de que você tem a força e a determinação para superá-la. Mantenha a fé em si mesmo e continue avançando, não importa o quão difícil seja a jornada.",

    "A gratidão é um poderoso combustível para a felicidade. Mesmo nos momentos difíceis, encontre algo pelo qual ser grato. Isso iluminará seu coração e sua mente. A gratidão pode transformar o comum em extraordinário. Pode transformar nossas refeições em banquetes, nossas casas em castelos e nossos dias comuns em agradecimentos. A gratidão pode transformar nossas rotinas em momentos de alegria e nossos problemas em oportunidades.",

    "A criatividade é a chave para desbloquear soluções inovadoras. Não tenha medo de pensar fora da caixa. Grandes ideias muitas vezes nascem da coragem de ser diferente. A criatividade é a capacidade de ver as coisas de uma nova maneira, de encontrar soluções para problemas antigos, de criar novas ideias, de inventar novos produtos, de imaginar novas possibilidades. A criatividade é a capacidade de sonhar grande e de fazer esses sonhos se tornarem realidade.",

    "O amor-próprio é fundamental. Cuide de si mesmo como cuidaria de um amigo querido. Seja gentil consigo mesmo e celebre suas vitórias, por menores que sejam. A resiliência é como um músculo. Quanto mais você a exercita, mais forte ela se torna. Quando enfrentar adversidades, lembre-se de que você é mais forte do que imagina. A autenticidade é a sua superpotência. Não tente ser outra pessoa seja a melhor versão de você mesmo. O mundo precisa da sua singularidade. A paciência é uma virtude.",

    "As vezes, o progresso é lento, mas cada pequeno passo conta. Confie no processo e mantenha o foco em seus objetivos. A amizade é um tesouro. Cultive relacionamentos genuínos e esteja lá para os outros. Compartilhe risadas, lágrimas e momentos preciosos. A simplicidade é elegante. Às vezes, as coisas mais simples trazem a maior alegria. Valorize os pequenos momentos e sorrisos do dia a dia. Persistência e determinação são as chaves para alcançar seus objetivos. Mesmo quando os obstáculos parecem intransponíveis, lembre-se de que cada passo o aproxima do sucesso.",

    "A autenticidade é a sua superpotência. Não tente ser outra pessoa seja a melhor versão de você mesmo. O mundo precisa da sua singularidade. A paciência é uma virtude.",

    "A simplicidade é elegante. Às vezes, as coisas mais simples trazem a maior alegria. Valorize os pequenos momentos e sorrisos do dia a dia. Persistência e determinação.",
    "são as chaves para alcançar seus objetivos. Mesmo quando os obstáculos parecem intransponíveis, lembre-se de que cada passo o aproxima do sucesso.",
    
    "A criatividade é a chave para desbloquear soluções inovadoras. Não tenha medo de pensar fora da caixa. Grandes ideias muitas vezes nascem da coragem de ser diferente. O amor-próprio é fundamental. Cuide de si mesmo como cuidaria de um amigo querido. Seja gentil consigo mesmo e celebre suas vitórias, por menores que sejam.",

    "A resiliência é como um músculo. Quanto mais você a exercita, mais forte ela se torna. Quando enfrentar adversidades, lembre-se de que você é mais forte do que imagina. A autenticidade é a sua superpotência. Não tente ser outra pessoa seja a melhor versão de você mesmo. O mundo precisa da sua singularidade.",
  ];

const addTexto = document.querySelector("#adicionarTexto"),
inpField = document.querySelector("#input-field"),
addErros = document.querySelector(".erros span");
contTempo = document.querySelector(".tempo span")

let tempo, tempoMax = 60
tempoRest = tempoMax
let campoInicial = erros = digitando = 0;

function sortearParagafo(){
    let sortearText = Math.floor(Math.random() * paragrafos.length);

    paragrafos[sortearText].split("").forEach(span =>{
      let tagSpan = `<span>${span}</span>`;
      addTexto.innerHTML += tagSpan;
    })
    document.addEventListener("keydown", () => inpField.focus());
    addTexto.addEventListener("click", () => inpField.focus());
}

function initTyping(){

  const caracteres = addTexto.querySelectorAll("span");
  let caractDigitado = inpField.value.split("")[campoInicial];

  if(!digitando){
    tempo = setInterval(temporizador, 1000);
    digitando = true;
  }

  if(caractDigitado == null){
    campoInicial--;
    erros--;
    if (erros < 0){
      erros = 0;
    }
    caracteres[campoInicial].classList.remove("incorreto", "correto");

  }else{
    if(caracteres[campoInicial].innerText === caractDigitado){
      caracteres[campoInicial].classList.add("correto");

    }else{
      erros++;
      caracteres[campoInicial].classList.add("incorreto");

    }campoInicial++;

}
  caracteres.forEach(span => span.classList.remove("ativado"));
  caracteres[campoInicial].classList.add("ativado");

  addErros.innerText = erros
}

function temporizador(){
  if (tempoRest > 0){
    tempoRest--;
    contTempo.innerText = tempoRest
  }else{
    clearInterval(tempo);
    inpField.disabled = true;
  }
}

sortearParagafo();
inpField.addEventListener("input", initTyping);