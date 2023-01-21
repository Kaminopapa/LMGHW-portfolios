import styled from "./header.module.css";
interface headerPros {
  subTitle: string;
  mainTitle: string;
}
const Header = (props: headerPros) => {
  return (
    <div className={styled.head}>
      <h3>{props.subTitle}</h3>
      <h1>{props.mainTitle}</h1>
    </div>
  );
};

export default Header;
