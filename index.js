import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    testConnection()
  }, [])

  async function testConnection() {
    const { data, error } = await supabase.from('test_table').select('*')
    if (error) {
      console.error('Supabase error:', error.message)
    } else {
      setData(data)
    }
  }

  return (
    <div>
      <h1>Supabase Connection Test</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading or no data found.</p>
      )}
    </div>
  )
}
