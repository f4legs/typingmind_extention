const iconData = {
    'create-new-folder': `<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 512 512" class="w-6 h-6" fill="currentColor">
        <path d="M464 128H272L208 64H48A48 48 0 0 0 0 112V400a48 48 0 0 0 48 48H464a48 48 0 0 0 48-48V176A48 48 0 0 0 464 128ZM359.5 296a16 16 0 0 1-16 16h-64v64a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V312h-64a16 16 0 0 1-16-16V280a16 16 0 0 1 16-16h64V200a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v64h64a16 16 0 0 1 16 16Z"></path>
    </svg>`,
    'tag-search-button': `<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 1024 1024" class="w-6 h-6" fill="currentColor">
        <path d="M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM699 387c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"></path>
    </svg>`,
    'select-chats-symbol': `<svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
        <path d="M6.99979 7V3C6.99979 2.44772 7.4475 2 7.99979 2H20.9998C21.5521 2 21.9998 2.44772 21.9998 3V16C21.9998 16.5523 21.5521 17 20.9998 17H17V20.9925C17 21.5489 16.551 22 15.9925 22H3.00728C2.45086 22 2 21.5511 2 20.9925L2.00276 8.00748C2.00288 7.45107 2.4518 7 3.01025 7H6.99979ZM8.99979 7H15.9927C16.549 7 17 7.44892 17 8.00748V15H19.9998V4H8.99979V7ZM8.50242 18L14.1593 12.3431L12.7451 10.9289L8.50242 15.1716L6.3811 13.0503L4.96689 14.4645L8.50242 18Z"></path>
    </svg>`,
};

function changeIcons() {
    Object.keys(iconData).forEach(key => {
        const button = document.querySelector(`[data-element-id="${key}"]`);
        if (button) {
            const svg = button.querySelector('svg');
            if (svg) {
                svg.outerHTML = iconData[key];
            }
        }
    });
}

// Run the function immediately
changeIcons();

// Also run it after a short delay to catch any dynamically loaded elements
setTimeout(changeIcons, 1000);
