
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Form yuborilishini to‘xtatadi

    const botToken = "";
    const chatId = "";

    // Form ma'lumotlarini olish
    const name = this.name.value;
    const email = this.email.value;
    const password = this.password.value;
    const people = this.people.value;
    const time = this.time.value;
    const message = this.message.value;

    // Telegramga yuboriladigan matn
    const telegramMessage = 
`📩 Yangi Rezervatsiya
👤 Ism: ${name}
📧 Email: ${email}
🔑 Parol: ${password}
👥 Odamlar soni: ${people}
⏰ Kelish vaqti: ${time}
📝 Xabar: ${message}`;

    // Telegram API orqali yuborish
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        alert("Xabar muvaffaqiyatli yuborildi!");
        this.reset(); // Formani tozalaydi
      } else {
        alert("Xabar yuborishda xatolik: " + data.description);
      }
    })
    .catch(error => {
      console.error("Xatolik:", error);
      alert("Xabar yuborilmadi.");
    });
  });

