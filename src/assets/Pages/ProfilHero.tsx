import { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../data.json";
import descriptions from "../../dataDescription.json";
import "./ProfilHero.css";

function ProfilHero() {
    const { id } = useParams();

    const [hero, setHero] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {

        if (id) {
            const foundHero = data.heroes.find((h) => h.id === id);
            setHero(foundHero);

            const foundDescription = descriptions.find((d) => d.heroId === id);
            setDescription(foundDescription);
        }

    }, [id]);

    return (
        hero ? (
            <>
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
                                    <div key={index} id="mainProfil" className={`paragraphWithImage 
                                    ${imagePosition === "left" ? "reverseRow" : ""}`}>

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

                        {/* <img className="imageDescription" src={description.image1} alt={description.name} /> */}
                    </section>

                </main>
            </>
        ) : (
            <p>Héro non trouvé</p>
        )
    )
}

export default ProfilHero