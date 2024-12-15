export function Step({ text, number }: {text: string, number: number}) {
    return (
        <div className="flex gap-4">
            <span className="w-10 h-10 bg-slate-300 p-2 rounded-full flex justify-center items-center font-bold">{number}</span>
            <p className="flex-1 text-base HD:text-lg FHD:text-xl">{text}</p>
        </div>
    )
}