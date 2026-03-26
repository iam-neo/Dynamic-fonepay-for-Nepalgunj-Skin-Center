import { useState } from 'react';

// Format number with Indian/Nepali comma system: 1,00,00,000
function formatIndianNumber(num) {
    if (!num) return '';
    const parts = num.split('.');
    let intPart = parts[0];
    const decPart = parts.length > 1 ? '.' + parts[1] : '';

    // Remove leading zeros (but keep at least one digit)
    intPart = intPart.replace(/^0+(?=\d)/, '');

    if (intPart.length <= 3) return intPart + decPart;

    // Last 3 digits get one comma, then every 2 digits
    const last3 = intPart.slice(-3);
    const rest = intPart.slice(0, -3);
    const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
    return formatted + decPart;
}

export default function QRForm({ onGenerate }) {
    const [amount, setAmount] = useState('');       // raw numeric string (no commas)
    const [displayAmount, setDisplayAmount] = useState(''); // formatted with commas
    const [remarks, setRemarks] = useState('');

    const handleAmountChange = (e) => {
        // Strip everything except digits and decimal point
        let raw = e.target.value.replace(/[^0-9.]/g, '');
        // Prevent multiple decimal points
        const dotIndex = raw.indexOf('.');
        if (dotIndex !== -1) {
            raw = raw.slice(0, dotIndex + 1) + raw.slice(dotIndex + 1).replace(/\./g, '');
        }
        setAmount(raw);
        setDisplayAmount(formatIndianNumber(raw));
    };

    const handleSubmit = () => {
        const parsed = parseFloat(amount);
        if (!parsed || parsed <= 0) {
            alert('Please enter a valid amount');
            return;
        }
        onGenerate(parsed, remarks || 'Payment');
    };

    return (
        <div className="space-y-6">
            {/* Amount Input */}
            <div className="relative group">
                <label className="block mb-2.5 text-rose-200/70 font-bold text-[0.65rem] uppercase tracking-[0.15em] transition-colors group-focus-within:text-rose-300">
                    Amount (NPR) — Will Auto-fill in App
                </label>
                <div className="relative flex items-center">
                    <span className="absolute left-5 text-white/40 font-bold text-lg pointer-events-none group-focus-within:text-rose-400 transition-colors">Rs.</span>
                    <input
                        type="text"
                        inputMode="decimal"
                        value={displayAmount}
                        onChange={handleAmountChange}
                        placeholder="0.00"
                        className="w-full pl-14 pr-5 py-4 border border-white/10 rounded-xl text-xl font-bold bg-black/40 text-white
                       placeholder-white/20 outline-none
                       focus:border-rose-500/50 focus:bg-black/60 focus:shadow-[0_0_20px_rgba(225,29,72,0.2)]
                       transition-all duration-300"
                    />
                </div>
            </div>

            {/* Remarks Input */}
            <div className="group">
                <label className="block mb-2.5 text-rose-200/70 font-bold text-[0.65rem] uppercase tracking-[0.15em] transition-colors group-focus-within:text-rose-300">
                    Remarks (Optional)
                </label>
                <input
                    type="text"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="e.g., Consultation Fee"
                    className="w-full px-5 py-4 border border-white/10 rounded-xl text-base font-medium bg-black/40 text-white
                     placeholder-white/20 outline-none
                     focus:border-rose-500/50 focus:bg-black/60 focus:shadow-[0_0_20px_rgba(225,29,72,0.2)]
                     transition-all duration-300"
                />
            </div>

            {/* Quick Fill Presets */}
            <div>
                <label className="block mb-2.5 text-rose-200/70 font-bold text-[0.65rem] uppercase tracking-[0.15em]">
                    Quick Fill
                </label>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
                    {[
                        { label: 'Consultation', amount: 500, remarks: 'Consultation Fee' },
                        { label: 'B.Hydra', amount: 3000, remarks: 'Basic Hydrafacial' },
                        { label: 'P.Hydra', amount: 5000, remarks: 'Professional Hydrafacial' },
                        { label: 'D.Hydra', amount: 6500, remarks: 'Delux Hydrafacial' },
                        { label: 'C.Peel', amount: 2500, remarks: 'Chemical Peel' },
                        { label: 'PRP', amount: 5000, remarks: 'Vampire Facial' },
                        { label: 'GFC', amount: 6000, remarks: 'GFC Therapy' },
                        { label: 'Carbon', amount: 3500, remarks: 'Carbon Laser Peel' },
                    ].map((preset) => (
                        <button
                            key={preset.label}
                            type="button"
                            onClick={() => {
                                const raw = String(preset.amount);
                                setAmount(raw);
                                setDisplayAmount(formatIndianNumber(raw));
                                setRemarks(preset.remarks);
                            }}
                            className={`px-3.5 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0
                                ${Number(amount) === preset.amount && remarks === preset.remarks
                                    ? 'bg-rose-500/30 border-rose-500/60 text-rose-200 shadow-[0_0_12px_rgba(225,29,72,0.25)]'
                                    : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white/90'
                                }`}
                        >
                            {preset.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={handleSubmit}
                className="relative w-full py-4 mt-2 overflow-hidden rounded-xl group cursor-pointer"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-purple-700 transition-all duration-300 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-white text-[1.05rem] font-bold tracking-wide flex items-center justify-center gap-2 text-glow">
                    Generate Dynamic QR
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </span>
            </button>
        </div>
    );
}
