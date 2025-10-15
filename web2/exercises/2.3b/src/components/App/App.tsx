import "./App.css";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import PageTitle from "../Main/PageTitle";
import Users from "../Main/Users";

const App = () => {
  const title = "Welcome to My App";
  const footerText = "© 2023 My App";

  const users = [
  { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ] ; 
  return (
    <div>
   <PageTitle title={title} />   
   
   {users.map((user , idx)=>(
    <Users key={idx}  
    
    name={user.name} age={user.age}
     />
   ))}

    <Footer text={footerText} />
    </div>
  );
};

export default App;

