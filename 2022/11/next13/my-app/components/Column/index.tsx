import React from 'react'
import styles from './column.module.css'

const Column = () => (
    <div className={styles.container}>
        <h2>MiniBag (2 items)</h2>
        <p>Total : £100</p>

        <div className={styles.minibag}>
            <div>
                <h3>Product 1</h3>
                <p>Shoe</p>
                <p>Price: £50</p>
            </div>
            <div>
                <h3>Product 2</h3>
                <p>Bag</p>
                <p>Price: £50</p>
            </div>
        </div>
    </div>
)

export default Column;