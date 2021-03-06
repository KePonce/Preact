import { h, Component } from 'preact';
import 'bootstrap/dist/css/bootstrap.css';
import style from './style';
import ReCaptcha from './ReCaptcha';

const sitekey = '6LeI6ewUAAAAAD7705euj7dv5CMPN9VRE7pORTpe';

let recaptchaInstance, recaptchaInvisibleInstance;
let IdRecaptcha;

const changeCallback = (response) => {
   console.log('onChange: ' + response);
};

const expiredCallback = () => {
   console.log('onExpired');
};

const getResponse = () => {
	IdRecaptcha = recaptchaInstance.getResponse();
   console.log(recaptchaInstance.getResponse());
   
};


export default class Ingreso extends Component {
	// gets called when this route is navigated to
	componentDidMount() {

	}

	// gets called just before navigating away from the route
	componentWillUnmount() {

	}

	async doLogin(){
		/*if (!this.state.username) {
		  return;
		}
		if (!this.state.password) {
		  return;
		}
		*/
		IdRecaptcha = recaptchaInstance.getResponse();
   		console.log(recaptchaInstance.getResponse());
	   
	
		try {
		  let res = await fetch('/login', {
			method: 'post',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify({
			  username: '',
			  password: '',
			  verified: IdRecaptcha
			})
		  });  
	
		  let result = await res.json();
		  if (result && result.success) {
			console.log("si sirve*************************");
			//Usuarios.IsLoggedIn = true;
			//Usuarios.username = result.username;
		  }
		  else if (result && result.success === false) {
			//this.resetForm();
			alert(result.msg);
		  }
		} catch (e) {
		  console.log(e);
		  //this.resetForm();
		}
	  }

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.ingreso}>
				<div class="row">
					<div class="col">
						<h1>Ingreso de Datos</h1>
						<div class="form-group">
							<label for="usr">DPI del Solicitante</label>
							<input type="text" class="form-control" id="usr"></input>
						</div>
						<div class="form-group">
							<label for="pwd"># de Celular</label>
							<input type="password" class="form-control" id="pwd"></input>
						</div>
						<div class="form-group">
							<label for="pwd">Confirme su # de celular</label>
							<input type="password" class="form-control" id="pwd"></input>
						</div>
						<div class="form-group">
							<label for="pwd"># de Correlativo( de su factura de energía eléctrica del mes de abril)</label>
							<input type="password" class="form-control" id="pwd"></input>
						</div>
						<div class="form-group">
							<label for="pwd">Confirme # de correlativo</label>
							<input type="password" class="form-control" id="pwd"></input>
						</div>
						<div class="form-group">
							<label for="pwd"># de Factura(de energía eléctrica de su casa correspondiente al mes de Abril 2020)</label>
							<input type="password" class="form-control" id="pwd"></input>
						</div>
						<div class="dropdown">
							<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Elija banco para cuenta virtual
					<span class="caret"></span></button>
							<ul class="dropdown-menu">
								<li><a href="#">BI</a></li>
								<li><a href="#">BAM</a></li>
								<li><a href="#">BAC</a></li>
							</ul>
							<div>
								<ReCaptcha
									ref={e => recaptchaInstance = e}
									sitekey={sitekey}
									size="normal"
									render="explicit"
									//onChange={changeCallback}
									onExpired={expiredCallback}

								/>

							</div>

							<div class="row">
								<div class="col-3"></div>
								<div class="col-6" align="center">
									<button type="button" class="btn btn-primary" onClick = {this.doLogin}>Registrarse</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
