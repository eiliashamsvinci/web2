import "./Header.css" ; 

type HeaderProps = {
  title: string;
  version: number;
};


const Header = ({title , version}:HeaderProps) => {
    return (  <h1>{title} , {version}</h1> 
    )
 
}

export default Header ; 