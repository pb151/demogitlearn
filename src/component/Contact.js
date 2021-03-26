import React from 'react';

class Contact extends React.Component {
   constructor(props){
      super(props);

      this.state = {
          fields: {},
          errors: {}
      }
  }

      handleValidation(){
          let fields = this.state.fields;
          let errors = {};
          let formIsValid = true;

          //Name
          if(!fields["name"]){
              formIsValid = false;
              errors["name"] = "Cannot be empty";
          }

          if(typeof fields["name"] !== "undefined"){
              if(!fields["name"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["name"] = "Only letters";
              }        
          }
      
          //Email
          if(!fields["email"]){
              formIsValid = false;
              errors["email"] = "Cannot be empty";
          }

          if(typeof fields["email"] !== "undefined"){
              let lastAtPos = fields["email"].lastIndexOf('@');
              let lastDotPos = fields["email"].lastIndexOf('.');

              if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
              }
          }

          if(!fields["message"]){
              formIsValid = false;
              errors["message"] = "Cannot be empty";
          }

          this.setState({errors: errors});
          return formIsValid;
      }

      contactSubmit(e){
            e.preventDefault();

            if(this.handleValidation()){
               alert("Form submitted");
            }else{
               alert("Form has errors.")
            }
      
        }

      handleChange(field, e){         
            let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
      }

  render() {
    return (
    
      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
        </div>

        <div>
          <iframe className="contactmap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
        </div>

        <div className="container">
          <div className="row mt-5">

            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

              </div>

            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">

              <form action="forms/contact.php" method="post" onSubmit= {this.contactSubmit.bind(this)} role="form" className="php-email-form">
                <div className="form-row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate">{this.state.errors["name"]}</div>
                    
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate">{this.state.errors["email"]}</div>
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" onChange={this.handleChange.bind(this, "subject")} value={this.state.fields["subject"]} name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate">{this.state.errors["subject"]}</div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]} rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div className="validate">{this.state.errors["message"]}</div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>

            </div>

          </div>

        </div>
      </section>
      

    )
  }
}
export default Contact;