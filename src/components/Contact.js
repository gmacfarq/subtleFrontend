/**
 * Contact component
 * Basic to hold information about contacting the company
 * @module Contact
 * @exports Contact
 * @returns {JSX} The Contact component
 */
function Contact() {
  const styles = {
    fontSize: '2rem',
    margin: '0.5rem 0',
  };
  return (
    <div className="Contact">
      {/* <h1>Contact Us</h1> */}
      <h3>Contact Us</h3>
      <p style={styles}>subtleorangeofficial@gmail.com</p>
    </div>
  );
}

export default Contact;