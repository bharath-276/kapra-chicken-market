import skinless from "../assets/images/skinless.jpg";
import dressed from "../assets/images/dressed.jpg";
import boneless from "../assets/images/boneless.jpg";

function Gallery() {
  return (
    <section className="gallery">
      <h2>Our Shop & Fresh Chicken</h2>
      <div className="gallery-grid">
        <img src={skinless} alt="Skinless chicken" />
        <img src={dressed} alt="Dressed chicken" />
        <img src={boneless} alt="Boneless chicken" />
      </div>
    </section>
  );
}

export default Gallery;
