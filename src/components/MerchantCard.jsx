export default function MerchantCard() {
    return (
        <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 mb-8 border border-white/[0.08] relative overflow-hidden group hover:bg-white/[0.05] transition-colors duration-300">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-rose-500 to-purple-600 shadow-[0_0_15px_rgba(225,29,72,0.6)]"></div>
            <h3 className="text-white font-bold text-base mb-1.5 pl-2 tracking-wide text-glow">
                NEPALGUNJ SKIN CENTER
            </h3>
            <p className="text-white/50 text-xs font-medium pl-2 font-mono">Code: <span className="text-rose-300/80">2109020664</span> | Terminal: <span className="text-rose-300/80">497140</span></p>
        </div>
    );
}
