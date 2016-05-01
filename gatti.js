
// crea il gatto
var gatto = function (nome){
    // con this intendo il gatto che sto creando.
    if (nome == undefined) {
        this.name = 'renna';
    } else { 
        this.name = nome;
    }

} 
//usiamo la funzione gatto per crearne uno novo (new)
var renna = new gatto();
var sgorbio = new gatto();
console.log(renna.name);
sgorbio.name = 'sgorbio';
console.log(sgorbio.name);

renna.pelo = 'bianco';

console.log(renna.pelo);

sgorbio.pelo = 'negro';

console.log(sgorbio.pelo);

renna.miao = function (){
    console.log('MIAOO');
};

renna.miao();

var puzzola = new gatto('puzzola');
console.log(puzzola.name);