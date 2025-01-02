interface aboutLandingImage {
  aboutMainHeaderLarge: string;
  aboutMainHeaderSmall: string;
  aboutMainImageDescription: string;
}

const AboutLandingImage: React.FC<aboutLandingImage> = ({ aboutMainHeaderLarge, aboutMainHeaderSmall, aboutMainImageDescription }) => {
  return (
    <picture>
      <source media="(min-width: 992px)" srcSet={aboutMainHeaderLarge} />
      <img className="frontpage-banner" src={aboutMainHeaderSmall} alt={aboutMainImageDescription} />
    </picture>
  );
};

export default AboutLandingImage;
