import { motion } from "framer-motion";
type EducationProps = {
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}
function Education({onClick}: EducationProps) {
    return <>
        <motion.div className="block md:hidden bg-amber-50 mb-[50px] pb-3 h-screen"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}	 
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <h1 className="uppercase font-bold text-xl text-center py-3">Education</h1>
            <div className="workeduc-box mx-3 md:mx-3">
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2024 - Present</span>
                    <h3 className='font-bold'>Royal University of Phnom Penh (RUPP)</h3>
                    <p className='text-gray-700'>Master Candidate</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2018 - 2022</span>
                    <h3 className='font-bold'>Build Bright University (BBU)</h3>
                    <p className='text-gray-700'>Bachelor Degree, Certificate of Academic Excellence awarded for being the top Outstanding Student in Information Technology for the academic year 2018-2019, and the second place for the 19th Promotion of the Bachelor's Program, 2018-2022.</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2018</span>
                    <h3 className='font-bold'>Chea Sim Samaki High School</h3>
                    <p className='text-gray-700'>High School Diploma</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2002</span>
                    <h3 className='font-bold'>Reaksmey Sophanna High School</h3>
                    <p className='text-gray-700'>Lower Secondary Diploma</p>
                </div>
            </div>
        </motion.div>
        <div className="hidden md:block">
            <h1 className="title uppercase font-bold">Education</h1>
            <div className="workeduc-box">
            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i> 2024 - Present</span>
                <h3 className='font-bold'>Royal University of Phnom Penh (RUPP)</h3>
                <p className='text-gray-700'>Master Candidate</p>
            </div>
            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i> 2018 - 2022</span>
                <h3 className='font-bold'>Build Bright University (BBU)</h3>
                <p className='text-gray-700'>Bachelor Degree, Certificate of Academic Excellence awarded for being the top Outstanding Student in Information Technology for the academic year 2018-2019, and the second place for the 19th Promotion of the Bachelor's Program, 2018-2022.</p>
            </div>
            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i> 2018</span>
                <h3 className='font-bold'>Chea Sim Samaki High School</h3>
                <p className='text-gray-700'>High School Diploma</p>
            </div>
            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i> 2002</span>
                <h3 className='font-bold'>Reaksmey Sophanna High School</h3>
                <p className='text-gray-700'>Lower Secondary Diploma</p>
            </div>
            </div>
            <span className="number-page">3</span>
            <span className="nextprev-btn" data-page="turn-2" onClick={onClick}>
            <i className="bx bx-chevron-right"></i>
            </span>
        </div>
    </>
}

export default Education;