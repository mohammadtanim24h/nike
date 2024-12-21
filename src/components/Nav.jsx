import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    const toggleHamburgerMenu = () => {
        setDisplayMobileMenu((prevState) => !prevState);
    };

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                <ul className="flex justify-center items-center max-lg:hidden">
                    {navLinks.map((item) => (
                        <li
                            key={item.label}
                            className="nav-link"
                        >
                            <a
                                className="font-montserrat leading-normal text-lg font-medium"
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden">
                    {!displayMobileMenu && (
                        <img
                            src={hamburger}
                            alt="hamburger"
                            width={25}
                            height={25}
                            onClick={toggleHamburgerMenu}
                        />
                    )}
                    {displayMobileMenu && (
                        <div className="fixed bg-white top-0 right-0 w-9/12 h-screen z-11 shadow-xl padding-x py-8 transition-all ease-in-out duration-500">
                            <img
                                src={close}
                                alt="close sidebar"
                                className="mb-4 ml-24"
                                onClick={toggleHamburgerMenu}
                            />

                            <ul className="flex flex-col space-y-2">
                                {navLinks.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            className="font-montserrat leading-normal text-lg text-slate-gray font-medium"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Nav;
