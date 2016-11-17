const React = require('react')
class Keypad extends React.Component{
  constructor(props){
    super(props)
    this.keyUp = this.keyUp.bind(this)
  }
  keyUp(){
    console.log('Entering password...')
  }
  render(){
    return(
      <input type='password' onKeyUp={this.keyUp} />
    );
  }
};
module.exports = Keypad
