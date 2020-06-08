import React from 'react'
import HistoryItem from './HistoryItem'


export default function History({ userHistory, children }) {
  return (
    <React.Fragment>
      <h1>History</h1>
      {children}
      <div className="history">
        {userHistory.map((order, i) => <HistoryItem key={i} order={order} />)}
      </div>
    </React.Fragment>
  )
}