(function(){


/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {name: 'Gleilton', Lastname: 'Oliveira', age: 32}


/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
var arry = Object.keys(person);
console.log( 'Propriedades de "person":'+ arry);

/*
Crie um array vazio chamado `books`.
*/
var books = [];
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

           books.push({name:'O poder da ação', pages:400});
           books.push({name:'JavaScript como programar', pages:500});
           books.push({name:'O poder do Habíto', pages: 420});



/*
Mostre no console todos os livros.
*/
console.log(books);

console.log( '\nLivro que está sendo removido:', books.pop() );
/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nAgora sobraram somente os livros:');
/*
Mostre no console os livros restantes.
*/
console.log(books);


/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.stringify( books );
console.log( '\nLivros em formato string:' + books);
/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
//
books = JSON.parse(books)
console.log( '\nAgora os livros são objetos novamente:'+ books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for(var i = 0; i< books.length; i++){
    for(var prop in books[i]){
        console.log(prop + ' : ' + books[i][prop]);
    }
    
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
myName = ['G','L','E','I','L','T','O','N'];
console.log( '\nMeu nome é:' + myName.join('') );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/


console.log( '\nMeu nome invertido é:' + myName.reverse().join(''));

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' + myName.sort().join('') );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?

})();