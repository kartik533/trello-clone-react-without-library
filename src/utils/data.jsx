import { v4 as uuidv4 } from 'uuid';

export const initialCards = [
    {
        id: uuidv4(),
        label: "First Card",
        assigned: "Kartik"
    },
    {
        id: uuidv4(),
        label: "Second Card",
        assigned: "Kartik"
    },
    {
        id: uuidv4(),
        label: "3rd Card",
        assigned: "Kartik"
    },
    {
        id: uuidv4(),
        label: "4th Card",
        assigned: "Kartik"
    }
]

export const initialLists = [
    {
        name: "Todo"
    },
    {
        name: "In Progress"
    }
]