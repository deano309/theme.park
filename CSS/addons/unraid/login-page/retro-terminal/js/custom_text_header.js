
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>       __                                  ______
  ____/ /__  ____ _____  ____  _________  / __/ /_
 / __  / _ \\/ __ `/ __ \\/ __ \\/ ___/ __ \\/ /_/ __/
/ /_/ /  __/ /_/ / / / / /_/ (__  ) /_/ / __/ /_
\\__,_/\\___/\\__,_/_/ /_/\\____/____/\\____/_/  \\__/
                                                                  </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
