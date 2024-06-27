const aperExperiencia = document.querySelectorAll('.experiencia-profesional');


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

const regex = {
    regexCodecademy: /https:\/\/www\.codecademy\.com\//,
    regexCoursera: /https:\/\/www\.coursera\.org\//,
    regexSololearn: /https:\/\/www\.sololearn\.com\//
}


let enlaces = document.querySelectorAll('.container-complementaria a[href]');

const validarEnlace = {

    validador(sitio, cadena) {
        for (const enlace of enlaces) {
            const href = enlace.getAttribute('href');
                if (!sitio.test(href)) {
                    enlace.style.display = 'none';
                }
                if (sitio.test(href)) {
                    enlace.style.display = 'block';
                } 
            }
    
        document.querySelectorAll('#menu-complementaria ul li').forEach(function(el) {
            el.style = 'color: #000; font-weight: normal;';
        });
        document.querySelector(cadena).style = 'color: #cb5709; font-weight: bold;';
    },
    

    coursera() {
        validarEnlace.validador(regex.regexCoursera, '#coursera');
    },

    codecademy() {
        validarEnlace.validador(regex.regexCodecademy, '#codecademy');
    },

    sololearn() {
        validarEnlace.validador(regex.regexSololearn, '#sololearn');
    }

}


const coursera = document.querySelector('#coursera');
coursera.addEventListener('click', validarEnlace.coursera);


const codecademy = document.querySelector('#codecademy');
codecademy.addEventListener('click', validarEnlace.codecademy);


const sololearn = document.querySelector('#sololearn');
sololearn.addEventListener('click', validarEnlace.sololearn);
