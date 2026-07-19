// QR Generator
// Library: https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js

const input = document.getElementById("text");
const button = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrcode");

function generateQRCode() {
    const text = input.value.trim();

    if (text === "") {
        alert("Masukkan teks atau URL terlebih dahulu!");
        input.focus();
        return;
    }

    // Hapus QR sebelumnya
    qrContainer.innerHTML = "";

    // Generate QR baru
    new QRCode(qrContainer, {
        text: text,
        width: 220,
        height: 220,
        colorDark: "#b30000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Klik tombol
button.addEventListener("click", generateQRCode);

// Tekan Enter
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        generateQRCode();
    }
});
