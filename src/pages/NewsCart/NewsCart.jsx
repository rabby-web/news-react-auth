import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCart = ({ news }) => {
  const { title, image_url, details, _id } = news || {};
  return (
    <div>
      <div className="m-2">
        <div className="card w-full p-2 glass">
          <figure>
            <img src={image_url} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200)}{" "}
                <Link to={`/news/${_id}`} className="text-blue-600">
                  Read More...
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
            <div className="card-actions justify-end">
              <Link to={`/news/${_id}`}>
                <button className="btn btn-primary">View Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
NewsCart.propTypes = {
  news: PropTypes.object.isRequired,
};
export default NewsCart;
