import PropTypes from "prop-types";
import Feature from "../feature/feature";

const SinglePriceOption = ({ option }) => {
  const { features, price, name } = option;
  return (
    <div className="bg-blue-300 rounded-md p-4 text-center flex flex-col">
      <h2>
        <span className="text-7xl font-extrabold"> {price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl my-4">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, idx) => (
          <Feature feature={feature} key={idx}></Feature>
        ))}
      </div>

      <button className="btn bg-lime-200 w-full font-bold hover:bg-lime-700 border-none my-4  outline-none">
        Buy Now
      </button>
    </div>
  );
};

SinglePriceOption.propTypes = {
  option: PropTypes.object,
};

export default SinglePriceOption;
