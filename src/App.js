import './App.css';
import Lists from "./components/card-container/CardsContainer";
import React, {useState} from "react";
import styles from './App.module.scss'
import {initialLists} from "./utils/data";
import {v4 as uuidv4} from "uuid";

function App() {
    const [lists, setLists] = useState(initialLists)
    const [listName, setListName] = useState('')
    const [showListForm, setShowListForm] = useState(false)

    const addNewList = () => {
        let temp = lists;
        temp.push({
            id: uuidv4(),
            name: listName
        })
        setLists(temp)
        setShowListForm(false)
    }

    return (
        <div className={styles.App}>
            <h2>Daily Todo</h2>
            <div className={styles['todo-section']}>
                {
                    lists.map((list, index) => {
                        return (
                            <Lists
                                key={index}
                                id={list.id}
                                name={list.name}
                            />
                        )
                    })
                }
                {
                    !showListForm
                        ? <button
                            className={styles['add-list-button']}
                            onClick={() => setShowListForm(true)}>+ Add another List</button>
                        :
                        <div className={styles['list-builder']}>
                            <input
                                value={listName}
                                onChange={(e) => setListName(e.target.value)}
                                placeholder="Enter the title of this list..."
                            />
                            <div className={styles['list-button-section']}>
                                <button
                                    disabled={listName === ''}
                                    onClick={addNewList}>
                                    Add List
                                </button>
                                <button
                                    onClick={() => setShowListForm(false)}>
                                    X
                                </button>
                            </div>
                        </div>
                }
            </div>

        </div>
    );
}

export default App;
