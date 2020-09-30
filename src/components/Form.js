import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Sorry This isn\'t functional yet. '
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Message:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <div>
            Email Me: email@email.com
          </div>
        </form>
        <input type="submit" value="Submit" />
        <h4>
          Add Instagram Logo/Link
        </h4>
      </>
    );
  }
}

export default Form;