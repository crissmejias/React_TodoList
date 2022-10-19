import {useState, useEffect} from 'react'
const useLocalStorage = (itemName, initialValue) =>{
    const [error, setError] = useState('');
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                if(!localStorageItem) 
                {
                localStorage.setItem(itemName,JSON.stringify(initialValue))
                parsedItem = [];
                }
                else
                {
                parsedItem = JSON.parse(localStorageItem);
                }
                setItem(parsedItem)
                setLoading(false)
            }
            catch(error){
                setError(error)
        }
        }, 3000);
    })
    const saveItem = (newItem) => {
        try{
            const stringifiedTodos = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedTodos);
            setItem(newItem)
        }
        catch(error){
            setError(error)
        }
    }
    return {item, saveItem, loading,error};
}

  export { useLocalStorage }