import tailwindCommon from "../helpers/tailwindCommon";

export default function About() {
    const skillsList= ['JavaScript', 'PHP', 'CSS', 'HTML', 'React', 'SASS', 'GIT', 'Github', 'Atlassian', 'Figma', 'Selenium'];
    const { h2, h3, p_about, skill_badge } = tailwindCommon;

    return(
        <section id="about" className="pt-5 ">
            <div className="main my-0 mx-auto w-4/5 max-w-screen-lg mb-8">
                <h2 className={h2}>About</h2>
                <p className="text-lg text-white my-0 mx-auto text-center">
                This section provides an overview of my background, job focus, and current proficiencies in programming and technology
                </p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 w-11/12 mx-auto">
                <div>
                    <h3 className={h3}>Who am I?</h3>
                    <p className={p_about}>I am a <span className="highlight">Web Developer</span> mostly focused on
                     <span className="highlight"> Front-End</span> development and keen on bringing success
                      to every project I am invested on. Check my <a className="highlight">resume</a> and some of my work
                      in the <span className="highlight">Projects</span> section.
                    </p>
                    <p className={p_about}>I am bring with me 9 years of experience in the banking industry, most notably in the pricing of loans and other financial services.
                     I am also enjoy turning chaotic numbers and strings data into meaningful and insightful information.    
                    </p>
                    <p className={p_about}>
                        I am open to new opportunities where I can make an impact, grow and help my peers to grow as well.
                         Please contact me if you have an opportunity where you believe my skill set and experience can make a difference!
                    </p>
                </div>
                <div>
                <h3 className={h3}>Skills</h3>
                <div className="flex flex-wrap">
                    {skillsList.map((skill, index) => {
                        return (
                            <div key={index} className={skill_badge}>{skill}</div>
                        )
                    })}
                </div>
                </div>
            </div>
            
        </section>
    )
}