import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const CardBuilder = (props) => {

    const [cardName, setCardName] = useState('');
    const [assigned, setAssigned] = useState('');

    const cardNameHandler = (value) => {
        if (value.trim().length === 0) {
            setCardName('')
            return
        }
        setCardName(value)
    }

    const assignedHandler = (value) => {
        if (value.trim().length === 0) {
            setAssigned('')
            return
        }
        setAssigned(value)
    }

    const addCard = () => {
        // eslint-disable-next-line react/prop-types
        props.addCard( {
            id: uuidv4(),
            label: cardName,
            assigned: assigned
        })
        setCardName('')
        setAssigned('')
    }

    return (
        <div>
            <section>
                <label>Card Name</label>
                <input value={cardName} onChange={(e) => cardNameHandler(e.target.value)}/>
            </section>
            <section>
                <label>Assigned To</label>
                <input value={assigned} onChange={(e) => assignedHandler(e.target.value)}/>
            </section>
            <button onClick={addCard}>Add Card</button>
        </div>
    )
}

export default CardBuilder;