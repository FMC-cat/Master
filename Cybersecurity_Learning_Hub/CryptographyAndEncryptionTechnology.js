(() => {
  // [密碼學的 data 保持不變]
  const data = {
    content: "🔐 Cryptography and Encryption Technology",
    children: [
      {
        content: "📑 目錄",
        children: [
          {
            content: "1. 信息安全概念 (Information Security Concepts)",
            children: [],
            payload: { lines: "3,4", listIndex: 1 },
          },
          {
            content: "2. 對稱密鑰加密 (Symmetric Key Cryptography)",
            children: [],
            payload: { lines: "4,5", listIndex: 2 },
          },
          {
            content: "3. 公鑰加密 (Public Key Cryptography)",
            children: [],
            payload: { lines: "5,6", listIndex: 3 },
          },
          {
            content: "4. 密碼雜湊函數 (Cryptographic Hash Functions)",
            children: [],
            payload: { lines: "6,7", listIndex: 4 },
          },
          {
            content: "5. 數位簽章 (Digital Signatures)",
            children: [],
            payload: { lines: "7,8", listIndex: 5 },
          },
          {
            content: "6. 密鑰管理 (Cryptographic Key Management)",
            children: [],
            payload: { lines: "8,9", listIndex: 6 },
          },
          {
            content: "7. 傳輸層安全協定 (Transport Layer Security, TLS)",
            children: [],
            payload: { lines: "9,11", listIndex: 7 },
          },
        ],
        payload: { lines: "2,3" },
      },
      {
        content: "1. 信息安全概念 (Information Security Concepts)",
        children: [
          {
            content: "🔹 安全目標",
            children: [
              {
                content:
                  "<strong>機密性 (Confidentiality)</strong>: 保護數據免於未授權的披露。",
                children: [],
                payload: { lines: "16,17" },
              },
              {
                content:
                  "<strong>完整性 (Integrity)</strong>: 確保數據和系統未經未授權的改動。",
                children: [],
                payload: { lines: "17,18" },
              },
              {
                content:
                  "<strong>可用性 (Availability)</strong>: 確保系統及服務隨時可供授權用戶使用。",
                children: [],
                payload: { lines: "18,20" },
              },
            ],
            payload: { lines: "15,16" },
          },
          {
            content: "🔹 安全攻擊分類",
            children: [
              {
                content:
                  "<strong>被動攻擊 (Passive Attacks)</strong>: 監聽或分析訊息，不影響系統資源。",
                children: [
                  {
                    content: "釋放訊息內容",
                    children: [],
                    payload: { lines: "22,23" },
                  },
                  {
                    content: "流量分析",
                    children: [],
                    payload: { lines: "23,24" },
                  },
                ],
                payload: { lines: "21,24" },
              },
              {
                content:
                  "<strong>主動攻擊 (Active Attacks)</strong>: 嘗試改變系統資源或其運行。",
                children: [
                  {
                    content: "冒充 (Masquerade)",
                    children: [],
                    payload: { lines: "25,26" },
                  },
                  {
                    content: "重播 (Replay)",
                    children: [],
                    payload: { lines: "26,27" },
                  },
                  {
                    content: "數據修改 (Data Modification)",
                    children: [],
                    payload: { lines: "27,28" },
                  },
                  {
                    content: "拒絕服務 (Denial of Service)",
                    children: [],
                    payload: { lines: "28,30" },
                  },
                ],
                payload: { lines: "24,30" },
              },
            ],
            payload: { lines: "20,21" },
          },
          {
            content: "🔹 認證 (Authentication)",
            children: [
              {
                content:
                  "<strong>同伴實體認證 (Peer Entity Authentication)</strong>",
                children: [],
                payload: { lines: "31,32" },
              },
              {
                content:
                  "<strong>數據來源認證 (Data Origin Authentication)</strong>",
                children: [],
                payload: { lines: "32,34" },
              },
            ],
            payload: { lines: "30,31" },
          },
          {
            content: "🔹 存取控制 (Access Control)",
            children: [
              {
                content: "限制並控制對系統的存取權限，須先進行身份驗證。",
                children: [],
                payload: { lines: "35,37" },
              },
            ],
            payload: { lines: "34,35" },
          },
        ],
        payload: { lines: "13,14" },
      },
      {
        content: "2. 對稱密鑰加密 (Symmetric Key Cryptography)",
        children: [
          {
            content: "🔸 高級加密標準 (AES)",
            children: [
              {
                content:
                  "由美國 NIST 在 2001 年設立，取代 DES 和 3DES，具更高安全性。",
                children: [],
                payload: { lines: "42,43" },
              },
              {
                content:
                  "<strong>AES 參數</strong>: 不同模式與密鑰長度提供不同安全強度。",
                children: [],
                payload: { lines: "43,45" },
              },
            ],
            payload: { lines: "41,42" },
          },
        ],
        payload: { lines: "39,40" },
      },
      {
        content: "3. 公鑰加密 (Public Key Cryptography)",
        children: [
          {
            content: "🔸 公鑰密碼系統的應用",
            children: [
              {
                content: "<strong>加密/解密</strong>: 以接收者公鑰加密訊息。",
                children: [],
                payload: { lines: "50,51" },
              },
              {
                content:
                  "<strong>數位簽章</strong>: 使用發送者私鑰進行訊息簽名。",
                children: [],
                payload: { lines: "51,52" },
              },
              {
                content: "<strong>密鑰交換</strong>: 雙方協作交換會話密鑰。",
                children: [],
                payload: { lines: "52,54" },
              },
            ],
            payload: { lines: "49,50" },
          },
          {
            content: "🔸 RSA 演算法",
            children: [
              {
                content: "最廣泛使用的公鑰加密演算法。",
                children: [],
                payload: { lines: "55,56" },
              },
              {
                content:
                  "透過公開密鑰 PU={e, n} 和私鑰 PR={d, n} 進行加密解密。",
                children: [],
                payload: { lines: "56,58" },
              },
            ],
            payload: { lines: "54,55" },
          },
          {
            content: "🔸 Diffie-Hellman 密鑰交換",
            children: [
              {
                content: "用於安全地交換對稱密鑰，依賴於離散對數計算的困難性。",
                children: [],
                payload: { lines: "59,61" },
              },
            ],
            payload: { lines: "58,59" },
          },
        ],
        payload: { lines: "47,48" },
      },
      {
        content: "4. 密碼雜湊函數 (Cryptographic Hash Functions)",
        children: [
          {
            content: "🔸 雜湊函數特性",
            children: [
              {
                content:
                  "<strong>單向性</strong>: 計算上無法從雜湊值推回原始數據。",
                children: [],
                payload: { lines: "66,67" },
              },
              {
                content:
                  "<strong>碰撞抗性</strong>: 難以找到相同雜湊值的不同數據。",
                children: [],
                payload: { lines: "67,69" },
              },
            ],
            payload: { lines: "65,66" },
          },
        ],
        payload: { lines: "63,64" },
      },
      {
        content: "5. 數位簽章 (Digital Signatures)",
        children: [
          {
            content: "🔸 NIST 數位簽章演算法 (DSA)",
            children: [
              {
                content:
                  "使用 SHA 演算法進行簽章，最新版本包含 RSA 和橢圓曲線簽章。",
                children: [],
                payload: { lines: "74,76" },
              },
            ],
            payload: { lines: "73,74" },
          },
        ],
        payload: { lines: "71,72" },
      },
      {
        content: "6. 密鑰管理 (Cryptographic Key Management)",
        children: [
          {
            content: "🔸 X.509 憑證",
            children: [
              {
                content:
                  "依賴於公鑰密碼技術和數位簽章，由受信的憑證授權機構 (CA) 發行。",
                children: [],
                payload: { lines: "81,82" },
              },
              {
                content:
                  "<strong>憑證元素</strong>: 版本、序號、簽名演算法、發行者名稱、有效期、使用者公鑰等。",
                children: [],
                payload: { lines: "82,84" },
              },
            ],
            payload: { lines: "80,81" },
          },
        ],
        payload: { lines: "78,79" },
      },
      {
        content: "7. 傳輸層安全協定 (Transport Layer Security, TLS)",
        children: [
          {
            content: "🔸 TLS 協定概述",
            children: [
              {
                content:
                  "定義於 RFC 5246，從 SSL 發展而來，用於保護互聯網數據傳輸。",
                children: [],
                payload: { lines: "89,90" },
              },
              {
                content: "<strong>服務</strong>: 保密性、訊息完整性。",
                children: [],
                payload: { lines: "90,92" },
              },
            ],
            payload: { lines: "88,89" },
          },
          {
            content: "🔸 TLS 記錄協定",
            children: [
              {
                content:
                  "<strong>機密性</strong>: 使用協商的密鑰加密 TLS 資料。",
                children: [],
                payload: { lines: "93,94" },
              },
              {
                content:
                  "<strong>訊息完整性</strong>: 使用訊息認證碼 (MAC) 保護資料。",
                children: [],
                payload: { lines: "94,96" },
              },
            ],
            payload: { lines: "92,93" },
          },
          {
            content: "🔸 SSL/TLS 攻擊類型",
            children: [
              {
                content: "<strong>握手協定攻擊</strong>",
                children: [],
                payload: { lines: "97,98" },
              },
              {
                content: "<strong>記錄與應用數據協定攻擊</strong>",
                children: [],
                payload: { lines: "98,99" },
              },
              {
                content: "<strong>PKI 攻擊</strong>",
                children: [],
                payload: { lines: "99,101" },
              },
            ],
            payload: { lines: "96,97" },
          },
          {
            content: "🔸 TLS 1.3 特性",
            children: [
              {
                content: "移除部分弱安全選項，如壓縮、非認證加密等。",
                children: [],
                payload: { lines: "102,103" },
              },
              {
                content:
                  "採用 Diffie-Hellman 或橢圓曲線 Diffie-Hellman 進行密鑰交換。",
                children: [],
                payload: { lines: "103,105" },
              },
            ],
            payload: { lines: "101,102" },
          },
          {
            content: "🔸 HTTPS",
            children: [
              {
                content: "HTTP 的加密版本，提供加密、數據完整性、認證。",
                children: [],
                payload: { lines: "106,108" },
              },
            ],
            payload: { lines: "105,106" },
          },
        ],
        payload: { lines: "86,87" },
      },
      {
        content: "8. 安全殼層協定 (Secure Shell, SSH)",
        children: [
          {
            content: "🔹 SSH 功能",
            children: [
              {
                content:
                  "提供安全的遠端登入與數據傳輸能力，是 Telnet 的安全替代方案。",
                children: [],
                payload: { lines: "113,114" },
              },
              {
                content:
                  "<strong>版本</strong>: SSH1（早期）和 SSH2（改進安全性）。",
                children: [],
                payload: { lines: "114,116" },
              },
            ],
            payload: { lines: "112,113" },
          },
          {
            content: "🔹 SSH 認證方法",
            children: [
              {
                content:
                  "<strong>公鑰認證</strong>: 客戶端使用私鑰簽名，伺服器驗證。",
                children: [],
                payload: { lines: "117,118" },
              },
              {
                content: "<strong>密碼認證</strong>: 傳送加密密碼。",
                children: [],
                payload: { lines: "118,119" },
              },
              {
                content:
                  "<strong>主機認證</strong>: 客戶端主機的認證，而非用戶直接認證。",
                children: [],
                payload: { lines: "119,121" },
              },
            ],
            payload: { lines: "116,117" },
          },
          {
            content: "🔹 通道機制",
            children: [
              {
                content:
                  "<strong>通道類型</strong>: 遠端執行、X11、TCP 轉發 (Port Forwarding)。",
                children: [],
                payload: { lines: "122,123" },
              },
              {
                content:
                  "<strong>通道生命週期</strong>: 開通、數據傳輸、關閉。",
                children: [],
                payload: { lines: "123,125" },
              },
            ],
            payload: { lines: "121,122" },
          },
        ],
        payload: { lines: "110,111" },
      },
    ],
    payload: { lines: "0,1" },
  };
  window.cryptoMindmap = markmap.Markmap.create(
    "svg#crypto-mindmap",
    null,
    data
  );
})();
