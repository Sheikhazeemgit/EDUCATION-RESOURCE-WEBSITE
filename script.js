document.addEventListener('DOMContentLoaded', function() {
    const standards = document.querySelectorAll('.standard');

    standards.forEach(standard => {
        standard.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default button behavior
            
            const standardNumber = this.dataset.standard;
            const sectionId = `standard-${standardNumber}-content`;
            const section = document.getElementById(sectionId);

            // Hide all sections
            const allSections = document.querySelectorAll('.standard-content');
            allSections.forEach(sec => {
                sec.style.display = 'none';
            });

            // Display the selected section
            if (section) {
                // Get standard name from button
                const standardName = this.innerText;

                // Open new tab
                const newTab = window.open();
                
                // Write content to new tab
                newTab.document.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>${standardName}</title>
                        <link rel="stylesheet" href="styles.css">
                    </head>
                    <body>
                        <h1>${standardName}</h1>
                        ${section.innerHTML}
                        <script src="script.js"></script> <!-- Include script.js if needed -->
                    </body>
                    </html>
                `);
                newTab.document.close();
            }
        });
    });
});
