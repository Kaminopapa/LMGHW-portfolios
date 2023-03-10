import { useState } from 'react';

import Header from '../UI/Header/Header';
import { AiOutlineMail, AiOutlineWhatsApp, AiFillWechat, AiOutlineSlack } from 'react-icons/ai';
import { RiMailOpenLine } from 'react-icons/ri';
import { CgSpinner } from 'react-icons/cg';
import './contact.css';
import Modal from '../UI/Modal/Modal';
import useForm from '../Validation/useForm';
interface User {
  subject: string;
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
    isSent,
  } = useForm<User>({
    validations: {
      subject: {
        custom: {
          isValid: (value) => value.trim().length > 0,
          message: 'Cannot submit empty message',
        },
        pattern: {
          value: '^[A-Za-z\\s]*$',
          message: 'You apos; re not allowed to use special characters or numbers in the subject',
        },
      },
      name: {
        custom: {
          isValid: (value) => value.trim().length > 0,
          message: 'Cannot submit empty message',
        },
        pattern: {
          value: '^[A-Za-z\\s]*$',
          message: 'You &apos; re not allowed to use special characters or numbers in the subject',
        },
      },
      email: {
        custom: {
          isValid: (value) => value.trim().length > 0,
          message: 'Cannot submit empty message',
        },
        pattern: {
          value:
            '^([\\w+\\!\\#\\$\\%\\&\\’\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~])+((\\.?)([\\w+\\!\\#\\$\\%\\&\\’\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]))+\\@[a-zA-Z0-9-]+((\\.?)([a-zA-Z0-9-]+))+$',
          message: 'Please enter a valid email address',
        },
      },
      message: {
        custom: {
          isValid: (value) => value.trim().length > 0,
          message: 'Cannot submit empty message',
        },
        pattern: {
          value: '^[a-zA-Z0-9\\s\\.\\,\\?\\"\\!\\=]+$',
          message: 'Your\'re not allowed to use Special characters except . ? , " and !',
        },
      },
    },
    onSubmit: () => console.log('submitted'),
    initialValues: {
      subject: '',
      name: '',
      email: '',
      message: '',
    },
  });

  return (
    <div className='contact_container'>
      <Header subTitle='Get In Touch' mainTitle='Contact Me' />
      <div className='form_area'>
        <div className='other_contact'>
          <div className='business_card '>
            <h1>Luis Hung</h1>
            <h3>Front End Developer</h3>
            <p>
              <strong>Email:</strong>{' '}
              <a href='mailto:luishung.workspace@gmail.com'>luishung.workspace@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong> 778-302-8624
            </p>
          </div>

          <div className='carton_area'>
            <a
              href='https://wa.me/17783028624?text=Hello%20I%20got%20your%20num%20from%20your%20portfolio'
              target='_blank'
              rel='noreferrer'
            >
              <AiOutlineWhatsApp tabIndex={0} className='mail' aria-label='whats App' />
            </a>
            {isSent ? (
              <AiOutlineMail tabIndex={0} className='mail sent' aria-label='gmail sent' />
            ) : (
              <RiMailOpenLine tabIndex={0} className='mail' aria-label='gmail' />
            )}
            <AiFillWechat
              tabIndex={0}
              aria-label='We chat'
              className='mail'
              onClick={() => setShowModal(true)}
              onKeyDown={(e) => {
                if (e.key == 'Enter') {
                  setShowModal(!showModal);
                }
              }}
            />
            {showModal && (
              <Modal>
                <div className='weChatQR' onClick={() => setShowModal(false)}>
                  <img src='/QR.JPG' alt='we chat QR code for scan' />
                </div>
              </Modal>
            )}
            <a
              href='https://luisworkspaceworld.slack.com/archives/D04QU980G9Z'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              <AiOutlineSlack tabIndex={0} className='mail' aria-label='Slack' />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='subject'
            placeholder='Title'
            required
            value={user.subject || ''}
            onChange={handleChange('subject')}
          />
          {errors.subject && <p className='error'>{errors.subject}</p>}
          <input
            type='text'
            name='name'
            placeholder='May I have your name?'
            required
            value={user.name || ''}
            onChange={handleChange('name')}
          />
          {errors.name && <p className='error'>{errors.name}</p>}
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            value={user.email || ''}
            onChange={handleChange('email')}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
          <textarea
            name='message'
            placeholder='Tell me if I get hired'
            required
            value={user.message || ''}
            onChange={handleChange('message')}
          />
          {errors.message && <p className='error'>{errors.message}</p>}
          {isSent ? (
            <CgSpinner className='spinner' />
          ) : (
            <input type='submit' value='Send' className='btn btn_primary' />
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
