import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './CardBuilder.module.scss'

// eslint-disable-next-line react/prop-types
const CardBuilder = ({parentId, addCard, hideForm}) => {

    const [cardName, setCardName] = useState('');

    const cardNameHandler = (value) => {
        if (value.trim().length === 0) {
            setCardName('')
            return
        }
        setCardName(value)
    }

    const addNewCard = () => {
        // eslint-disable-next-line react/prop-types
        addCard({
            id: uuidv4(),
            label: cardName,
            parentId: parentId
        })
        setCardName('')
    }

    return (
        <div className={styles['card-builder']}>
            <section>
                <input
                    value={cardName}
                    onChange={(e) => cardNameHandler(e.target.value)}
                    placeholder="Enter the title of this card..."
                />
            </section>
            <div className={styles['button-section']}>
                <button
                    disabled={cardName === ''}
                    onClick={addNewCard}>
                    Add Card
                </button>
                <button
                    onClick={hideForm}>
                    X
                </button>
            </div>

        </div>
    )
}

export default CardBuilder;