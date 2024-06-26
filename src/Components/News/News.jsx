import './style.css';

function News(props) {
    

      return (
        <>
         <ul key={props.id}>
            <li className='news_title'>{props.title}</li>
            <li className='news_body'>{props.body}</li>
         </ul>
        </>
      )
}

export default News;