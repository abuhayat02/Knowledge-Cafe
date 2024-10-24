import BookmarkCard from "../Bookmark/Bookmark"


export default function Bookmarks({ bookmark, readingTime }) {
  console.log(bookmark)
  return (

    <div className="md:col-span-1 my-6">

      <div className="border border-blue-500 p-2 my-3 rounded-md">
        <p className="text-black font-bold">
          Spent time on read : {readingTime } min
        </p>
      </div>



      <div className="bg-white p-4 shadow-lg rounded-lg max-w-sm mx-auto">
        <h3 className="text-black font-bold text-lg mb-3">Bookmarked Blogs:{bookmark.length}</h3>
        {
          bookmark.map((item, index) => <BookmarkCard key={index} item={item} className="text-3xl font-bold"></BookmarkCard>)
        }
      </div>



    </div>
  )
}
