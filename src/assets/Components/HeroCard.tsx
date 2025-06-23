import "./HeroCard.css"

type HeroCardProps = {
    hero: {
      id: string;
      name: string;
      image: string;
      description?: string; // ✅ ← rendre cette propriété optionnelle
    };
  };

function HeroCard({ hero }: HeroCardProps) {
    return (
        <article className="case" id="CardHero">

            <img className="imgCard" src={hero.image} alt={hero.name} />
            <h3>{hero.name}</h3>

        </article>
    )
}

export default HeroCard

