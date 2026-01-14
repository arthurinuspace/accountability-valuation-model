# 當責模型數據化與視覺化策略 (Data Visualization Strategy)

基於「當責 4.0 模型」的五大維度與特殊算式（乘法與加法的混合），我們可以產出一系列極具管理洞察力（Managerial Insights）的圖表。
這份文件定義了不同層級（個人、團隊、組織）適合的數據呈現方式。

---

## 1. 個人層級 (Individual Level)：角色定位與價值解析

**目標**：讓員工一眼看出自己的「職涯形狀」與「價值組成」。

### Chart 1.1: 當責五維雷達圖 (The Accountability Radar)
*   **類型**：雷達圖 (Radar Chart/Spider Web)
*   **維度**：
    1.  目標釐清 (Clarify) - 頂點
    2.  任務執行 (Execute)
    3.  作法改善 (SOP/Assets)
    4.  超越目標 (Beyond)
    5.  風險補償 (Risk)
*   **圖表洞察 (解讀)**：
    *   **均衡的多邊形**：成熟的領導者 (Leader)。
    *   **偏向「執行 + 釐清」的長條形**：穩定的執行者 (Solid Pilot)。
    *   **突出的「風險」角**：救火隊 (Firefighter)，需關注是否過勞。
    *   **塌陷的「SOP」角**：經驗未傳承，知識孤島 (Silo)。

### Chart 1.2: 價值組成堆疊柱狀圖 (Value Composition Stack)
*   **類型**：堆疊柱狀圖 (Stacked Bar)
*   **X軸**：季度 (Q1, Q2, Q3, Q4)
*   **Y軸**：總分 (Total Value Score)
*   **堆疊成分**：
    *   🟦 **基本盤 (Base)**：釐清 x 執行 (這塊通常最大且穩定)
    *   🟩 **資產盤 (Assets)**：SOP + 超越 (這是成長的關鍵)
    *   🟥 **風險盤 (Risk)**：(這塊代表額外負擔)
*   **圖表洞察**：
    *   如果總分很高，但全是藍色（基本盤） -> 只是在做例行公事。
    *   如果綠色（資產盤）比例逐季上升 -> 此人正在快速成長並為公司累積價值。

---

## 2. 團隊層級 (Team Level)：戰力配置與人才盤點

**目標**：協助主管進行人才佈局 (Staffing) 與接班人計畫 (Succession Planning)。

### Chart 2.1: 「執行-創新」當責矩陣 (Execution-Innovation Matrix)
*   **類型**：散佈圖 (Scatter Plot)
*   **X軸**：基本盤分數 (Operational Excellence) - 代表「現在的產出」
*   **Y軸**：增值盤分數 (Strategic Value/SOP) - 代表「未來的資產」
*   **四象限解讀**：
    *   **右上 (Stars)**：當責領導者。應賦予更艱難的任務或晉升。
    *   **右下 (Soldiers)**：中堅執行者。部門運作的基石，但需鼓勵寫 SOP。
    *   **左上 (Strategists/Innovators)**：點子王，但落地能力弱。需搭配 Soldier 協作。
    *   **左下 (Learners/Underperformers)**：需輔導或觀察。
*   **管理應用**：一個健康的團隊應該是橢圓形分佈（大部分在中間偏右上），不能只有右下（死做）或左上（只出嘴）。

### Chart 2.2: 團隊部門比較 (Cross-Team Value Profile)
*   **類型**：百分比堆疊橫條圖 (100% Stacked Bar)
*   **Y軸**：不同部門 (如 Dev, Sales, HR)
*   **X軸**：三類分數佔比 (基本 vs. 增值 vs. 風險)
*   **圖表洞察**：
    *   **Dev Team**：可能有較高的「SOP (Technical Debt/Docs)」佔比 -> 正常。
    *   **Sales Team**：可能有極高的「基本盤 (業績)」，但 SOP 偏低。
    *   **CS (客服)**：可能有最高的「風險補償 (客訴處理)」。
*   **用途**：讓不同功能的部門理解彼此的價值貢獻模式不同，減少比較上的不公感。

---

## 3. 組織層級 (Org Level)：文化健康度與隱性成本

**目標**：給 CEO 看的 Dashboard，監控公司文化的轉變。

### Chart 3.1: 組織資產累積趨勢 (Organizational Asset Accumulation Trend)
*   **類型**：面積圖 (Area Chart)
*   **數據**：全公司「作法改善 (SOP)」分數的總和。
*   **意義**：
    *   這條線必須是 **向上 (Going Up)** 的。
    *   代表公司不只是在消耗人力 (Burning Labor)，而是在累積智慧 (Building Intelligence)。
    *   如果有下滑，代表大家又開始從頭造輪子 (Reinventing the wheel)。

### Chart 3.2: 目標失準代價 (The Cost of Misalignment)
*   **類型**：瀑布圖 (Waterfall Chart) 或 負值長條圖
*   **數據來源**：計算 `(執行分數 - 釐清分數)` 的差距。
    *   如果 執行 100% 但 釐清只有 50%，中間的落差就是「瞎忙成本」。
*   **圖表洞察**：
    *   量化「做白工」的比例。
    *   如果此數值很高，代表公司策略傳達有問題，基層拼命做但方向不對。

### Chart 3.3: 組織韌性指標 (Resilience Index / Risk Usage)
*   **類型**：熱力圖 (Heatmap) 或 時間序列線圖
*   **數據**：全公司的「風險補償」分數總量。
*   **意義**：
    *   適度的風險分：代表組織有在嘗試新事物。
    *   **暴增的風險分**：代表公司流程崩壞，所有人都在救火。這是組織系統性崩潰的前兆。

---

## 總結：這些圖表回答了什麼問題？

1.  **Who is reliable?** (Chart 1.1, 2.1) -> 決定誰該晉升。
2.  **Are we building assets?** (Chart 3.1) -> 決定公司是否具備護城河。
3.  **Are we burning out?** (Chart 3.3, 1.2) -> 決定何時該補充人力或優化流程。
