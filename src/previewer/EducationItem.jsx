import react from 'react';

const EducationItem = props => {
    const {school, degree, startDate, graduationDate} = props;

    return (
        <div className="education-info displayer-item">
            <div className="education-info-group">
                <p className="dates">
                    {startDate}
                    {startDate && graduationDate && <span> – </span>}
                    {graduationDate}
                </p>
            </div>

            <div className="education-info-group">
                <p className="education-info-schoolName displayer-item-main-name">{school}</p>
                <p className="education-info-degree displayer-title"><em>{degree}</em></p>
            </div>
        </div>)
}

export default EducationItem;