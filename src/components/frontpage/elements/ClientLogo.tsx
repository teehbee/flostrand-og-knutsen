interface clientLogo {
  clientLogo: string;
  clientAltText: string;
  clientLink: string;
}

const ClientLogo: React.FC<clientLogo> = ({ clientLogo, clientAltText, clientLink }) => {
  return (
    <a href={clientLink}>
      <img className="client-logo" src={clientLogo} aria-label={clientAltText} />
    </a>
  );
};

export default ClientLogo;
