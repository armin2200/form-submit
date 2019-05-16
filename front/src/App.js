import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleFiles = files => {
    console.log(files);
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data
    });
  };

  render() {
    return (
      <div class='container'>
        <div class='row '>
          <div class='col-12 col-sm-10 col-md-8 mx-auto'>
            <div class='text-center'>
              <form onSubmit={this.handleSubmit} class='form-card'>
                <fieldset class='form-fieldset'>
                  <legend class='form-legend'>Sample Form </legend>
                  <div class='form-group'>
                    <label class='form-label' for='name'>
                      Your Name
                    </label>
                    <input
                      type='text'
                      class='form-control'
                      id='name'
                      name='name'
                      placeholder='Your name'
                      tabindex='1'
                      required
                    />
                  </div>
                  <div class='form-group'>
                    <label class='form-label' for='email'>
                      Your Email
                    </label>
                    <input
                      type='email'
                      class='form-control'
                      id='email'
                      name='email'
                      placeholder='Your email'
                      tabindex='1'
                      required
                    />
                  </div>
                  <div class='form-group'>
                    <label class='form-label' for='message'>
                      Message
                    </label>
                    <textarea
                      rows='2'
                      cols='150'
                      name='message'
                      class='form-control'
                      id='message'
                      placeholder='Message...'
                      tabindex='0'
                      required
                    />
                  </div>
                  <div class='form-group'>
                    <label class='form-label' for='message'>
                      File
                    </label>
                    <input
                      type='file'
                      name='file'
                      class='form-control'
                      id='file'
                      required
                    />
                  </div>
                </fieldset>
                <div class='text-center'>
                  <button type='submit' class='btn btn-start-order'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
