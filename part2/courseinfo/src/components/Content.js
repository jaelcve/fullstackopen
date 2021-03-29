import React from 'react'
import Part from './Part'

const Content = ({ course }) => {
    return (
        <ul>
            {course.parts.map(courseEl =>
                <li key={courseEl.id}>
                    <Part part={courseEl} />
                </li>
            )}
        </ul>
    )
}


export default Content