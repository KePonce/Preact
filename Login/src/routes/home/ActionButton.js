import {h, Component} from 'preact';

class ActionButton extends Component {
  render(){ 
    return (
      <div className="actionButton">
        <button 
          className='btn'
          disabled={this.props.disabled}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default ActionButton;