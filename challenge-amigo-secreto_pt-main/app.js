let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

  if (document.getElementById("resultado").childElementCount > 0) {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
  }

  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
    input.value = "";
    input.focus();
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = "";
  input.focus();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  const frase = amigos.join(", ");
  const li = document.createElement("li");
  li.textContent = `Amigos: ${frase}`;
  lista.appendChild(li);
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indiceSorteado];

  const li = document.createElement("li");
  li.textContent = `Amigo secreto sorteado: ${nomeSorteado}`;
  resultado.appendChild(li);
}
