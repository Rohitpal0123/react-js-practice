import { useState } from 'react'
function Visibility()  {
    const [isVisible, setVisible] = useState(false)
  return (
    <>
    <button onClick={() => setVisible(!isVisible)}>
        Toggle text
    </button>
    {isVisible && <p> This is a toggle text</p>}
    </>
  )
}

export default Visibility