import React  from 'react'

const Form = (props) => {

    return(
        <form className='main' onSubmit={props.getWeather}>
            <input type="text" name='city' placeholder='City.....' autoComplete='OFF' autoFocus/>
            <input type="text" name='country' placeholder='Country.....' autoComplete='OFF' />
            <button>Get Weather</button>
        </form>
    )
}

export default Form;