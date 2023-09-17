import Card from "../components/Card"

const Dashboard = () => {
  const data1 = {
    day: 2,
    week: 25,
    month: 32
  }
  const data2 = {
    day: '$ 850',
    week: '$ 2,500',
    month: '$ 31,000'
  }
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <h3> Hello, <b>Tewodros Aemiro</b> </h3>
        <div className="flex items-center gap-2 bg-slate-200 p-1 rounded-md">
          <img className="h-5 w-5 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Guy_Pearce_Cannes_2012_%28revised%29.jpg" alt="" />
          Tewodros Aemiro
        </div>
      </div>
      <Card title='Orders' data={data1}/>
      <Card title='Revenue' data={data2}/>
    </div>
  )
}

export default Dashboard