type UserProps = {
  name: string;
  age: number;
};

const Users = ({ name, age }: UserProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontFamily: "monospace",
        margin: "5px",
      }}
    >
      <h2>{name}</h2> <span>=&gt;</span> <p> age : {age}</p>
    </div>
  );
};
export default Users;
