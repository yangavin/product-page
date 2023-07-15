const title = document.createElement('h1');
title.textContent = "The World's Greatest Product";


const subHeading = document.createElement('h2');
subHeading.textContent = "Created with the Most Innovative Technology"

const description = document.createElement('p');
description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const root = document.querySelector('#content');

module.exports.render = () => {
    while (root.hasChildNodes()) {
        root.removeChild(root.firstChild);
    }
    root.appendChild(title);
    root.appendChild(subHeading);
    root.appendChild(description);
}