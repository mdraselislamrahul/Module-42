import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';
const Cafe = ({ cafe }) => {
    console.log(cafe)
    const { cover, reading_time, author_img, author, posted_date, title, hashtags } = cafe;
    const [marking, setMarking]=useState(false)
    const handleMark=()=>{
        setMarking(!marking)
    }
    return (
        <div className={`mt-5 shadow-xl p-5 rounded-xl ${marking? "bg-purple-600 text-white":""}`}>
            <img className="rounded-xl" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="mt-3 flex">
                    <div>
                        <img className="h-12 " src={author_img} alt="" />
                    </div>
                    <div className="ml-3">
                        <h3 className="font-bold text-sm">{author}</h3>
                        <small className="text-xs">{posted_date}</small>
                    </div>
                </div>
                <div className="flex mt-3">
                    <p className="text-xs">{reading_time} min read</p>
                    <FaBookmark className={`${marking? "text-red-900 ml-3":"ml-3"}`} />
                </div>
            </div>
            <h1 className="text-xl font-bold mt-5">{title}</h1>
            <div className="flex gap-3 text-xs text-zinc-400 mt-3">
            <p>#{hashtags[0]}</p>
            <p>#{hashtags[1]}</p>
            </div>
            <button onClick={handleMark} className={marking? "mt-3 text-xs text-white underline":"mt-3 text-xs text-purple-600 underline"}>Mark as read</button>
        </div>
    );
};
Cafe.propTypes = {
    cafe: PropTypes.func,
}

export default Cafe;