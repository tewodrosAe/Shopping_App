import React from 'react'

function TechBadge({isDark}) {
  console.log(isDark)
  return (
    <div className={`techbadge ${isDark && "techbadge-dark"}`}>
        <div className='techbadge-first'>
          <img alt='Lenovo' src='lenovo.svg'/>
          <img alt='apple' src='apple.svg'/>
          <img alt='samsung' src='samsung.svg'/>
          <img alt='hp' src='hp.svg'/>
        </div>
    </div>
  )
}

export default TechBadge