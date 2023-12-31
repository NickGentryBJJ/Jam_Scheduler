import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUpForm.css'


function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [stageName, setStageName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [photoFile, setPhotoFile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
  
    e.preventDefault();
    const formData = new FormData();
    if (photoFile) {
      formData.append('user[photo]', photoFile);
    }
    formData.append('user[email]', email);
    formData.append('user[stageName]', stageName);
    formData.append('user[password]', password);
    
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup(formData))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const handleFile = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setPhotoFile(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => setPhotoUrl(fileReader.result);
      
      } else setPhotoUrl(null);
  }

  let preview = null;
  if (photoUrl) preview = <img className="preview-image" src={photoUrl} alt="" />;

  return (
  <>
    <div className="sign-up-wrapper">
      <h2 className="make">Are You Ready To Jam? Join Now!</h2>
        <div className="middle-sign-up">
          <div className="sign-up-form">
            <form onSubmit={handleSubmit}>    
            <ul>
              {errors.map(error => <li className="errors" key={error}>{error}</li>)}
            </ul>
            <label>
              Email<br/>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </label>
            <br/>
            <label>
              Stage Name<br/>
            <input
              type="text"
              value={stageName}
              onChange={(e) => setStageName(e.target.value)}
              required
            />
            </label>
            <br/>
            <label>
              Password<br/>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </label>
            <br/>
            <label>
              Confirm Password<br />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              />
            </label>
            <br/>
            <input type="file" onChange={handleFile} />
            <h3>Image preview</h3>
            {preview}
            <br/>
              <div className="agree">
                <p>By clicking Agree & Join, you agree to the Jam Club User Agreement, Privacy Policy, and Cookie Policy.</p>
              </div>
            <button type="submit" className="agree-button">Agree & Join</button>
            </form>
          </div>
          <h3 className="jam-message">Get jamming with your friends on Jam Club!</h3>
      </div>
    </div>
  </>
  );
}

export default SignupForm;