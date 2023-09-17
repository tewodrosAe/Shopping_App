
const Card = ({title, data}) => {
  return (
    <div className="my-10">
        <h1 className="font-semibold text-xl">{title}</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="user-card">
            <h4 className="text-md font-semibold">TODAY</h4>
            <h1 className="text-3xl font-semibold">{data?.day}</h1>
            <h6 className="text-black/50 text-xs">2 orders today</h6>
          </div>
          <div className="user-card">
            <h4 className="text-md font-semibold">THIS WEEK</h4>
            <h1 className="text-3xl font-semibold">{data?.week}</h1>
            <h6 className="text-black/50 text-xs">30 orders this week</h6>
          </div>
          <div className="user-card">
            <h4 className="text-md font-semibold">THIS MONTH</h4>
            <h1 className="text-3xl font-semibold">{data?.month}</h1>
            <h6 className="text-black/50 text-xs">72 orders this month</h6>
          </div>
        </div>
      </div>
  )
}

export default Card