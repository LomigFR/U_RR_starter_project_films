import React from "react";

/**
 * Cf. :
 * - URL disponible sur le site tmdb (voir documentation) : cette URL retourne une image de taille 500.
 * - key/value "poster_path" de chaque objet de la liste de films : à concaténer avec URL au-dessus pour
 * récupérer la bonne image correspondant au film.
 */
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const VideoListItem = props => {
  /**
   * Astuce ES6 :
   * Cette écriture simplifiée signifie : React donne à la constante movie, la valeur de l'attribut du
   * même nom parmi les props de VideoListItem
   * Ecriture équivalente à : const movie = props.movie
   * Pour récupérer plusieurs valeurs d'attributs : const {movie, color, size} = props
   */
  const { movie } = props;

  return (
    <li className="list-group-item" onClick={handleOnClick}>
      <div className="media">
        <div className="media-left">
          <img
            className="media-object img-rounded"
            height="120px"
            width="80px"
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          />
        </div>
        <div className="media-body">
          <h5 className="title_list_item">
            <b>{movie.title}</b>
          </h5>
        </div>
      </div>
    </li>
  );

  function handleOnClick() {
    props.callback(movie);
  }
};

export default VideoListItem;
