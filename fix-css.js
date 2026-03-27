const fs = require('fs');
const path = require('path');

// 1. Append missing CSS to globals.css
const globalsCssPath = path.join(__dirname, 'src', 'app', 'globals.css');
let globalsCss = fs.readFileSync(globalsCssPath, 'utf8');

const additionalCss = `
.font-headline {
    font-family: 'Space Grotesk', sans-serif;
}

.font-body {
    font-family: 'Inter', sans-serif;
}

/* Carousel Styles */
.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
}

.carousel-slide {
    min-width: 100%;
    height: 100%;
    position: relative;
}
`;

if (!globalsCss.includes('.carousel-track')) {
    fs.writeFileSync(globalsCssPath, globalsCss + '\n' + additionalCss);
    console.log('Appended missing CSS to globals.css');
}
