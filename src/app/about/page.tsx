import Image from 'next/image';
import React from 'react';
import styles from './about.module.css';
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.bannerImage}>
        <Image
          className={styles.img}
          alt=''
          fill
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />
        <div className={styles.imageText}>
          <div className={styles.imgHeaderTxt}>Digital Story Teller</div>
          <div className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </div>
        </div>
      </div>
      <div className={styles.aboutSections}>
        <div className={styles.sectionOne}>
          <h1 className={styles.heading}>Who Are We?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={styles.sectionTwo}>
          <h1 className={styles.heading}>What We Do?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
        </div>
      </div>
      lanka{' '}
    </div>
  );
};

export default About;
