interface serviceBodyText {
  bold: string;
  main: string;
}

const ServiceBodyText: React.FC<serviceBodyText> = ({ bold, main }) => {
  return (
    <div className="container py-2 py-lg-3">
      <p className="fs-1rem-to-1-25rem">
        <span className="fw-bold">{bold} </span>
        {main}
      </p>
    </div>
  );
};

export default ServiceBodyText;
