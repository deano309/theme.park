
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>    ____                        _____       ______ 
   / __ \\___  ____ _____  ____ / ___/____  / __/ /_
  / / / / _ \\/ __ `/ __ \\/ __ \\\\__ \\/ __ \\/ /_/ __/
 / /_/ /  __/ /_/ / / / / /_/ /__/ / /_/ / __/ /_  
/_____/\\___/\\__,_/_/ /_/\\____/____/\\____/_/  \\__/  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
