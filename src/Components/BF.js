import React from "react";

class BF extends React.Component {
    constructor(props){
        super(props);
       this.state = { bPerc: 0};
        this.state = { bWeight: 0};
       // this.state = { FFM: '0'},
       this.state = { gPerc: 0};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({bPerc: event.target.bPerc}); 
       
      }

      handleSubmit(event) {
        alert(this.state.bPerc);
        event.preventDefault();
      }

    

    updateBPerc = e => this.setState({ bPerc: +e.target.bPerc });
    
    updateBWeight = e => this.setState({ bWeight: +e.target.bWeight });

    updateFFM = e => this.setState({ FFM: +e.target.value });
    
    updateGPerc = e => this.setState({ gWeight: +e.target.gWeight });

   fatMass = () => this.state.gPerc * this.state.bWeight;

    FFM = () => this.state.bWeight - this.fatMass;

    gWeight = () => this.FFM/(1-this.state.gPerc);

    render() {
        return (<form onSubmit={this.handleSubmit}>
                    <label>
                    <input type= "number" onChange={this.handleChange} value={this.state.bPerc} placeholder="Enter Current Body Fat Percentage"/>
                    <br/>
                    <input type= "number"  onChange={this.handleChange} value={this.state.bWeight} placeholder="Enter Current Body Weight in lbs"/>
                    <br/>
                    Fat Mass = {this.fatMass()}lbs.
                    <br/>
                    Fat Free Mass = {this.FFM()}lbs.
                    <br/>
                    <input type= "number"  onChange={this.handleChange} value={this.state.gPerc} placeholder="Enter Your Goal Body Fat Percentage"/>
                    <br/>
                    Goal Weight = {this.gWeight()}lbs.
                    </label>

        </form>);
    }
}

export default BF;