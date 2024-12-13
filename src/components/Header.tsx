import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="w-[100vw] h-20 bg-[#ffe5de] flex py-3 px-6">
            <Link to='/'>
                <h1 className="font-bold text-primary cursor-pointer">🍲 Recetas</h1>
            </Link>
        </header>
    )
}