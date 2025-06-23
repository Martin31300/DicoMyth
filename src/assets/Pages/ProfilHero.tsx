import { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../data.json";
import descriptions from "../../dataDescription.json";
import "./ProfilHero.css";

type HeroTarget =
  | string
  | {
      target: string;
      sourceHandle: string;
      targetHandle: string;
    };

    type Hero = {
        id: string;
        name: string;
        image: string;
        imageProfil?: string;
        description?: string;
        descriptionCard: string;
        type?: string;
        x?: number;
        y?: number;
        targets?: HeroTarget[];
      };
      

type HeroDescription = {
  heroId: string;
  name: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  text: string;
};

function ProfilHero() {
  const { id } = useParams();
  const [hero, setHero] = useState<Hero | null>(null);
  const [description, setDescription] = useState<HeroDescription | null>(null);

  useEffect(() => {
    if (id) {
      const foundHeroRaw = data.heroes.find((h) => h.id === id);
  
      if (
        foundHeroRaw &&
        typeof foundHeroRaw.name === "string" &&
        typeof foundHeroRaw.image === "string" &&
        typeof foundHeroRaw.descriptionCard === "string"
      ) {
        setHero(foundHeroRaw as Hero);
      }
  
      const foundDescription = descriptions.find(
        (d: HeroDescription) => d.heroId === id
      );
      if (foundDescription) {
        setDescription(foundDescription);
      }
    }
  }, [id]);
  

  return hero ? (
    <main className="MainProfil">
      <header className="HeaderProfil">
        <h1 className="h1Profil">{hero.name}</h1>
        <img className="ImgProfil" src={hero.imageProfil} alt={hero.name} />
      </header>

      <section className="contenuProfil">
        {description && description.text ? (
          description.text.split("\n\n").map((paragraph, index) => {
            let image = null;
            let imagePosition = "right";

            if (index === 1 && description.image1) {
              image = description.image1;
              imagePosition = "right";
            } else if (index === 2 && description.image2) {
              image = description.image2;
              imagePosition = "left";
            }

            return (
              <div
                key={index}
                id="mainProfil"
                className={`paragraphWithImage ${
                  imagePosition === "left" ? "reverseRow" : ""
                }`}
              >
                {image && (
                  <div className="imageContainer">
                    <img src={image} alt={`Illustration ${index}`} />
                  </div>
                )}

                <div className="paragraphText">
                  {paragraph.split("\n").map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <p>Pas de description disponible</p>
        )}
      </section>
    </main>
  ) : (
    <p>Héro non trouvé</p>
  );
}

export default ProfilHero;
