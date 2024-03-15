import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';

function Displayer({userData, educationData, experienceData}) {
    return (
        <section className={"displayer"}>
            <div className={"basicdata"}>
                <h1>{userData.firstName} {userData.lastName}</h1>
                    <div className={"telecomdata"}>
                        <div className={"icon_and_data"}>
                            <MdEmail></MdEmail> <span>{userData.email}</span> </div>
                        <div className={"icon_and_data"}>
                        <FaPhoneAlt></FaPhoneAlt> <span>{userData.tel}</span>
                        </div>
                        <div className={"icon_and_data"}>
                        <AiOutlineHome></AiOutlineHome> <span>{userData.address}</span>
                        </div>
                </div>
            </div>
            <div className={"preview"}>
                <h2 className={"displayer-header"}>Education</h2>
                {educationData.map((education, index) => (
                    <EducationItem key={index} {...education} />
                ))}
            </div>
            <div className={"preview"}>
                <h2 className={"displayer-header"}>Experience</h2>
                {experienceData.map((experience, index) => (
                    <ExperienceItem key={index} {...experience} />
                ))}
            </div>

        </section>
    )
}

export default Displayer