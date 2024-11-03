function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleIcon = document.getElementById("toggleSidebar");
    sidebar.classList.toggle("collapsed");
    if (sidebar.classList.contains("collapsed")) {
      toggleIcon.src = "image/white-Nav.svg";
    } else {
      toggleIcon.src = "image/black-Nav.svg";
    }
  }

  function showPage(pageId) {
    // 更新頁面顯示
    const pages = document.getElementsByClassName("page");
    for (let page of pages) {
      page.classList.remove("active");
    }
    document.getElementById(pageId).classList.add("active");

    // 更新側邊欄選中狀態
    const navLinks = document.querySelectorAll(".sidebar-nav a");
    navLinks.forEach((link) => link.classList.remove("active"));
    event.currentTarget.classList.add("active");

    // 調整對應的思維導圖
    switch (pageId) {
      case "ai-security":
        window.aiMindmap && window.aiMindmap.fit();
        break;
      case "cloud-iot":
        window.cloudMindmap && window.cloudMindmap.fit();
        break;
      case "cryptography":
        window.cryptoMindmap && window.cryptoMindmap.fit();
        break;
      case "attack-defense":
        window.attackMindmap && window.attackMindmap.fit();
        break;
      case "vulnerability":
        window.vulnMindmap && window.vulnMindmap.fit();
        break;
    }
  }
