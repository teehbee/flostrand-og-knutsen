import { ClientLogo } from "../elements";
import { OsteroyFerjeselskapLogo } from "../../../assets/customers";
import { clientLogoAlt, ofsLink } from "../content";

interface clientsSection {
  clientSectionTitle: string;
}

const ClientsSection: React.FC<clientsSection> = ({ clientSectionTitle }) => {
  return (
    <div>
      <h3 className="fs-2-125rem-to-3-625rem fw-bold">{clientSectionTitle}</h3>
      <div className="text-center my-5">
        <ClientLogo clientLink={ofsLink} clientLogo={OsteroyFerjeselskapLogo} clientAltText={clientLogoAlt} />
      </div>
    </div>
  );
};

export default ClientsSection;
