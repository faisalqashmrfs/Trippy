import PopularCard from '../PopularCard/PopularCard'
import './Popular.css'
import Photo1 from './../../assets/Images/section2-f1.jpg'
import Photo2 from './../../assets/Images/section2-f2.jpg'
import Photo3 from './../../assets/Images/section2-f3.jpg'
import Photo4 from './../../assets/Images/section2-f4.jpg'

export default function Popular() {
  return (
    <section className='Popular'>
      <h2 className='Title'>Popular Destinations</h2>
      <p className='Descrition'>Tours dive you the opportunity to see a lot, within a time frame.</p>
      <PopularCard
        des={"One of the most iconic views in luzon, Mt. Taal boosts a Volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"}
        title={'Mt. Daguldul, Batangas'}
        direc={true}
        Photo1={Photo1}
        Photo2={Photo2}
      />
      <PopularCard
        des={"A nice trek in southern Batangas is the coastal mountain of San Juan, Mt. Daguldul. The name ‘Daguldul’ or ‘Daguldol’ has been used since olden days. It has an onomatopoeic feeling – that of suspense and grandness. Maybe it describes the grandeur of the range and the abrupt rolling of its slopes.Actually a small mountain range, Mt. Daguldul has several ‘gems’ to offer. First, there is the unique seascape that greets the hiker on the intial beach trail. Then, there is trail, moderate in difficulty, passing by woodlands and light forests. In some parts, the greenery is total."}
        title={'Taal Volcano, Batangas'}
        direc={false}
        Photo1={Photo3}
        Photo2={Photo4}
      />
    </section>
  )
}
