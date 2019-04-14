import React from 'react'
import RecordsGroup from '../records/RecordsGroup.js'

const HistoryPage = () =>
  [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
  ].map(n => (
    <div key={n} style={{ marginBottom: '0.75rem' }}>
      <RecordsGroup key={n} />
    </div>
  ))

export default HistoryPage
