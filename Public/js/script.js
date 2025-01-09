document.addEventListener('DOMContentLoaded', function() {
    const pdfs = {
        Acordes: [
            { title: 'A Dios Demos Gloria', file: 'pdfs/Acordes/A Dios Demos Gloria.pdf' },
            { title: 'A Dios Sea La Gloria', file: 'pdfs/Acordes/A Dios Sea La Gloria.pdf' },
            { title: 'A Solas con Jesús', file: 'pdfs/Acordes/A Solas con Jesús.pdf' },
            { title: 'Al Cristo Vivo Sirvo', file: 'pdfs/Acordes/Al Cristo Vivo Sirvo.pdf' },
            { title: 'Al mundo paz - Hay libertad', file: 'pdfs/Acordes/Al mundo paz- Hay libertad.pdf' },
            { title: 'Al Mundo Paz', file: 'pdfs/Acordes/Al Mundo Paz.pdf' },
            { title: 'Al Tu Rostro Ver', file: 'pdfs/Acordes/Al Tu Rostro Ver.pdf' },
            { title: 'Alabad a Jehová', file: 'pdfs/Acordes/Alabad a Jehová.pdf' },
            { title: 'Alabad servidores de Jehová', file: 'pdfs/Acordes/Alabad servidores de Jehová.pdf' },
            { title: 'Alabanzas Al Rey', file: 'pdfs/Acordes/Alabanzas Al Rey.pdf' },
            { title: 'Alcancé Salvación', file: 'pdfs/Acordes/Alcancé Salvación.pdf' },
            { title: 'Allá en el pesebre', file: 'pdfs/Acordes/Alla en el pesebre.pdf' },
            { title: 'Amigo Hallé', file: 'pdfs/Acordes/Amigo Hallé.pdf' },
            { title: 'Amor tan Grande', file: 'pdfs/Acordes/Amor tan Grande.pdf' },
            { title: 'Ángeles Cantando Están', file: 'pdfs/Acordes/Angeles Cantando Están.pdf' },
            { title: 'Ante el Trono Celestial', file: 'pdfs/Acordes/Ante el Trono Celesital.pdf' },
            { title: 'Aunque Gigantes Encuentre Allá', file: 'pdfs/Acordes/Aunque Gigantes Encuentre Allá.pdf' },
            { title: 'Bástate mi gracia I', file: 'pdfs/Acordes/Bástate mi gracia I.pdf' },
            { title: 'Bastate Mi Gracia II', file: 'pdfs/Acordes/Bastate Mi Gracia II.pdf' },
            { title: 'Bellas palabras de vida', file: 'pdfs/Acordes/Bellas palabras de vida.pdf' },
            { title: 'Bendecrié a Jehová', file: 'pdfs/Acordes/Bendecrié a Jehová.pdf' },
            { title: 'Bueno es alabarte Señor', file: 'pdfs/Acordes/Bueno es alabarte Señor.pdf' },
            { title: 'Busca primero el Reino de Dios', file: 'pdfs/Acordes/Busca primero el Reino de Dios.pdf' },
            { title: 'Cada Día con Cristo', file: 'pdfs/Acordes/Cada Día con Cristo.pdf' },
            { title: 'Cadena de Coros', file: 'pdfs/Acordes/Cadena de Coros.pdf' },
            { title: 'Cantad Alegres a Jehová', file: 'pdfs/Acordes/Cantad Alegres a Jehová.pdf' },
            { title: 'Canten Del Amor De Cristo', file: 'pdfs/Acordes/Canten Del Amor De Cristo.pdf' },
            { title: 'Castillo Fuerte es nuestro Dios', file: 'pdfs/Acordes/Castillo Fuerte es nuesto Dios.pdf' },
            { title: 'Ciudad de Dios', file: 'pdfs/Acordes/Ciudad de Dios.pdf' },
            { title: 'Cómo podré estar triste', file: 'pdfs/Acordes/Cómo podré estar triste.pdf' },
            { title: 'Comprado Con Sangre Por Cristo', file: 'pdfs/Acordes/Comprado Con Sangre Por Cristo.pdf' },
            { title: 'Con gran gozo y placer', file: 'pdfs/Acordes/Con gran gozo y placer.pdf' },
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
            loadPDFs(category);
        });
    });

    function loadPDFs(category) {
        pdfList.innerHTML = ''; // Limpiar la lista actual
        pdfs[category].forEach(pdf => {
            const pdfItem = document.createElement('div');
            pdfItem.classList.add('pdf-item');
            pdfItem.innerHTML = `<a href="${pdf.file}" target="_blank">${pdf.title}</a>`;
            pdfList.appendChild(pdfItem);
        });
    }
});