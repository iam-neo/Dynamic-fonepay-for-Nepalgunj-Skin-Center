import { useState } from 'react';

export default function QRForm({ onGenerate }) {
    const [amount, setAmount] = useState('');
    const [remarks, setRemarks] = useState('Payment');

    const handleSubmit = () => {
        const parsed = parseFloat(amount);
        if (!parsed || parsed <= 0) {
            alert('Please enter a valid amount');
            return;
        }
        onGenerate(parsed, remarks || 'Payment');
    };

    return (
        <div className="space-y-5">
            {/* Amount Input */}
            <div>
                <label className="block mb-2 text-gray-600 font-semibold text-xs uppercase tracking-wide">
                    Amount (NPR) — Will Auto-fill in App
                </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="1"
                    step="0.01"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-lg bg-gray-50 
                     focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 
                     transition-all duration-200"
                />
            </div>

            {/* Remarks Input */}
            <div>
                <label className="block mb-2 text-gray-600 font-semibold text-xs uppercase tracking-wide">
                    Remarks (Optional)
                </label>
                <input
                    type="text"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="e.g., Consultation Fee"
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-lg bg-gray-50 
                     focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 
                     transition-all duration-200"
                />
            </div>

            {/* Generate Button */}
            <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white 
                   rounded-xl text-base font-bold cursor-pointer 
                   hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg hover:shadow-indigo-200
                   active:scale-[0.98] transition-all duration-200"
            >
                Generate QR with Amount
            </button>
        </div>
    );
}
