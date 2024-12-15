import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="w-[100vw] h-20 bg-[#ffe5de] flex py-3 px-6 justify-between items-center">
            <h1 className="font-bold text-primary text-3xl Tablet:text-4xl">🍲 Recetas</h1>
            <Link to='/'>
                <div className="cursor-pointer flex gap-2 Tablet:gap-4 items-center FHD:mr-6">
                    <img src="/catalog.png" alt="" className="w-7 Tablet:w-10"/>
                    <p className="text-primary text-lg Tablet:text-2xl font-bold">Go to Catalog</p>
                </div>
            </Link>
        </header>
    )
}