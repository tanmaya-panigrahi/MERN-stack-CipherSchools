import isEmail from "validator/lib/isEmail";
// import { loginuser } from "../../../node/tasks-application/src/controllers/user.controller";
import { loginuser } from "../apis/user-api";
import { useState } from "react";

function LoginScreen() {
  const [ credentials, setCredentials ] = useState({ email: "", password: "" });

  const credentialValidator = ({ email, password }) => {
    if (isEmail(email) && password?.length >= 8) {
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!credentialValidator(credentials)) {
        return;
      }
      await loginuser({ ...credentials });
    };
    return (
      <div className="screen">
        <h1 className="ui heading center">Login</h1>
        <div>
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={credentials.email}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={credentials.password}
              />
            </div>

            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>

        {/* <p>The number of tasks are: {taskList.length} </p> */}

        {/* <Addtask onSubmit={addNewTask}/> */}
      </div>
    );
  };


export default LoginScreen;
