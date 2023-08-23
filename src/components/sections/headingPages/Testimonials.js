import Carousel from './TestimonialCarousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
            <TestimonialCard name="Micheal Woods" description="This is the best Mediteranian food that I've ever had!"/>
            <TestimonialCard name="Clifford Goodwill" description="My mouth is always watery when i have a meal here."/>
            <TestimonialCard name="Mary Peterson" description="I;ve some Mediteranian food before but not like this. Chefs kiss!"/>
            <TestimonialCard name="Lucy Block" description="A really good place to relax and enjoy the cenary after a long day of work"/>
            <TestimonialCard name="Abbie Goodman" description="Offers a variety of delicacies that I'v never even heared of in the italian culture."/>
            <TestimonialCard name="Thomas Shelby" description="I'm mostly a man of culture and i do say that this place is full of the italian cuture and very welcoming and humbling customer service."/>
            </section>

            <section className="testimonials-carousel">
                <Carousel/>
            </section>
        </section>
    );
}