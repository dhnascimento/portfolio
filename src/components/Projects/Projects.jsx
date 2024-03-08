import tailwindCommon from "../../helpers/tailwindCommon";
import SectionHeading from "../shared/SectionHeading";

export default function Projects() {
    const { grid_section } = tailwindCommon;
    return(
        <section id="projects" className="pt-5">
            <SectionHeading
                title={'Projects'}
                description={'Some of my the personal projects I create with their description and a link to the repo or a live version.'} 
            />
            <div id="projects-cards"></div>
            <div className={grid_section}>
                <div>foo</div>
                <div>bar</div>
            </div>
        </section>
    )
}