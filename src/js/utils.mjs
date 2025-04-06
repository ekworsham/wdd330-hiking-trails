let headerLoaded = false; // Variable to know if the header has already been loaded
let footerLoaded = false; // Variable to know if the footer has already been loaded



export function renderwithTemplate(template, parentElement, data, callback) {

  // Limpiar el contenido antes de insertar nuevo template/Clear the content before inserting a new template
  parentElement.innerHTML = "";

  // *********This line of code is creating duplicate on the cart page********
  parentElement.innerHTML = template;

  if (callback) {
    callback(data)
  }
}


//This asynchronous function fetches the content of the HTML
export async function loadTemplate(path) {
  const res = await fetch(path);
  //The response is converted to text and returns the HTML content as a string
  const template = await res.text();
  return template;
}

//Load, Grab out of the DOM and Render the header and footer
export async function loadHeaderFooter() {
    // console.log("loadHeaderFooter");
    // Load the header only if it has not been loaded before.
    if (!headerLoaded) {
      const headerTemplate = await loadTemplate("../headerFooter/header.html");
      const headerElement = document.querySelector("#header");
  
      if (!headerElement.innerHTML.trim()) {
        renderwithTemplate(headerTemplate, headerElement);
      }
      headerLoaded = true; ///We mark that the header has already been loaded.
    }
    //Load the footer only if it has not been loaded before.
    if (!footerLoaded) {
      const footerTemplate = await loadTemplate("../headerFooter/footer.html");
      const footerElement = document.querySelector("#footer");
  
      if (!footerElement.innerHTML.trim()) {
        renderwithTemplate(footerTemplate, footerElement);
      }
      footerLoaded = true; //We mark that the footer has already been loaded.
    }
}