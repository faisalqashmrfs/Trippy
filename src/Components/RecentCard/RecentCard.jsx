import './RecentCard.css'

export default function RecentCard({ title, des, Photo1 }) {
  return (
    <div className='RecentCard'>
      <div className='imgBorder'>
        <img src={Photo1} alt="Image" />
      </div>
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  )
}
