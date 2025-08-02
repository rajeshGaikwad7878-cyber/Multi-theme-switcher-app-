const Contact = () => (
  <div>
    <h2>Contact Me</h2>
    <p>Feel free to reach out through any of the following:</p>

    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      <li>
        <span style={{ marginRight: '8px' }}>&#128222;</span>
        <strong>Phone:</strong> 7875782957
      </li>
      <li>
        <span style={{ marginRight: '8px' }}>	&#9993;</span>
        <strong>Email:</strong> rajeshgaikwad744@gmail.com
      </li>
      <li>
        <span style={{ marginRight: '8px' }}>&#128279;	</span>
        <strong>Portfolio:</strong>{' '}
        <a href="https://youware.com/rajesh-gaikwad" target="_blank" rel="noopener noreferrer">
          youware.com/rajesh-gaikwad
        </a>
      </li>
    </ul>
  </div>
);

export default Contact;
