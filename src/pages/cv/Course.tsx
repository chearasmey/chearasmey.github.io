import { motion } from "framer-motion";
function Course({onClick}: {onClick: (e: React.MouseEvent<HTMLSpanElement>) => void}) {
    return <>
        <motion.div className="block md:hidden bg-amber-50 mb-[50px] pb-3 h-screen"
            initial={{ width: 0 }}
        animate={{ width: "100%" }}	 
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <h1 className="uppercase font-bold text-xl text-center py-3">Short Course</h1>
            <div className="workeduc-box mx-3 md:mx-3">
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> July 25, 2024</span>
                    <h3 className='font-bold'>IBM</h3>
                    <p>
                    <a target="_blank" title="Proof of completion" href="https://courses.edx.org/certificates/8a6237e6b9424abbaf517665a73d8940">
                        PY0101EN: Python Basics for Data Science
                    </a>
                    </p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> April 30, 2021</span>
                    <h3 className='font-bold'>MongoDB University</h3>
                    <p>
                    <a target="_blank" title="Proof of completion" href="https://university.mongodb.com/course_completion/2a0e8ec9-5661-471a-8345-1df5a52b6702">
                        M001: MongoDB Basics
                    </a>
                    </p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> June 10, 2014</span>
                    <h3 className='font-bold'>Certification of Internet Programming</h3>
                    <p className='text-gray-700'>12 Months</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> October 27, 2011</span>
                    <h3 className='font-bold'>Certification of Computer Repairing</h3>
                    <p className='text-gray-700'>3 Months</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 01 June 2010 - 31 January 2011</span>
                    <h3 className='font-bold'>Certification of Printing skill</h3>
                    <p className='text-gray-700'>6 Months</p>
                </div>
            </div>
        </motion.div>
        <div className="hidden md:block">
            <h1 className="title uppercase font-bold">Short Courses</h1>
            <div className="workeduc-box">
            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i> July 25, 2024</span>
                <h3 className='font-bold'>IBM</h3>
                <p>
                <a target="_blank" title="Proof of completion" href="https://courses.edx.org/certificates/8a6237e6b9424abbaf517665a73d8940">
                    PY0101EN: Python Basics for Data Science
                </a>
                </p>
            </div>
            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i> April 30, 2021</span>
                <h3 className='font-bold'>MongoDB University</h3>
                <p>
                <a target="_blank" title="Proof of completion" href="https://university.mongodb.com/course_completion/2a0e8ec9-5661-471a-8345-1df5a52b6702">
                    M001: MongoDB Basics
                </a>
                </p>
            </div>
            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i> June 10, 2014</span>
                <h3 className='font-bold'>Certification of Internet Programming</h3>
                <p className='text-gray-700'>12 Months</p>
            </div>
            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i> October 27, 2011</span>
                <h3 className='font-bold'>Certification of Computer Repairing</h3>
                <p className='text-gray-700'>3 Months</p>
            </div>
            <div className="workeduc-content">
                <span className="year"><i className="bx bxs-calendar"></i> 01 June 2010 - 31 January 2011</span>
                <h3 className='font-bold'>Certification of Printing skill</h3>
                <p className='text-gray-700'>6 Months</p>
            </div>

            </div>
            <span className="number-page">4</span>
            <span className="nextprev-btn back" data-page="turn-2" onClick={onClick}>
            <i className="bx bx-chevron-left"></i>
            </span>
        </div>
    </>
}

export default Course;