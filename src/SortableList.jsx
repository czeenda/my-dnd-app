import React, { useState } from 'react';
import Item from './Item'

const SortableList = () => {
    const [deck, setDeck] = useState([
      { id: 1, text: 'Item 1', url: "url", code: 'blb' },
      { id: 2, text: 'Item 2', url: "url", code: 'blb' },
      { id: 3, text: 'Item 3', url: "url", code: 'blb' },
      { id: 4, text: 'Item 4', url: "url", code: 'blb' },
      { id: 5, text: 'Item 5', url: "url", code: 'blb' }, 
    ]);
  
    const moveItem = (dragIndex, hoverIndex) => {
      const draggedItem = deck[dragIndex];
      setDeck(prevItems => {
        const newItems = [...prevItems];
        newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, draggedItem);
        console.log(deck)
        return newItems;
        
      });
    };
  
    return (
      <div>
        {deck.map((item, index) => (
          <Item key={item.id} id={item.id} text={item.text} index={index} moveItem={moveItem} url={item.url} />
        ))}
      </div>
    );
  };

  export default SortableList