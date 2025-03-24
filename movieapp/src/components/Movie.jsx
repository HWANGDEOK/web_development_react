function Movie({key, coverImg, title, summary, genres}){
  return (
    <div key={key}>
      <img src={coverImg} alt={title}></img>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (<li key={genre}>{genre}</li>))}
      </ul>
    </div>

);
}

export default Movie;