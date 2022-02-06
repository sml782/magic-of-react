import React from 'react'
import { Select } from 'antd'
import MountInPopup from './M'

const AA = () => {
  return (
    <MountInPopup>
      {(renderProps) => (
        <Select {...renderProps}>
          <Select.Option value="a">awd</Select.Option>
        </Select>
      )}
    </MountInPopup>
  )
}
