import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img
                            src={footerLogo}
                            alt="nike logo"
                            width={150}
                            height={46}
                        />
                    </a>
                    <p className="mt-6 text-white-400 text-base leading-7 font-montserrat sm:max-w-sm">
                        Get shoes ready for the new term at your nearest Nike
                        store. Find your perfect size. Shop and get rewards!
                    </p>
                    <div className="flex items-center gap-5 mt-6">
                        {socialMedia.map((icon) => (
                            <div
                                key={icon.alt}
                                className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer"
                            >
                                <img
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
