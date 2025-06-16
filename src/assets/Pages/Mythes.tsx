import "./Mythes.css"
import "./Home.css"
import Phaeton from "../../Image-site-mythologie/Phaeton.jpg"
import Titants from "../../Image-site-mythologie/titanomachie.jpg"
import Minotaure from "../../Image-site-mythologie/minotaure.webp"
import Aphrodite from "../../Image-site-mythologie/Adonis Aphro.jpg"
import ArrowBlack from "../../Image-site-mythologie/pictos/arrow-down-black.svg"


function Mythes() {
    return (
        <main className="mainHome">

            <header className="header-home">

                <div className="divTitre">
                    <h1 className="h1-Home">Les Mythes</h1>
                    <img src={ArrowBlack} alt="flèche" />
                </div>

            </header>

            <section className="SectionMythes">

                <div className="grid-case">

                    <div className="case" id="case1">
                        <img src={Phaeton} alt="Mythologie" />
                        <h3>La chute de Phaeton</h3>
                    </div>

                    <div className="case" id="case2">
                        <img src={Titants} alt="Mythologie" />
                        <h3>Les titans</h3>
                    </div>

                    <div className="case" id="case3">
                        <img src="https://www.parismuseescollections.paris.fr/sites/default/files/styles/pm_notice/public/atoms/images/PPA/lpdp_24958-7.jpg?itok=GWlokZWK" alt="Mythologie" />
                        <h3>La rapt de Persephone</h3>
                    </div>

                    <div className="case" id="case4">
                        <img src={Minotaure} alt="Mythologie" />
                        <h3>Thésée et le Minotaure</h3>
                    </div>

                    <div className="case" id="case5">
                        <img src={Aphrodite} alt="Mythologie" />
                        <h3>Aphrodite et Adonis</h3>
                    </div>

                </div>
            </section>

            {/* <section className="mythes">

                <h3 className="h3-home">Mythes</h3>

                <div className="grille">

                    <article className="article" id="article1">
                        Article 1
                    </article>

                    <article className="article" id="article2">
                        Article 2
                    </article>

                    <article className="article" id="article3">
                        Article 3
                    </article>

                    <article className="article" id="article4">
                        Article 4
                    </article>

                    <article className="article" id="article5">
                        Article 5
                    </article>

                    <article className="article" id="article6">
                        Article 6
                    </article>

                    <article className="article" id="article7">
                        Article 7
                    </article>

                </div>
            </section> */}
        </main>
    )
}

export default Mythes