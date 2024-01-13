import { Link } from "react-router-dom";

 

const Button = () => {
    return (
        <div className="text-center mt-24">
            <Link to="/title"><button className="btn btn-primary">Click</button></Link>
        </div>
    );
};

export default Button;