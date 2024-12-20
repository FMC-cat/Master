(() => {
  // [雲端安全的 data 保持不變]
  const data = {
    content: "☁️ Cloud and IoT Security",
    children: [
      {
        content: "📑 目錄",
        children: [
          {
            content: "1. 雲端運算 (Cloud Computing)",
            children: [],
            payload: { lines: "3,4", listIndex: 1 },
          },
          {
            content: "2. 雲端安全概念 (Cloud Security Concepts)",
            children: [],
            payload: { lines: "4,5", listIndex: 2 },
          },
          {
            content:
              "3. 雲端安全風險與對策 (Cloud Security Risks and Countermeasures)",
            children: [],
            payload: { lines: "5,6", listIndex: 3 },
          },
          {
            content: "4. 雲端安全服務 (Cloud Security As A Service)",
            children: [],
            payload: { lines: "6,7", listIndex: 4 },
          },
          {
            content:
              "5. 開源雲端安全模組 (An Open-Source Cloud Security Module)",
            children: [],
            payload: { lines: "7,8", listIndex: 5 },
          },
          {
            content: "6. 物聯網 (The Internet of Things, IoT)",
            children: [],
            payload: { lines: "8,9", listIndex: 6 },
          },
          {
            content:
              "7. IoT 安全概念與目標 (IoT Security Concepts and Objectives)",
            children: [],
            payload: { lines: "9,10", listIndex: 7 },
          },
          {
            content:
              "8. 開源 IoT 安全模組 (An Open-Source IoT Security Module)",
            children: [],
            payload: { lines: "10,12", listIndex: 8 },
          },
        ],
        payload: { lines: "0,1" },
      },
      {
        content: "1. 雲端運算 (Cloud Computing)",
        children: [
          {
            content: "🔹 雲端運算定義 (NIST 定義)",
            children: [
              {
                content: "提供隨時隨地的網路存取，快速配置和釋放資源。",
                children: [],
                payload: { lines: "17,19" },
              },
            ],
            payload: { lines: "16,17" },
          },
          {
            content: "🔹 雲端服務模型",
            children: [
              {
                content:
                  "1. <strong>SaaS</strong>: 提供應用軟體服務，避免安裝和維護負擔。",
                children: [],
                payload: { lines: "20,21", listIndex: 1 },
              },
              {
                content:
                  "2. <strong>PaaS</strong>: 提供平台服務，支持應用開發和部署。",
                children: [],
                payload: { lines: "21,22", listIndex: 2 },
              },
              {
                content:
                  "3. <strong>IaaS</strong>: 提供基礎設施資源，如虛擬機器、存儲和網路。",
                children: [],
                payload: { lines: "22,24", listIndex: 3 },
              },
            ],
            payload: { lines: "19,20" },
          },
          {
            content: "🔹 雲端部署模型",
            children: [
              {
                content:
                  "<strong>公有雲</strong>: 由第三方提供，通常是多租戶架構，具有成本優勢但安全性較低。",
                children: [],
                payload: { lines: "25,26" },
              },
              {
                content:
                  "<strong>私有雲</strong>: 內部管理，適合高度安全需求的組織。",
                children: [],
                payload: { lines: "26,27" },
              },
              {
                content:
                  "<strong>社區雲</strong>: 多組織共享，具有相似需求和合規要求。",
                children: [],
                payload: { lines: "27,28" },
              },
              {
                content:
                  "<strong>混合雲</strong>: 結合多種雲模式，敏感數據在私有雲，其他數據在公有雲。",
                children: [],
                payload: { lines: "28,30" },
              },
            ],
            payload: { lines: "24,25" },
          },
        ],
        payload: { lines: "14,15" },
      },
      {
        content: "2. 雲端安全概念 (Cloud Security Concepts)",
        children: [
          {
            content: "🔸 雲端安全參考架構",
            children: [
              {
                content:
                  "<strong>NIST SP 500-292</strong>: 提供雲端服務的高階需求和操作模型，方便理解雲端運行的複雜性。",
                children: [],
                payload: { lines: "35,37" },
              },
            ],
            payload: { lines: "34,35" },
          },
        ],
        payload: { lines: "32,33" },
      },
      {
        content:
          "3. 雲端安全風險與對策 (Cloud Security Risks and Countermeasures)",
        children: [
          {
            content: "🔹 主要安全威脅 (依嚴重性排序)",
            children: [
              {
                content:
                  "1. <strong>數據洩露</strong>: 未授權的數據存取或洩露。",
                children: [],
                payload: { lines: "42,43", listIndex: 1 },
              },
              {
                content:
                  "2. <strong>弱身份和訪問管理</strong>: 認證不足可能導致數據暴露。",
                children: [],
                payload: { lines: "43,44", listIndex: 2 },
              },
              {
                content:
                  "3. <strong>不安全的 API</strong>: API 需強化認證和加密。",
                children: [],
                payload: { lines: "44,45", listIndex: 3 },
              },
              {
                content:
                  "4. <strong>系統漏洞</strong>: 需要定期進行漏洞檢測和補丁管理。",
                children: [],
                payload: { lines: "45,46", listIndex: 4 },
              },
              {
                content: "5. <strong>帳戶劫持</strong>: 使用雙重驗證和監控。",
                children: [],
                payload: { lines: "46,47", listIndex: 5 },
              },
              {
                content:
                  "6. <strong>惡意內部人員</strong>: 加強供應鏈管理與人力資源審查。",
                children: [],
                payload: { lines: "47,48", listIndex: 6 },
              },
              {
                content:
                  "7. <strong>APT</strong>: 採取威脅情報來防範長期未被發現的攻擊。",
                children: [],
                payload: { lines: "48,49", listIndex: 7 },
              },
              {
                content:
                  "8. <strong>數據丟失</strong>: 確保 CSP 的數據備份和冗餘措施。",
                children: [],
                payload: { lines: "49,50", listIndex: 8 },
              },
              {
                content:
                  "9. <strong>缺乏盡職調查</strong>: CSP 應遵循行業最佳實踐。",
                children: [],
                payload: { lines: "50,51", listIndex: 9 },
              },
              {
                content: "10. <strong>濫用雲服務</strong>: 嚴格的註冊和檢查。",
                children: [],
                payload: { lines: "51,52", listIndex: 10 },
              },
              {
                content:
                  "11. <strong>DoS 攻擊</strong>: 採用自動化工具進行威脅檢測。",
                children: [],
                payload: { lines: "52,53", listIndex: 11 },
              },
              {
                content:
                  "12. <strong>共享技術漏洞</strong>: 使用強認證和安全配置。",
                children: [],
                payload: { lines: "53,55", listIndex: 12 },
              },
            ],
            payload: { lines: "41,42" },
          },
          {
            content: "🔸 STRIDE 威脅模型 (Microsoft)",
            children: [
              {
                content:
                  "<strong>Spoofing (身份欺騙)</strong>: 強化認證來防止身份欺騙。",
                children: [],
                payload: { lines: "56,57" },
              },
              {
                content:
                  "<strong>Tampering (數據篡改)</strong>: 保護數據完整性。",
                children: [],
                payload: { lines: "57,58" },
              },
              {
                content:
                  "<strong>Repudiation (否認)</strong>: 使用系統記錄非否認性證據。",
                children: [],
                payload: { lines: "58,59" },
              },
              {
                content:
                  "<strong>Information Disclosure (信息披露)</strong>: 採取加密措施。",
                children: [],
                payload: { lines: "59,60" },
              },
              {
                content: "<strong>DoS (拒絕服務)</strong>: 保證系統可用性。",
                children: [],
                payload: { lines: "60,61" },
              },
              {
                content:
                  "<strong>Elevation of Privilege (權限提升)</strong>: 嚴格的授權控制。",
                children: [],
                payload: { lines: "61,63" },
              },
            ],
            payload: { lines: "55,56" },
          },
        ],
        payload: { lines: "39,40" },
      },
      {
        content: "4. 雲端安全服務 (Cloud Security As A Service)",
        children: [
          {
            content: "🔸 雲端中的開源安全模組",
            children: [
              {
                content:
                  "例如 <strong>OpenStack</strong>，具備身份、令牌、服務目錄和政策等主要服務，支持多租戶 IaaS，適用於公有和私有雲。",
                children: [],
                payload: { lines: "68,70" },
              },
            ],
            payload: { lines: "67,68" },
          },
        ],
        payload: { lines: "65,66" },
      },
      {
        content: "5. 開源雲端安全模組 (An Open-Source Cloud Security Module)",
        children: [
          {
            content: "🔹 OpenStack 的 Keystone 模組",
            children: [
              {
                content:
                  "Keystone 提供身份、令牌、服務目錄和政策等關鍵安全服務，適用於 OpenStack 雲端架構。",
                children: [],
                payload: { lines: "75,77" },
              },
            ],
            payload: { lines: "74,75" },
          },
        ],
        payload: { lines: "72,73" },
      },
      {
        content: "6. 物聯網 (The Internet of Things, IoT)",
        children: [
          {
            content: "🔸 IoT 定義",
            children: [
              {
                content:
                  "IoT 指的是智能設備之間的互聯，設備通常嵌入短距無線收發器以支持人與物、物與物之間的通信。",
                children: [],
                payload: { lines: "82,84" },
              },
            ],
            payload: { lines: "81,82" },
          },
          {
            content: "🔸 IoT 系統的發展",
            children: [
              {
                content: "1. 信息技術 (IT)",
                children: [],
                payload: { lines: "85,86", listIndex: 1 },
              },
              {
                content: "2. 操作技術 (OT)",
                children: [],
                payload: { lines: "86,87", listIndex: 2 },
              },
              {
                content: "3. 個人技術 (如智能手機)",
                children: [],
                payload: { lines: "87,88", listIndex: 3 },
              },
              {
                content: "4. 感測器和執行器技術",
                children: [],
                payload: { lines: "88,90", listIndex: 4 },
              },
            ],
            payload: { lines: "84,85" },
          },
        ],
        payload: { lines: "79,80" },
      },
      {
        content: "7. IoT 安全概念與目標 (IoT Security Concepts and Objectives)",
        children: [
          {
            content: "🔹 IoT 安全挑戰",
            children: [
              {
                content:
                  "大量的攻擊面、設備資源有限、標準分散、更新困難、安全責任不明確等。",
                children: [],
                payload: { lines: "95,97" },
              },
            ],
            payload: { lines: "94,95" },
          },
          {
            content: "🔹 IoT 安全目標",
            children: [
              {
                content:
                  "1. <strong>限制邏輯訪問</strong>: 使用防火牆等分離 IoT 與企業網絡。",
                children: [],
                payload: { lines: "98,99", listIndex: 1 },
              },
              {
                content:
                  "2. <strong>限制物理訪問</strong>: 使用物理訪問控制（如門禁卡、鎖）。",
                children: [],
                payload: { lines: "99,100", listIndex: 2 },
              },
              {
                content:
                  "3. <strong>保護個別 IoT 元件</strong>: 限制用戶權限、部署安全更新。",
                children: [],
                payload: { lines: "100,101", listIndex: 3 },
              },
              {
                content:
                  "4. <strong>防止數據未授權修改</strong>: 在數據傳輸和存儲時保護其完整性。",
                children: [],
                payload: { lines: "101,102", listIndex: 4 },
              },
              {
                content: "5. <strong>事件檢測</strong>: 早期偵測並打斷攻擊鏈。",
                children: [],
                payload: { lines: "102,103", listIndex: 5 },
              },
              {
                content:
                  "6. <strong>在不利條件下保持功能</strong>: 設計冗餘並確保安全降級。",
                children: [],
                payload: { lines: "103,104", listIndex: 6 },
              },
              {
                content:
                  "7. <strong>事件後恢復</strong>: 制定並測試事件響應計劃。",
                children: [],
                payload: { lines: "104,106", listIndex: 7 },
              },
            ],
            payload: { lines: "97,98" },
          },
          {
            content: "🔹 防篡改和檢測",
            children: [
              {
                content: "使用堅硬材料、特殊密封及感測器等來避免和偵測篡改。",
                children: [],
                payload: { lines: "107,109" },
              },
            ],
            payload: { lines: "106,107" },
          },
        ],
        payload: { lines: "92,93" },
      },
      {
        content: "8. 開源 IoT 安全模組 (An Open-Source IoT Security Module)",
        children: [
          {
            content: "🔹 MiniSec 模組",
            children: [
              {
                content:
                  "<strong>MiniSec</strong> 是 TinyOS 系統中的開源安全模組，針對嵌入式設備的記憶體和功耗限制進行優化。",
                children: [],
                payload: { lines: "114,115" },
              },
              {
                content:
                  "<strong>特性</strong>: 提供數據認證、機密性、重放保護，支持單一來源和多來源通訊模式。",
                children: [],
                payload: { lines: "115,116" },
              },
              {
                content:
                  "<strong>加密算法</strong>: 使用 Skipjack 加密演算法（80 位元密鑰），運算效率高且內存佔用少。",
                children: [],
                payload: { lines: "116,118" },
              },
            ],
            payload: { lines: "113,114" },
          },
        ],
        payload: { lines: "111,112" },
      },
    ],
  };
  window.cloudMindmap = markmap.Markmap.create("svg#cloud-mindmap", null, data);
})();
