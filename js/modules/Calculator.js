/**
 * Calculator.js
 * Handles the interactive Accountability Score Calculator logic.
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
            category: document.getElementById('calc-category')
        };

        this.init();
    }

    init() {
        // Attach event listeners to all inputs
        Object.values(this.inputs).forEach(input => {
            if (input) {
                input.addEventListener('input', () => this.calculate());
            }
        });

        // Initial calculation
        this.calculate();
    }

    calculate() {
        // Get values
        const c = parseFloat(this.inputs.clarify.value); // 0.8 - 1.2
        const e = parseFloat(this.inputs.execute.value); // 0.8 - 1.2
        const s = parseFloat(this.inputs.sop.value);     // 0 - 50 (%)
        const b = parseFloat(this.inputs.innovation.value); // 0 - 50 (%)
        const r = parseFloat(this.inputs.risk.value);    // 0 - 20

        // Update display values
        this.displays.clarify.textContent = `${(c * 100).toFixed(0)}%`;
        this.displays.execute.textContent = `${(e * 100).toFixed(0)}%`;
        this.displays.sop.textContent = `+${s}%`;
        this.displays.innovation.textContent = `+${b}%`;
        this.displays.risk.textContent = `+${r}`;

        // Formula: (C% * E%) * 200 + (S% * 100) + (B% * 100) + R
        // Note: Inputs c, e are multipliers (e.g. 1.0). Formula says (100% * 100%) * X is messy in JS.
        // Let's align with the official doc: Base = C * E * 200.
        // If C=1.0, E=1.0, Base = 200.
        
        const baseScore = c * e * 200;
        const assetScore = (s / 100 * 100) + (b / 100 * 100); // percents are just points here?
        // Let's re-read the formula visual:
        // (Clarify% * Execute%) * 200.
        // If 100% * 100% = 1.0 * 200 = 200. Correct.
        
        // (SOP% * 100) + (Beyond% * 100)
        // If SOP is 10%, it adds 10 points? 
        // Let's assume input 10 means 10%. 10% * 100 = 10 points. Correct.
        
        const sopPoints = s;
        const beyondPoints = b;
        
        const total = Math.round(baseScore + sopPoints + beyondPoints + r);

        // Update Total
        this.displays.total.textContent = total;

        // Determine Category
        let category = '';
        let colorClass = '';

        if (total >= 300) {
            category = '🏆 當責經營者 (Business Operator)';
            colorClass = 'score-high';
        } else if (total >= 240) {
            category = '⭐ 當責領導者 (Accountability Leader)';
            colorClass = 'score-high';
        } else if (total >= 200) {
            category = '✅ 當責實踐者 (Accountability Practitioner)';
            colorClass = 'score-mid';
        } else if (total >= 100) {
            category = '⚠️ 需要改善 (Needs Improvement)';
            colorClass = 'score-low';
        } else {
            category = '❌ 不適任 (Unqualified)';
            colorClass = 'score-bad';
        }

        this.displays.category.textContent = category;
        this.displays.total.className = `total-score ${colorClass}`;
    }
}
