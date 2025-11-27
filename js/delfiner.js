"use strict"; 

// Finder HTML-elementet med id="clickArea" og gemmer det i variablen 'clickArea', som er området man kan klippe på for at få delfinerne frem
const clickArea = document.getElementById('clickArea'); 

// Tilføjer en event listener til clickArea, som kører koden hver gang området klikkes
clickArea.addEventListener('click', (e) => { 

// Henter størrelsen og positionen af clickArea i forhold til viewporten.
    const rect = clickArea.getBoundingClientRect(); 
    
 // Beregner X-positionen for klik i forhold til clickArea ved at trække left-værdien fra clientX
    const x = e.clientX - rect.left; 
    const y = e.clientX
    
 // Vælger et tilfældigt antal delfiner mellem 2 og 3 - Math.random() * 2 giver et tal mellem 0 og 2, og Math.floor runder ned til nærmeste heltal, så +2 sikrer mindst 2 delfiner
    const dolphinCount = Math.floor(Math.random() * 2) + 2;
    
    
//// Løkke, der kører én gang for hver delfin, der skal vises.
    for (let i = 0; i < dolphinCount; i++) { 
        
 //// Kalder funktionen createDolphin med X-positionen for klik og bredden af clickArea. Hver kald er forsinket med i*200 millisekunder, så delfinerne ikke dukker op præcis samtidig.
        setTimeout(() => {
            createDolphin(x,y, rect.width); 
        }, i * 200); 
    }
});


 // Funktion der opretter og animerer en delfin
function createDolphin(x,y, areaWidth) { 
   
 // Opretter et nyt <img> element til delfinen
    const dolphin = document.createElement('img'); 
    dolphin.src = './assets/svg/delfin-hopper.svg'; 
    dolphin.classList.add('dolphin'); 

// Laver en tilfældig forskydning mellem -50 og +50 pixels, så delfinerne ikke overlapper præcist
    const offset = (Math.random() - 0.5) * 100; 

// Sætter delfinens venstre position med offset, samtidig med at den holder sig indenfor clickArea
    dolphin.style.left = `${Math.min(areaWidth - 150, Math.max(0, x - 75 + offset))}px`; 
    dolphin.style.top = `${y}px`; 

 // Tilføjer delfinen til clickArea i DOM’en, så den bliver synlig
    clickArea.appendChild(dolphin); 

// Starter animationen ved at tilføje klassen 'jump-left' som har CSS keyframes
    setTimeout(() => {
        dolphin.classList.add('jump-left'); 
    }, 100); 

 // Fjerner delfinen fra DOM’en efter 2 sekunder, når animationen er færdig
    setTimeout(() => {
        dolphin.remove(); 
    }, 2000);
}
