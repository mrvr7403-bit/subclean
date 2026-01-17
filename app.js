document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const status = document.getElementById('status');
    const list = document.getElementById('subsList');
    
    if (file) {
        status.innerText = "Сканируем текст...";
        status.style.color = "#3b82f6";
        list.innerHTML = ""; 

        // Запуск распознавания (OCR)
        Tesseract.recognize(file, 'rus+eng').then(({ data: { text } }) => {
            status.innerText = "Анализ завершен!";
            status.style.color = "#4ade80";

            // База для поиска
            const subscriptions = [
                { id: 'netflix', name: 'Netflix', price: '12.99 $' },
                { id: 'yandex', name: 'Яндекс Плюс', price: '299 ₽' },
                { id: 'spotify', name: 'Spotify', price: '169 ₽' },
                { id: 'youtube', name: 'YouTube Premium', price: '199 ₽' },
                { id: 'tlg', name: 'Telegram Premium', price: '299 ₽' }
            ];

            let foundAny = false;
            const lowerText = text.toLowerCase();

            subscriptions.forEach(sub => {
                if (lowerText.includes(sub.id) || lowerText.includes(sub.name.toLowerCase())) {
                    list.innerHTML += `<li><span>${sub.name}</span> <span class="price">${sub.price}</span></li>`;
                    foundAny = true;
                }
            });

            if (!foundAny) {
                list.innerHTML = "<li>Подписки не найдены. Попробуй другой скриншот.</li>";
            }
        }).catch(err => {
            console.error(err);
            status.innerText = "Ошибка распознавания";
            status.style.color = "#ef4444";
        });
    }
});