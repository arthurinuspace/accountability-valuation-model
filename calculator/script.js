/**
 * Calculator.js (Standalone)
 */

class Calculator {
    constructor() {
        this.inputs = {
            clarify: document.getElementById('calc-clarify'),
            execute: document.getElementById('calc-execute'),
            sop: document.getElementById('calc-sop'),
            innovation: document.getElementById('calc-innovation'),
            risk: document.getElementById('calc-risk')
        };
        
        this.displays = {
            clarify: document.getElementById('disp-clarify'),
            execute: document.getElementById('disp-execute'),
            sop: document.getElementById('disp-sop'),
            innovation: document.getElementById('disp-innovation'),
            risk: document.getElementById('disp-risk'),
            total: document.getElementById('calc-total'),
            category: document.getElementById('calc-category'),
            desc: document.getElementById('calc-desc'),
            descClarify: document.getElementById('desc-clarify'),
            descExecute: document.getElementById('desc-execute')
        };

        this.init();
    }

    init() {
        Object.values(this.inputs).forEach(input => {
            if (input) {
                input.addEventListener('input', () => this.calculate());
            }
        });
        this.calculate();
    }

    getTierInfo(value, type) {
        // Value 0 ~ 1.2
        if (value < 0.8) {
            return {
                text: type === 'clarify' 
                    ? '⚠️ 方向模糊：目標定義不清，容易做白工。' 
                    : '⚠️ 執行落後：品質或進度未達標，需補救。',
                class: 'bad'
            };
        } else if (value <= 1.0) {
           return {
                text: type === 'clarify' 
                    ? '✅ 標準對齊：理解吻合預期，能完成交辦。' 
                    : '✅ 如期交付：品質穩定，符合驗收標準。',
                class: 'good'
            }; 
        } else if (value < 1.2) {
            return {
                text: type === 'clarify' 
                    ? '💎 精準洞察：預判潛在需求，重新定義核心問題。' 
                    : '💎 超乎預期：超前部署或品質卓越，創造驚喜。',
                class: 'excellent'
            };
        } else {
             return {
                text: type === 'clarify' 
                    ? '👑 領袖視野：跳脫框架，為組織開創全新賽道。' 
                    : '👑 完美典範：教科書等級的執行，無可挑剔。',
                class: 'legend'
            };
        }
    }

    getValueTierInfo(value, type) {
        // Value 0 ~ 200
        if (value === 0) {
            return {
                text: '⚪️ 維持現狀：完成份內工作，未留下額外資產。',
                class: 'neutral'
            };
        } else if (value < 40) {
            return {
                text: type === 'sop'
                    ? '🌱 初步嘗試：主動整理個人筆記或工作文件。'
                    : '🌱 點子萌芽：提出改善建議，展現主動性。',
                class: 'good'
            };
        } else if (value < 100) {
            return {
                text: type === 'sop'
                    ? '🌿 具體優化：建立部門內可用的 SOP，減少重複失誤。'
                    : '🌿 具體產出：實現小規模創新，優化既有流程。',
                class: 'excellent'
            };
        } else if (value < 150) {
            return {
                text: type === 'sop'
                    ? '🌳 組織資產：建立跨部門通用系統，顯著提升全公司效率。'
                    : '🌳 顯著價值：帶來額外營收或大幅降低成本。',
                class: 'legend'
            };
        } else if (value < 200) {
            return {
                text: type === 'sop'
                    ? '🦄 產業標竿：建立業界領先的方法論，成為公司護城河。'
                    : '🦄 卓越貢獻：取得專利、獲獎或開創全新商業模式。',
                class: 'mythic'
            };
        } else {
             return {
                text: type === 'sop'
                    ? '🪐 重新發明了行業標準，定義了未來十年的運作模式。'
                    : '🪐 創造了全新的市場或技術典範，改變了人類的生活方式。',
                // Re-use mythic or create a new 'godlike' class if needed. 
                // Mythic style (Gold/Orange) fits well, adding extra emoji.
                class: 'mythic' 
            };
        }
    }

    getRiskTierInfo(value) {
        if (value === 0) {
            return {
                text: '⚪️ 正常維運：未發生顯著風險或無需額外補償。',
                class: 'neutral'
            };
        } else if (value < 10) {
            return {
                text: '❤️ 用心投入：感謝你在困難時刻的堅持與付出。',
                class: 'good'
            };
        } else if (value < 20) {
            return {
                text: '🏆 公開表揚：你的危機處理能力挽救了局勢，值得全公司學習。',
                class: 'legend' // Reusing legend (Purple) for Public Praise
            };
        } else {
            return {
                text: '💐 最高致意：向你在逆境中展現的專業與擔當，致上最高的敬意。',
                class: 'mythic' // Reusing mythic (Gold) for Highest Gratitude
            };
        }
    }

    calculate() {
        const c = parseFloat(this.inputs.clarify.value);
        const e = parseFloat(this.inputs.execute.value);
        const s = parseFloat(this.inputs.sop.value);
        const b = parseFloat(this.inputs.innovation.value);
        const r = parseFloat(this.inputs.risk.value);

        // Update Sub-Descriptions
        const cInfo = this.getTierInfo(c, 'clarify');
        this.displays.descClarify.textContent = cInfo.text;
        this.displays.descClarify.className = `input-sub-desc ${cInfo.class}`;

        const eInfo = this.getTierInfo(e, 'execute');
        this.displays.descExecute.textContent = eInfo.text;
        this.displays.descExecute.className = `input-sub-desc ${eInfo.class}`;

        const sInfo = this.getValueTierInfo(s, 'sop');
        // Assuming elements exist (added dynamically or via HTML update)
        if (!this.displays.descSop) {
             this.displays.descSop = document.getElementById('desc-sop');
             this.displays.descInnovation = document.getElementById('desc-innovation');
             this.displays.descRisk = document.getElementById('desc-risk');
        }
        if (this.displays.descSop) {
            this.displays.descSop.textContent = sInfo.text;
            this.displays.descSop.className = `input-sub-desc ${sInfo.class}`;
        }

        const bInfo = this.getValueTierInfo(b, 'innovation');
        if (this.displays.descInnovation) {
            this.displays.descInnovation.textContent = bInfo.text;
            this.displays.descInnovation.className = `input-sub-desc ${bInfo.class}`;
        }
        
        const rInfo = this.getRiskTierInfo(r);
        if (this.displays.descRisk) {
            this.displays.descRisk.textContent = rInfo.text;
            this.displays.descRisk.className = `input-sub-desc ${rInfo.class}`;
        }

        // Update badges logic
        const updateBadge = (element, value) => {
            element.textContent = `+${value}%`;
            // Remove previous classes
            element.classList.remove('positive', 'warning');
            
            if (value > 100) {
                element.classList.add('warning');
            } else {
                element.classList.add('positive');
            }
        };

        this.displays.clarify.textContent = `${(c * 100).toFixed(0)}%`;
        this.displays.execute.textContent = `${(e * 100).toFixed(0)}%`;
        
        updateBadge(this.displays.sop, s);
        updateBadge(this.displays.innovation, b);
        
        this.displays.risk.textContent = `+${r}`;

        // Formula
        const baseScore = c * e * 200;
        const assetScore = s + b; // Assuming input steps match points
        const riskScore = r;
        const total = Math.round(baseScore + assetScore + riskScore);

        // Animate count up roughly
        this.displays.total.textContent = total;

        // Logic
        let category = '';
        let colorClass = '';
        let desc = '';

        // Logic: 5 Exponential Levels
        category = '';
        colorClass = '';
        desc = '';

        if (total >= 550) {
            // Level 5: Legend (>80% of Max)
            category = '👑 傳奇經營者 (Legendary Operator)';
            colorClass = 'score-legend';
            desc = '重新定義了遊戲規則！其貢獻已超越職位框架，創造了巨大的商業價值與系統資產。';
        } else if (total >= 400) {
            // Level 4: Lever (High Base + High Value Add)
            category = '🚀 組織槓桿者 (Organizational Lever)';
            colorClass = 'score-high';
            desc = '一人抵多人用。不僅基本盤完美，還透過 SOP 或創新為組織帶來了槓桿效應。';
        } else if (total >= 280) {
            // Level 3: Practitioner (Base + Some Value Add)
            category = '⭐ 當責實踐者 (Accountability Practitioner)';
            colorClass = 'score-mid';
            desc = '中堅力量。除了守住基本盤，也開始在「增值盤」有所貢獻，值得培養。';
        } else if (total >= 200) {
            // Level 2: Competent (Base Only)
            category = '✅ 稱職執行者 (Competent Performer)';
            colorClass = 'score-low'; // Yellowish, meaning "OK but no leverage"
            desc = '守住了基本盤 (200分)，但在增值盤未有貢獻。即便執行力滿分 (1.2x1.2) 也僅能達到 288 分，無法突破 300 分門檻。';
        } else {
            // Level 1: Underperformer
            category = '❌ 不適任 (Underperformer)';
            colorClass = 'score-bad';
            desc = '連基本盤都未能守住。可能存在釐清不足 (做白工) 或執行力嚴重落差。';
        }

        this.displays.category.textContent = category;
        this.displays.desc.textContent = desc;
        
        // Reset classes
        this.displays.total.className = 'total-score';
        if (colorClass === 'score-legend') {
             this.displays.total.classList.add('score-legend');
        } else {
             this.displays.total.classList.add(colorClass); 
             // Remove inline styles if any from previous legend gradient
             this.displays.total.style = ''; 
        } 
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
