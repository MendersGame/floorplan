import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import BedRoom from './BedRoom'
import Bath from './Bath'

const FloorPlan = (props) => {
  return (
    <>
      <BedRoom num='1' />
      <Kitchen />
      <Bath size='Full' />
      <BedRoom num='2' />
      <LivingRoom />
      <Bath size='Half' />
      <BedRoom num='3' />
    </>
  )
}

export default FloorPlan