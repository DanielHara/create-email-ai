const EXTENSION_ID = 'lffpkakdldmdlbllcjbmoldlfaodbfin'

export async function triggerExtension(emailDescription: string) {
    chrome.runtime.sendMessage(EXTENSION_ID, {action: 'trigger_email', emailDescription }, function(response) {
        console.log('Message sent');
        console.log('response is', response);
    });
}
