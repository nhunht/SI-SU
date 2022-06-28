import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <div className="login-content row">
        <div className="col-12 footer text-center">WELCOME TO BACK</div>
        <div className="col-12 footer mb-3 text-center">LOGIN NOW</div>
        <form>
          <div class="mb-3 input-group form-group">
            <span class="input-group-text"><i class="fas fa-phone"></i></span>
            <input type="tel" class="bg-light form-control" placeholder="Enter Phone" pattern="0[0-9]{9}" required />
          </div>
          <div class="mb-3 input-group form-group">
            <span class="input-group-text"><i class="fas fa-key"></i></span>
            <input type="password" class="bg-light form-control" placeholder="Enter Password" required />
          </div>
          <div className="mb-3 d-grid ">
            <button type="submit" value="Login" className="btn btn-warning">
              Login
            </button>
          </div>
        </form>
        <div className="col-12 text-center">Forgot your password?</div>
        <div className="text-center">
          <a href="sign-up">SIGN UP</a><br />
        </div>
      </div>
    )
  }
}