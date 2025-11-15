import { useEffect , useState } from "react";

const DogApi = ()=>{
    interface Dog {
        image:string ; 
        status : string ; 
    }
  const [dog, setDog] = useState<Dog[]>([]);
    
   const loadDogs = () => {
    Promise.all([
      fetch("https://dog.ceo/api/breeds/image/random").then((r) => r.json()),
      fetch("https://dog.ceo/api/breeds/image/random").then((r) => r.json()),
      fetch("https://dog.ceo/api/breeds/image/random").then((r) => r.json())
    ]).then((results) => {
      setDog(
        results.map((data) => ({
          image: data.message , 
          status : data.status
        }))
      );
    });
  };
useEffect(() => {
    loadDogs();
  }, []);

  if (dog.length === 0) {
    return <p>NO DATA</p>;
  }
 return (
      <div style={{display :"inline" , padding : "50%"}}>
        <button  onClick={loadDogs}>refresh</button>

        <div style={{}} >
        {dog.map((dog , i)=>(
          <img style={{width : "200px" , display :"flow" ,alignItems :"center" ,marginLeft : "45%" }} key={i} src={dog.image} alt="dog" />
        ))}
        </div>
      </div>
  );

} ; 

export default DogApi;
