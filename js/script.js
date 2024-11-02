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
