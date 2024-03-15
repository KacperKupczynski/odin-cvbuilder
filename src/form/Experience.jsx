import PropTypes from 'prop-types';
import Button from "../Button.jsx";

const Experience = ({ items, addItem, onChange, section, deleteItem }) => {
    return (
        <div className='section'>
            {items.length > 0 ? items.map((item, index) => {
                return (
                    <div className='item' key={item.id}>
                        <h2 className='title'>Experience #{index + 1}</h2>
                        <input
                            type='text'
                            placeholder='Company'
                            value={item.company}
                            onChange={e => onChange(section, index, 'company', e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Position'
                            value={item.position}
                            onChange={e => onChange(section, index, 'position', e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Main Tasks'
                            value={item.mainTasks}
                            onChange={e => onChange(section, index, 'mainTasks', e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='Start Date'
                            value={item.startDate}
                            onChange={e => onChange(section, index, 'startDate', e.target.value)}
                        />
                        <input
                            type='text'
                            placeholder='End Date'
                            value={item.endDate}
                            onChange={e => onChange(section, index, 'endDate', e.target.value)}
                        />
                        <div className='buttons'>
                            <Button title='Add' onClick={() => addItem(section)} />
                            <Button title='Remove' onClick={() => deleteItem(section, item.id)} />
                        </div>
                    </div>
                )
            }) : (
                <div className='item'>
                    <h2 className='title'>Experience</h2>
                    <div className='buttons'>
                        <Button title='Add' onClick={() => addItem(section)} />
                    </div>
                </div>
            )}
        </div>
    )
}

Experience.propTypes = {
    items: PropTypes.array,
    addItem: PropTypes.func,
    onChange: PropTypes.func,
    section: PropTypes.string,
    deleteItem: PropTypes.func,
};

export default Experience;