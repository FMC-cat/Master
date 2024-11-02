// 加載側邊欄 HTML
fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-container').innerHTML = data;

        const sidebar = document.getElementById('sidebar');
        const toggleSidebarBtn = document.getElementById('toggle-sidebar'); // 縮放圖示按鈕
        const themeToggleBtn = document.getElementById('theme-toggle'); // 模式切換按鈕

        // 縮放按鈕功能
        toggleSidebarBtn.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-collapsed');
            sidebar.classList.toggle('sidebar-expanded');
        });

        // 模式切換功能
        themeToggleBtn.addEventListener('click', () => {
            const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
            if (isDarkMode) {
                document.body.setAttribute('data-theme', 'light');
                toggleSidebarBtn.src = 'black-Nav.svg'; // 切換到淺色模式圖示
            } else {
                document.body.setAttribute('data-theme', 'dark');
                toggleSidebarBtn.src = 'white-Nav.svg'; // 切換到深色模式圖示
            }
        });

        // 初始化，設置正確的圖示
        const initialTheme = document.body.getAttribute('data-theme') || 'light';
        document.body.setAttribute('data-theme', initialTheme);
        toggleSidebarBtn.src = initialTheme === 'dark' ? 'white-Nav.svg' : 'black-Nav.svg';
    })
    .catch(error => console.error('Error loading sidebar:', error));
