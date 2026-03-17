import { QRCodeCanvas } from 'qrcode.react';

export default function QRDisplay({ qrData }) {
    if (!qrData) return null;

    const { qrString, amtStr, crc } = qrData;

    return (
        <div className="mt-6 bg-gray-50 rounded-2xl p-6 text-center animate-fade-in">
            {/* QR Code */}
            <div className="inline-block bg-white rounded-xl p-5 shadow-sm">
                <QRCodeCanvas
                    value={qrString}
                    size={250}
                    level="H"
                    includeMargin={false}
                />
            </div>

            {/* Info Box */}
            <div className="mt-4 p-4 bg-green-100 rounded-lg text-green-800 text-sm">
                ✅ <strong>Amount will auto-populate</strong> when scanned in banking app
            </div>

            {/* Raw QR String */}
            <div className="mt-4 p-3 bg-gray-100 rounded-lg font-mono text-[0.65rem] break-all text-left text-gray-700">
                <strong>QR String:</strong>
                <br />
                {qrString}
                <br />
                <br />
                <strong>Changes made:</strong>
                <br />
                • 010212 (Dynamic instead of Static)
                <br />• Added 54
                {amtStr.length.toString().padStart(2, '0')}
                {amtStr} (Amount Tag)
                <br />• CRC: {crc}
            </div>
        </div>
    );
}
