  const quotes = [
            "Tiền tài - Danh vọng - Địa vị - Tình duyên",
            "Hãy là phiên bản tốt nhất của chính mình!",
            "Chỉ một lần sống, hãy sống hết mình.",
            "Đừng chờ đợi, hãy tạo ra cơ hội.",
            "Đam mê là ngọn lửa dẫn lối thành công."
        ];

        let quoteIndex = 0;
        const quoteElement = document.getElementById('quote');

        function changeQuote() {
            quoteElement.style.opacity = 0;
            setTimeout(() => {
                quoteElement.textContent = quotes[quoteIndex];
                quoteIndex = (quoteIndex + 1) % quotes.length;
                quoteElement.style.opacity = 1;
            }, 500);
        }

        changeQuote();
        setInterval(changeQuote, 5000);


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggleBtn.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
  });
});
