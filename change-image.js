console.log('Extension script loaded');
const chatTab = document.querySelector('[data-element-id="workspace-tab-chat"]');
console.log('Chat tab found:', !!chatTab);
if (chatTab) {
    const iconSpan = chatTab.querySelector('span:first-child');
    console.log('Icon span found:', !!iconSpan);
    if (iconSpan) {
        iconSpan.textContent = 'New Icon';
        console.log('Icon text changed');
    }
}
