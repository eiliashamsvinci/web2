import Header from "../Header";
import PageTitle from "../Main/cinema/PageTitle";
import Users from "../Main/User/Users";
import App1 from "../Main/ClickCounter";
import "./App.css";

const App = () => {
  const title = "Welcome to My App";
  const footerText = "© 2023 My App";

  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  return (
    <div>
      {/* <Header  title="this is header title " image="https://tse1.mm.bing.net/th/id/OIP.3KtmVjBylbGpO26g180qLAHaHa?w=204" /> 
      <PageTitle title={title} />

      {/* {users.map((user , idx)=>(
    <Users key={idx}  name={user.name} age={user.age} />
   ))} */}

      {/* <Users name="Alice" age={25}>
        {" "}
        <p>this is childeren test</p>{" "}
      </Users>
      <Users name="Bob" age={30} />
      <Users name="Charlie" age={47} /> */} 


    <App1
      title="no title"
      successMessage="You are a master in the art of clicking !"
      hoverMessage="Please click on me now !"
    />



    </div>
  );
};

export default App;
