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
var arry = Object.values(person);
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

            books = [
                book01 = {nome:'O Pode da Ação', pages: 420},
                book02 = {nome:'Java Como Programar', pages:600},
                book03 = {nome:'O Poder do Habito', pages: 350}
            ];

/*
Mostre no console todos os livros.
*/
for(var i = 0; i < books.length; i++){
    console.log( '\nLista de livros:', books[i] );
}


console.log( '\nLivro que está sendo removido:', books.pop() );
/*
Remova o último livro, e mostre-o no console.
*/


console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books[0], '\n', books[1]);


/*
Converta os objetos que ficaram em `books` para strings.
*/

console.log( '\nLivros em formato string:' + JSON.stringify(book01) + '\n' + JSON.stringify(book02));

/*
Mostre os livros nesse formato no console:
*/

var book011 = JSON.stringify(book01);
var book022 =  JSON.stringify(book02);


/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' + JSON.parse(book011) + JSON.parse(book022) );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for(var i in book01){
    console.log(i + " : " + book01[i]);  
}

for(var prop in book02){
    console.log(prop + " : " + book01[prop]);
    
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