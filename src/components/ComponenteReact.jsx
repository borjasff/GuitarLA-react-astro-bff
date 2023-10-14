import React, { useState } from 'react'

export default function ComponentReact() {
    const[client, setClient] = useState('Example Client Name with React components in Astro')

    console.log('Client ONLY')
  return (
    <div>
        <h1 className='heading'>--{client}--</h1></div>
  )
}
<style>

</style>