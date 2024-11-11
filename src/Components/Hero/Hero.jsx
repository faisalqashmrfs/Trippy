import './Hero.css'

export default function Hero({Title,x,BackGround}) {
  return (
    <section className={x ? 'Hero' : 'Hero2'}>
      <img className='BackGroundImg' src={BackGround} alt="" />
      <div className='Title'>
        <h2>{Title}</h2>
        {x && <p>Choose Your Favourite Destination.</p>}
        {x && <button>Travel Now</button>}
      </div>
    </section>
  )
}
