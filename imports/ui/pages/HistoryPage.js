import React from 'react'
import RecordsGroup from '../records/RecordsGroup'

const data = [
  [
    { id: 1, begin: '2017-05-24T10:30', end: '13:00' },
    { id: 2, begin: '2017-05-24T14:26', end: '17:59' },
  ],
  [
    { id: 3, begin: '2017-05-25T03:59', end: '13:00' },
    { id: 4, begin: '2017-05-25T04:01', end: '17:59' },
    { id: 5, begin: '2017-05-25T11:59', end: '13:00' },
    { id: 6, begin: '2017-05-25T14:35', end: '17:59' },
  ],
  [
    { id: 7, begin: '2017-05-25T03:59', end: '13:00' },
    { id: 8, begin: '2017-05-25T04:01', end: '17:59' },
    { id: 9, begin: '2017-05-25T11:59', end: '13:00' },
    { id: 10, begin: '2017-05-25T14:35', end: '17:59' },
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
