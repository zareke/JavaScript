function CalcularEdad(nombre, datesita, edadCont) {
    const hoy = new Date();
    const fecha = new Date(datesita.value);
    const edad = hoy.getFullYear() - fecha.getFullYear() -
        (hoy.getMonth() < fecha.getMonth() ||
            (hoy.getMonth() === fecha.getMonth() && hoy.getDate() < fecha.getDate()));

    edadCont.value = "Hola " + nombre.value + ", tienes " + edad + " años!"

}

function ComparandoDatosYTipos(prompt,datosTexto) {
    switch (prompt) {
        case 1:
            if (10 == '10') {
                datosTexto.value = "Sip!"
            }
            break;
        case 2:
            if (10 !== '10') {
                datosTexto.value = "Nop!"
            }
            break;
        case 3:
            datosTexto.value = "== compara solo el valor en sí, mientras que === compara el tipo de variable también"
            break;
        case 4:
            datosTexto.value = typeof (10.6)
            break;
        case 5:
            if (true == 1) {
                datosTexto.value = "Sip! La conclucion que podemos sacar de esto es que JavaScript esta comparando el valor binario de true, que es 1. False seria 0. Si ponemos === en vez de == la comparacion no resultaria verdadera"
            }
            break;
    }

}


function TirandoFruta(camino, frutaText) {
    const frutas = ["Manzana", "Banana", "Pera", "Uva", "Piña", "Frutilla", "Kiwi", "Sandía", "Naranja", "Pomelo"]
    if (camino == 1) {
        frutaText.value = "------------------------------"
        for (const fruta of frutas) {
            frutaText.value += "\n" + fruta
        }
        frutaText.value += "\n" + "------------------------------"
    } else {
        const input = prompt("Que fruta quieres?")
        const fEcnontrada = frutas.find(f => f == input)
        if (fEcnontrada !== undefined) {

            frutaText.value = "Sí, tenemos " + input + "!"
        } else {

            frutaText.value = "No, no tenemos "+ input + "!"
        }
    }



}

const Ciudades = [
    {
        nombre: "CABA",
        fechaFundacion: "1536/06/09",
        poblacion: 3120612,
        extension: 203
    },
    {
        nombre: "Salta",
        fechaFundacion: "1515/07/09",
        poblacion: 2325654,
        extension: 124
    },
    {
        nombre: "Rosario",
        fechaFundacion: "1420/06/09",
        poblacion: 2642359,
        extension: 500
    },
    {
        nombre: "Corrientes",
        fechaFundacion: "2000/06/09",
        poblacion: 7849561,
        extension: 999
    },
    {
        nombre: "Santa Fe",
        fechaFundacion: "2023/06/09",
        poblacion: 3254619,
        extension: 102
    },
]
function YoObjeto(camino, yoText) {
    yoText.value = ""
    if (camino == 1) {
        for (const ciudad of Ciudades) {
            yoText.value += ciudad.nombre + "\n"
        }
    } else {
        
        const input = prompt("De que ciudad quiere saber los datos?")
        const ciudad = Ciudades.find(c => c.nombre == input)
        if (ciudad === undefined) {
            yoText.value = "Esa ciudad no esta en la lista :/"
        }
        else {
            const keyValue = (input) => Object.entries(input).forEach(([key, value]) => {
                yoText.value += key + ":" + value+ "\n"
            })
            keyValue(ciudad)

        }
    }
}

function DobleDeElementos(numeros, dobleText) {
    const numerosPorSeparado = numeros.value.split(/[ ,]+/)
    dobleText.value =""
    for (let i = 0; i < numerosPorSeparado.length; i++) {
        numerosPorSeparado[i] *= 2
        if (isNaN(numerosPorSeparado[i])) {
           dobleText.value += "No es un numero!, "
        } else {
           
            

            dobleText.value += numerosPorSeparado[i] += ", "
            }
        }
        dobleText.value = dobleText.value.substring(0,dobleText.value.length-2);
    }




function TrianguloDeAsteriscos(camino, triTexto) {
    let ast = "";
    let barras = "----"
    triTexto.value = ""
    if (camino == 1) {
        for (let i = 0; i < 5; i++) {
            ast += "*"
            triTexto.value += ast + "\n"
        }
    } else {
        ast = "*"
        triTexto.value = barras+ ast+ barras + "\n"
        for (let i = 1; i < 5; i++) {
            barras = barras.replace("-", '')
            ast += "**"
            triTexto.value += barras + ast + barras +"\n"
        }
    }
}


function NombresConA(ns, aText) {
    aText.value = ""
    const listaNombres = ns.value.split(/[ ,]+/)
    for (let i = 0; i < listaNombres.length; i++) {
        if (listaNombres[i][0].toLowerCase() == 'a') {
            aText.value += listaNombres[i] + ", "
        }


    }
    aText.value = aText.value.substring(0,aText.value.length-2)

}

function ReemplazarPalabras(cadena, palabra, ganadora, reemText) {
    reemText.value = cadena.value.replaceAll(palabra.value, ganadora.value)
}


function CortarTexto(cadena, cant, cortText) {
    cortText.value = cadena.value.slice(0, cant.value)
}


function Separador(cad,sepText) {
    sepText.value = cad.value.replaceAll(',', '-')
}



function Recaudar(cadenaObjetos, recText) {
    let Objetos = {}
    const listaObjetos = cadenaObjetos.value.split(/[ ,]+/)

    Objetos = eval('({' + cadenaObjetos.value + '})');
    const suma = Object.values(Objetos).reduce((ac, valor) => {
        return ac + valor;
    }, 0);
    recText.value = "$" + suma
}