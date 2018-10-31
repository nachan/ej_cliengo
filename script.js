/*Ej 1 */

var cadena = "Hola";
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}

console.log( cadena.reverse() ); 


/*Ej 2 */
var impirmirTxt =["#","##","###","####","#####"];
var text = "";
function imprimir() {
    

    for (var i = 0; i < impirmirTxt.length; i++) { 
       
        console.log( impirmirTxt[i] );

    }
   
}
imprimir()

/*Ej 3*/

const candidatesGlobal = [
    { name: 'Jorge',
        surname: 'Ocampos',
        age: 25,
        mainSkill: 'Backend',
        loves: 'Play Framework'
    },
    { name: 'Laureano',
        surname: 'Serrano',
        age: 28,
        mainSkill: 'Frontend',
        loves: 'CSS'
    },
    { name: 'Marina',
        surname: 'Perez Ramirez',
        age: 30,
        mainSkill: 'Product Manager',
        loves: 'Silence'
    },
    { name: 'Kristopher',
        surname: 'Perdomo Chung',
        age: 23,
        mainSkill: 'Fullstack',
        loves: 'Cold'
    },
    { name: 'Ramiro',
        surname: 'Savoie',
        age: 32,
        mainSkill: 'Python',
        loves: 'Meetings'
    }]

    let candidatesResume = [
{ demographics: name + surname + 'is' + age,
	personal: 'His main skill is' + mainSkill + 'and likes' loves'
},
// Ejemplo
{ demographics: 'Jorge Ocampos is 25',
	personal: 'His main skill is Backend and lives Play Framework'
}]

function createCandidateResumen (name,surname,age,mainSkill,loves){
    
    candidatesResume.demographics = name + surname + 'is' + age;
    candidatesResume.personal = 'His main skill is' + mainSkill + 'and likes'+loves;
    
}
/*Ej 4*/


/*Ej 5*/

var array1 = [5, 12, 8, 130, 10]; 
var found = array1.find(function(element) { 
return element > 10;
}); 
console.log(found);
//loguea: 12


/*EJ 6*/

let    e = (a,x) => d => x(a, d), 
            f = e(10, (a , d) => a * d)
    console.log(f(2)) 
    
    //loguea: 20


/*EJ 7*/

let    operate = (m1,operation) => m2 => operation(m1, m2),
        multX10 = operate(10, (multiplicando1 , multiplicando2) => multiplicando1 * multiplicando2)
            console.log(multX10(2))

         //loguea :20    







