import React, {useRef, useState} from 'react';
import styles from './CardsContainer.module.scss'
import Card from "../card/Card";
import CardBuilder from "../card-builder/CardBuilder";

// eslint-disable-next-line react/prop-types
const Lists = ({id, name}) => {

    const [cards, setCards] = useState([]);
    const [showCardForm, setShowCardForm] = useState(false);
    let isEventRegistered = useRef(false);

    const showForm = () => setShowCardForm(true);

    const addCard = (newCard) => {
        let temp = cards;
        temp.push(newCard)
        setCards(temp);
        setShowCardForm(false)
    }

    const handleDrop = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        let node = JSON.parse(evt.dataTransfer.getData('id'));
        let card = {
            id: node.cardId,
            label: node.label,
            parentId: id
        }
        setCards(cards => [...cards, card]);
        const event = new CustomEvent('dropSuccess', {detail : {cardId: node.cardId, newParentId: id}});
        document.dispatchEvent(event);
        console.log('dropped to', name)
    }

    if (!isEventRegistered.current) {
        document.addEventListener('dropSuccess', (evt) => {
            console.log('triggering in ', name)
            if (id !== evt.detail.newParentId) {
                let temp = cards.filter((card) => card.id !== evt.detail.cardId)
                setCards(temp);
            }
        })
        isEventRegistered.current = true
    }

    return (
        <div
            className={styles.container}
            onDrop={evt => handleDrop(evt)}
            onDragOver={(e) => e.preventDefault()}>
            {/* eslint-disable-next-line react/prop-types */}
            <h3>{name}</h3>
            <section className={styles['card-section']}>
                {
                    cards.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                parentId={id}
                                cardId={card.id}
                                label={card.label}
                            />
                        )
                    })
                }
            </section>
            {
                !showCardForm
                    ? <button onClick={showForm}>+ Add a Card</button>
                    : <CardBuilder
                        addCard={addCard}
                        parentId={id}
                        hideForm={() => setShowCardForm(false)}
                    />
            }
        </div>
    )
}

export default Lists;