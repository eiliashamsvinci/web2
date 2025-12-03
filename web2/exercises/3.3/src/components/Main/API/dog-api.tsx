import { useEffect , useState } from "react";

const DogApi = ()=>{
    interface Dog {
        image:string ; 
        status : string ; 
    }
  const [dog, setDog] = useState<Dog[]>([]);
  const [count , setcount]=useState(0);

    const loadDogs = async () => {
  try {
    const responses = await Promise.all([
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random")
    ]);

    const jsons = await Promise.all(responses.map((r) => r.json()));

    setDog(
      jsons.map((data) => ({
        image: data.message,
        status: data.status
      }))
    );
  } catch (err) {
    console.error("error:", err);
  }
};

useEffect(()=>{
  const interval = setInterval(()=>{
    setcount(p => p+1) ; 
  },1000) ; 
  return ()=>clearInterval(interval) ; 
})
useEffect(() => {
  if(count % 10 ===0){
        loadDogs();
  }
  }, [count]);




 return (
      <div style={{display :"inline" , padding : "50%"}}>
      <h1 style={{alignItems : "center"}}>dogs refresh in {10 - count %10}</h1>
        <div style={{}} >
        {dog.map((dog , i)=>(
          <img style={{width : "200px" , display :"flow" ,alignItems :"center" ,marginLeft : "45%" }} key={i} src={dog.image} alt="dog" />
        ))}
        </div>
      </div>
  );

} ; 

export default DogApi;
