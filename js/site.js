function checkSpecialCharInput($event) {
    const textarea = event.target;
    const text = textarea.value;
    const filteredText = text.replace(/[^\w\s]/gi, ''); // Regex to remove special characters
    if (text !== filteredText) {
        textarea.value = filteredText;
    }
}