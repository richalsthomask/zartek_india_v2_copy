import React from "react";

const mapStyles = {
  width: "100%",
  height: "98%",
  margin: "auto",
  borderRadius: "10px",
};

class GMaps extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <React.Fragment>
        <iframe
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5275114777355!2d76.35216531479462!3d10.055791992812912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c04e5207eb7%3A0x3cce030c43faf4b3!2sZartek%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1673260288625!5m2!1sen!2sin"
          style={mapStyles}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </React.Fragment>
    );
  }
}

export default GMaps;
