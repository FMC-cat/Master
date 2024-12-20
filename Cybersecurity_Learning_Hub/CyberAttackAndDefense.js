(() => {
  // [網路攻防的 data 保持不變]
  const data = {
    content: "🛡️ Cyber Attack and Defense",
    children: [
      {
        content: "📑 目錄",
        children: [
          {
            content: "1. 介紹 (Introduction)",
            children: [],
            payload: { lines: "3,4", listIndex: 1 },
          },
          {
            content: "2. 網路殺傷鏈 (Cyber Kill Chain)",
            children: [
              {
                content: "偵察 (Reconnaissance)",
                children: [],
                payload: { lines: "5,6" },
              },
              {
                content: "武器化 (Weaponization)",
                children: [],
                payload: { lines: "6,7" },
              },
              {
                content: "傳送 (Delivery)",
                children: [],
                payload: { lines: "7,8" },
              },
              {
                content: "利用 (Exploitation)",
                children: [],
                payload: { lines: "8,9" },
              },
              {
                content: "安裝 (Installation)",
                children: [],
                payload: { lines: "9,10" },
              },
              {
                content: "指揮與控制 (Command &amp; Control, C2)",
                children: [],
                payload: { lines: "10,11" },
              },
              {
                content: "執行目標 (Actions on Objectives)",
                children: [],
                payload: { lines: "11,13" },
              },
            ],
            payload: { lines: "4,13", listIndex: 2 },
          },
        ],
        payload: { lines: "2,3" },
      },
      {
        content: "1. 介紹 (Introduction)",
        children: [
          {
            content: "🔹 網路威脅的日益複雜化",
            children: [
              {
                content:
                  "隨著網路威脅越來越複雜，安全措施必須變得更加動態和強健。",
                children: [],
                payload: { lines: "18,19" },
              },
              {
                content:
                  "<strong>道德駭客</strong>: 使用駭客技術強化系統安全，通常由白帽駭客執行。",
                children: [],
                payload: { lines: "19,20" },
              },
              {
                content:
                  "<strong>滲透測試</strong>: 模擬潛在攻擊者的手段以發現和加強系統弱點。",
                children: [],
                payload: { lines: "20,22" },
              },
            ],
            payload: { lines: "17,18" },
          },
          {
            content: "🔹 Cyber Kill Chain 概念",
            children: [
              {
                content:
                  "<strong>網路殺傷鏈 (CKC)</strong>: 七階段模型，協助理解並反制高階持續性威脅 (APT) 攻擊者的行為。",
                children: [],
                payload: { lines: "23,25" },
              },
            ],
            payload: { lines: "22,23" },
          },
        ],
        payload: { lines: "15,16" },
      },
      {
        content: "2. 網路殺傷鏈 (Cyber Kill Chain)",
        children: [
          {
            content: "🔸 偵察 (Reconnaissance)",
            children: [
              {
                content:
                  "1. <strong>被動偵察</strong>: 非侵入性收集目標系統的信息，避免被偵測。",
                children: [],
                payload: { lines: "30,31", listIndex: 1 },
              },
              {
                content:
                  "2. <strong>主動偵察</strong>: 直接與目標互動以獲取更多詳細資訊，例如 IP 位址和網路服務。",
                children: [],
                payload: { lines: "31,32", listIndex: 2 },
              },
              {
                content:
                  "3. <strong>人為因素的弱點</strong>: 許多系統的弱點來自於人為錯誤或內部洩漏。",
                children: [],
                payload: { lines: "32,34", listIndex: 3 },
              },
            ],
            payload: { lines: "29,30" },
          },
          {
            content: "🔸 武器化 (Weaponization)",
            children: [
              {
                content:
                  "<strong>製作惡意代碼</strong>: 設計特定的攻擊工具來利用系統弱點，包含後門、反向殼及綁定殼等。",
                children: [],
                payload: { lines: "35,36" },
              },
              {
                content:
                  "<strong>Metasploit 框架</strong>: 滲透測試中常用的工具，提供大量的漏洞利用方法。",
                children: [],
                payload: { lines: "36,38" },
              },
            ],
            payload: { lines: "34,35" },
          },
          {
            content: "🔸 傳送 (Delivery)",
            children: [
              {
                content: "將惡意代碼傳送至目標的階段，常見方式包含：",
                children: [
                  {
                    content:
                      "<strong>釣魚攻擊</strong>: 利用社交工程，通過電子郵件或訊息進行騙取。",
                    children: [],
                    payload: { lines: "40,41" },
                  },
                  {
                    content:
                      "<strong>高階持續威脅 (APT)</strong>: 針對特定目標進行高效且協調的攻擊。",
                    children: [],
                    payload: { lines: "41,43" },
                  },
                ],
                payload: { lines: "39,43" },
              },
            ],
            payload: { lines: "38,39" },
          },
          {
            content: "🔸 利用 (Exploitation)",
            children: [
              {
                content:
                  "攻擊者利用系統漏洞來實施惡意代碼並獲取未授權的存取權限。",
                children: [],
                payload: { lines: "44,45" },
              },
              {
                content: "常見漏洞：",
                children: [
                  {
                    content:
                      "<strong>伺服器端請求偽造 (SSRF)</strong>: 利用伺服器來存取其他內部資源。",
                    children: [],
                    payload: { lines: "46,47" },
                  },
                  {
                    content:
                      "<strong>緩衝區溢位</strong>: 修改程式行為，造成惡意代碼的執行。",
                    children: [],
                    payload: { lines: "47,48" },
                  },
                  {
                    content:
                      "<strong>暴力破解</strong>: 嘗試所有可能的密碼組合來解鎖系統或數據。",
                    children: [],
                    payload: { lines: "48,50" },
                  },
                ],
                payload: { lines: "45,50" },
              },
            ],
            payload: { lines: "43,44" },
          },
          {
            content: "🔸 安裝 (Installation)",
            children: [
              {
                content:
                  "攻擊者在系統中建立穩定的據點，並尋求權限提升來取得更高級的訪問。",
                children: [],
                payload: { lines: "51,52" },
              },
              {
                content:
                  "<strong>附加核心監視器 (AKO)</strong>: 一種防禦工具，用於監控並防止未授權的權限提升。",
                children: [],
                payload: { lines: "52,54" },
              },
            ],
            payload: { lines: "50,51" },
          },
          {
            content: "🔸 指揮與控制 (Command &amp; Control, C2)",
            children: [
              {
                content: "攻擊者在系統中建立指揮控制管道，操控受感染的系統。",
                children: [],
                payload: { lines: "55,56" },
              },
              {
                content: "技術：",
                children: [
                  {
                    content:
                      "<strong>Tor 網域前置</strong>: 使用 Tor 網路掩蓋 C2 流量。",
                    children: [],
                    payload: { lines: "57,58" },
                  },
                  {
                    content:
                      "<strong>域名生成算法 (DGA)</strong>: 動態生成多個域名來與 C2 伺服器通訊，難以阻止。",
                    children: [],
                    payload: { lines: "58,60" },
                  },
                ],
                payload: { lines: "56,60" },
              },
            ],
            payload: { lines: "54,55" },
          },
          {
            content: "🔸 執行目標 (Actions on Objectives)",
            children: [
              {
                content: "攻擊者達成其最終目標的階段，常見的攻擊目標包含：",
                children: [
                  {
                    content:
                      "<strong>勒索軟體</strong>: 加密受害者數據並要求贖金。",
                    children: [],
                    payload: { lines: "62,63" },
                  },
                  {
                    content:
                      "<strong>加密劫持</strong>: 未經授權地使用受害者的計算資源進行加密貨幣挖掘。",
                    children: [],
                    payload: { lines: "63,65" },
                  },
                ],
                payload: { lines: "61,65" },
              },
            ],
            payload: { lines: "60,61" },
          },
        ],
        payload: { lines: "27,28" },
      },
    ],
    payload: { lines: "0,1" },
  };
  window.attackMindmap = markmap.Markmap.create(
    "svg#attack-mindmap",
    null,
    data
  );
})();
