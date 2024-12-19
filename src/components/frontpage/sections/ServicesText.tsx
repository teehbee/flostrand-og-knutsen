interface servicesText {
  description: string;
  title: string;
}

const ServicesText: React.FC<servicesText> = ({ description, title }) => {
  return (
    <div className="">
      <h2 className="dark-font fs-2-125rem-to-3-625rem fw-bold">{title}</h2>
      <p className="my-5 fs-1rem-to-1-25rem fw-500">{description}</p>
    </div>
  );
};

export default ServicesText;
