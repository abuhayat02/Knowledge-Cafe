import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";
import { MdOutlineBookmarks } from "react-icons/md";

export default function Blogs({controleBookMarks,controleTime}) {
    let [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    console.log(info);
    return (
        <div className="md:col-span-2">

       
          <div>
            {
                info.map((items,idx) => <Blog controleTime = {controleTime} key={idx} controleBookMarks={controleBookMarks} info = {items}></Blog>)
            }
          </div>
        </div>
    )
}
