import React from 'react'
import { Card, Progress, Tooltip, Button } from 'antd'
import Thumb from './Thumb'
import { CloseCircleOutlined } from '@ant-design/icons';


export default function CardMovie(props) {
  var percent = Math.floor((props.likes / (props.likes + props.dislikes)) * 100)
  return (

    <Card className="cardMovie col-xl-3 col-md-4 col-sm-10 col-12 " id={props.id} title={props.title} extra={props.category}>
      <div className="ratio " id={props.id+"ratio"}>
        <div className="percent">{percent}%</div>
        <Progress className="" id={"progressBar" + props.id} strokeLinecap="square" percent={percent} trailColor="#ff1100" strokeColor="#4ffd3c" showInfo={false} size="small" />
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
      <Tooltip title={"Delete " + props.title} id={props.id+"tooltip"}>
        <Button className="btnDelete" id={"btn" + props.id} type="text  " size="small" onClick={props.handleDelete}><CloseCircleOutlined /></Button>
      </Tooltip>

    </Card>
  )
}
