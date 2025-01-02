interface aboutTextParagraph {
  main: string;
  bold: string;
}

const AboutTextParagraph: React.FC<aboutTextParagraph> = ({ bold, main }) => {
  return (
    <p className="fs-1rem-to-1-25rem py-2 py-lg-3 m-0">
      <span className="fw-bold">{bold} </span>
      {main}
    </p>
  );
};

export default AboutTextParagraph;
