import Education from './Education.jsx';
import Experience from './Experience.jsx';
import User from './User.jsx';
import PropTypes from "prop-types";


const CvBuilder = ({educationData, experienceData, addItem, handleTextEdit, deleteItem }) => {
    return (
        <div className={"cv-builder"}>
            <User onChange={handleTextEdit}  />
            <Education items={educationData} addItem={addItem} onChange={handleTextEdit} section={"education"} deleteItem={deleteItem} />
            <Experience items={experienceData} addItem={addItem} onChange={handleTextEdit} section={"experience"} deleteItem={deleteItem} />
        </div>
    )


}

CvBuilder.propTypes = {
    userData: PropTypes.object,
    EducationData: PropTypes.array,
    ExperienceData: PropTypes.array,
    addItem: PropTypes.func,
    handleTextEdit: PropTypes.func
};

export default CvBuilder;