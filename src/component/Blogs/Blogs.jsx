import { useEffect } from "react";
import { useState } from "react"

export default function Blogs() {
    let [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    console.log(info);
    return (
        <div>

            {
                info.map(items =>  <img src={items.cover} alt="" /> )
            }
        </div>
    )
}
