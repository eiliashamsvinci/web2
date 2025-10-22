type pageTitleprops = {
  title: string;
};
const PageTitle = ({ title }: pageTitleprops) => {
  return <h1>{title}</h1>
};
export default PageTitle ; 
