import { h, Component } from 'preact';
import 'bootstrap/dist/css/bootstrap.css';
import style from './style';

export default class Ingreso extends Component {
	// gets called when this route is navigated to
	componentDidMount() {

	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		
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
					<div class="row">
						<div class="col-3"></div>
						<div class="col-6" align="center">
							<button type="button" class="btn btn-primary">Registrarse</button>
						</div>
					</div>
					</div>
				</div>
			</div>
			</div>
		);
	}
}
