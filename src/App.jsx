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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl shadow-2xl max-w-[480px] w-full overflow-hidden">
        <Header />
        <div className="p-8">
          <MerchantCard />
          <QRForm onGenerate={handleGenerate} />
          <QRDisplay qrData={qrData} />
        </div>
      </div>
    </div>
  );
}

export default App;
