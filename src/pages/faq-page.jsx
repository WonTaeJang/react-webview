import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import axios from 'axios'
const FaqComponent = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const tags = queryParams.get('tags')
  const locale = queryParams.get('locale')

  console.log(tags, locale)
  useEffect(() => {
    axios
    .get("/faq", { params: { tags: tags, locale: locale} })
    .then(function (response) {
      console.log(response);
    })
  
  }, [])


  return (
    <>
      <div>
        <span>faq page</span>
      </div>
      <div>{locale}</div>
      <div>{tags}</div>
    </>
  )
}

export default FaqComponent