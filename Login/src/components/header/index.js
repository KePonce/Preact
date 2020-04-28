import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Bono App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Bienvenidos</Link>
			<Link activeClassName={style.active} href="/ingreso">Ingreso</Link>
		</nav>
	</header>
);

export default Header;
