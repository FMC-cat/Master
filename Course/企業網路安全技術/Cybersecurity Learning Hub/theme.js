// 深色/淺色模式切換
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    document.body.dataset.theme = currentTheme;
    localStorage.setItem('theme', currentTheme);
});

// 初始化主題設定
document.body.dataset.theme = localStorage.getItem('theme') || 'light';
