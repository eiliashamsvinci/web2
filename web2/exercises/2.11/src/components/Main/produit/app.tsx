import type { Produit } from "../../../types";
import { useState, type SyntheticEvent } from "react";
import AddproduitForm from "./produi";



const Appproduir =()=>{
    const defultproduit : Produit[] = [
        {
            id : 1 ,
            name : "Ordinateur portable" ,
            category : "Electronique" ,
            price : 999.99 ,
            description : "Un ordinateur portable puissant pour le travail et les loisirs." ,
            imageUrl : "https://example.com/laptop.jpg"
        },
        {
            id : 2 ,
            name : "Smartphone" ,
            category : "Electronique" ,
            price : 699.99 ,
            description : "Un smartphone dernier cri avec un appareil photo exceptionnel." ,
            imageUrl : "https://example.com/smartphone.jpg"
        }
    ] ;

    const [prduit , setproduit] = useState<Produit[]>(defultproduit) ;

    const onProduitAdded = (newproduit : Produit) =>{
        setproduit((prev) => [...prev , newproduit]) ;
    };

    return(
        <main>
        <AddproduitForm onProduitAdded={onProduitAdded} />
        <h2>Liste des produits :</h2>
        <ul>
          {prduit.map((p, index) => (
            <li key={index}>
              <h3>{p.name}</h3>
              <p>Catégorie : {p.category}</p>
              <p>Prix : ${p.price}</p>
              {p.imageUrl && <img src={p.imageUrl} alt={p.name} width="150" />}
              <p>Description : {p.description}</p>
            </li>
          ))}
        </ul>
        </main>
    );
} ;  