import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
    return (
        <div className="flex flex-1 flex-col max-sm:w-full shadow-md rounded-3xl">
            <img src={imgURL} alt={name} className="w-full object-cover" />
            <div className="px-4 pb-4">
                <div className="mt-8 flex justify-start gap-2.5">
                    <img src={star} alt="rating" width={24} height={24} />
                    <p className="font-montserrat text-xl leading-normal text-slate-gray">
                        {rating}
                    </p>
                </div>
                <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
                    {name}
                </h3>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
                    {price}
                </p>
            </div>
        </div>
    );
};

export default PopularProductCard;
