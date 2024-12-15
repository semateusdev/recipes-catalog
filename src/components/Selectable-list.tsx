import { Item } from "../interfaces/Item";
import { DishTypes } from "../interfaces/Recipe";

export function SelectableList({ list, selectedOption }: {list: Item[], selectedOption: (id: DishTypes | number) => void}) {
    
    return (
        <div className="border-2 border-primary border-opacity-20 rounded-xl shadow-[0_0_10px_-5px] overflow-hidden">
            {list.map(item => {
                return <div className={`w-52 flex items-center justify-between cursor-pointer px-4 py-2 border-b-2 last:border-b-0 border-primary border-opacity-20 ${item.active ? 'bg-primary bg-opacity-30 text-primary' : 'text-slate-500'}`} key={item.id} onClick={() => selectedOption(item.id as DishTypes)}>
                    {/* <span className={`w-4 h-4 flex border-primary border-2 rounded-full ${item.active ? 'bg-primary' : ''}`}></span> */}
                    <div className="flex gap-4">
                        <img src={item.icon} alt={`Icono de ${item.name}`} className="w-6" />
                        <p className="font-bold">{item.name}</p>
                    </div>
                    {item.active && <img src="/check-o.svg" alt={`Icono de seleccionado`} />}
                </div>
            })}
        </div>
    )
}