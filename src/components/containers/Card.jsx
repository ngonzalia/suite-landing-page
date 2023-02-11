const Card = () => {
  return (
    <section className='card'>
      <div className='card__curved-line'></div>

      <div className='card__content'>
        <h2 className='card-title w400 cream-white center desktop-start'>
          It just <span className='w700'>works.</span>
        </h2>
        <p className='card-text w400 cream center desktop-start'>
          “I really like how it is an all-in-one
          solution that handle many of the
          tasks that you would normally need
          separate tools to do the same job.
          This thing is a miracle worker.”
        </p>
        <div className='card__info'>
          <h3 className='card-name w700 cream-white center desktop-start'>
            JEREMY ROBINSON
          </h3>
          <p className='card-job w400 cream center desktop-start'>
            CMO, FYLO
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
