import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <div className="login-content row">
        <div className="col-12 footer text-center">SIGN UP</div>
        <form>
          <div className="col-12 mb-3 form-group"></div>
          <div class="mb-3 input-group form-group">
            <span className="input-group-text"><i className="fas fa-user"></i></span>
            <input type="text" className="bg-light form-control" placeholder="Enter Name" required />
          </div>
          <div class="mb-3 input-group form-group">
            <span class="input-group-text"><i class="fas fa-phone"></i></span>
            <input type="tel" class="bg-light form-control" placeholder="Enter Phone" pattern="0[0-9]{9}" required />
          </div>
          <div class="mb-3 input-group form-group">
            <span class="input-group-text"><i class="fas fa-venus-mars"></i></span>
            <select required>
              <option disabled selected hidden>Choose gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div class="mb-3 input-group form-group">
            <span class="input-group-text"><i class="fas fa-tasks"></i></span>
            <select required>
              <option disabled selected hidden>Choose role</option>
              <option value="2">Landlords</option>
              <option value="3">Customer</option>
            </select>
          </div>
          <div class="mb-3 input-group form-group">
            <span class="input-group-text"><i class="fas fa-key"></i></span>
            <input type="password" class="bg-light form-control" placeholder="Enter Password" required />
          </div>
          <div class="mb-3 input-group form-group">
            <span class="input-group-text"><i class="fas fa-key"></i></span>
            <input type="password" class="bg-light form-control" placeholder="Enter Confirm Password" required />
          </div>
          <div className="mb-3 d-grid">
            <button type="submit" className="btn btn-warning">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center">
          <span>Already registered </span>
          <a href="sign-in">SIGN IN</a><br />
        </div>
      </div>
    )
  }
}