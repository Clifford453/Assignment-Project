export default function About() {
    return(
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p ClassName="about-subtext">Little Lemon opened in 2013 by two italian brothers, Romero and Adrian.
                Despite the city's deversity, the two brothers recognized the lack of Mediteranian cuisine in Chicago,
                and they were inspired to briing the flavours of their hometown in Italy to the people of Chicago. The two brothers
                continued to oversee the Little Lemon restaurant, nearly ten years latter.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
        </article>
    );
}