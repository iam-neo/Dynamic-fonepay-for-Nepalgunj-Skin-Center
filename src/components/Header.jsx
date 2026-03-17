export default function Header() {
    return (
        <div className="bg-black/20 backdrop-blur-md border-b border-white/5 py-8 px-8 text-center sm:rounded-t-[2rem]">
            <div className="text-[2.5rem] font-extrabold tracking-tight text-white flex items-center justify-center gap-1">
                <span className="text-glow">fone</span>
                <span className="text-yellow-400 text-glow-accent">pay</span>
            </div>
            <div className="mt-2 text-rose-200/80 text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2">
                <span className="w-8 h-[1px] bg-rose-500/50"></span>
                Auto-Fill Amount
                <span className="w-8 h-[1px] bg-rose-500/50"></span>
            </div>
        </div>
    );
}
