import tailwindCommon from "../../helpers/tailwindCommon";

export default function SectionHeading({ title, description }) {
    const { h2 } = tailwindCommon;

    return(
        <div className="main my-0 mx-auto w-4/5 max-w-screen-lg mb-8">
            <h2 className={h2}>{title}</h2>
            <p className="text-lg text-white my-0 mx-auto text-center">{description}</p>
        </div>
    );
}