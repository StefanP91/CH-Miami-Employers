// Function to load and show the ActiveCampaign form
function openActiveForm() {
    const script = document.createElement('script');
    script.id = 'active-form-script';
    script.src = 'https://akoskarova.activehosted.com/f/embed.php?id=1061';
    script.charset = 'utf-8';
    document.body.appendChild(script);
}
