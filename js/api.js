let url='https://covid-19-tracking.p.rapidapi.com/v1'

const covidData =async()=>{


    let data = await fetch(url,
        {
            method:'GET',
            headers:{
                "x-rapidapi-key": "6c36bb82a3mshd62c837828cf306p11aaf1jsn049d4785d71f",
	            "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
	            "useQueryString": true
            }
        });

    

     let info = await data.json();

    
     for (let i = 0; i < info.length; i++) {
       
        crearElementos(i);
                
        if (i==223) {
            for (let i = 0; i < info.length; i++) {
                crearTabla(info[i],i);
            }
        }
        
         
     } 
}


const crearElementos=(i)=>{

    
    let tbody = document.getElementById('tbody');//obtenemos el elemento que va a contener todas las filas de la tabla

    //creamos un elemento "tr" o table row
    let tr = document.createElement('tr');
    tr.id= `tr${i}`; //asignamos el id "tr" para poder aniadir mas elementos dentro de este

   tbody.appendChild(tr)//agregamos el tr al tbody


let trContainer = document.getElementById(`${tr.id}`); //obtenemos el tr que es el contenedor de cada uno de los registros de la fila let td = document.createElement('td'); //creamos una variable que es un elemento a insertar dentro del trContainer

let td_Pais = document.createElement('td')
    td_Pais.id = `pais${i}`;

let td_Casos_Activos = document.createElement('td')
    td_Casos_Activos.id= `casosActivos${i}`;

let td_Actualizado = document.createElement('td')
    td_Actualizado.id=`actualizado${i}`;

let td_Nuevos_Casos = document.createElement('td')
    td_Nuevos_Casos.id=`nuevosCasos${i}`;

let td_Nuevas_muertes = document.createElement('td')
    td_Nuevas_muertes.id= `nuevasMuertes${i}`;

let td_Total_Casos = document.createElement('td')
    td_Total_Casos.id =`totalCasos${i}`;

let td_Total_Muertes = document.createElement('td')
    td_Total_Muertes.id=`totalMuertes${i}`;

let td_Recuperados = document.createElement('td')
    td_Recuperados.id=`recuperados${i}`;

trContainer.appendChild(td_Pais)
trContainer.appendChild(td_Casos_Activos)
trContainer.appendChild(td_Actualizado)    
trContainer.appendChild(td_Nuevos_Casos)
trContainer.appendChild(td_Nuevas_muertes)
trContainer.appendChild(td_Total_Casos)
trContainer.appendChild(td_Total_Muertes)
trContainer.appendChild(td_Recuperados)
   
if (i==223) {
    console.log('elementos creados')
}

}


const crearTabla = (info,i)=>{

//asignamos los datos a las variables 
let Pais = document.createTextNode(info['Country_text'])
let Casos_Activos = document.createTextNode(info['Active Cases_text'])
let Actualizado = document.createTextNode(info['Last Update'])
let Nuevos_Casos = document.createTextNode(info['New Cases_text'])
let Nuevas_muertes = document.createTextNode(info['New Deaths_text'])
let Total_Casos = document.createTextNode(info['Total Cases_text'])
let Total_Muertes = document.createTextNode(info['Total Deaths_text'])
let Recuperados = document.createTextNode(info['Total Recovered_text'])

let td_Pais= document.getElementById(`pais${i}`)
let td_Casos_Activos= document.getElementById(`casosActivos${i}`)
let td_Actualizado= document.getElementById(`actualizado${i}`)
let td_Nuevos_Casos= document.getElementById(`nuevosCasos${i}`)
let td_Nuevas_muertes= document.getElementById(`nuevasMuertes${i}`)
let td_Total_Casos= document.getElementById(`totalCasos${i}`)
let td_Total_Muertes= document.getElementById(`totalMuertes${i}`)
let td_Recuperados= document.getElementById(`recuperados${i}`)


td_Pais.appendChild(Pais)
td_Casos_Activos.appendChild(Casos_Activos)
td_Actualizado.appendChild(Actualizado)
td_Nuevos_Casos.appendChild(Nuevos_Casos)
td_Nuevas_muertes.appendChild(Nuevas_muertes)
td_Total_Casos.appendChild(Total_Casos)
td_Total_Muertes.appendChild(Total_Muertes)
td_Recuperados.appendChild(Recuperados)


if (i==223) {
    console.log('Datos insertados')
}

}