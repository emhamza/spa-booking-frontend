// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { CiFacebook, CiTwitter, CiInstagram } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Services = ({
  name, to, image, description,
}) => (
  <div>
    <Link to={to} className="services">
      <li className="services">
        <div className="image">
          <img src={`${image}`} alt="service" />
        </div>
        <h2 className="header-font">{name}</h2>
        <p className="p-font">
          {description.substring(0, 20)}
          ...
        </p>
      </li>
    </Link>
    <div className="icons">
      <CiFacebook />
      <CiTwitter />
      <CiInstagram />
    </div>
  </div>
);
Services.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Services;
