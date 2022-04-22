import {Link} from 'react-router-dom';

const Header=()=>{
    
        return(
            <div>
                <Link className="btn btn-primary" to="/login">Login</Link>
                <Link className="btn btn-secondary" to="/register">Registration</Link>
                <Link className="btn btn-success" to="/profile">Profile</Link>
                <Link className="btn btn-danger" to="/verify">Verify</Link>
            </div>
        )
    
}
export default Header;