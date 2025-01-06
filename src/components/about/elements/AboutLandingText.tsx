interface aboutLandingHeader {
  aboutLandingHeader: string;
}

const AboutLandingHeader: React.FC<aboutLandingHeader> = ({ aboutLandingHeader }) => {
  return (
    <div className="banner-content container">
      <h1 className="text-light fs-2-125rem-to-3-625rem fw-bold text-shadow-dark">{aboutLandingHeader}</h1>
    </div>
  );
};

export default AboutLandingHeader;
