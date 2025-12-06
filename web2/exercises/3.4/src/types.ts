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
    registerUser: (newUser: User) => Promise<void>;
          loginUser: (user: User) => Promise<void>;
}

interface User {
  username: string;
  password: string;
}



interface MovieContext {
  movies: Film[];
  onMovieAdded: (newMovie: NewFilm) => Promise<void>;
  onMovieLiked: (movie: Film) => void; 
    onMovieRemoved?: (movieId: number) => void; 
  onMovieDeleted: (movie: Film) => Promise<void>;
        registerUser: (newUser: User) => Promise<void>;
          loginUser: (user: User) => Promise<void>;
  authenticatedUser?: MaybeAuthenticatedUser;
    setAuthenticatedUser?: (user: MaybeAuthenticatedUser) => void;
}

interface AuthenticatedUser {
  username: string;
  token: string;
}

type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

interface NavBarProps {
  authenticatedUser?: MaybeAuthenticatedUser;
    clearUser: () => void;
}





export type { Pizza  , NewPizza , Film , NewFilm , Produit , Drink , PizzeriaContext , MovieContext, AuthenticatedUser, MaybeAuthenticatedUser , User , NavBarProps } ;