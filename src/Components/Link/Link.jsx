import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <>
      <li className="mr-10 hover:bg-fuchsia-400 duration-100">
        <a href={route.path}> {route.name} </a>
      </li>
    </>
  );
};
Link.propTypes = {
  route: PropTypes.array,
};
export default Link;
