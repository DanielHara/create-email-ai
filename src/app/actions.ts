const EXTENSION_ID = 'lffpkakdldmdlbllcjbmoldlfaodbfin'

export async function triggerExtension() {
    chrome.runtime.sendMessage(EXTENSION_ID, {action: 'perform_action'}, function(response) {
        console.log('Message sent');
    });
}
