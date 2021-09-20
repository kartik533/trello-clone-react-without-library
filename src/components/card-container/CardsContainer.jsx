import React, {useState} from 'react';
import styles from './CardsContainer.module.scss'
import Card from "../card/Card";
import CardBuilder from "../card-builder/CardBuilder";
import {initialCards} from "../../utils/data";

// eslint-disable-next-line react/prop-types
const CardsContainer = ({id, name}) => {

    const [cards, setCards] = useState(initialCards.slice(2,3));
    const [showCardForm, setShowCardForm] = useState(false);

    const showForm = () => setShowCardForm(true);

    const addCard = (newCard) => {
        let temp = cards;
        temp.push(newCard)
        setCards(temp);
        setShowCardForm(false)
    }

    const drop = (evt) => {
        let node = JSON.parse(evt.dataTransfer.getData('id'));
        let card = {
            id: node.cardId,
            label: node.label,
            assigned: node.assigned,
        }
        setCards(cards => [...cards, card]);
    }

    const deleteCardOnDrag = (evt, cardId) => {
        evt.preventDefault();
        let temp = cards.filter((card) => card.id !== cardId)
        setCards(temp);
        console.log('dragged from', id)
    }

    return (
        <div className={styles.container} onDrop={evt => drop(evt)} onDragOver={(e) => e.preventDefault()}>
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
                                assigned={card.assigned}
                                onDrag={deleteCardOnDrag}
                            />
                        )
                    })
                }
            </section>
            {
                !showCardForm
                    ? <button onClick={showForm}>Add Card</button>
                : <CardBuilder
                    addCard={addCard}
                />
            }
        </div>
    )
}

export default CardsContainer;