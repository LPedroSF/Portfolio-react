import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-modal';

function email () {
  console.log("email")
}

function Contact() {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  return (
    <>
      <button onClick ={showModal} className="modal__button click" >
        <FontAwesomeIcon icon = "fa-solid fa-envelope" />
      </button>

      <Modal
        isOpen = { show }
        onRequestClose={closeModal}
        className="modal"
      >
        <div className="modal__half modal__info">
          <h1 className = "modal__title">A little bit of info!</h1>
          <h3 className = "modal__subtitle">Software Engineer</h3>
          <p className = "modal__info--para">I'm a <span className="red__text">confident, professional</span> with a passion for learning and development. 
            Eager to leverage education and training in <span className="red__text">Software Engineering</span>. 
            Able to <span className="red__text">adapt to surpass</span> any scenario to achieve my goals.
            My primarily used languages are <span className="red__text">javascript, html, css </span>. However, I have used other languages such as <span className="red__text">Python, javascript and C++</span>, I am also willing to learn more.
          </p>
        </div>
        <div className="modal__half modal__contact">
          <h1 className = "modal__title">Want to have a chat?</h1>
          <h3 className="modal__subtitle">I would love to hear from you!</h3>
          <form id="contact__form" onSubmit= {email}>
            <div className="form__item">
              <label className ="form__items--label">Name</label>
              <input className="input" name="user_name" type="text" required></input>
            </div>
            <div className="form__item">
              <label className ="form__items--label">Email</label>
              <input className="input" name="user_email" type="email" required></input>
            </div>
            <div className="form__item">
              <label className ="form__items--label">Message</label>
              <textarea className="input" name="message" type="text" required></textarea>
            </div>
            <button id="contact__submit" className="form__submit">Send it to me!</button>
          </form> 
          <div className="modal__overlay modal__overlay--loading">
            <FontAwesomeIcon icon="fa-solid fa-spinner" />
          </div>
          <div className="modal__overlay modal__overlay--success">
            Message has gone through! I will speak to you soon!
          </div>
          <i className="modal__exit click" onClick={ closeModal }>
            <FontAwesomeIcon icon="fa-solid fa-x" />  
          </i>
        </div>
      </Modal>
    </>
  );
}

export default Contact;