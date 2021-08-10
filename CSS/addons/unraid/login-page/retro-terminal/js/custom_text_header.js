
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>________                               _________       _____  __   
\______ \   ____ _____    ____   ____ /   _____/ _____/ ____\/  |_ 
 |    |  \_/ __ \\__  \  /    \ /  _ \\_____  \ /  _ \   __\\   __\
 |    `   \  ___/ / __ \|   |  (  <_> )        (  <_> )  |   |  |  
/_______  /\___  >____  /___|  /\____/_______  /\____/|__|   |__|  
        \/     \/     \/     \/              \/                    
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
