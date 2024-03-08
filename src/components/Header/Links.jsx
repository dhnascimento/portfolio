
export default function Link({ title, href, id }) {
  return (
    <li>
        <a
         href={href}
         onClick={(e) => {
            e.preventDefault();
            const headerHeight = 88;
            let section = document.querySelector(id);
            if (section) {
                const offsetTop = section.offsetTop;
                window.scrollBy({
                    top: offsetTop - headerHeight,
                    behavior: 'smooth' 
                });
            }
         }}
         >
            {title}
        </a>
    </li>
  );
}
