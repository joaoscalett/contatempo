import React from 'react'
import RecordsGroup from '../records/RecordsGroup'

const data = [
  [
    { id: 1, begin: new Date(), end: new Date() },
    { id: 2, begin: new Date(), end: new Date() },
  ],
  [
    { id: 3, begin: new Date(), end: new Date() },
    { id: 4, begin: new Date(), end: new Date() },
    { id: 5, begin: new Date(), end: new Date() },
    { id: 6, begin: new Date(), end: new Date() },
  ],
  [
    { id: 7, begin: new Date(), end: new Date() },
    { id: 8, begin: new Date(), end: new Date() },
    { id: 9, begin: new Date(), end: new Date() },
    { id: 10, begin: new Date(), end: new Date() },
  ],
]
const HistoryPage = () =>
  data.map((records, i) => (
    <div
      key={records[0].id}
      style={{ marginBottom: i < data.length - 1 ? '0.75rem' : null }}
    >
      <RecordsGroup records={records} />
    </div>
  ))

export default HistoryPage
