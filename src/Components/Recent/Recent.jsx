import RecentCard from '../RecentCard/RecentCard'
import './Recent.css'
import Photo1 from './../../assets/Images/section2-f1.jpg'
import Photo2 from './../../assets/Images/section2-f2.jpg'
import Photo3 from './../../assets/Images/section2-f5.jpg'

export default function Recent() {
  return (
    <section className='Popular'>
      <h2 className='Title'>Recent Trips</h2>
      <p className='Descrition'>You can discover unique destination using Google Maps.</p>
      <div className='Cards-area'>
        <RecentCard
          title={"Trip in Indonesia"}
          des={"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"}
          Photo1={Photo1}
        />
        <RecentCard
          title={"Trip in Malaysia"}
          des={"Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"}
          Photo1={Photo2}
        />
        <RecentCard
          title={"Trip in France"}
          des={"France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."}
          Photo1={Photo3}
        />
      </div>
    </section>
  )
}
