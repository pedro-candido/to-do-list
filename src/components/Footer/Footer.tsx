import Social from "./Social";
import { FooterStyled, Icons } from "./style";

const Footer = (): JSX.Element => {
  const socials = ["instagram", "github", "linkedin"];
  return (
    <FooterStyled>
      <Icons>
        {socials.map((item) => (
          <Social socialMedia={item} key={item} />
        ))}
      </Icons>
      <h2>{"<pedro-candido />"}</h2>
    </FooterStyled>
  );
};

export default Footer;
