const aperExperiencia = document.querySelectorAll('.experiencia-profesional');


console.log(aperExperiencia[1])
for (let i = 1; i < aperExperiencia.length; i++) {
    aperExperiencia[i].addEventListener('click', function() {
        
        const listaTrabajo = document.querySelectorAll('.experiencia-profesional ul')[i];
                
        if (listaTrabajo.style.display === 'block'){
            listaTrabajo.style.display = 'none';
        } else {

            listaTrabajo.style.display = 'block';
        }
        




    })
}
