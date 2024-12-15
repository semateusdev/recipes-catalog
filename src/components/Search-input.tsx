import { useState } from "react";

export function SearchInput({ search }: {search: (word: string) => void}) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: {target: {value: string}}) => { setInputValue(event.target.value); }; 
    
    const submit = (code?: string) => { 
        console.log(code);
        
        if (!code || code === 'Enter' || code === 'NumpadEnter') {
            search(inputValue)        
        }
     };

    return (
        <div>
            <label htmlFor="search" className="text-primary font-bold text-lg">Search recipe</label>
            <div className="border-2 border-primary border-opacity-25 rounded-3xl overflow-hidden flex">
                <div className="flex-1 px-4 py-2">
                    <input type="text" id="search" onChange={handleInputChange} onKeyUp={event => submit(event.code)} placeholder="Write the recipe name" className="w-full bg-transparent"/>
                </div> 
                <div className="w-20 bg-primary flex justify-center items-center cursor-pointer" onClick={() => submit()}>
                    <img src="/search-w.svg" alt="" className="w-8"/>
                </div>
            </div>
        </div>
    )
}