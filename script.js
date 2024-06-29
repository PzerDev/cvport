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
        if (cadena === '#todo') {
            enlaces.forEach(function(el) {
                el.style.display = 'block';
            })
        } else {
            for (const enlace of enlaces) {
                const href = enlace.getAttribute('href');
                    if (!sitio.test(href)) {
                        enlace.style.display = 'none';
                    }
                    if (sitio.test(href)) {
                        enlace.style.display = 'block';
                    } 
                }
    
            }
            
        if (document.querySelector('.selector-menu')){
            document.querySelector('.selector-menu').classList.replace('selector-menu', 'no-selector-menu');
        };
        document.querySelector(cadena).classList.remove('no-selector-menu');
        document.querySelector(cadena).classList.add('selector-menu');
    },
    

    coursera() {
        validarEnlace.validador(regex.regexCoursera, '#coursera');
    },

    codecademy() {
        validarEnlace.validador(regex.regexCodecademy, '#codecademy');
    },

    sololearn() {
        validarEnlace.validador(regex.regexSololearn, '#sololearn');
    },

    todo() {
        validarEnlace.validador(null, '#todo');
    }

}


const coursera = document.querySelector('#coursera');
coursera.addEventListener('click', validarEnlace.coursera);


const codecademy = document.querySelector('#codecademy');
codecademy.addEventListener('click', validarEnlace.codecademy);


const sololearn = document.querySelector('#sololearn');
sololearn.addEventListener('click', validarEnlace.sololearn);

const todosLosCursos = document.querySelector('#todo');
todosLosCursos.addEventListener('click', validarEnlace.todo);
