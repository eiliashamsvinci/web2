import PageTitle from "../Main/cinema/PageTitle";
import Users from "../Main/User/Users";
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
      <PageTitle title={title} />

      {/* {users.map((user , idx)=>(
    <Users key={idx}  name={user.name} age={user.age} />
   ))} */}

      <Users name="Alice" age={25}>
        {" "}
        <p>this is childeren test</p>{" "}
      </Users>
      <Users name="Bob" age={30} />
      <Users name="Charlie" age={47} />
    </div>
  );
};

export default App;
