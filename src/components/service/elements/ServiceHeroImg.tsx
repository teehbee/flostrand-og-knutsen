interface serviceHeroImage {
  heroImageLarge: string;
  heroImageSmall: string;
  imageDescription: string;
}

const ServiceHeroImage: React.FC<serviceHeroImage> = ({ heroImageLarge, heroImageSmall, imageDescription }) => {
  return (
    <picture>
      <source media="(min-width: 992px)" srcSet={heroImageLarge} />
      <img className="frontpage-banner" src={heroImageSmall} alt={imageDescription} />
    </picture>
  );
};

export default ServiceHeroImage;
