// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // Set up parent element
    const header = document.createElement('div');
    header.classList.add('header');

    // Set up child elements
    const date = document.createElement('span');
    date.classList.add('date');

    const h1 = document.createElement('h1');
    h1.textContent = "Lambda Times";

    const temp = document.createElement('span');
    temp.classList.add('temp');

    // Append elements
    header.append(date, h1, temp);

    // Return the parent element after all changes have been made
    return header;
}