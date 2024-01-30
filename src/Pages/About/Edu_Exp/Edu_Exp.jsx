import { useEffect, useState } from "react";
import Timeline from "../../../Components/Timeline/Timeline";


const Edu_Exp = () => {
    //state
    const [introduction,setIntroduction] = useState([])

    //useEffect
    useEffect(()=>{
        fetch("/introduction.json")
        .then(response => response.json())
        .then((data) => setIntroduction(data))
    },[])

    const experience = introduction[0]?.experience ||  []
    const education = introduction[0]?.education ||  []


    return (
        <div>
             <h2 className="text-4xl text-center font-semibold uppercase">Experience and Education</h2>
             <div className="grid lg:grid-cols-2 gap-5">
                <div>
                    {
                        experience?.map(exp => <Timeline key={exp._id} element={exp}></Timeline>)
                    }
                </div>

                <div>
                    {
                        education?.map(edu => <Timeline key={edu._id} element={edu}></Timeline>)
                    }
                </div>
             </div>
        </div>
    );
};

export default Edu_Exp;