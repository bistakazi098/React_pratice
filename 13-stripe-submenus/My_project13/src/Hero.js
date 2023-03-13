import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';


// Documentation in page
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>

          {/* heading 1 */}
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          {/* paragraph1 */}
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          {/* start me button */}
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
