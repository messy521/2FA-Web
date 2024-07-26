let totp;
let interval;
let copied = false;

function startGeneration() {
    const secret = document.getElementById('secret').value;
    if (!secret) {
        alert('Please enter a secret key');
        return;
    }

    try {
        totp = new OTPAuth.TOTP({
            secret: OTPAuth.Secret.fromBase32(secret),
            digits: 6,
            period: 30
        });

        if (interval) {
            clearInterval(interval);
        }

        copied = false;
        generateCode(secret);
        interval = setInterval(() => generateCode(secret), 1000);
    } catch (e) {
        alert('Invalid secret key');
    }
}

function generateCode(secret) {
    const otp = totp.generate();
    const remainingTime = totp.period - Math.floor((Date.now() / 1000) % totp.period);

    document.getElementById('otp').textContent = `Your OTP: ${otp}`;
    document.getElementById('expiry').textContent = `Valid for: ${remainingTime} seconds`;
    const now = new Date().toLocaleString();
    const secretInfo = `${secret}|${otp}`;
    document.getElementById('secret-info').innerHTML = `${secretInfo}<br><br>${now}`;

    if (!copied) {
        copyToClipboard(otp);
        copied = true;
    }
}

function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    showNotification();
}

function showNotification() {
    const notification = document.getElementById('copy-notification');
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}
