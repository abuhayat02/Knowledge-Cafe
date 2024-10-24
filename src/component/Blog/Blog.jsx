import { MdOutlineBookmarks } from "react-icons/md";


export default function Blog({ info ,controleBookMarks ,  controleTime }) {
  let { title, author, cover, author_image, posted_date, reading_time, hashtags } = info
  return (
    <div className=" bg-white my-8 w-full mx-auto shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-80 object-cover"
        src={cover}
        alt="Programming Laptop"
      />
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={author_image}
              alt="Profile"
            />
            <div className="ml-3">
              <p className="text-gray-900 font-semibold">{author}</p>
              <p className="text-gray-500 text-sm">{posted_date}</p>
            </div>

          </div>
          <div className="flex flex-row gap-3 items-center">
            <p>{reading_time} min read</p>
            <button onClick={()=> controleBookMarks(info)}>
              <MdOutlineBookmarks />
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="text-gray-900 font-bold text-xl ">
            {
              title
            }
          </h2>
          <p className="mt-2 text-gray-600">{hashtags}</p>
        </div>

      </div>
      <div className="p-4 border-t border-gray-200 text-right">
        <button onClick={()=> controleTime(info)}>
          Mark as read
        </button>
      </div>
    </div>
  )
}
