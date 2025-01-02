interface aboutServicesTitle {
  aboutServicesTitle: string;
}

const AboutServicesTitle: React.FC<aboutServicesTitle> = ({ aboutServicesTitle }) => {
  return (
    <div className="text-center section-border">
      <h3 className="fs-1-5rem-to-2rem fw-bold pb-2">{aboutServicesTitle}</h3>
    </div>
  );
};

export default AboutServicesTitle;
