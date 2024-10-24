
const BookmarkCard = ({item}) => {
    return (

        <div className="border border-blue-500 p-2 my-3 rounded-md">
            <p className="text-black font-bold">
              {
                item.title
              }
            </p>
        </div>

    );
};

export default BookmarkCard;
