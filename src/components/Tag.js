import React from 'react'
import Icon from './Icon'

function Tag(props){
    function handleClick(e){
        props.onClick(e)    
    }
    return(
        <div className={props.instance}>{props.text}
            <Icon
                type="times"
                onClick={handleClick}
            />
        </div>
    )
}

export default Tag
