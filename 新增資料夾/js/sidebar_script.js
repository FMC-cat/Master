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
