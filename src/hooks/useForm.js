
import { useState } from "react"

export const useForm = (initialform = {}) =>{

    const [formState, setFormState] = useState(initialform)

    const onInputChange = (e)=>{
        const{name , value} = e.target;
        setFormState({
            ...formState,
            [name]:value
    })
    
    }

    const reset = ()=>{
        setFormState(initialform)
    }

    return{
        formState,
        onInputChange,
        reset
    }
}