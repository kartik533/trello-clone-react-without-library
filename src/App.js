import './App.css';
import CardsContainer from "./components/card-container/CardsContainer";
import React, {useState} from "react";
import styles from './App.module.scss'
import {initialLists} from "./utils/data";

function App() {

    const [lists, setLists] = useState(initialLists)
    const [listName, setListName] = useState('')
    const [showListForm, setShowListForm] = useState(false)

    const addList = () => {
        let temp = lists;
        temp.push( {
            id: listName,
            name: listName
        })
        setLists(temp)
        setShowListForm(false)
    }

    return (
        <div className={styles.App}>
            {
                lists.map((list, index) => {
                    return (
                        <CardsContainer
                            key={index}
                            id={list.name}
                            name={list.name}
                        />
                    )
                })
            }
            {
                !showListForm
                    ? <button onClick={() => setShowListForm(true)}>Add List</button>
                    : <div>
                        <section>
                            <label>List Name</label>
                            <input value={listName} onChange={(e) => setListName(e.target.value)}/>
                        </section>
                        <button onClick={addList}>Add List</button>
                    </div>
            }
        </div>
    );
}

export default App;
