import './PopularCard.css'

export default function PopularCard({direc,title,des,Photo1,Photo2}) {
  return (
    <div className={direc ? 'SingleCard' : 'SingleCardReverse' }>
      <div className='Side-1'>
        <h2>{title}</h2>
        <p>{des}</p>
      </div>
      <div className='Side-2'>
        <img src={Photo1} alt="" />
        <img src={Photo2} alt="" />
      </div>
    </div>
  )
}
