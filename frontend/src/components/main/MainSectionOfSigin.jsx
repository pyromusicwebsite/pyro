import React from 'react';
import { Link } from 'react-router-dom';

function MainSectionOfSigin() {
  return (
    <>
  	<main class="main">
		<div class="container-fluid">
			<div class="row row--grid">
				<div class="col-12">
					<ul class="breadcrumb">
						<li class="breadcrumb__item"> <Link to="/">Home</Link></li>
						<li class="breadcrumb__item breadcrumb__item--active">Sign in</li>
					</ul>
				</div>

				<div class="col-12">
					<div class="sign">
						<div class="sign__content">
							<form action="#" class="sign__form">
								<a href="index.html" class="sign__logo">
									<img src="img/logo.png" alt=""/>
								</a>

								<div class="sign__group">
									<input type="text" class="sign__input" placeholder="Email"/>
								</div>

								<div class="sign__group">
									<input type="password" class="sign__input" placeholder="Password"/>
								</div>

								<div class="sign__group sign__group--checkbox">
									<input id="remember" name="remember" type="checkbox" checked="checked"/>
									<label for="remember">Remember Me</label>
								</div>
								
								<button class="sign__btn" type="button">Sign in</button>

								<span class="sign__delimiter">or</span>

								 

								<span class="sign__text">Don't have an account? <Link to="/signup">Sign up!</Link></span>

								<span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
    </>
  );
}

export default MainSectionOfSigin;
