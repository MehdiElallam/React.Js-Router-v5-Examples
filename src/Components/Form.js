import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'

export default function Form() {
    
    const [fullname, setFullname] = useState('')
    const [age, setAge] = useState('')

    const formContainsData = fullname !== '' || age !== ''
    
    return (
        <div>
            <Prompt when={formContainsData} message="Tou're going to loose your data !" />
            <form>
                <div className='input-contain' style={styles.inputContain}>
                    <label>Fullname : </label>
                    <input 
                            type='text' 
                            style={styles.input} 
                            id='fullname' 
                            placeholder="Tape your fullname..."  
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}

                    />
                </div> 
                <div className='input-contain' style={styles.inputContain}>
                    <label>Age : </label>
                    <input 
                        type='number' 
                        style={styles.input} 
                        id='age' 
                        placeholder="Tape your age..."  
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button style={styles.button} type='submit'>
                    Save
                </button>
            </form>
        </div>
    )
}

const styles = {
    inputContain : {
        display : 'block',
        marginBottom : 10
    },
    input:{
        padding : '5px 15px'
    },
    button : {
        padding : '5px 15px'
    }
}
