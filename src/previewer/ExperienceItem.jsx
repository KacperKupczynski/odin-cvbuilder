import react from 'react';

const ExperienceItem = props => {
    const {company, position, mainTasks, startDate, endDate} = props;

    return (
        <div className="experience-info displayer-item">
            <div className="experience-info-group">
                <p className="dates">
                    {startDate}
                    {startDate && endDate && <span> – </span>}
                    {endDate}
                </p>
            </div>

            <div className="experience-info-group">
                <p className="experience-info-company displayer-item-main-name">{company}</p>
                <p className="experience-info-position displayer-title"><em>{position}</em></p>
                <p className="experience-info-mainTasks">{mainTasks}</p>
            </div>
        </div>)
}

export default ExperienceItem;