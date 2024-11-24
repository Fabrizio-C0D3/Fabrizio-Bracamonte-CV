        const botonInicial = document.getElementById('Entrar'); //Selecciona un elemento del html y lo almacena en la variable de botonInicial
        const contenido = document.querySelector('.contenido'); //Selecciona un elemento del html y lo almacena en la variable de contenido
        const botonContainer = document.querySelector('.boton'); //Selecciona un elemento del html y lo almacena en la variable de botonContainer


            botonInicial.addEventListener('click', () => { //La accion del boton despues del click
                botonContainer.style.transition = 'opacity 0.4s'; // Le coloca a la variable botonContainer  una transición
                botonContainer.style.opacity = 0; // Se reduce la opacidad del contenedor a 0, para que empiece a desaparecer
                // Después de 400 ms (tiempo de la transición), se oculta el contenedor del botón
                setTimeout(() => {
                    botonContainer.style.display = 'none'; 
                }, 400);
                 // Se muestra el contenido y se establece su opacidad a 0 (invisible inicialmente)
                 // Se cambia la opacidad del contenido a 1, con una transición de 0.4 segundos para hacerlo visible
                contenido.style.display = 'block';
                contenido.style.opacity = 0;
                contenido.style.opacity = 1;
                contenido.style.transition = '0.4s';

            });
            // Se aplica un pequeño retraso de 50 ms antes de hacer que el contenido se muestre
            setTimeout(() => {
                // Aplica una transición de opacidad de 0.4 segundos al contenido
                // Se asegura de que el contenido tenga opacidad 1, haciéndolo visible
                // Cambia la propiedad display del contenido a 'flex' para su disposición
                contenido.style.transition = 'opacity 0.4s'; 
                contenido.style.opacity = 1;
                contenido.style.display = 'flex' 
            }, 50); 

            // Se añade un evento al 'header', que se activa cuando el ratón pasa sobre él
        
            document.querySelector('header').addEventListener('mouseenter', () => {

                // Al pasar el ratón sobre el 'header', se establece la opacidad de 'main' a 1 (haciéndolo visible)
                const main = document.querySelector('main');
                main.style.opacity = '1';
                
            });

            // Se ejecuta la función 'quitarBoton' cuando el documento se carga completamente

            document.addEventListener('DOMContentLoaded', quitarBoton);
        
            