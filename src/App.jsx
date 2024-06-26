import { useEffect, useState } from 'react'
import share from '../src/assets/share.png'
import Authors from './Components/Authors/Authors';
import News from './Components/News/News';
import Pagination from './Components/pagination/Pagination'
import './App.css'

function App() {
  const [authors, setAuthor] = useState([])
  const [news, setNews] = useState([]);
  const [formattedDate, setFormattedDate] = useState([]);

  useEffect(() => {
      fetch('https://tmsph-sdi-challenges.pages.dev/challenges/authors.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const specificAuthor = data[0]
        console.log(specificAuthor)
        setAuthor(specificAuthor);
      })

      fetch('https://tmsph-sdi-challenges.pages.dev/challenges/news.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNews(data);

      
        const specificDate = data[0]
        console.log(specificDate)
        setFormattedDate(specificDate);
      });

   
  }, [])

  const formatDate = new Date(formattedDate.created_at) 
  

  return (
    <>
        <div className='hero'>
            <div className="container">
              <div className='hero__text'>
                <div className='logo'>
                    <div className='date'>
                        <p className='day'>{formatDate.toLocaleDateString("en-GB",{
                            day: "numeric"
                          })}
                          </p>
                        <p className='month'>{formatDate.toLocaleDateString("en-GB",{
                            month: "short"
                          })}</p>
                      </div>
                </div>
                <a className='link-share' href="#"><img className='img-share' src={share} alt="" />share</a>
              </div>
            </div>
        </div>

        <div className='main-article'>
          <div className="container">
            <div className="main__article--text">
              <Authors name={authors.name}/>
                  { news.map((item) => {
                    return (
                        <News
                          key={item.id}
                          title={item.title}
                          body={item.body}
                        />
                    )})
                  }
                <button>Read Article</button>
            </div>
          </div>
        </div>
        <Pagination/>
    </>
  )
}

export default App
