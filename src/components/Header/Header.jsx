import Link from "./Links"

export default function Header() {
    const listItems = [
        {
            title: 'Home',
            href: './header',
            id: '#header'
        },
        {
            title: 'About',
            href: './#about',
            id: '#about'
        },
        {
            title: 'Projects',
            href: './#projects',
            id: '#projects'
        },
        {
            title: 'Contact',
            href: './#contact',
            id: '#contact'
        }

    ]


    return(
        <header id="header" className="fixed w-full bg-zinc-500 z-50 flex justify-end px-5 py-3">
            <nav className="flex justify-end h-16 w-1/2">
                <ul className="flex flex-row justify-around items-center w-full">
                   {(listItems.map((item, key) => {
                    return (
                        <Link
                            key={key}
                            title={item.title}
                            href={item.href}
                            id={item.id}
                        />)
                   }))}
                </ul>
            </nav>
        </header>
    )
}