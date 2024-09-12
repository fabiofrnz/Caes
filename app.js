ction pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar uma raça de cachorro.</p>";
      return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
      let titulo = dado.titulo.toLowerCase();
      let descricao = dado.descricao.toLowerCase();
      let tags = dado.tags.toLowerCase();

      // Verifica se o termo pesquisado está no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // Cria um novo elemento de resultado
          resultados += `
              <div class="item-resultado">
                  <h2><a href="#" target="_blank">${highlight(dado.titulo, campoPesquisa)}</a></h2>
                  <p class="descricao-meta">${highlight(dado.descricao, campoPesquisa)}</p>
                  <p class="descricao-meta">${dado.origem}</p>
                  <p class="descricao-meta">${dado.porte}</p>
                  <p class="descricao-meta">${dado.temperamento}</p>
                  <p class="descricao-meta">${dado.cuidados}</p>
                  <p class="descricao-meta">${dado.expectativaDeVida}</p>
                  <a href="${dado.link}" target="_blank">Mais informações</a>
              </div>
          `;
      }
  }

  // Função para destacar as palavras encontradas
  function highlight(text, search) {
      return text.replace(new RegExp(search, 'gi'), `<mark>${search}</mark>`);
  }

  // Caso nenhum resultado tenha sido encontrado
  if (!resultados) {
      resultados = "<p>Nada foi encontrado.</p>";
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}
