
const Card = ({title, today, month, week, data}) => {
  return (
    <div className="my-10">
        <h1 className="font-semibold text-xl">{title}</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="user-card">
            <h4 className="text-md font-semibold">TODAY</h4>
            <h1 className="text-3xl font-semibold">{today}</h1>
            <h6 className="text-black/50 text-xs">{data[0]} orders today</h6>
          </div>
          <div className="user-card">
            <h4 className="text-md font-semibold">THIS WEEK</h4>
            <h1 className="text-3xl font-semibold">{week}</h1>
            <h6 className="text-black/50 text-xs">{data[1]} orders this week</h6>
          </div>
          <div className="user-card">
            <h4 className="text-md font-semibold">THIS MONTH</h4>
            <h1 className="text-3xl font-semibold">{month}</h1>
            <h6 className="text-black/50 text-xs">{data[2]} orders this month</h6>
          </div>
        </div>
      </div>
  )
}

export default Card