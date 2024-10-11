function generateQRCode() {
  const url = document.getElementById("url-input").value;
  const qrcodeDiv = document.getElementById("qrcode");

  // Limpa o QR code anterior, se existir
  qrcodeDiv.innerHTML = "";

  if (url) {
    // Gera o QR code sobre a imagem
    const qrcode = new QRCodeStyling({
      width: 150,
      height: 150,
      type: "svg",
      data: url,
      //image: "images/logo.png",
      dotsOptions: {
        color: "#0d6efd", // Cor dos módulos do QR code
        type: "extra-rounded", // Estilo dos módulos: quadrados arredondados
      },
      backgroundOptions: {
        color: "#ffffff", // Cor de fundo do QR code
      },
      imageOptions: {
        crossOrigin: "anonymous", // Isso é necessário caso esteja hospedando a imagem
        width: 40, // Tamanho da logo (se houver)
        height: 40, // Tamanho da logo
        margin: 5,
      },
    });

    // Insere o QR code gerado no container HTML
    qrcode.append(qrcodeDiv);
  }
}
