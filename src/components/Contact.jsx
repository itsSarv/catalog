import React from 'react';

const Contact = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '50px', padding: '0 20px' }}>
      <div style={{ width: '100%', maxWidth: '600px', padding: '20px'}}>
        <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
        <p style={{ textAlign: 'center' }}>If you have any further inquiries, please let us know by <br/> filling the form below</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', flexWrap: 'wrap' }}>
          <div style={{ width: '100%', marginBottom: '15px', flex: '0 0 48%' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>First Name</label>
            <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ width: '100%', marginBottom: '15px', flex: '0 0 48%' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Last Name</label>
            <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input type="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea name="message" id="message" rows="4" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
