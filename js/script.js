// 深色/淺色模式切換功能
const themeToggleButton = document.getElementById("theme-toggle");
themeToggleButton.addEventListener("click", () => {
    document.body.dataset.theme =
        document.body.dataset.theme === "dark" ? "light" : "dark";
});

// 上傳 HTML 檔案並顯示內容
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", function() {
    const file = this.files[0];
    if (file && file.type === "text/html") {
        const reader = new FileReader();
        reader.onload = function(event) {
            const content = event.target.result;
            document.getElementById("file-content").innerHTML = content;
        };
        reader.readAsText(file);
    } else {
        alert("請上傳一個 HTML 檔案！");
    }
});
// 加載側邊欄 HTML
fetch('/Module/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;

        // 選取元素
        const sidebar = document.getElementById('sidebar');
        const toggleSidebarBtn = document.getElementById('toggle-sidebar'); // 縮放圖示按鈕
        const themeToggleBtn = document.getElementById('theme-toggle'); // 模式切換按鈕

        // 設置縮放按鈕功能
        toggleSidebarBtn.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-collapsed');
            sidebar.classList.toggle('sidebar-expanded');
        });

        // 設置主題模式切換功能
        themeToggleBtn.addEventListener('click', () => {
            const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
            const newTheme = isDarkMode ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);

            // 根據主題切換圖示
            toggleSidebarBtn.src = newTheme === 'dark' ? '/image/white-Nav.svg' : '/image/black-Nav.svg';
        });

        // 初始化主題及圖示
        const initialTheme = document.body.getAttribute('data-theme') || 'light';
        document.body.setAttribute('data-theme', initialTheme);
        toggleSidebarBtn.src = initialTheme === 'dark' ? '/image/white-Nav.svg' : '/image/black-Nav.svg';
    })
    .catch(error => console.error('Error loading sidebar:', error));
