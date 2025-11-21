type UserProps = {
  name: string;
  age: number;
  children?: React.ReactNode;
};

const Users = (props: UserProps) => {
  const hasChildren = props.children;

  if (hasChildren) {
    return (
      <div className="user_form">
        <h2>{props.name}</h2>
        <p style={{ margin: 0 }}>age: {props.age}</p>
        <p style={{ color: "green", margin: "3px" }}>{props.children}</p>
      </div>
    );
  } else {
    return (
      <div  className="user_form">
        <h2>{props.name}</h2>
        <p style={{ margin: 0 }}>age: {props.age}</p>
        <p style={{ color: "red", margin: "3px" }}>Hors ligne</p>
      </div>
    );
  }
};

export default Users;
