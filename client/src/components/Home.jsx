import React, { useState } from 'react';
import styles from './home.module.css';
import contentImg from '../assets/lets_gtok_layout.png';
import ContactForm from './ContactForm';

function Home() {
  const [tab, setTab] = useState('share');
  return (
    <div className={styles.home}>
      <div className={`row align-items-center ${styles.head}`}>
        <div className="col-lg-4 text-start">
          <h1>Feelings</h1>
          <h4>are assets</h4>
          <p>A digital assets platform to share and trade feelings</p>
          <button className={`${styles.headBtn} btn`}>Join Now</button>
        </div>
        <div className="col-lg-8">
          <img src="https://letsgtok.com/static/media/homepage_3.d2e8637c.svg" alt="" />
        </div>
      </div>
      <div className={`row align-items-center ${styles.tabs}`}>
        <div className="col-6 text-end">
          <p
            onClick={() => {
              setTab('share');
            }}
            className={`ms-auto
                ${tab === 'share' ? styles.tabShow : styles.tabHide}  
            `}
          >
            Share Feelings
          </p>
        </div>
        <div className="col-6 text-start">
          <p
            onClick={() => {
              setTab('trade');
            }}
            className={tab === 'trade' ? styles.tabShow : styles.tabHide}
          >
            Trade Feelings
          </p>
        </div>
      </div>
      <div className={`${styles.contentDiv} ${tab === 'share' ? styles.show : styles.hide}`}>
        <div className="row align-items-center">
          <div className="col-lg-6 text-end">
            <img src={contentImg} alt="" />
          </div>
          <div className="col-lg-6 text-start">
            <p className="text-start">
              Sharing your feelings has never been this easier before.
              <br />
              Express your feelings in a judgement free environement, where they are mattered. Sharing is liberating at
              Lets Gtok. Even anonymously!
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.contentDiv} ${tab === 'trade' ? styles.show : styles.hide}`}>
        <div className="row align-items-center">
          <div className="col-lg-6 text-end">
            <p className="text-start ms-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi laudantium cum vitae, alias nulla
              commodi, laborum nemo nostrum suscipit itaque earum quia. Eligendi, eius!
            </p>
          </div>
          <div className="col-lg-6 text-start">
            <img src={contentImg} alt="" />
          </div>
        </div>
      </div>
      <p className={styles.heading}>Exchange your feelings in a world of caring friends</p>
      <div className={styles.imgs}>
        <img src="https://letsgtok.com/static/media/feelings_on_map.9e9adad9.svg" alt="" />
        <img src="https://letsgtok.com/static/media/world_map.23aad2fc.svg" alt="" />
      </div>
      <button className={`${styles.headBtn} btn`}>Join Now</button>
      <ContactForm />
    </div>
  );
}

export default Home;
