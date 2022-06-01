import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useHistory} from 'react-router';

const Register = () => {


  const history = useHistory()

    const [user, setUser] = useState({
      familyname : "",
      email: "",
      lastname : "",
      firstname: "",
      phonenumber: "",
      password: ""
    });

    const handleInput = (event) => {
      let name = event.target.name;
      let value = event.target.value;

      setUser({...user, [name]:value});
    }

    const handleSubmit = async(event) => {
      event.preventDefault();

      const {lastname, firstname, familyname, email, phonenumber, password} = user;
      try {
        const res = await fetch('/register', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body : JSON.stringify({
            lastname, firstname, familyname, email, phonenumber, password
          })
        })

        console.log(res.status)
        if(res.status === 400 || !res) {
          window.alert("Already Used Details")
        } else {
          window.alert("Registered Successfully");
          // eslint-disable-next-line no-restricted-globals
          history.push('/login')
        }
      } catch (error) {
        console.log(error);
      }
    }


    return(
        <div>
            <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center order-2 form">
            <h1 className="display-4 fw-bolder">Hello, Family</h1>
            <p className="lead text-center">
              Enter Your Details to Register
            </p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>

          <div className="col-md-6 p-5">
            <form onSubmit={handleSubmit} method="POST">
              <div class="mb-3">
                <label for="familyname" class="form-label">
                  Family Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="name"
                  name="familyname"
                  value={user.familyname}
                  onChange={handleInput}
                      />
                <div id="emailHelp" class="form-text">
                  We'll never share your family name with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>


              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Last Name
                </label>
                <input
                  type="lastname"
                  class="form-control"
                  id="lastname"
                  aria-describedby="name"
                  name="lastname"
                  value={user.lastname}
                  onChange={handleInput}lastname
                />
                <div id="lastname" class="form-text">
                  We'll never share your name with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  First Name
                </label>
                <input
                  type="firstname"
                  class="form-control"
                  id="firstname"
                  aria-describedby="name"
                  name="firstname"
                  value={user.firstname}
                  onChange={handleInput}firstname
                />
                <div id="firstname" class="form-text">
                  We'll never share your name with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="phonenumber"
                  aria-describedby="number"
                  name="phonenumber"
                  value={user.phonenumber}
                  onChange={handleInput}phonenumber
                />
                <div id="phonenumber" class="form-text">
                  We'll never share your phone number with anyone else.
                </div>
              </div>


              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}password
                />
                <label class="form-check-label" for="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button type="submit" class="btn btn-outline-primary w-100 mt-4 rounded-pill">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Register;