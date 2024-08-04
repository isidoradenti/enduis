// Assign the <head> element of the document to the constant 'head'
const head = document.head;

// Log the <head> element to the console
console.log(head);

// Create a new meta element
const meta = document.createElement('meta');

// Set the meta element's attributes
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";

// Append the new meta element to the <head> section
head.appendChild(meta);
