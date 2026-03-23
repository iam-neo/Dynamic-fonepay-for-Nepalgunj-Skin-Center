import { QRCodeCanvas } from 'qrcode.react';

export default function QRDisplay({ qrData }) {
    if (!qrData) return null;

    const { qrString, amtStr, crc } = qrData;

    return (
        <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 text-center animate-fade-in border border-white/5 relative overflow-hidden">
            {/* Decorative background glow for QR code */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-white/20 rounded-full blur-[60px] pointer-events-none"></div>

            {/* QR Code Container */}
            <div className="relative inline-block bg-white rounded-xl p-5 shadow-[0_0_30px_rgba(255,255,255,0.15)] ring-4 ring-white/10 mb-2">
                <QRCodeCanvas
                    value={qrString}
                    size={220}
                    level="H"
                    includeMargin={false}
                    imageSettings={{
                        src: "/logo.png",
                        x: undefined,
                        y: undefined,
                        height: 40,
                        width: 40,
                        excavate: true,
                    }}
                    className="rounded-sm"
                />
            </div>

            {/* Info Box */}
            <div className="mt-5 p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-300 text-sm font-medium flex items-center justify-center gap-2 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Amount auto-populates</strong> in banking app</span>
            </div>


        </div>
    );
}
