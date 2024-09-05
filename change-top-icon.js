// Define the new SVG icons in an object
const iconData = {
    'create-new-folder': `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm400-240v40q0 17 11.5 28.5T600-320q17 0 28.5-11.5T640-360v-40h40q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480h-40v-40q0-17-11.5-28.5T600-560q-17 0-28.5 11.5T560-520v40h-40q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400h40Z"/>
    </svg>`,
    'tag-search-button': `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="m159-168-34-14q-31-13-41.5-45t3.5-63l72-156v278Zm160 88q-33 0-56.5-23.5T239-160v-240l106 294q3 7 6 13.5t8 12.5h-40Zm206-4q-32 12-62-3t-42-47L243-622q-12-32 2-62.5t46-41.5l302-110q32-12 62 3t42 47l178 488q12 32-2 62.5T827-194L525-84Zm-86-476q17 0 28.5-11.5T479-600q0-17-11.5-28.5T439-640q-17 0-28.5 11.5T399-600q0 17 11.5 28.5T439-560Z"/>
    </svg>`,
    'select-chats-symbol': `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h499q17 0 28.5 11.5T739-800q0 17-11.5 28.5T699-760H200v560h560v-260q0-17 11.5-28.5T800-500q17 0 28.5 11.5T840-460v260q0 33-23.5 56.5T760-120H200Zm261-272 340-340q11-11 27-11t28 11q12 11 12 28t-12 29L489-308q-12 12-28 12t-28-12L263-478q-11-11-11-28t11-28q11-11 28-11t28 11l142 142Z"/>
    </svg>`,
};

// Function to change the icons based on the data-element-id
function changeIcons() {
    Object.keys(iconData).forEach(key => {
        const button = document.querySelector(`button[data-element-id="${key}"]`);
        if (button) {
            const currentSvg = button.querySelector('svg');
            // Remove the current SVG if it exists
            if (currentSvg) {
                currentSvg.remove();
            }
            // Add the new SVG icon
            button.insertAdjacentHTML('afterbegin', iconData[key]);
        }
    });
}

// Run the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', changeIcons);
