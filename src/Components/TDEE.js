import React from "react";


class TDEE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '1.375'};
    this.state = {deficitExcess: '-250'};
    this.state = { a: 0};
    //this.state = { b: deficitExcess};
    ;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}); 
   
  }


  handleSubmit(event) {
    alert('Your TDEE Intensity: ' + this.state.value);
    event.preventDefault();
  }

  //BMR Value
  updateA = e => this.setState({ a: +e.target.value });
  //Total Daily Caloric Intake equation for Deficit or Excess Calories
 // updateB = e => this.setState({ b: +e.target.value });


  result = () => this.state.a * this.state.value;

  
  protein = ()=> (this.result() * 0.3)/4;
  fat = ()=> (this.result() * 0.4)/9;
  carbs = ()=> (this.result() * 0.5)/4;

  deficit= ()=> (this.result() - this.state.deficitExcess) 
  excess= ()=> (this.result() + this.state.deficitExcess) 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your activity level:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="1.75">Intense</option>
            <option value="1.55">Moderate</option>
            <option value="1.375">Sedentary</option>
           
          </select>
          Base Metabolic Rate: <input onChange={this.updateA} value={this.state.a} />
        <input type="submit" value="Submit" />
        Total Daily Caloric Intake: {this.result()}
        <br/>
        Pick your Deficit or Excess level:
          <select value={this.state.deficitExcess} onChange={this.handleChange}>
            <option value="250">Small Excess</option>
            <option value="500">Large Excess</option>
            <option value="-250">Small Deficit</option>
            <option value="-500">Large Deficit</option>
            <option value="0">None</option>
            </select>
        
        <br/>
        Protein: {this.protein()}grams
        <br/>
        Carbs: {this.carbs()}grams
        <br/>
        Fat: {this.fat()}grams
        <br/>
        Deficit: {this.deficit()}calories
        <br/>
        Excess: {this.excess()}calories

        </label>
       
      </form>
      
    );
  }
}

export default TDEE;