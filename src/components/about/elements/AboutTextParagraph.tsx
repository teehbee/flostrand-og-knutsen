interface aboutTextParagraph {
  textContent: string;
}

const AboutTextParagraph: React.FC<aboutTextParagraph> = ({ textContent }) => {
  return (
    <div>
      <p>{textContent}</p>
    </div>
  );
};

export default AboutTextParagraph;
