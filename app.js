function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma sem nada
if (!campoPesquisa) {
  section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar uma raça de cachorro.</p>"
  return
}

campoPesquisa = campoPesquisa.toLowerCase()

// inicializa uma string vazia para armazenar os resultados
        let resultados = "";
        let titulo = "";
        let descricao = "";
        let tags = "";

        // Itera sobre cada dado da lista de dados
      for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
       <h2>
       <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
       <p class="descricao-meta">${dado.descricao}
       </p>
       <p class="descricao-meta">${dado.origem}
       </p>
       <p class="descricao-meta">${dado.porte}
       </p>
       <p class="descricao-meta">${dado.temperamento}
       </p>
       <p class="descricao-meta">${dado.cuidados}
       </p>
       <p class="descricao-meta">${dado.expectativaDeVida}
       </p>
       <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
      }
      
     
    } 
    if (!resultados) {
resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados
}