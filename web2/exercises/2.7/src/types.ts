interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface Film {
    title : string ; 
    director : string ; 
    duration : number ; 
    imageUrl? : string ; 
    description? :string ; 
    budget ?: number ; 
}

export type { Pizza  , Film};
