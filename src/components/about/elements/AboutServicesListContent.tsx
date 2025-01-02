interface aboutServicesListContent {
  listTitle: string;
  listItems: string[];
}

const AboutServicesListContent: React.FC<aboutServicesListContent> = ({ listTitle, listItems }) => {
  return (
    <div>
      <h4>{listTitle}</h4>
      {listItems.map((listItem, index) => (
        <p key={index}>{listItem}</p>
      ))}
    </div>
  );
};

export default AboutServicesListContent;
