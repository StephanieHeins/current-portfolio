import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!userName) {
      setErrorMessage('Please enter your name.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (password.length<8) {
      setErrorMessage(
        `Message must be more than 8 characters.`
      );
      return;
    }
    alert(`Thank you!`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div>

      <div className="container">

      <div class="columns my-4">
        <div class="row justify-content-center">
          <div class="col-sm">
          </div>

          <div class="col-6">
            <div className="text-center">
              <div className="mb-3 h4">
                <a className="text-info" href="https://github.com/StephanieHeins">Github</a>
              </div>
              <div className="mt-3 mb-4 h4">
                <a className="text-info" href="https://www.linkedin.com/in/stephanieheins/">LinkedIn</a>
              </div>
              <div className="h5">
                Email Directly:
              </div>
            </div>
            
          <form className="my-2">
            <div class="form-group">
              <label for="exampleInputPassword1">Name</label>
              <input 
                value={userName}
                name="userName"
                onChange={handleInputChange}
                class="form-control mb-3" 
                id="exampleInputPassword1" 
                placeholder="First Last" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input 
                type="email" 
                value={email}
                name="email"
                class="form-control mb-3" 
                onChange={handleInputChange}
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Example@email.com" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea 
                value={password}
                name="password"
                onChange={handleInputChange}
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                placeholder="I have a question about one of your projects..." />
            </div>
            <div class="row justify-content-center my-4">
              <button 
                onClick={handleFormSubmit}
                type="submit" 
                class="btn btn-dark text-info"
                style={{width:100}}
                >Submit
                </button>
            </div>
          </form>
          </div>

          <div class="col-sm">
          </div>
        </div>
      </div>
      </div>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
