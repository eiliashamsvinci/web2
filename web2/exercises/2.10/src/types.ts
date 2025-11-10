interface Pizza {
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


export type { Pizza  , Film , Produit , Drink};
