import React from 'react';

// * Deux manière de faire un fonction component
// export default function Movie(props) {
//   return (
//     <div>
//       <h3>{props.movieName}</h3>
//     </div>
//   );
// }
// const Movie = (props) => {
//   return (
//     <div>
//       <h3>{props.movieName}</h3>
//     </div>
//   );
// };
//* ou on met just l'information qu'on veut sans mettre props
// const Movie = ({ movieName, price }) => {
//   return (
//     <div>
//       <h3>{movieName}</h3>
//       <p>{price}</p>
//     </div>
//   );
// };

const Movie = ({ movie }) => {
  return (
    <div>
      <h3>{movie.name}</h3>
      <p>{movie.price}</p>
    </div>
  );
};

export default Movie;
