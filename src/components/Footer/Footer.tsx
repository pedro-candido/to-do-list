import Social from "./Social";
import { FooterStyled, Icons } from "./style";

const Footer = () => {
  return (
    <FooterStyled>
      <Icons>
        <Social socialMedia={"instagram"} />
        <Social socialMedia={"github"} />
        <Social socialMedia={"linkedin"} />
      </Icons>
      <h2>{"<pedro-candido />"}</h2>
    </FooterStyled>
  );
};

export default Footer;
