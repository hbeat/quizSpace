import React, {useState,useEffect} from 'react'

const QuestionListPage = () => {
    let [questions,setQuestions] = useState([])
    useEffect(() => {
        getQuestions()
    }, [])
    let getQuestions = async () =>{
        let response = await fetch('http://127.0.0.1:8000/api/questions/')
        let data = await response.json()
        setQuestions(data)
    }
    
      
}

export default QuestionListPage
