import React from 'react'

const Total = ({ course }) => {

    const sum = course.parts.reduce((accumulator,
        currentValue) => accumulator + currentValue.exercises, 0);

    const exercise = sum === 1 ? 'exercise' : 'exercises';

    return (
        <p>
            total of {sum} {exercise}
        </p>
    )
}


export default Total