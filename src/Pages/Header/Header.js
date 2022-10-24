import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../Image/logo.png";
const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const HandleLogout = () => {
    LogOut()
      .then(() => {
        alert("Sign-out successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
            <img src={logo} alt="logo" className="w-10" />
            Travel Buddy
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            {user?.uid ? (
              <li>
                <button onClick={HandleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}

            <li>
              <Link to={"/contract"}>Contract</Link>
            </li>
            <li>
              {user?.uid ? (
                <p className="text-2xl font-bold">{user.displayName}</p>
              ) : (
                <p></p>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
