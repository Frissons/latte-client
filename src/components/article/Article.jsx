import '../article/article.css';

const Article = () => {
    return(
        <div className="catalog-context">
        <div className="context">
          <h1 className="entry">Set - that  - Date!</h1>
          <p>Appointments are now available in your hands anytime anywhere. <br/>Consider this app as your <strong>Online Personal Scheduler</strong>.</p>
        </div>
        <span role="img" aria-label="sheep" className="lock-icon">📆</span>
        </div>
    )
}

export default Article;