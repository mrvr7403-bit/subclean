document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const status = document.getElementById('status');
    const list = document.getElementById('subsList');
    
    if (file) {
        status.innerText = "Анализируем скриншот...";
        status.style.color = "#3b82f6";
        
        // Симуляция работы нейросети (1.5 секунды)
        setTimeout(() => {
            status.innerText = "Готово!";
            status.style.color = "#4ade80";
            
            list.innerHTML = `
                <li><span>Netflix Premium</span> <span class="price">1200 ₽</span></li>
                <li><span>Yandex Plus</span> <span class="price">299 ₽</span></li>
                <li><span>PS Plus</span> <span class="price">850 ₽</span></li>
            `;
        }, 1500);
    }
});