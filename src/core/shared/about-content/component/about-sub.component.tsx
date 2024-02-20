import { useAboutSubStyles } from "./about-sub.style";
const AboutSubComponent = ({ className, children }) => {
  const classes = useAboutSubStyles();
  return (
    <div className={`${classes[className]}`}>
      {children}
    </div>
  );
};
export default AboutSubComponent;