import React from 'react'
import './Card.css'

interface Props  {
    title: string,
    description: string,
    days: number,
    completeTask(taskNameToDelete: string): void;
}

const Card = ({title, description, days, completeTask}: Props) => {

  return (
    <div className="Card">

        <div className="Details">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <p>{days} days</p>
        <button onClick={() => {completeTask(title);}} className="X">X</button>
        </div>

        </div>
  )
}

export default Card