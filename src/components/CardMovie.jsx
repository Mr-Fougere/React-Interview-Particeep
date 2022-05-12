import React from 'react'
import { Card, Progress, Tooltip, Button } from 'antd'
import Thumb from './Thumb'
import { CloseCircleOutlined } from '@ant-design/icons';


export default function CardMovie(props) {
  var percent = Math.floor((props.likes / (props.likes + props.dislikes)) * 100)
  return (

    <Card className="cardMovie col-xl-3 col-md-4 col-sm-10 col-12 " id={props.id} title={props.title} extra={props.category}>
      <div className="ratio " id={props.id+"ratio"}>
        <div className="percent"><span>{percent}%</span></div>
        <Progress className="" id={"progressBar" + props.id} strokeLinecap="square" percent={percent} trailColor="#ef2d56ff" strokeColor="#8cd867ff" showInfo={false} size="small" />
        <Thumb
          id={props.id}
          number={props.likes}
          handleThumb={props.handleThumbUp}
        >Up</Thumb>
        <Thumb
        id={props.id}
        number={props.dislikes}
          handleThumb={props.handleThumbDown}
        >Down</Thumb>
      </div>
        <button type="button" class="btn-close btnDelete" id={"btn" + props.id} aria-label="Close" onClick={props.handleDelete}></button>

    </Card>
  )
}
