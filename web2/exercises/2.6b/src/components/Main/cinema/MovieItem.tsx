import { useState } from "react";


type MovieItemProps = {
    movie: {
        title: string;
        director: string;
        description: string;
    };
};

const MovieItem = ({ movie }: MovieItemProps) => {

    const [showDescription, setShowDescription] = useState(false);

    const activeDiscription = () => {
        setShowDescription(!showDescription)
    };
   
    return(
        <div style={{border : "1px solid black", borderRadius : "1pc"}} onClick={activeDiscription}>
            <h1> {movie.title}</h1>
             <p><strong>{movie.director}</strong></p>
             {!showDescription && <p style={{fontSize :"12px"}}> click for more info</p>}
             {showDescription && <p>{movie.description}</p>}


        </div>
    )


    
}
export default MovieItem ; 