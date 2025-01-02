interface aboutLandingHeader {
  aboutLowerHeader: string;
  aboutLowerImageText: string;
}

const AboutLowerText: React.FC<aboutLandingHeader> = ({ aboutLowerHeader, aboutLowerImageText }) => {
  return (
    <div className="banner-content container">
      <h1 className="text-light fs-2-125rem-to-3-625rem fw-bold">{aboutLowerHeader}</h1>
      <p className="text-light fs-1rem-to-1-25rem">{aboutLowerImageText}</p>
    </div>
  );
};

export default AboutLowerText;
