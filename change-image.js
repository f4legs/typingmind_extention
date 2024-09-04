const chatTab = document.querySelector('[data-element-id="workspace-tab-chat"]');
if (chatTab) {
    const iconSpan = chatTab.querySelector('span:first-child');
    if (iconSpan) {
        iconSpan.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm160-320h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80Z"/>
            </svg>
        `;
    }
}
