import React from "react";


class Deficit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '1.375'};
    
    this.state = { a: 0};
    this.state = { b: 0};
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
  updateB = e => this.setState({ b: +e.target.value });


  result = () =>  Number.parseInt((this.state.a * this.state.value ) - this.state.b);
  result1 = () => Number.parseInt(this.state.a * this.state.value )

  
  protein = ()=> Number.parseInt((this.result() * 0.40)/4,10);
  fat = ()=>  Number.parseInt((this.result() * 0.25)/9,10);
  carbs = ()=>  Number.parseInt((this.result() * 0.35)/4,10);


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your activity level:
          <br/>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="1.75">Intense = BMR x (1.75) You plan to workout 4-5x a week</option>
            <option value="1.55">Moderate = BMR x (1.55) You plan to workout 3-4x a week</option>
            <option value="1.375">Sedentary = BMR x (1.375) You plan to workout 1-2x a week</option>
           
          </select>
          <br/>
          Base Metabolic Rate: <input onChange={this.updateA} value={this.state.a} />
          <br/>
          Deficit calories: Recommend no less than a subtraction of 250 but not more than 500<input onChange={this.updateB} value={this.state.b} />
        
        <br/>
        BMR before Deficit: BMR x Activity level = {this.result1()}
        <br/>
        Total Daily Caloric Intake(TDCI): (BMR x Activity level) - Deficit = {this.result()}
        <br/>
        
        
        <br/>
        Protein: {this.protein()}grams at 40% of TDCI
        <br/>
        Carbs: {this.carbs()}grams at 35% of TDCI
        <br/>
        Fat: {this.fat()}grams at 25% of TDCI
        <br/>
        <input type="submit" value="Submit" />

        </label>
       
      </form>
      
    );
  }
}

export default Deficit;