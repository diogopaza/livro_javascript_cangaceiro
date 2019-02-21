var campos =[
    document.getElementById("data"),
    document.getElementById("valor"),
    document.getElementById("quantidade")


]

var tbody =  document.getElementById("myTable")
   
document.getElementById("myForm").addEventListener('submit', function(){
    event.preventDefault() 
    console.log(campos[1].value)
    var tr = document.createElement('tr')
     campos.forEach(function(campo){
         
         td = document.createElement('td')
         td.textContent = campo.value
         tr.appendChild(td)
         
         
     })

        volume = campos[1].value * campos[2].value
        tdVolume = document.createElement('td')
        tdVolume.textContent = volume
        tr.appendChild(tdVolume)
        tbody.appendChild(tr)

        campos.forEach(function(campo){
            campo.value= ""
        })
        campos[0].focus()
    
})


