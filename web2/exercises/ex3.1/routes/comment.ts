import { Router } from "express";
import { readAllcomment , addcomment, deletecomment } from "../services/comment";
import { authorize } from "../utils/auths";
const router = Router() ; 



router.get("/:?filmId" , authorize, (req , res) =>{
    const filmId = Number(req.query.filmId);
    const comments = readAllcomment(filmId) ;
    return res.json(comments) ;  

})


router.post("/" , authorize, (req , res) =>{
    const {filmId , username , content} = req.body ;

    if(!filmId || !username || !content){
        return res.sendStatus(400) ;
    }
    const newcomment = addcomment({filmId , username , content}) ; 
    return res.json(newcomment)
}) ;


router.delete("/:filmId/:username" , (req , res)=>{
    const filmId = req.params.filmId ; 
    const username = req.params.username ;

    if(!filmId || !username){
        return res.sendStatus(400) ;
    }

    const deletedcomment = deletecomment(Number(filmId) , username) ;

    if(!deletedcomment){
        return res.sendStatus(404) ;
    }

    return res.json(deletedcomment) ;

})


export default router ; 

