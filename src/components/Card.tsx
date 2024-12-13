import { Link } from "react-router-dom";
import { CardElement } from "../interfaces/Card";

export function Card({ name, image, id, time }: CardElement) {
    return (
        <div className="w-52 h-72 pb-4 shadow-[0_0_20px_-10px] rounded-xl overflow-hidden" title={name}>
            <img className="h-[68%] object-cover" src={image} alt={`Imagen de la tarjeta ${name}`} />
            <main className="flex-1 px-2 pb-2">
                <p className="text-xl text-center font-bold text-nowrap text-ellipsis overflow-hidden pb-1">{name}</p>
                <p className="text-xs text-center text-primary text-nowrap text-ellipsis overflow-hidden">Tiempo de Preparación: {time} min.</p>
            </main>
            <footer className="flex justify-center">
                <Link to={`detail/${id}`}>
                    <button>Ver detalle</button>
                </Link>
            </footer>
        </div >
    )
}