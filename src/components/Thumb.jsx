import {React,useState} from 'react'

export default function Thumb(props) {
    const [hover, setHover] = useState(false)
  return (
    <div className={"thumb"+props.children} id={props.id+props.children} onMouseEnter={(e)=>setHover(true)} onMouseLeave={(e)=>setHover(false)} onClick={props.handleThumb}>
        {hover ? props.number>1000?Math.round(props.number/1000)+"k":props.number: (props.children=="Up"?"↑":"↓")}
    </div>
  )
}