document.addEventListener('DOMContentLoaded', function() {
    const pdfs = {
        Acordes: [
            { title: 'A Dios Demos Gloria', file: 'pdfs\Acordes\A Dios Demos Gloria.pdf' },
            { title: 'A Dios Sea La Gloria', file: 'pdfs\Acordes\A Dios Sea La Gloria.pdf' },
            { title: 'A Solas con Jesús', file: 'pdfs\Acordes\A Solas con Jesús.pdf' },
            { title: 'Al Cristo Vivo Sirvo', file: 'pdfs\Acordes\Al Cristo Vivo Sirvo.pdf' },
            { title: 'Al mundo paz- Hay libertad', file: 'pdfs\Acordes\Al mundo paz- Hay libertad.pdf' },
            { title: 'Al Mundo Paz', file: 'pdfs\Acordes\Al Mundo Paz.pdf' },
            { title: 'Al Tu Rostro Ver', file: 'pdfs\Acordes\Al Tu Rostro Ver.pdf' },
            { title: 'Alabad a Jehová', file: 'pdfs\Acordes\Alabad a Jehová.pdf' },
            { title: 'Alabad servidores de Jehová', file: 'pdfs\Acordes\Alabad servidores de Jehová.pdf' },
            { title: 'Alabanzas Al Rey', file: 'pdfs\Acordes\Alabanzas Al Rey.pdf' },
            { title: 'Alcancé Salvación', file: 'pdfs\Acordes\Alcancé Salvación.pdf' },
            { title: 'Alla en el pesebre', file: 'pdfs\Acordes\Alla en el pesebre.pdf' },
            { title: 'Amigo Hallé', file: 'pdfs\Acordes\Amigo Hallé.pdf' },
            { title: 'Amor tan Grande', file: 'pdfs\Acordes\Amor tan Grande.pdf' },
            { title: 'Angeles Cantando Están', file: 'pdfs\Acordes\Angeles Cantando Están.pdf' },
            { title: 'Ante el Trono Celesital', file: 'pdfs\Acordes\Ante el Trono Celesital.pdf' },
            { title: 'Aunque Gigantes Encuentre Allá', file: 'pdfs\Acordes\Aunque Gigantes Encuentre Allá.pdf' },
            { title: 'Bástate mi gracia I', file: 'pdfs\Acordes\Bástate mi gracia I.pdf' },
            { title: 'Bastate Mi Gracia II', file: 'pdfs\Acordes\Bastate Mi Gracia II.pdf' },
            { title: 'Bellas palabras de vida', file: 'pdfs\Acordes\Bellas palabras de vida.pdf' },
            { title: 'Bendecrié a Jehová', file: 'pdfs\Acordes\Bendecrié a Jehová.pdf' },
            { title: 'Bueno es alabarte Señor', file: 'pdfs\Acordes\Bueno es alabarte Señor.pdf' },
            { title: 'Busca primero el Reino de Dios', file: 'pdfs\Acordes\Busca primero el Reino de Dios.pdf' },
            { title: 'Cada Día con Cristo', file: 'pdfs\Acordes\Cada Día con Cristo.pdf' },
            { title: 'Cadena de Coros', file: 'pdfs\Acordes\Cadena de Coros.pdf' },
            { title: 'Cantad Alegres a Jehová', file: 'pdfs\Acordes\Cantad Alegres a Jehová.pdf' },
            { title: 'Canten Del Amor De Cristo', file: 'pdfs\Acordes\Canten Del Amor De Cristo.pdf' },
            { title: 'Castillo Fuerte es nuesto Dios', file: 'pdfs\Acordes\Castillo Fuerte es nuesto Dios.pdf' },
            { title: 'Ciudad de Dios', file: 'pdfs\Acordes\Ciudad de Dios.pdf' },
            { title: 'Cómo podré estar triste', file: 'pdfs\Acordes\Cómo podré estar triste.pdf' },
            { title: 'Comprado Con Sangre Por Cristo', file: 'pdfs\Acordes\Comprado Con Sangre Por Cristo.pdf' },
            { title: 'Con gran gozo y placer', file: 'pdfs\Acordes\Con gran gozo y placer.pdf' },
            { title: 'Contempla a Dios', file: 'pdfs\Acordes\Contempla a Dios.pdf' },
            { title: 'Cristo Está Conmigo', file: 'pdfs\Acordes\Cristo Está Conmigo.pdf' },
            { title: 'Cristo Nombre Glorioso', file: 'pdfs\Acordes\Cristo Nombre Glorioso.pdf' },
            { title: 'Cuan Grande es Dios', file: 'pdfs\Acordes\Cuan Grande es Dios.pdf' },
            { title: 'Cuán Grande es El', file: 'pdfs\Acordes\Cuán Grande es El.pdf' },
            { title: 'Cuando Allá Se Pase Lista', file: 'pdfs\Acordes\Cuando Allá Se Pase Lista.pdf' },
            { title: 'Cuando yo sentí el amor de Dios', file: 'pdfs\Acordes\Cuando yo sentí el amor de Dios.pdf' },
            { title: 'De Gloria en Gloria', file: 'pdfs\Acordes\De Gloria en Gloria.pdf' },
            { title: 'De Jesús El Nombre Guarda', file: 'pdfs\Acordes\De Jesús El Nombre Guarda.pdf' },
            { title: 'Día en Día', file: 'pdfs\Acordes\Día en Día.pdf' },
            { title: 'Digno Es El Cordero', file: 'pdfs\Acordes\Digno Es El Cordero.pdf' },
            { title: 'Digno es El Señor', file: 'pdfs\Acordes\Digno es El Señor.pdf' },
            { title: 'Dios mío eres tú', file: 'pdfs\Acordes\Dios mío eres tú.pdf' },
            { title: 'Dios Muestra Su Amor', file: 'pdfs\Acordes\Dios Muestra Su Amor.pdf' },
            { title: 'Dulce Comunión', file: 'pdfs\Acordes\Dulce Comunión.pdf' },
            { title: 'El Amor de Cristo', file: 'pdfs\Acordes\El Amor de Cristo.pdf' },
            { title: 'El Dios que Adoramos', file: 'pdfs\Acordes\El Dios que Adoramos.pdf' },
            { title: 'El me encontró', file: 'pdfs\Acordes\El me encontró.pdf' },
            { title: 'El me ha dado la Paz', file: 'pdfs\Acordes\El me ha dado la Paz.pdf' },
            { title: 'El me Sostendrá', file: 'pdfs\Acordes\El me Sostendrá.pdf' },
            { title: 'Él Vive Hoy', file: 'pdfs\Acordes\Él Vive Hoy.pdf' },
            { title: 'En el Monte Calvario', file: 'pdfs\Acordes\En el Monte Calvario.pdf' },
            { title: 'En Jesucristo el Rey de Paz', file: 'pdfs\Acordes\En Jesucristo el Rey de Paz.pdf' },
            { title: 'En la Cruz', file: 'pdfs\Acordes\En la Cruz.pdf' },
            { title: 'En Presencia Estar de Cristo', file: 'pdfs\Acordes\En Presencia Estar de Cristo.pdf' },
            { title: 'En Ti Esperaré', file: 'pdfs\Acordes\En Ti Esperaré.pdf' },
            { title: 'Eres Escudo', file: 'pdfs\Acordes\Eres Escudo.pdf' },
            { title: 'Eres Todopoderoso', file: 'pdfs\Acordes\Eres Todopoderoso.pdf' },
            { title: 'Es Exaltado', file: 'pdfs\Acordes\Es Exaltado.pdf' },
            { title: 'Escudriñemos Nuestros Caminos', file: 'pdfs\Acordes\Escudriñemos Nuestros Caminos.pdf' },
            { title: 'Esta paz que yo siento', file: 'pdfs\Acordes\Esta paz que yo siento.pdf' },
            { title: 'Estoy Cantando Alegre', file: 'pdfs\Acordes\Estoy Cantando Alegre.pdf' },
            { title: 'Feliz Feliz Cumpleaños', file: 'pdfs\Acordes\Feliz Feliz Cumpleaños.pdf' },
            { title: 'Fuente de la vida eterna', file: 'pdfs\Acordes\Fuente de la vida eterna.pdf' },
            { title: 'Gloria en las alturas', file: 'pdfs\Acordes\Gloria en las alturas.pdf' },
            { title: 'Glorioso Intercambio', file: 'pdfs\Acordes\Glorioso Intercambio.pdf' },
            { title: 'Gracia Sublime es', file: 'pdfs\Acordes\Gracia Sublime es.pdf' },
            { title: 'Gracias Cristo', file: 'pdfs\Acordes\Gracias Cristo.pdf' },
            { title: 'Grande es Jehová', file: 'pdfs\Acordes\Grande es Jehová.pdf' },
            { title: 'Grande Gozo Hay En Mi Alma Hoy', file: 'pdfs\Acordes\Grande Gozo Hay En Mi Alma Hoy.pdf' },
            { title: 'Grandes y Maravillosas', file: 'pdfs\Acordes\Grandes y Maravillosas.pdf' },
            { title: 'Habitación (A)', file: 'pdfs\Acordes\Habitación (A).pdf' },
            { title: 'Hay libertad (Bb)', file: 'pdfs\Acordes\Hay libertad (Bb).pdf' },
            { title: 'Hay un Nombre', file: 'pdfs\Acordes\Hay un Nombre.pdf' },
            { title: 'Hay un precioso lugar', file: 'pdfs\Acordes\Hay un precioso lugar.pdf' },
            { title: 'Jesucristo Basta', file: 'pdfs\Acordes\Jesucristo Basta.pdf' },
            { title: 'Jesús es mi Rey soberano', file: 'pdfs\Acordes\Jesús es mi Rey soberano.pdf' },
            { title: 'Junto a la Cruz', file: 'pdfs\Acordes\Junto a la Cruz.pdf' },
            { title: 'La Ley de Jehová', file: 'pdfs\Acordes\La Ley de Jehová.pdf' },
            { title: 'La Roca Fiel', file: 'pdfs\Acordes\La Roca Fiel.pdf' },
            { title: 'La Salvación es del Señor', file: 'pdfs\Acordes\La Salvación es del Señor.pdf' },
            { title: 'La Tumba Le Encerro', file: 'pdfs\Acordes\La Tumba Le Encerro.pdf' },
            { title: 'Lo que respira Alabe a Jehová', file: 'pdfs\Acordes\Lo que respira Alabe a Jehová.pdf' },
            { title: 'Los Cristianos somos ricos', file: 'pdfs\Acordes\Los Cristianos somos ricos.pdf' },
            { title: 'Luces En El Puerto', file: 'pdfs\Acordes\Luces En El Puerto.pdf' },
            { title: 'Maravillosa Gracia', file: 'pdfs\Acordes\Maravillosa Gracia.pdf' },
            { title: 'Maravilloso Es', file: 'pdfs\Acordes\Maravilloso Es.pdf' },
            { title: 'Más alta', file: 'pdfs\Acordes\Más alta.pdf' },
            { title: 'Me rindo a ti', file: 'pdfs\Acordes\Me rindo a ti.pdf' },
            { title: 'Mi Alma Esperará', file: 'pdfs\Acordes\Mi Alma Esperará.pdf' },
            { title: 'Mi Esperanza Fiel', file: 'pdfs\Acordes\Mi Esperanza Fiel.pdf' },
            { title: 'Muestra a Cristo (A)', file: 'pdfs\Acordes\Muestra a Cristo (A).pdf' },
            { title: 'Nacio el Rey', file: 'pdfs\Acordes\Nacio el Rey.pdf' },
            { title: 'Nada sé sobre el futuro', file: 'pdfs\Acordes\Nada sé sobre el futuro.pdf' },
            { title: 'No Hay Otro Nombre', file: 'pdfs\Acordes\No Hay Otro Nombre.pdf' },
            { title: 'Noble Sosten', file: 'pdfs\Acordes\Noble Sosten.pdf' },
            { title: 'OneDrive_98_8-1-202', file: 'pdfs\Acordes\OneDrive_98_8-1-2025.zip' }
            // Agrega más PDFs aquí
        ],
        letras: [
            { title: 'Letra 1', file: 'pdfs/letras/letra1.pdf' },
            { title: 'Letra 2', file: 'pdfs/letras/letra2.pdf' }
        ],
        nuevas: [
            { title: 'Nueva 1', file: 'pdfs/nuevas/nueva1.pdf' },
            { title: 'Nueva 2', file: 'pdfs/nuevas/nueva2.pdf' }
        ],
        partituras: [
            { title: 'Partitura 1', file: 'pdfs/partituras/partitura1.pdf' },
            { title: 'Partitura 2', file: 'pdfs/partituras/partitura2.pdf' }
        ]
    };

    const navLinks = document.querySelectorAll('nav ul li a');
    const pdfList = document.getElementById('pdf-list');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            console.log(`Categoría seleccionada: ${category}`); // Depuración
            loadPDFs(category);
        });
    });

    function loadPDFs(category) {
        pdfList.innerHTML = ''; // Limpiar la lista actual
        if (pdfs[category]) {
            pdfs[category].forEach(pdf => {
                const pdfItem = document.createElement('div');
                pdfItem.classList.add('pdf-item');
                pdfItem.innerHTML = `<a href="${pdf.file}" target="_blank">${pdf.title}</a>`;
                pdfList.appendChild(pdfItem);
            });
        } else {
            pdfList.innerHTML = '<p>No hay PDFs disponibles en esta categoría.</p>';
        }
    }
});
