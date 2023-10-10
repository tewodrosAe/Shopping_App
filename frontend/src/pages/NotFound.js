import {TbError404Off} from 'react-icons/tb'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="not-there">
      <div className="not-found-container">
        <TbError404Off size={70}/>
        <h2 >
          <span >Error</span>404
        </h2>
        <p >Sorry, we couldn't find this page.</p>
        <p >But dont worry, you can find plenty of other things on our homepage.</p>
        <Link to={'/'}>Back to homepage</Link>
      </div>
    </section>
  )
}

export default NotFound