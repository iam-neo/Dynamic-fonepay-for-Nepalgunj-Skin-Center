import { useState } from 'react';
import Header from './components/Header';
import MerchantCard from './components/MerchantCard';
import QRForm from './components/QRForm';
import QRDisplay from './components/QRDisplay';
import { generateQRString } from './utils/generateQRString';

function App() {
  const [qrData, setQrData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleGenerate = (amount, remarks) => {
    const data = generateQRString(amount, remarks);
    setQrData(data);
    setShowModal(true);
    console.log('Generated Dynamic QR:', data.qrString);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-mesh-gradient flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden relative">
      {/* Decorative background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] max-w-[480px] w-full relative z-10 transition-all duration-500 hover:shadow-[0_8px_40px_0_rgba(225,29,72,0.15)] overflow-hidden">
        <Header />
        <div className="p-6 sm:p-8 pt-6">
          <MerchantCard />
          <QRForm onGenerate={handleGenerate} />
        </div>
      </div>

      {/* QR Modal Popup */}
      {showModal && qrData && (
        <div className="qr-modal-overlay" onClick={handleCloseModal}>
          <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="qr-modal-close" onClick={handleCloseModal} title="Close">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <QRDisplay qrData={qrData} />
          </div>
        </div>
      )}

      {/* Footer Area */}
      <div className="mt-8 text-white/50 text-sm font-medium z-10 flex items-center justify-center gap-2 animate-fade-in relative">
        Designed & Developed by{' '}
        <span className="font-bold tracking-wider text-rose-400">Nirmal</span>

        <div className="flex items-center gap-3 ml-2">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/ni.nirmal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-rose-400 transition-all hover:scale-110"
            title="Instagram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/iam-neo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-all hover:scale-110"
            title="GitHub"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
