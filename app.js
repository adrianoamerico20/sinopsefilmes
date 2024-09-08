// function pesquisar() {
//  // 1. Obtém a referência ao elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável chamada "section".
//  let section = document.getElementById 
//  ("resultados-pesquisa");
//  // 2. Imprime no console a palavra "section" para fins de depuração (pode ser removido em produção).
//  let campoPesquisa = document.getElementById 
//  ("campo-pesquisa").value

//  console.log("campo-pesquisa");
  
//  // 3. Inicializa uma string vazia para armazenar os resultados da pesquisa.
//  let resultados = "";
  
//  // 4. Inicia um loop para iterar sobre cada elemento "dado" no array "dados".
//  for (let dado of dados) {
//    // 5. Concatena uma nova div com as informações do dado atual à string "resultados".
//    //   - Cria uma div com a classe "item-resultado".
//    //   - Insere o título do dado dentro de um elemento h2.
//    //   - Insere a descrição do dado dentro de um parágrafo com a classe "descricao-meta".
//    //   - Cria um link para mais informações com o atributo href apontando para o link do dado.
//    resultados += `
//                    <div class="item-resultado">
//                     <h2>${dado.titulo}</h2>
//                     <p class="descricao-meta">${dado.descricao}</p>
//                     <a href=${dado.link} target="_blank">Mais Informações</a>
//                    </div>
//                  ` ;
//   }
  
//    // 6. Atribui o conteúdo da string "resultados" ao HTML interno do elemento "section".
//    section.innerHTML = resultados;
// }


function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (campoPesquisa == "") {
      section.innerHTML = "<p>Digite o Nome do Filme</p>"
      return      
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log("campoPesquisa");
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)  || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
           <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
        </div >
`;
      }
    } 
    
    if (!resultados) {resultados = "<p>Pesquisa não Encontrada</p>"}
    section.innerHTML = resultados;
}

