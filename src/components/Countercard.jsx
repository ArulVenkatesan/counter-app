import { useState } from "react"

function Countercard(){
    
    var [value,setvalue] = useState(0)
    const handleincrement = ()=>{
        setvalue(value+1)
    }
    const handledecrement=()=>{
        if(value>0){
        setvalue(value-1)
        }
        else{
            setvalue(0)
        }
    }
    const handlereset = ()=>{
        setvalue(0)
    }
    return (
        <div className="flex flex-col items-center gap-7">
            <h1 className="text-4xl text-[#EB5969] uppercase font-medium">c o u n t e r</h1>
            <h2 className="text-7xl text-[#EB5969] uppercase font-bold">{value}</h2>
                <div className="flex gap-3">
                <button onClick={handleincrement} className="bg-[#28A745] rounded-md text-white font-medium px-4 py-2">Increment</button>
                <button onClick={handledecrement} className="bg-[#DC3545] text-white rounded-md font-medium px-4 py-2">Decrement</button>
                <button onClick={handlereset} className="bg-[#6F7881] rounded-md text-white font-medium px-4 py-2">Reset</button>
            </div>
            {value==0?<button className="bg-red-200 w-62 px-4 py-2">Minimun limit reached</button>:""}
        </div>
    )
}

export default Countercard