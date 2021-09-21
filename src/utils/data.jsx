import { v4 as uuidv4 } from 'uuid';

export const initialCards = [
    {
        id: uuidv4(),
        label: "First Card",
    },
    {
        id: uuidv4(),
        label: "Second Card",
    },
    {
        id: uuidv4(),
        label: "3rd Card",
    },
    {
        id: uuidv4(),
        label: "4th Card",
    }
]

export const initialLists = [
    {
        id: uuidv4(),
        name: "Todo"
    },
    {
        id: uuidv4(),
        name: "In Progress"
    }
]