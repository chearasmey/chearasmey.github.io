import {motion} from "framer-motion";
function Experience(){
    return <>
        <motion.div className="block md:hidden bg-amber-50 mb-[50px] pb-3"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}	 
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <h1 className="uppercase font-bold text-xl text-center py-3">Work Experience</h1>
            <div className="workeduc-box mx-3 md:mx-3">
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2024 - Present</span>
                    <h3 className='font-bold'>APD Bank</h3>
                    <p className='text-gray-700'>Served as Web Development Manager, leading team to develop all in-house system of the bank.</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2023 - 2024</span>
                    <h3 className='font-bold'>APD Bank</h3>
                    <p className='text-gray-700'>Served as Assistant Development Application Manager, leading team to provide technical fully support of E-Banking backend management system, Corporate Internet Banking, Peripheral System, Call Center Management System, User Management System, Trainee Management System, Safe Deposit Box and more.</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2022 - 2023</span>
                    <h3 className='font-bold'>APD Bank</h3>
                    <p className='text-gray-700'>Served as Senior Development Application Officer, developing APD internal system such as KHQR Generation, APD Library, APD Call Center Management System, User Management System and leading team to explore and support of E-Banking backend management system, Corporate Internet Banking, Peripheral System.</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 07 July 2021 - 2022</span>
                    <h3 className='font-bold'>Codingate Technology</h3>
                    <p className='text-gray-700'>Served as Project Manager, leading projects such as e-commerce websites and apps, B2B mobile apps, POS web applications, and more.</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2017 - 2021</span>
                    <h3 className='font-bold'>Digitalsky Multimedia (OneTV)</h3>
                    <p className='text-gray-700'>Served as Software Development Supervisor, leading and developing many projects such as Digitalsky website,
                    TV Voting, Subscriber System, HR System, Content Library, IT Asset system, Luckydraw System, Dealer cabinet, TV program schedule, OneNews Cambodia and more.
                    </p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2015 - 2017</span>
                    <h3 className='font-bold'>NTV</h3>
                    <p className='text-gray-700'>Served as Web Developer and manage Facebook page & YouTube channel</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2015 - 2017</span>
                    <h3 className='font-bold'>NTV</h3>
                    <p className='text-gray-700'>Served as Web Developer and manage Facebook page & YouTube channel</p>
                </div>
                <div className="workeduc-content">
                    <span className="year"><i className="bx bxs-calendar"></i> 2015 - 2017</span>
                    <h3 className='font-bold'>NTV</h3>
                    <p className='text-gray-700'>Served as Web Developer and manage Facebook page & YouTube channel</p>
                </div>
            </div>
        </motion.div>
    </>
}

export default Experience;