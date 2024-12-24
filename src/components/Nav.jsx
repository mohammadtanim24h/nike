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
        <header className="padding-x py-8 absolute z-20 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                <ul className="flex justify-center items-center max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label} className="nav-link">
                            <a
                                className="font-montserrat leading-normal text-lg font-medium"
                                href={item.href}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="max-lg:hidden">
                    <button
                        type="button"
                        className="px-6 py-2 rounded-full font-montserrat text-lg font-medium text-slate-gray mr-2"
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        className="px-6 py-2 rounded-full font-montserrat text-lg font-medium btn-primary"
                    >
                        Sign up
                    </button>
                </div>
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
                    <div
                        className={`fixed bg-white top-0 ${
                            displayMobileMenu ? "right-0" : "-right-full"
                        } w-3/5 h-screen shadow-xl padding-x py-6 transition-all ease-in-out duration-500`}
                    >
                        <div className="mb-4 flex justify-end">
                            <img
                                src={close}
                                alt="close sidebar"
                                onClick={toggleHamburgerMenu}
                            />
                        </div>

                        <ul className="flex flex-col space-y-2 mb-4">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        className="font-montserrat leading-normal text-xl text-slate-gray font-medium"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-2">
                            <button
                                type="button"
                                className="px-6 py-2 rounded-full font-montserrat text-lg font-medium btn-primary w-full"
                            >
                                Log in
                            </button>
                            <button
                                type="button"
                                className="py-2 rounded-full font-montserrat text-lg font-medium btn-primary w-full"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
