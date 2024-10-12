function generateQRCode() {
  const url = document.getElementById("url-input").value;
  const qrcodeDiv = document.getElementById("qrcode");
  const urlInput = document.getElementById("url-input");

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

  //TODO Criar uma lógica para que ao clicar no input, o mesmo deve ser limpo
  urlInput.addEventListener("click", function () {
    urlInput.value = ""; // Limpa o valor do input
  });
}
