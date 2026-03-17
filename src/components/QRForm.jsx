import { useState } from 'react';

export default function QRForm({ onGenerate }) {
    const [amount, setAmount] = useState('');
    const [remarks, setRemarks] = useState('');

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
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        min="1"
                        step="0.01"
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
