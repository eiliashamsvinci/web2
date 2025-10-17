import "./Header.css" ; 

type HeaderProps = {
  title: string;
  image:  string ; 
  children: React.ReactNode ;   
};


const Header = (props : HeaderProps)=> {
    return ( 
       <div className="drink-menu">
      <h4 style={{marginLeft:"50%"}}>{props.title}</h4>
      <img style={{width : "100%"  ,   height:"1%"}} src={props.image} alt="" />
      <div className="drink-items">{props.children}</div>
    </div>
    )
 
}

export default Header ; 