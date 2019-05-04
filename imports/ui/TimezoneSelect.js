import React from 'react'
import Select from './Select'

function TimezoneSelect() {
  return (
    <Select
      options={[
        { label: 'Albania' },
        { label: 'Algeria' },
        { label: 'American Samoa' },
        { label: 'Bahamas' },
        { label: 'Bahrain' },
        { label: 'Bangladesh' },
      ].map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label,
      }))}
      label="Timezone"
      placeholder="Type to search for a timezone"
      noOptionsMessage="No timezone found"
    />
  )
}

export default TimezoneSelect
