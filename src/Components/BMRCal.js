import React from "react";


class BMRCal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "Female"};
    
    this.state = { a: 0};
    this.state = { b: 0};
    this.state = { c: 0};
    
    ;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}); 
   
  }


  handleSubmit(event) {
    alert("Sex chosen" + this.state.value);
    event.preventDefault();
  }

  
  updateA = e => this.setState({ a: +e.target.value });
  
  updateB = x => this.setState({ b: +x.target.value });

  updateC = z => this.setState({ c: +z.target.value });

  inchToCm = () => (this.state.a * 2.54,10);
  lbsToKg = ()  => (this.state.c / 2.2,10);

  resultMale = () =>  (88.362 + (13.397 * this.lbsToKg()) + (4.799 * this.inchToCm()) - (5.677 * this.updateB));
 // resultFemale = () => (447.593 + (9.247 * this.lbsToKg()) + (3.098 * this.inchToCm()) - (4.330 * this.updateB));

 


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Male or Female:
          <br/>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Male">Male BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)</option>
            <option value="Female">Female BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)</option>
            
           
          </select>
          <br/>
          Height in inches (will be converted to cm in Calculator): <input onChange={this.updateA} value={this.state.a} />
          <br/>
          Age: <input onChange={this.updateB} value={this.state.b} />

          Weight in lbs (will be converted to kg in Calculator): <input onChange={this.updateC} value={this.state.c} />
        
        <br/>
        Male BMR = {this.resultMale()}
        <br/>
        
        <br/>
        
        
        
        <input type="submit" value="Submit" />

        </label>
       
      </form>
      
    );
  }
}

export default BMRCal;