import { useLoaderData } from "react-router-dom";
import img4 from "./Image/profile.png"
import Cafe from "./Cafe";
import { useRef, useState } from "react";
const Cafes = () => {
    const datas=useLoaderData();
    const [data, setdata]=useState(datas);
    const searchRaf= useRef()
    const handleSearch=()=>{
        console.log(searchRaf.current.value);
        const search=datas.filter((e, idx)=>e.title.toLowerCase().includes(searchRaf.current.value.toLowerCase()))
        console.log(search)
        setdata([...search])
        if(searchRaf.current.value.length < 1){
            setdata([...datas])
        }

    }
    const handleHigh=()=>{
        const sort=datas.sort((a, b)=>b.reading_time-a.reading_time)
        setdata([...sort])
    }
    const handleLow=()=>{
        const sort=datas.sort((a, b)=>a.reading_time-b.reading_time)
        setdata([...sort])
    }
    return (
        <div className="">
            
            <div className="flex justify-around border-b-2 border-purple-600 p-3">
                <div>
                    <h1 className="mt-3 font-bold">Knowledge Cafe</h1>
                </div>
                <div>
                    <img className="h-10" src={img4} alt="" />
                </div>
            </div>

            <div className="mt-5 flex justify-around">
                <div>
                    <input ref={searchRaf} className="border-2 border-purple-600 rounded-md" type="text" />
                    <button onClick={handleSearch} className="bg-purple-600 text-white text-sm py-1 ml-3 px-2 rounded-md">Click Here</button>
                </div>
                <div className="">
                <button onClick={handleHigh} className="bg-purple-600 text-white text-sm py-1 px-2 rounded-md">High read time</button>
                <button onClick={handleLow} className="bg-purple-600 text-white text-sm py-1 ml-3 px-2 rounded-md">Low read time</button>
                </div>
            </div>
            <div className="w-9/12 mt-5">
                {
                    data.map(cafe=><Cafe cafe={cafe} key={cafe.id}></Cafe>)
                }
            </div>
        </div>
    );
};

export default Cafes;