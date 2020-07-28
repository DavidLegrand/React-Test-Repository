import { useEffect } from 'react'

const useFetch = (endpoint, setter) => {
  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(res => setter(res))
      .catch(err => console.error(err))
  }, [endpoint, setter])
}

export default useFetch

