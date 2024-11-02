/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const toggleIcon = document.getElementById('toggle-icon');
    const themeIcon = document.getElementById('theme-icon');

    // 側邊欄切換
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        updateIcons();
    });

    // 主題切換
    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        updateIcons();
    });

    // 更新圖示
    function updateIcons() {
        const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
        const isCollapsed = sidebar.classList.contains('collapsed');

        // 更新導航圖示
        toggleIcon.src = isDarkMode ? '/image/white-Nav.svg' : '/image/black-Nav.svg';

        // 更新主題圖示
        themeIcon.src = isDarkMode ? '/image/theme-dark.svg' : '/image/theme-light.svg';
    }

    // 初始化
    updateIcons();
});