interface aboutTextParagraph {
  textContent: string;
  textContentBold: string;
}

const AboutTextParagraph: React.FC<aboutTextParagraph> = ({ textContentBold, textContent }) => {
  return (
    <p className="fs-1rem-to-1-25rem py-2 py-lg-3 m-0">
      <span className="fw-bold">{textContentBold} </span>
      {textContent}
    </p>
  );
};

export default AboutTextParagraph;
