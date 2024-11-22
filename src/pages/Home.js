import React from 'react'

export const Home = () => {
  return <div className='homePageWrapper'>
          <div className='formWrapper'>
            <img src='/code-collab.png' alt='code-collab-logo' />
            <h4 className='mainLabel'>Paste invitation ROOM ID</h4>
            <div className='inputGroup'>
                  <input type="text" className='inputBox' placeholder='ROOM ID' />
                  <input type="text" className='inputBox' placeholder='USER NAME' />
                  <button className='btn joinBtn'></button>
                  <span className='createInfo'>
                    If you don't have an invite then create &nbsp;
                    <a href='' className='createNewBtn'>New Room</a>
                  </span>
            </div>
          </div>
          <footer>
          <h4>
          Built With 💛 by {" "}
          <a href='https://github.com/JayantSrivastav'>Jayant Srivastava</a>
          </h4>
          </footer>
  </div>;
  
};

export default Home;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                