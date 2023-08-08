import React from 'react'
import { useParams } from 'react-router-dom'

export default function ReportDetail() {
    let {id} = useParams()
  return (
    <div className="custom">
        detay {id}
    </div>
  )
}
