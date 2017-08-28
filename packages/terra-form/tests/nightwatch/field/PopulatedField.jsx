import React from 'react';

import Field from '../../../src/Field';
import Input from '../../../src/Input';

class field extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      input: 'Element'
    };
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( event ) {
    this.setState( {
      input: event.target.value
    } );
  }

  render() {
    return (
      <div>
        <form>
          <Field
            id="populated-field"
            type="checkbox"
            label="Do you have any Children?"
            labelAttrs={{ className: 'healtheintent-application' }}
            name="children_present"
            error="This field is required"
            help="Families are eligible for family package plans"
            required
          >
            <Input type="text" defaultValue="Element" onChange={this.handleChange} />
          </Field>
        </form>
        <hr /><p>Input Provided: {this.state.input}</p>
        <br />
      </div>
    );
  }
}

export default field;
