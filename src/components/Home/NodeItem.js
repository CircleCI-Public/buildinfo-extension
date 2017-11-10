import React from 'react'

const NodeItem = ({ index, public_ip_addr, image_id }) => (
  <tr className='nodeItem'>
    <td>{index}</td>
    <td>{public_ip_addr}</td>
    <td>{image_id}</td>
  </tr>
    )

export default NodeItem
