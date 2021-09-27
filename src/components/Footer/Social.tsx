import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { Icon } from "./style";

type SocialProps = {
  socialMedia: string;
};

const icons: { [key: string]: JSX.Element } = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  instagram: <FiInstagram />,
};

const links: { [key: string]: string } = {
  github: "https://github.com/pedro-candido",
  linkedin: "https://www.linkedin.com/in/pedro-candido/",
  instagram: "https://www.instagram.com/_pedrocandidof/",
};

const Social = ({ socialMedia }: SocialProps): JSX.Element => {
  return (
    <a href={links[socialMedia]} target="_blank" rel="noreferrer">
      <Icon>{icons[socialMedia]}</Icon>
    </a>
  );
};

export default Social;
