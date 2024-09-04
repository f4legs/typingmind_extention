const chatTab = document.querySelector('[data-element-id="workspace-tab-chat"]');
if (chatTab) {
    const iconSpan = chatTab.querySelector('span:first-child');
    if (iconSpan) {
        iconSpan.textContent = 'New Icon';
    }
}
