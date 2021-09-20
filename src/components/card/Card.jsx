import  React from 'react';
import styles from './Card.module.scss'

// eslint-disable-next-line react/prop-types
const Card = ({cardId, label, assigned, parentId, onDrag}) => {

    const drag = (evt) => {
        let temp = {
            cardId,
            label,
            assigned,
            parentId
        }
        evt.dataTransfer.setData("id", JSON.stringify(temp));

    }

    return (
        <div
            className={styles.card}
            draggable={true}
            onDragStart={(evt) => drag(evt)}
            onDragOver={evt => onDrag(evt, cardId)}
        >
            <span>{label}</span>
            <span>{assigned}</span>
        </div>
    )
}

export default Card;