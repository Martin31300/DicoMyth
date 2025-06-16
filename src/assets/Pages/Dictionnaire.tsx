import { useEffect, useState } from "react";
import "./Dictionnaire.css";
import data from "../../data.json";
import HeroCard from "../Components/HeroCard";
import SearchBar from "../Components/SearchBar";
import { Link } from "react-router";

function Dictionnaire() {
    const [search, setSearch] = useState("");
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        async function getHeroes() {
            setHeroes(data.heroes);
        }
        getHeroes();
    }, []);

    // Filtrer les héros selon le search et exclure union et EnTrop
    const filteredHeroes = heroes.filter(
        (hero) =>
            hero.name.toLowerCase().includes(search.toLowerCase()) &&
            !["union", "EnTrop"].includes(hero.type)
    );

    // Trier par ordre alphabétique
    const sortedHeroes = filteredHeroes.sort((a, b) => a.name.localeCompare(b.name));

    // Grouper par première lettre
    const groupedHeroes = sortedHeroes.reduce((acc, hero) => {
        const firstLetter = hero.name[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(hero);
        return acc;
    }, {});

    return (
        <main className="mainDico">

            <article className="heroDico">
                <h1 className="h1Dictionnaire">Dictionnaire</h1>
                <SearchBar search={search} setSearch={setSearch} />
            </article>

            {Object.keys(groupedHeroes)
                .sort() // Assure un ordre alphabétique des titres
                .map((letter) => (
                    <section key={letter} className="lettreSection">
                        <h2 className="lettreTitre">{letter}</h2>
                        <div className="tabHeroes">
                            {groupedHeroes[letter].map((hero) => (
                                <Link className="lienHeroCard" key={hero.id} to={`/profilHero/${hero.id}`}>
                                    <HeroCard hero={hero} />
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
        </main>
    );
}

export default Dictionnaire;