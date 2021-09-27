import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

type SocialProps = {
  social: string;
};

type IconsProps = {
  github: JSX.Element | string;
  linkedin: JSX.Element | string;
  instagram: JSX.Element | string;
};

const Social = ({ social }: SocialProps) => {
  const icons: { [key: string]: any } = {
    github: <FiGithub />,
    linkedin: <FiLinkedin />,
    instagram: <FiInstagram />,
  };

  return <div>{icons[social]}</div>;
};

export default Social;
