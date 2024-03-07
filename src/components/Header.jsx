
export default function Header() {
    const listItems = [
        {
            title: 'Home',
            href: './'
        },
        {
            title: 'About',
            href: './#about'
        },
        {
            title: 'Projects',
            href: './#projects'
        },
        {
            title: 'Contact',
            href: './#contact'
        },

    ]


    return(
        <header className="fixed w-full bg-zinc-500 z-50 flex justify-end px-5 py-3">
            <nav className="flex justify-end h-16 w-1/2">
                <ul className="flex flex-row justify-around items-center w-full">
                   {(listItems.map((item, key) => {
                    return <li key={key}>
                        <a href={item.href}>{item.title}</a>
                    </li>
                   }))}
                </ul>
            </nav>
        </header>
    )
}