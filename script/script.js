function generateQRCode() {
  const url = document.getElementById("url-input").value;
  const qrcodeDiv = document.getElementById("qrcode");

  // Limpa o QR code
  qrcodeDiv.innerHTML = "";

  if (url) {
    // Gera o QR code sobre a imagem
    const qrcode = new QRCodeStyling({
      width: 150,
      height: 150,
      type: "svg",
      data: url,
      dotsOptions: {
        color: "#3685ff",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#ffffff",
      },
    });

    qrcode.append(qrcodeDiv);

    // Aanimação CSS
    qrcodeDiv.classList.add("qrcode-animation");
  }
}
