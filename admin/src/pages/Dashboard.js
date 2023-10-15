import { useSelector } from "react-redux"
import {useState} from 'react'
import Card from "../components/Card"
import { dateAnalyzer } from "../utils"

const Dashboard = () => {
  // React Hooks
  const {user} = useSelector(state => state.user)
  const {orders} = useSelector(state => state.order)
  const [dates, setDates] = useState(dateAnalyzer())
  
  // Constant declaration
  const data = {
    today : orders.filter(order => order.createdAt <= dates.today),
    week : orders.filter(order => order.createdAt <= dates.week),
    month : orders.filter(order => order.createdAt <= dates.month)
  }
  const add = (total, num) => {
    return total + (num.total / 100)
  }

  return (
    <>
      {
        user &&
        <div>
          <div className="w-full flex justify-between items-center">
            <h3> Hello, <b>{user.username ?? user.name}</b> </h3>
            <div className="flex items-center gap-2 bg-slate-200 p-1 rounded-md">
              <img className="h-5 w-5 rounded-full" src={user.image ?? user.picture} alt="" />
              {user.username ?? user.name}
            </div>
          </div>
          <Card title='Orders' data={[data.today.length, data.week.length, data.month.length]} today={data.today.length} week={data.week.length} month={data.month.length}/>
          <Card title='Revenue' data={[data.today.length, data.week.length, data.month.length]} today={data.today.reduce(add,0).toLocaleString("en-US")} week={data.week.reduce(add,0).toLocaleString("en-US")} month={data.month.reduce(add,0).toLocaleString("en-US")}/>
        </div>
      }
    </>
  )
}

export default Dashboard