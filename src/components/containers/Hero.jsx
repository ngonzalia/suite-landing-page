import Button from '../pure/Button'

const Hero = () => {
  return (
    <main className='hero'>
      <div className='hero__main'>
        <div className='hero__main--content'>
          <div className='curved-line'></div>
          <h1 className='title w400 dark-blue'>
            A <span className='w700'>super solution</span> for your <span className='w700'>business.</span>
          </h1>
          <p className='hero-text w400 grey'>
            Our marketing and sales automations help
            you scale your outreach to get more leads
            for your company.
          </p>
          <Button type='hero' />
        </div>

        <div className='hero-img'></div>
      </div>

      <div className='hero__stats'>
        <div className='hero__stats--stat'>
          <p className='stats-position stats-number w700 dark-blue'>
            2K+
          </p>
          <p className='stats-position stats-text w400 grey'>
            COMPANIES
          </p>
        </div>
        <div className='hero__stats--stat'>
          <p className='stats-position stats-number w700 dark-blue'>
            8
          </p>
          <p className='stats-position stats-text w400 grey'>
            LANGUAGES
          </p>
        </div>
        <div className='hero__stats--stat'>
          <p className='stats-position stats-number w700 dark-blue'>
            1.2M
          </p>
          <p className='stats-position stats-text w400 grey'>
            LEADS
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero
