

---

````markdown
# 🚀 QR Code Generator using API

A simple and responsive web app that generates **QR Codes instantly** using a public API.  
Built with **HTML, CSS, and JavaScript**, this lightweight tool requires **no backend** — everything runs in your browser.

---

## 📖 About

The **QR Code Generator** is a front-end web application that allows users to generate QR codes dynamically by entering text, links, or any custom data.  
It uses a **QR Code Generation API** to create the QR image in real time and display it instantly on the web page.  
This project is perfect for students, developers, and professionals who want a quick and reliable way to generate QR codes online.

---

## ✅ Features

- 🌀 Real-time QR code generation from any text or URL  
- ⚡ Fast and lightweight — built entirely in HTML, CSS, and JS  
- 🧩 Uses a public QR generation API  
- 📸 Instant display of the generated QR image  
- 💾 One-click download of the generated QR code  
- 📱 Fully responsive UI for both desktop and mobile users  
- 🖥️ 100% client-side — no backend or database required  

---

## ⚙️ How It Works

1. The user enters any **text or URL** in the input box.  
2. On clicking **“Generate QR Code”**, a **fetch request** is sent to the API.  
3. The API returns a **QR code image** URL.  
4. The image is displayed instantly on the web page.  
5. The user can **download or reuse** the generated QR code as needed.  

---

## 🚀 Getting Started

### 🧩 Prerequisites
You only need:
- A modern web browser (Chrome, Firefox, Edge, etc.)
- Internet connection (for accessing the API)

### 🧰 Installation
```bash
# Clone this repository
git clone https://github.com/Anjana-2004/QR-Code-Generator-using-API.git

# Navigate to the project folder
cd QR-Code-Generator-using-API
````

### ▶️ Run the Project

Simply open the **`index.html`** file in your browser.
Enter any text or URL, click **Generate QR Code**, and your QR code appears instantly!

---

## 🗂️ Project Structure

```
QR-Code-Generator-using-API/
│
├── index.html        # Main interface
├── style.css         # Styling and layout
├── script.js         # Logic for API interaction and rendering
└── README.md         # Project documentation
```

---

## 💡 Code Highlights

```javascript
// script.js

const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.length > 0) {
    const apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    qrImage.src = apiURL;
  } else {
    alert("Please enter text or a URL to generate a QR Code!");
  }
}
```

🧠 **Explanation:**

* Takes user input
* Sends it to a free QR Code API
* Returns and displays the QR image dynamically

---

## 🎨 Customization

You can easily:

* Change the **size** of the QR code → modify the `size` parameter (e.g., `300x300`)
* Update **colors** and **fonts** → edit `style.css`
* Add a **download** option:

  ```javascript
  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "QRCode.png";
  link.click();
  ```
* Change the API endpoint if you want to use a different QR service

---

## 🌱 Future Enhancements

* 🎨 Add custom colors for QR codes
* 🌗 Add dark/light theme toggle
* 🖼️ Insert a logo in the center of QR code
* 📱 Make a mobile PWA version
* 💾 Allow offline QR generation using a JS library (`qrcode.js`)

---

## 🤝 Contributing

Contributions are always welcome!
If you’d like to suggest an improvement:

1. Fork this repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Open a Pull Request 🎉

---

## 📄 License

This project is **open-source** and available under the **MIT License**.

---

## 👩‍💻 Author

**Anjana Satish**
🌐 [GitHub Profile](https://github.com/Anjana-2004)
🔗 [Project Link](https://github.com/Anjana-2004/QR-Code-Generator-using-API)

---

### ⭐ Don’t forget to star this repo if you found it useful!

```

---

Would you like me to **add an image preview section at the top** (so your README shows a screenshot or demo GIF of your app)? It makes it look amazing on GitHub.
```
