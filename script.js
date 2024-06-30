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




// código js para implementar modo oscuro

const toggleModeButton = document.getElementById('toggleModeButton');
toggleModeButton.addEventListener('click', toggleMode);

let currentMode = 'light';
function toggleMode() {
//   const currentMode = localStorage.getItem('mode') || 'light';
//   console.log(localStorage.getItem('mode'));
  currentMode = currentMode === 'light' ? 'dark' : 'light';

//   localStorage.setItem('mode', newMode);
  updateStyles(currentMode);
}

function updateStyles(newMode) {
  if (newMode === 'light') {
    document.documentElement.style.setProperty('--color-fondo', '#fff');
    document.documentElement.style.setProperty('--color-primario', '#404040');
    document.documentElement.style.setProperty('--color-secundario', '#f0f0f0');
    document.documentElement.style.setProperty('--color-relevante', '#d9d9d9');
    document.documentElement.style.setProperty('--color-texto-selector-menu', '#fff');
    document.documentElement.style.setProperty('--color-texto-experiencia', '#cb5709');
    document.documentElement.style.setProperty('--color-texto', '#000');
    document.documentElement.style.setProperty('--color-texto-fondo', '#fff');
    document.documentElement.classList.remove('dark-mode');
    document.querySelector('#toggleModeButton').innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
    
  } else {
    document.documentElement.style.setProperty('--color-fondo', '#1d1d1d');
    document.documentElement.style.setProperty('--color-primario', '#f0f0f0');
    document.documentElement.style.setProperty('--color-secundario', '#505050');
    document.documentElement.style.setProperty('--color-relevante', '#404040');
    document.documentElement.style.setProperty('--color-texto-selector-menu', '#1d1d1d');
    document.documentElement.style.setProperty('--color-texto-experiencia', '#ff9a0a');
    document.documentElement.style.setProperty('--color-texto', '#fff');
    document.documentElement.style.setProperty('--color-texto-fondo', '#1d1d1d');
    document.documentElement.classList.add('dark-mode');
    document.querySelector('#toggleModeButton').innerHTML = '<span class="material-symbols-outlined">light_mode</span>';   
  }
}

