const booksByCategory = [
   {
       category: "Riqueza",
       books: [
           {
               title: "Os segredos da mente milionária",
               author: "T. Harv Eker",
           },
           {
               title: "O homem mais rico da Babilônia",
               author: "George S. Clason",
           },
           {
               title: "Pai rico, pai pobre",
               author: "Robert T. Kiyosaki e Sharon L. Lechter",
           },
       ],
   },
   {
       category: "Inteligência Emocional",
       books: [
           {
               title: "Você é Insubstituível",
               author: "Augusto Cury",
           },
           {
               title: "Ansiedade – Como enfrentar o mal do século",
               author: "Augusto Cury",
           },
           {
               title: "Os 7 hábitos das pessoas altamente eficazes",
               author: "Stephen R. Covey",
           }
       ]
   }
];

function contarCategoriasELivros(booksByCategory) {
   const numCategorias = booksByCategory.length;

   console.log(`Total de categorias: ${numCategorias}`);

   booksByCategory.forEach(category => {
       const numLivros = category.books.length;
       console.log(`Categoria: ${category.category} - Número de livros: ${numLivros}`);
   });
}

function contarAutores(booksByCategory) {
   const autores = new Set();

   booksByCategory.forEach(category => {
       category.books.forEach(book => {
           autores.add(book.author);
       });
   });

   const numAutores = autores.size;
   console.log(`Número de autores: ${numAutores}`);
}

function mostrarLivrosPorAutor(booksByCategory, autor) {
   booksByCategory.forEach(category => {
       category.books.forEach(book => {
           if (book.author === autor) {
               console.log(`Livro: ${book.title} - Categoria: ${category.category}`);
           }
       });
   });
}

function livrosPorAutor(booksByCategory, autor) {
   const livros = [];

   booksByCategory.forEach(category => {
       category.books.forEach(book => {
           if (book.author === autor) {
               livros.push({
                   livro: book.title,
                   categoria: category.category
               });
           }
       });
   });

   return livros;
}


console.log('--- Contagem de categorias e livros ---');
contarCategoriasELivros(booksByCategory);

console.log('\n--- Contagem de autores ---');
contarAutores(booksByCategory);

console.log('\n--- Livros do autor Augusto Cury ---');
mostrarLivrosPorAutor(booksByCategory, 'Augusto Cury');

console.log('\n--- Buscar livros por autor ---');
const autorBuscado = 'Augusto Cury';
const livrosDoAutor = livrosPorAutor(booksByCategory, autorBuscado);
console.log(`Livros do autor ${autorBuscado}:`);
livrosDoAutor.forEach(livro => {
   console.log(`Livro: ${livro.livro} - Categoria: ${livro.categoria}`);
});