document.addEventListener('DOMContentLoaded', function() {
    const pdfs = {
        acordes: [
            { title: 'Acorde 1', file: 'pdfs/acordes/acorde1.pdf' },
            { title: 'Acorde 2', file: 'pdfs/acordes/acorde2.pdf' }
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
    const pdfFrame = document.getElementById('pdf-frame');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            loadPDFs(category);
        });
    });

    function loadPDFs(category) {
        pdfList.innerHTML = '';
        pdfs[category].forEach(pdf => {
            const pdfItem = document.createElement('div');
            pdfItem.classList.add('pdf-item');
            pdfItem.innerHTML = `<a href="#">${pdf.title}</a>`;
            pdfItem.addEventListener('click', function() {
                viewPDF(pdf.file);
            });
            pdfList.appendChild(pdfItem);
        });
    }

    function viewPDF(file) {
        pdfFrame.src = file;
        pdfFrame.style.display = 'block';
    }
});