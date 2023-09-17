import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/Ai";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="text-left">
        <AiFillCheckCircle className="inline-block mr-2"></AiFillCheckCircle>{" "}
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
