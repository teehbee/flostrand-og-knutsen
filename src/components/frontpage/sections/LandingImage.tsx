interface landingImage {
  mainHeaderLarge: string;
  mainHeaderSmall: string;
  imageDescription: string;
}

const LandingImage: React.FC<landingImage> = ({ mainHeaderLarge, mainHeaderSmall, imageDescription }) => {
  return (
    <picture>
      <source media="(min-width: 992px)" srcSet={mainHeaderLarge} />
      <img className="frontpage-banner" src={mainHeaderSmall} alt={imageDescription} />
    </picture>
  );
};

export default LandingImage;
