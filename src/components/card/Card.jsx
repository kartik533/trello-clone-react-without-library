import  React from 'react';
import styles from './Card.module.scss'

// eslint-disable-next-line react/prop-types
const Card = ({cardId, label, parentId, onDrag}) => {

    const drag = (evt) => {
        evt.stopPropagation();
        console.log('drag started')
        let temp = {
            cardId,
            label,
            parentId
        }
        evt.dataTransfer.setData("id", JSON.stringify(temp));

    }

    const dragHandler = (evt) => {
        onDrag(evt, cardId)
    }

    return (
        <div
            className={styles.card}
            draggable={true}
            onDragStart={(evt) => drag(evt)}
            onDragEnd={evt => dragHandler(evt)}
        >
            {label}
        </div>
    )
}

export default Card;