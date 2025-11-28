import path from "node:path";
import { comment } from "../types";
import { parse, serialize } from "../utils/json";
const jsonPath = path.join(__dirname, "../data/comments.json");

const defultcomments: comment[] = [
  {
    filmId: 1,
    username: "eilia",
    content: "This is a great film!",
  },
];

function readAllcomment(filmId : Number): comment[] | undefined {
  const data = parse(jsonPath, defultcomments);
  const filteredComments = data.filter((c) => c.filmId === filmId) ;
  if(!filmId){
    return undefined ;
  }
  return filteredComments;
}

function addcomment(comment: comment): comment {
  const data = parse(jsonPath, defultcomments);

  const createData = {...comment,};
  data.push(createData);
  serialize(jsonPath , data);
  return createData;
}


function deletecomment(filmId: number, username: string): comment | undefined {
  const data = parse(jsonPath, defultcomments);
  const index = data.findIndex(
    (c) => c.filmId === filmId && c.username === username
  );
  if (index === -1) {
    return undefined;
  }
  const deletedcomment = data.splice(index, 1)[0];
  serialize(jsonPath, data);
  return deletedcomment;
}

export {readAllcomment , addcomment , deletecomment};
