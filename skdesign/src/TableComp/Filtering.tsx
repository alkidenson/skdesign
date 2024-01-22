
function Filtering({filter, setFilter}:{filter : any, setFilter : any}) {
  return (
    <div className="filter_container">Поиск: {' '}
    <input value={filter || ''} onChange={(e) => setFilter(e.target.value)}></input>
    </div>
  )
}

export default Filtering