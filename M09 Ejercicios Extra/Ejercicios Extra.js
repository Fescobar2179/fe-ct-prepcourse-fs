/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let clave = Object.keys(objeto);
   let valor = Object.values(objeto);
   let elemt = [];
   for (let i = 0; i < clave.length; i++) {
      elemt.push([clave[i], valor[i]]);
   }   
   return elemt;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let frecuencia = {};
   for (let i = 0; i < string.length; i++) {
      if (frecuencia[string[i]]) {
         frecuencia[string[i]] ++;
      }
      else frecuencia[string[i]] = 1;
   }
   let arrayPares = Object.entries(frecuencia); //convierte el objeto a array de pares clave valor   
   arrayPares.sort((a, b) => a[0].localeCompare(b[0]));  //Ordena el array alfabeticamente por clave
   let resultado = Object.fromEntries(arrayPares); //Crea un nuevo objeto ordenado.
   return resultado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = '';
   let minusculas = '';
   for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         mayusculas += string[i];
      }
      else minusculas += string[i];
   }
   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let value = frase.split(' ');
   for (let i = 0; i < value.length; i++) {
      value[i] = value[i].split('').reverse('').join('');
   }
   return value.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let value = parseInt(numero.toString().split('').reverse().join(''));
   return (numero === value)
   ? 'Es capicua'
   : 'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = string.split('');
   let value = array.filter((acc) => {
      return (acc !== 'a' && acc !== 'b' && acc !== 'c');
   });
   return value.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
   });
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let value = [];
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if (array1[i] !== array2[j]) continue;
         else value.push(array1[i]);
      }
   }
   return value;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
