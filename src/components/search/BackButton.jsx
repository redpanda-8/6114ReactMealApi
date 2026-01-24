import { Link } from "react-router-dom";

const BackButton = ({ to = "/"}) => {
  return (
    <div className="pt-3 pt-md-4">
      <Link to={to} 
        className="btn btn-outline-success rounded-pill d-inline-flex align-items-center gap-2 mb-4 mt-4">
        🍕 Back Home
      </Link>
    </div>
  );
};

export default BackButton;