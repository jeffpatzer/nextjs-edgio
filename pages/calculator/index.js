import { useState, useEffect } from 'react'; 

function Calculator() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/calculate?operation=add&x=3&y=4')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false);
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data.</p>

  return (
    <div>
      <h1>{data.operation}</h1>
      <p>{data.result}</p>
    </div>
  )
}

export default Calculator;