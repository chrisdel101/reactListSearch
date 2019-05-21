import React from "react"

function Icon(props) {
  // pass event to parent
  function handleClick(e) {
    props.onClick(e)
  }
  return (
    <div className="icon-container" onClick={handleClick}>
      <i
        data-tip={props.tooltip}
        className={`fa fa-${props.type} icon`}
        aria-hidden="true"
        ref={props.refs}
      />
    </div>
  )
}
export default Icon
