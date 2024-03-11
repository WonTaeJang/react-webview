import { useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from 'axios'

const TopNav = ({data}) => {
  const navList = useMemo(() => {
    let dataSet = new Set()

    for(const item of data) {
      for(const tag of item.tags) {
        dataSet.add(tag)
      }
    }

    return [...dataSet]
  },[data])

  return (
    <>
      {navList.map((el) => {
        return <div key={el}>{el}</div>
      })}
    </>
  )
}

const FaqComponent = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const tags = queryParams.get('tags')
  const locale = queryParams.get('locale')
  const [data, setData] = useState([])

  useEffect(() => {
    const faqList = async () => {
      let res = await axios.get("/faq", { params: { tags: tags, locale: locale} })
      
      setData(res.data.faqs)
    }
    
    faqList()
  }, [])

  return (
    <>
      <div>
        <span>faq page</span>
      </div>
      
      <TopNav 
        data={data}
      />
      
      {/* <ul>
        {data.map(item => (
          <li key={item.faq_id}>{item.question}</li>
          // 실제 데이터의 구조에 따라 적절한 키와 값을 사용하세요
        ))}
      </ul> */}
    </>
  )
}

export default FaqComponent