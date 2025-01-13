import { useContext } from "react";
import { FavoriteContext } from "../context/favorite";
import { Link } from "react-router-dom";

export function FavoriteList() {
    const { favoriteList, setFavoriteList } = useContext(FavoriteContext);

    const deleteElement = (id: number) => {
        const newList = favoriteList.filter(item => item.id !== id);
        if (setFavoriteList)
            setFavoriteList(newList);
    }

    return (    
        <div className="w-72 bg-orange-100  absolute top-28 bottom-2 right-0 rounded-l-xl p-4 bg-opacity-55 backdrop-blur-[25px] shadow-[0_0_15px_-5px] shadow-slate-600">
            <h2 className="text-primary font-bold text-3xl text-center mb-6">Lista de favoritos</h2>
            {
                favoriteList.map(item => {
                    return <div key={item.id} className="flex gap-6 my-4">
                        <p className="text-lg text-slate-600 font-bold w-[60%] text-nowrap text-ellipsis overflow-hidden">{item.title}</p>
                        <Link to={`/detail/${item.id}`} className="flex w-7">
                            <img src="/view.svg" alt="Ver receta" className="cursor-pointer"/>
                        </Link>
                        <img src="/delete.svg" alt="Borrar receta" className="w-7 cursor-pointer" onClick={() => deleteElement(item.id)}/>
                    </div>
                })
            }
        </div>
    )
}