import React from 'react'
import Card from './Card'

export default function CardList({ array }) {
    const CardComponent = array.map((user, i) => {
        return <Card 
            key={i}
            name={array[i].name}
            
        />
    })
}
