// var minhaPromise = function(){
//     return new Promise( function( resolve, reject ){

//         var xhr = new XMLHttpRequest();

//         // Abrir requisição
//         // método e url
//         xhr.open("GET", "https://api.github.com/users/olivialorena/repos");
//         xhr.send(null); //parâmetros

//         xhr.onreadystatechange = function(){
//             if(xhr.readyState === 4){
//                 if( xhr.status === 200 ){
//                     resolve( JSON.parse(xhr.responseText) );
//                 }else{
//                     reject('Erro na requisição');
//                 }                
//             }
//         }

//     } );
// }

// minhaPromise()
//     .then( function(response){
//         console.log( response )
//     } )
//     .catch( function(error){
//         console.log( error )
//     } );




function checaIdade(idade) {
    return new Promise( function( resolve, reject ){
        setTimeout(function(){
            if(idade > 17){
                resolve("Maior que 18");
            }else{
                reject("Menor que 18");
            }
        },2000);
    } );
}
checaIdade(20)
    .then(function(response) {
        // console.log(response);
    })
    .catch(function(response) {
        // console.log(response);
    });
       
