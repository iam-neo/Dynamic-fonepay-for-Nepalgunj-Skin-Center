import { useState } from 'react';
import Header from './components/Header';
import MerchantCard from './components/MerchantCard';
import QRForm from './components/QRForm';
import QRDisplay from './components/QRDisplay';
import { generateQRString } from './utils/generateQRString';

function App() {
  const [qrData, setQrData] = useState(null);

  const handleGenerate = (amount, remarks) => {
    const data = generateQRString(amount, remarks);
    setQrData(data);
    console.log('Generated Dynamic QR:', data.qrString);
  };

  return (
    <div className="min-h-screen bg-mesh-gradient flex items-center justify-center p-4 sm:p-6 overflow-hidden relative">
      {/* Decorative background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] max-w-[480px] w-full relative z-10 transition-all duration-500 hover:shadow-[0_8px_40px_0_rgba(225,29,72,0.15)] overflow-hidden">
        <Header />
        <div className="p-6 sm:p-8 pt-6">
          <MerchantCard />
          <QRForm onGenerate={handleGenerate} />
          <QRDisplay qrData={qrData} />
        </div>
      </div>
    </div>
  );
}

export default App;
