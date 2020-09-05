// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// IMPORT -- Installed axios with NPM so that I could see the typing suggestions in VSCode
import axios from 'axios';

// Axios GET
axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(response => {
        const tabsContainer = document.querySelector('div.topics');
        response.data.topics.forEach(topic => {
            const newTab = tabMaker(topic);
            tabsContainer.append(newTab);
        });
    })
    .catch(err => {
        console.log(`There has been an error requesting the topics: ${err}`);
    });

// Component
function tabMaker(content) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = content;

    // Return the created tab
    return tab;
}