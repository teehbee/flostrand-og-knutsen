interface aboutServicesListContent {
  listTitle: string;
  listItems: string[];
}

const AboutServicesListContent: React.FC<aboutServicesListContent> = ({ listTitle, listItems }) => {
  return (
    <div className="pt-3 pt-lg-5 text-center col-12 col-md-6 col-lg-4">
      <h4 className="pb-2">{listTitle}</h4>
      {listItems.map((listItem, index) => (
        <p key={index}>{listItem}</p>
      ))}
    </div>
  );
};

export default AboutServicesListContent;
