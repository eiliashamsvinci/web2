interface Pizza {
  id: number;
  title: string;
  content: string;
}
interface NewPizza {
  id: number;
  title: string;
  content: string;
}
interface Film {
  id : number ;
    title : string ; 
    director : string ; 
    duration : number ; 
    imageUrl? : string ; 
    description? :string ; 
    budget ?: number ; 
}
type NewFilm = Omit<Film, "id">;

interface Produit{  
id : number ;  
name : string ;
category : string ;
price : number ; 
description : string ;
imageUrl? : string  ; 
}

interface Drink {
  title: string;
  image: string;
  volume: string;
  price: string;
}

interface PizzeriaContext {
  pizzas: Pizza[];
  setPizzas: (pizzas: Pizza[]) => void;
  actionToBePerformed: boolean;
  setActionToBePerformed: (actionToBePerformed: boolean) => void;
  clearActionToBePerformed: () => void;
  drinks: Drink[];
  addPizza: (newPizza: NewPizza) => Promise<void>;
}


interface MovieContext {
  movies: Film[];
  onMovieAdded: (newMovie: NewFilm) => Promise<void>;
  onMovieLiked: (movie: Film) => void; 
    onMovieRemoved?: (movieId: number) => void; 

}

export type { Pizza  , NewPizza , Film , NewFilm , Produit , Drink , PizzeriaContext , MovieContext};
