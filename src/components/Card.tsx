import { Link } from "react-router-dom";
import { CardElement } from "../interfaces/Card";

export function Card({ name, image, id, isFavorite, addFavorite}: CardElement) {
    const addFavoriteEvent = () => {
        if (!addFavorite)
            return;
        addFavorite({
            id,
            title: name,
            isFavorite: !!isFavorite,
            image
        })
    }
    return (
        <div className="w-52 h-72 pb-4 shadow-[0_0_20px_-10px] rounded-xl overflow-hidden" title={name}>
            <img className="h-[75%] object-cover" src={image} alt={`Imagen de la tarjeta ${name}`} />
            <main className="flex-1 px-2 pb-2">
                <p className="text-xl text-center font-bold text-nowrap text-ellipsis overflow-hidden pb-1">{name}</p>            </main>
            <footer className="flex justify-end px-2 gap-3">
                {(isFavorite !== undefined) && <img src={isFavorite ? '/favorite.svg' : '/add-favorite.svg'} alt="Boton de agregar a favoritos" className="w-8 cursor-pointer" onClick={() => addFavoriteEvent()} />}
                <Link to={`detail/${id}`}>
                    <button>View</button>
                </Link>
            </footer>
        </div >
    )
}