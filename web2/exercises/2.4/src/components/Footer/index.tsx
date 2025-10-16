type FooterProps = {
  footerTitle: string;
  image : string ; 
    children: React.ReactNode ;   
};

const Footer = (props: FooterProps) => {
  return (
    <div className="drink-menu">
      <h4>{props.footerTitle}</h4>
      <img style={{width:"100%"}} src={props.image} alt="" />
      <div className="drink-items">{props.children}</div>
    </div>

  );
};

export default Footer;
