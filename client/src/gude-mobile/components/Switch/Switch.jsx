import React from 'react'
import cx from 'classnames'

import './Switch.css'

const Switch = ({ rounded = true, isToggled, onToggle }) => {

    const sliderCX = cx("slider", {
        'rounded': rounded
    })

  return (
    <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={sliderCX} />
    </label>
  )
}

export default Switch