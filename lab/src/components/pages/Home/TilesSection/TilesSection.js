import './TilesSection.css';

const Tile = ({ image, title, description }) => (
  <div className="tile">
    <img src={image} alt={title} className="tile-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const TilesSection = () => (
  <section className="tiles-section">
    <div className='movie-exampels'>
    <Tile 
      image="/img/annabelle.jpg" 
      title="Annabelle" 
      description="A seemingly innocent vintage doll becomes a conduit for malevolent forces, unleashing terror upon a young couple." 
    />
    <Tile 
      image="/img/terrifier.jpg" 
      title="Terrifier" 
      description="A sadistic mime-like killer, Art the Clown, terrorizes a group of unsuspecting victims on Halloween night." 
    />
    <Tile 
      image="/img/sinister.jpg" 
      title="Sinister" 
      description="A true-crime writer discovers a box of home movies revealing a series of horrifying murders, linking them to a sinister supernatural entity." 
    />
    <Tile 
      image="/img/grave_encounters.jpg" 
      title="Grave Encounters" 
      description="A crew of paranormal investigators locks themselves inside an abandoned psychiatric hospital, only to find themselves trapped with genuinely terrifying phenomena." 
    />
    </div>
    <button className="view-more-tile">View more</button>
  </section>
);

export default TilesSection;
