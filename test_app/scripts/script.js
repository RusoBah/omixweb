

function showHoverWindow(element) {
    const window = element.querySelector('.slade__window');
    window.style.opacity = '1';
    window.style.transform = 'translateY(0)';
}

function hideHoverWindow(element) {
    // Only hide if the div is NOT focused
    if (element !== document.activeElement) {
        const window = element.querySelector('.slade__window');
        window.style.opacity = '0';
        window.style.transform = 'translateY(100%)';
    }
}

