document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const qrCodeImg = document.getElementById('qrcode');
    const qrTextInput = document.getElementById('qr-text');

    generateBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let text = qrTextInput.value.trim();
        if (text === '') {
            alert('Enter Text or URL into TextBox');
        } else {
            let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}`;

            qrCodeImg.classList.add('active');
            qrCodeImg.src = qrUrl;
        }
    });
});
