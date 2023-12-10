import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate, Link, BrowserRouter } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import "./ExerciseWeek"


export default function LoginPage ({login, setLoggedIn}){
    const navigate = useNavigate();
    const handleLoginSuccess = (response) => {
        // const { profileObj, tokenId } = response;
        // const { name, email, imageUrl } = profileObj;
      
        // // Store user data in local storage
        // localStorage.setItem('user', JSON.stringify({ name, email, imageUrl, tokenId }));
      
        // console.log(response);
      
        setLoggedIn(true);

        navigate("/ExerciseWeek");
      };
    
  return (
    <div className="login-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <img className="flc" alt="Flc" src="src/assets/lean-mass-logo.png" />
          <div className="div">Log In</div>
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-2">abc@gmail.com</div>
              <img className="vector" alt="Vector" src="vector.svg" />
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="overlap-group-2">
                <div className="text-wrapper-3">password</div>
                {/* <img className="img" alt="Vector" src="vector-2.svg" /> */}
              </div>
              {/* <img className="vector-2" alt="Vector" src="image.svg" /> */}
            </div>
          </div>
          <div className="text-wrapper-4">Not a member?</div>
          {/* <Component className="component-2" /> */}
          <div className="signup">
            <div className="text-wrapper-5">signup</div>
          </div>
          <div className="google-login">
                <GoogleOAuthProvider  clientId="886302518859-fkvi895pf6t8i8svsd8hi46fbfp89n53.apps.googleusercontent.com">
                <GoogleLogin
                    
                    buttonText="Login with Google"
                    onSuccess={handleLoginSuccess}
                    onFailure={() => console.log("error")}
                    cookiePolicy={"single_host_origin"}
                    
                    
                    
                    
                />
                </GoogleOAuthProvider>
            </div>
        </div>
      </div>
    </div>
  );
};
