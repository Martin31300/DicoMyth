import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";
import "./SlidingSections.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

const contents = [
    {
        title: "Bienvenue",
        text: "Dans l'univers de la mythologie greco-romaine",
        image: "https://mythologica.fr/grec/pic/bertin_phaeton.jpg",
    },
    {
        title: "Arbre",
        text: "L'arbre généalogique des dieux et héros mythologiques",
        image:
            "https://www.meisterdrucke.fr/kunstwerke/1260px/Giulio_Romano_-_The_Gods_of_Olympus_trompe_loeil_ceiling_from_the_Sala_dei_Giganti_1528_-_%28MeisterDrucke-318954%29.jpg",
        path: "/arbre",
    },
    {
        title: "Dictionnaire",
        text: "Le répertoire des dieux et héros mythologiques",
        image:
            "https://www.meisterdrucke.fr/kunstwerke/1260px/Giulio_Romano_-_Gods_of_Olympus_-_%28MeisterDrucke-1087958%29.jpg",
        path: "/dictionnaire",
    },
    {
        title: "Mythes",
        text: "Les plus grands mythes mythologiques",
        image:
            "https://www.lumieresdesetoiles.com/wp-content/uploads/2021/10/palais-du-te.jpeg",
        path: "/mythes",
    },
];


const SlidingSections = () => {
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);
    const headingsRef = useRef<(HTMLElement | null)[]>([]);
    const paragraphsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        gsap.set(sectionsRef.current, { opacity: 0, yPercent: 20 });

        (sectionsRef.current as HTMLElement[]).forEach((section, index) => {
            const heading = headingsRef.current[index];
            const paragraph = paragraphsRef.current[index];

            // Split le texte (comme dans ta page HTML)
            const splitHeading = new SplitText(heading, {
                type: "chars, words",
                linesClass: "split-line",
            });

            gsap.fromTo(
                section,
                { opacity: 0, yPercent: 20 },
                {
                    opacity: 1,
                    yPercent: 0,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 30%",
                        scrub: true,
                        // markers: true, // Pour debug
                    },
                    onStart: () => {
                        // Animation des lettres du titre
                        gsap.fromTo(
                            splitHeading.chars,
                            { yPercent: 100, opacity: 0 },
                            {
                                yPercent: 0,
                                opacity: 1,
                                stagger: 0.05,
                                duration: 0.6,
                                ease: "back.out(1.7)",
                            }
                        );

                        // Animation du paragraphe
                        gsap.fromTo(
                            paragraph,
                            { opacity: 0, y: 50 },
                            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
                        );
                    },
                }
            );
        });



    }, []);

    return (
        <div>
            {contents.map((content, i) => (
                <section
                    key={i}
                    ref={(el) => { if (el && sectionsRef.current) { sectionsRef.current[i] = el } }}
                    className="section"
                    style={{ backgroundImage: `url(${content.image})` }}
                >
                    <div className="section-content">
                        <h2 ref={(el) => { if (el) { headingsRef.current[i] = el } }}>{content.title}</h2>
                        <p ref={(el) => { if (el) { paragraphsRef.current[i] = el } }}>{content.text}</p>
                        {content.path && (
                            <Link to={content.path} className="section-button">
                                Explorer
                            </Link>
                        )}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default SlidingSections;
