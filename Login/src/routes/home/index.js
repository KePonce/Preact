// src/components/header/index.js
import { h, Component } from 'preact';
import ReCaptcha from 'preact-google-recaptcha';
import style from './style';

export default class Home extends Component {

	onChange(response) {
		console.log("Captcha response:", response);
	}

   render() {
      return (
         <header class={style.home}>
			</header>

      );
   }
}