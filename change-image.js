function changeWorkspaceTabChatIcon() {
    // Select the element with the specific data-element-id
    const workspaceTabChat = document.querySelector('[data-element-id="workspace-tab-chat"]');
    
    if (workspaceTabChat) {
      // Find the span that contains the current SVG
      const iconSpan = workspaceTabChat.querySelector('span:first-child');
      
      if (iconSpan) {
        // Define the new SVG
        const newSvgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm160-320h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80Z"/>
          </svg>
        `;
        
        // Replace the existing content with the new SVG
        iconSpan.innerHTML = newSvgContent;
        
        // Ensure the SVG inherits the correct size and color
        const svgElement = iconSpan.querySelector('svg');
        if (svgElement) {
          svgElement.classList.add('h-6', 'w-6', 'flex-shrink-0');
          // Using 'currentColor' for fill allows it to inherit the parent's text color
          svgElement.setAttribute('fill', 'currentColor');
        }
      } else {
        console.error('Icon span not found within workspace-tab-chat');
      }
    } else {
      console.error('Element with data-element-id="workspace-tab-chat" not found');
    }
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', changeWorkspaceTabChatIcon);
  
  // Additionally, run this function when the app's state changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        changeWorkspaceTabChatIcon();
      }
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  