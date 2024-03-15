import './App.css'
import Header from "./Header.jsx";
import uniqid from 'uniqid'
import {useState} from "react";
import CvBuilder from "./form/CvBuilder.jsx";
import Displayer from "./previewer/Displayer.jsx";

// https://github.com/romaleks/CV-Application

function App() {

    const [userData, setUserData] = useState([
        {
            firstName: '',
            lastName: '',
            title: '',
            photo: null,
            description: '',
            phone: '',
            email: '',
            address: '',
        },
    ])

    const [educationData, setEducationData] = useState([
        {
            id: uniqid(),
            school: '',
            degree: '',
            startDate: '',
            graduationDate: '',
        },
    ])

    const [experienceData, setExperienceData] = useState([
        {
            id: uniqid(),
            company: '',
            position: '',
            mainTasks: '',
            startDate: '',
            endDate: '',
        },
    ])

const addItem = (section) => {
    if (section === 'education') {
        const newItem = {
            id: uniqid(),
            school: '',
            degree: '',
            graduationDate: '',
        }
        setEducationData(prevEducationData => [...prevEducationData, newItem])
    }
        else if (section === 'experience') {
            const newItem = {
                id: uniqid(),
                company: '',
                position: '',
                mainTasks: '',
                startDate: '',
                endDate: '',
            }
            setExperienceData([...experienceData, newItem])
        }
    }

    const deleteItem = (section, id) => {
        if (section === 'education') {
            const newArray = educationData.filter(item => item.id !== id)
            setEducationData(newArray)
        } else {
            const newArray = experienceData.filter(item => item.id !== id)
            setExperienceData(newArray)
        }
    }
const handleTextEdit = (section, index = 0, input, value) => {
    if (section === 'user') {
        const items = {...userData}
        items[input] = value
        setUserData(items)
    } else if (section === 'education') {
        const items = [...educationData]
        items[index][input] = value
        setEducationData(items)
    } else {
        const items = [...experienceData]
        items[index][input] = value
        setExperienceData(items)
    }
}


console.log(userData);
    console.log(educationData);
    console.log(experienceData);

  return (
      <>
          <Header></Header>
          <div>
              <div id={"app"}>
                    <CvBuilder
                        userData={userData}
                        educationData={educationData}
                        experienceData={experienceData}
                        setUserData={setUserData}
                        setEducationData={setEducationData}
                        setExperienceData={setExperienceData}
                        handleTextEdit={handleTextEdit}
                        deleteItem={deleteItem}
                        addItem={addItem} >
                    </CvBuilder>
                  <Displayer userData={userData} educationData={educationData} experienceData={experienceData}></Displayer>
                </div>
          </div>
      </>
  )
}

export default App
