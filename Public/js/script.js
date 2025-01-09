document.addEventListener('DOMContentLoaded', function() {
    const pdfs = {
        Acordes: [
            { title: 'A Dios Demos Gloria', file: 'Public/pdfs\Acordes\A Dios Demos Gloria.pdf' },
            { title: 'A Dios Sea La Gloria', file: 'Public/pdfs\Acordes\A Dios Sea La Gloria.pdf' },
            { title: 'A Solas con Jesús', file: 'Public/pdfs\Acordes\A Solas con Jesús.pdf' },
            { title: 'Al Cristo Vivo Sirvo', file: 'Public/pdfs\Acordes\Al Cristo Vivo Sirvo.pdf' },
            { title: 'Al mundo paz- Hay libertad', file: 'Public/pdfs\Acordes\Al mundo paz- Hay libertad.pdf' },
            { title: 'Al Mundo Paz', file: 'Public/pdfs\Acordes\Al Mundo Paz.pdf' },
            { title: 'Al Tu Rostro Ver', file: 'Public/pdfs\Acordes\Al Tu Rostro Ver.pdf' },
            { title: 'Alabad a Jehová', file: 'Public/pdfs\Acordes\Alabad a Jehová.pdf' },
            { title: 'Alabad servidores de Jehová', file: 'Public/pdfs\Acordes\Alabad servidores de Jehová.pdf' },
            { title: 'Alabanzas Al Rey', file: 'Public/pdfs\Acordes\Alabanzas Al Rey.pdf' },
            { title: 'Alcancé Salvación', file: 'Public/pdfs\Acordes\Alcancé Salvación.pdf' },
            { title: 'Alla en el pesebre', file: 'Public/pdfs\Acordes\Alla en el pesebre.pdf' },
            { title: 'Amigo Hallé', file: 'Public/pdfs\Acordes\Amigo Hallé.pdf' },
            { title: 'Amor tan Grande', file: 'Public/pdfs\Acordes\Amor tan Grande.pdf' },
            { title: 'Angeles Cantando Están', file: 'Public/pdfs\Acordes\Angeles Cantando Están.pdf' },
            { title: 'Ante el Trono Celesital', file: 'Public/pdfs\Acordes\Ante el Trono Celesital.pdf' },
            { title: 'Aunque Gigantes Encuentre Allá', file: 'Public/pdfs\Acordes\Aunque Gigantes Encuentre Allá.pdf' },
            { title: 'Bástate mi gracia I', file: 'Public/pdfs\Acordes\Bástate mi gracia I.pdf' },
            { title: 'Bastate Mi Gracia II', file: 'Public/pdfs\Acordes\Bastate Mi Gracia II.pdf' },
            { title: 'Bellas palabras de vida', file: 'Public/pdfs\Acordes\Bellas palabras de vida.pdf' },
            { title: 'Bendecrié a Jehová', file: 'Public/pdfs\Acordes\Bendecrié a Jehová.pdf' },
            { title: 'Bueno es alabarte Señor', file: 'Public/pdfs\Acordes\Bueno es alabarte Señor.pdf' },
            { title: 'Busca primero el Reino de Dios', file: 'Public/pdfs\Acordes\Busca primero el Reino de Dios.pdf' },
            { title: 'Cada Día con Cristo', file: 'Public/pdfs\Acordes\Cada Día con Cristo.pdf' },
            { title: 'Cadena de Coros', file: 'Public/pdfs\Acordes\Cadena de Coros.pdf' },
            { title: 'Cantad Alegres a Jehová', file: 'Public/pdfs\Acordes\Cantad Alegres a Jehová.pdf' },
            { title: 'Canten Del Amor De Cristo', file: 'Public/pdfs\Acordes\Canten Del Amor De Cristo.pdf' },
            { title: 'Castillo Fuerte es nuesto Dios', file: 'Public/pdfs\Acordes\Castillo Fuerte es nuesto Dios.pdf' },
            { title: 'Ciudad de Dios', file: 'Public/pdfs\Acordes\Ciudad de Dios.pdf' },
            { title: 'Cómo podré estar triste', file: 'Public/pdfs\Acordes\Cómo podré estar triste.pdf' },
            { title: 'Comprado Con Sangre Por Cristo', file: 'Public/pdfs\Acordes\Comprado Con Sangre Por Cristo.pdf' },
            { title: 'Con gran gozo y placer', file: 'Public/pdfs\Acordes\Con gran gozo y placer.pdf' },
            { title: 'Contempla a Dios', file: 'Public/pdfs\Acordes\Contempla a Dios.pdf' },
            { title: 'Cristo Está Conmigo', file: 'Public/pdfs\Acordes\Cristo Está Conmigo.pdf' },
            { title: 'Cristo Nombre Glorioso', file: 'Public/pdfs\Acordes\Cristo Nombre Glorioso.pdf' },
            { title: 'Cuan Grande es Dios', file: 'Public/pdfs\Acordes\Cuan Grande es Dios.pdf' },
            { title: 'Cuán Grande es El', file: 'Public/pdfs\Acordes\Cuán Grande es El.pdf' },
            { title: 'Cuando Allá Se Pase Lista', file: 'Public/pdfs\Acordes\Cuando Allá Se Pase Lista.pdf' },
            { title: 'Cuando yo sentí el amor de Dios', file: 'Public/pdfs\Acordes\Cuando yo sentí el amor de Dios.pdf' },
            { title: 'De Gloria en Gloria', file: 'Public/pdfs\Acordes\De Gloria en Gloria.pdf' },
            { title: 'De Jesús El Nombre Guarda', file: 'Public/pdfs\Acordes\De Jesús El Nombre Guarda.pdf' },
            { title: 'Día en Día', file: 'Public/pdfs\Acordes\Día en Día.pdf' },
            { title: 'Digno Es El Cordero', file: 'Public/pdfs\Acordes\Digno Es El Cordero.pdf' },
            { title: 'Digno es El Señor', file: 'Public/pdfs\Acordes\Digno es El Señor.pdf' },
            { title: 'Dios mío eres tú', file: 'Public/pdfs\Acordes\Dios mío eres tú.pdf' },
            { title: 'Dios Muestra Su Amor', file: 'Public/pdfs\Acordes\Dios Muestra Su Amor.pdf' },
            { title: 'Dulce Comunión', file: 'Public/pdfs\Acordes\Dulce Comunión.pdf' },
            { title: 'El Amor de Cristo', file: 'Public/pdfs\Acordes\El Amor de Cristo.pdf' },
            { title: 'El Dios que Adoramos', file: 'Public/pdfs\Acordes\El Dios que Adoramos.pdf' },
            { title: 'El me encontró', file: 'Public/pdfs\Acordes\El me encontró.pdf' },
            { title: 'El me ha dado la Paz', file: 'Public/pdfs\Acordes\El me ha dado la Paz.pdf' },
            { title: 'El me Sostendrá', file: 'Public/pdfs\Acordes\El me Sostendrá.pdf' },
            { title: 'Él Vive Hoy', file: 'Public/pdfs\Acordes\Él Vive Hoy.pdf' },
            { title: 'En el Monte Calvario', file: 'Public/pdfs\Acordes\En el Monte Calvario.pdf' },
            { title: 'En Jesucristo el Rey de Paz', file: 'Public/pdfs\Acordes\En Jesucristo el Rey de Paz.pdf' },
            { title: 'En la Cruz', file: 'Public/pdfs\Acordes\En la Cruz.pdf' },
            { title: 'En Presencia Estar de Cristo', file: 'Public/pdfs\Acordes\En Presencia Estar de Cristo.pdf' },
            { title: 'En Ti Esperaré', file: 'Public/pdfs\Acordes\En Ti Esperaré.pdf' },
            { title: 'Eres Escudo', file: 'Public/pdfs\Acordes\Eres Escudo.pdf' },
            { title: 'Eres Todopoderoso', file: 'Public/pdfs\Acordes\Eres Todopoderoso.pdf' },
            { title: 'Es Exaltado', file: 'Public/pdfs\Acordes\Es Exaltado.pdf' },
            { title: 'Escudriñemos Nuestros Caminos', file: 'Public/pdfs\Acordes\Escudriñemos Nuestros Caminos.pdf' },
            { title: 'Esta paz que yo siento', file: 'Public/pdfs\Acordes\Esta paz que yo siento.pdf' },
            { title: 'Estoy Cantando Alegre', file: 'Public/pdfs\Acordes\Estoy Cantando Alegre.pdf' },
            { title: 'Feliz Feliz Cumpleaños', file: 'Public/pdfs\Acordes\Feliz Feliz Cumpleaños.pdf' },
            { title: 'Fuente de la vida eterna', file: 'Public/pdfs\Acordes\Fuente de la vida eterna.pdf' },
            { title: 'Gloria en las alturas', file: 'Public/pdfs\Acordes\Gloria en las alturas.pdf' },
            { title: 'Glorioso Intercambio', file: 'Public/pdfs\Acordes\Glorioso Intercambio.pdf' },
            { title: 'Gracia Sublime es', file: 'Public/pdfs\Acordes\Gracia Sublime es.pdf' },
            { title: 'Gracias Cristo', file: 'Public/pdfs\Acordes\Gracias Cristo.pdf' },
            { title: 'Grande es Jehová', file: 'Public/pdfs\Acordes\Grande es Jehová.pdf' },
            { title: 'Grande Gozo Hay En Mi Alma Hoy', file: 'Public/pdfs\Acordes\Grande Gozo Hay En Mi Alma Hoy.pdf' },
            { title: 'Grandes y Maravillosas', file: 'Public/pdfs\Acordes\Grandes y Maravillosas.pdf' },
            { title: 'Habitación (A)', file: 'Public/pdfs\Acordes\Habitación (A).pdf' },
            { title: 'Hay libertad (Bb)', file: 'Public/pdfs\Acordes\Hay libertad (Bb).pdf' },
            { title: 'Hay un Nombre', file: 'Public/pdfs\Acordes\Hay un Nombre.pdf' },
            { title: 'Hay un precioso lugar', file: 'Public/pdfs\Acordes\Hay un precioso lugar.pdf' },
            { title: 'Jesucristo Basta', file: 'Public/pdfs\Acordes\Jesucristo Basta.pdf' },
            { title: 'Jesús es mi Rey soberano', file: 'Public/pdfs\Acordes\Jesús es mi Rey soberano.pdf' },
            { title: 'Junto a la Cruz', file: 'Public/pdfs\Acordes\Junto a la Cruz.pdf' },
            { title: 'La Ley de Jehová', file: 'Public/pdfs\Acordes\La Ley de Jehová.pdf' },
            { title: 'La Roca Fiel', file: 'Public/pdfs\Acordes\La Roca Fiel.pdf' },
            { title: 'La Salvación es del Señor', file: 'Public/pdfs\Acordes\La Salvación es del Señor.pdf' },
            { title: 'La Tumba Le Encerro', file: 'Public/pdfs\Acordes\La Tumba Le Encerro.pdf' },
            { title: 'Lo que respira Alabe a Jehová', file: 'Public/pdfs\Acordes\Lo que respira Alabe a Jehová.pdf' },
            { title: 'Los Cristianos somos ricos', file: 'Public/pdfs\Acordes\Los Cristianos somos ricos.pdf' },
            { title: 'Luces En El Puerto', file: 'Public/pdfs\Acordes\Luces En El Puerto.pdf' },
            { title: 'Maravillosa Gracia', file: 'Public/pdfs\Acordes\Maravillosa Gracia.pdf' },
            { title: 'Maravilloso Es', file: 'Public/pdfs\Acordes\Maravilloso Es.pdf' },
            { title: 'Más alta', file: 'Public/pdfs\Acordes\Más alta.pdf' },
            { title: 'Me rindo a ti', file: 'Public/pdfs\Acordes\Me rindo a ti.pdf' },
            { title: 'Mi Alma Esperará', file: 'Public/pdfs\Acordes\Mi Alma Esperará.pdf' },
            { title: 'Mi Esperanza Fiel', file: 'Public/pdfs\Acordes\Mi Esperanza Fiel.pdf' },
            { title: 'Muestra a Cristo (A)', file: 'Public/pdfs\Acordes\Muestra a Cristo (A).pdf' },
            { title: 'Nacio el Rey', file: 'Public/pdfs\Acordes\Nacio el Rey.pdf' },
            { title: 'Nada sé sobre el futuro', file: 'Public/pdfs\Acordes\Nada sé sobre el futuro.pdf' },
            { title: 'No Hay Otro Nombre', file: 'Public/pdfs\Acordes\No Hay Otro Nombre.pdf' },
            { title: 'Noble Sosten', file: 'Public/pdfs\Acordes\Noble Sosten.pdf' },
            { title: 'OneDrive_98_8-1-202', file: 'Public/pdfs\Acordes\OneDrive_98_8-1-2025.zip' }
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
