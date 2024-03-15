import PropTypes from 'prop-types';
import Button from "../Button.jsx";
import {useState} from "react";

const Education = ({ items, addItem, onChange, section, deleteItem }) => {

    const [toggle, setToggle] = useState(true)

    return (
        <div className='section'>
            {items.length > 0 ? items.map((item, index) => {
                return (
                    <div className='item' key={item.id}>
                        <h2 className='title'>Education #{index + 1}</h2>
                        <Button title='^' onClick={() => setToggle(!toggle)}></Button>
                        {toggle ? (
                            <>
                                <input
                                    type='text'
                                    placeholder='School'
                                    value={item.school}
                                    onChange={e => onChange(section, index, 'school', e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Degree'
                                    value={item.degree}
                                    onChange={e => onChange(section, index, 'degree', e.target.value)}
                                />
                                <input
                                    type={'text'}
                                    placeholder={'Start Date'}
                                    value={item.startDate}
                                    onChange={e => onChange(section, index, 'startDate', e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Graduation Date'
                                    value={item.graduationDate}
                                    onChange={e => onChange(section, index, 'graduationDate', e.target.value)}
                                />
                            </>
                        ) : null}
                        <div className='buttons'>
                            <Button title='Add' onClick={() => addItem(section)}/>
                            <Button title='Remove' onClick={() => deleteItem(section, item.id)}/>
                        </div>
                    </div>
                )
            }) : (
                <div className='item'>
                    <h2 className='title'>Education</h2>
                    <div className='buttons'>
                        <Button title='Add' onClick={() => addItem(section)}/>
                    </div>
                </div>
            )}
        </div>
    )
}

Education.propTypes = {
    items: PropTypes.array,
    addItem: PropTypes.func,
    onChange: PropTypes.func,
    section: PropTypes.string,
    deleteItem: PropTypes.func,
};

export default Education;