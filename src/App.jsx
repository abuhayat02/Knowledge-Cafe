
import './App.css';
import Bookmarks from './component/Bookmakrs/Bookmarks';
import Header from './component/Header/Header';
import './index.css';
import Blogs from './component/Blogs/Blogs';
import { useState } from 'react';



function App() {
  let [bookmark, setBookmark] = useState([]);

  let [readingTime, setTime] = useState(0);


  let controleTime = (time) =>{
    setTime(readingTime + time.reading_time)
    console.log('time is comming',readingTime);
  }


  let controleBookMarks = (title) => {

    setBookmark([...bookmark, title])
  }


  return (
    <>
      <Header>

      </Header>

      <div className='container m-auto gap-4 grid md:grid-cols-3'>

        <Blogs controleTime = {controleTime} controleBookMarks={controleBookMarks}></Blogs>
        <Bookmarks readingTime={readingTime} bookmark={bookmark}>

        </Bookmarks>
      </div>


    </>
  )
}

export default App
