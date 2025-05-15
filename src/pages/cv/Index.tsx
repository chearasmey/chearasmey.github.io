import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Skill from './Skill';
import Contact from './Contact';
import Course from './Course';
import Education from './Education';
import Profile from './Profile';
import { motion } from 'framer-motion';

function CV() {
    const navigate = useNavigate();
    const itemRefs = useRef<HTMLDivElement[]>([]);
    const coverRightRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLSpanElement>(null);
    const pages:HTMLDivElement[] = itemRefs.current;    
    

    const handleNextPrevBtn = (pageTurnId: string, index: number) => {
        const pageTurn = document.getElementById(pageTurnId);
        if (!pageTurn) return;
        if(!pageTurn.classList.contains("turn")){
        pageTurn.classList.add("turn");
        setTimeout(() => {
            pageTurn.style.zIndex = (20 + index).toString();
        }, 500);
        }else{
        pageTurn.classList.remove("turn");
        setTimeout(() => {
            pageTurn.style.zIndex = (20 - index).toString();
        }, 500);
        }
    }

    

    const handleContactMeBtn = () => {
        pages.forEach((page, index) => {
        setTimeout(() => {
          page.classList.add("turn");
          setTimeout(() => {
            page.style.zIndex = (20 + index).toString();
          }, 500);
        }, (index + 1) * 200 + 100);
      });
    }

    const handleContactPage = () => {
      navigate("/contact");
    }
    
    useEffect(() => {
        let pageNumber = 0;

        setTimeout(() => {
            coverRightRef.current?.classList.add("turn");
        }, 2100);
        setTimeout(() => {
            coverRightRef.current!.style.zIndex = '-1';
        }, 2800);

        const reverseIndex = (): void => {
            pageNumber--;
            if(pageNumber < 0){
                pageNumber = pages.length - 1;
            }
        }

    const removePageTurn = (ms:number) => {
        pages.forEach((_, index) => {
            setTimeout(() => {
            reverseIndex();
            if(pages[pageNumber]){
                pages[pageNumber].classList.remove("turn");
                setTimeout(() => {
                    reverseIndex();
                    pages[pageNumber].style.zIndex = (10 + index).toString();
                }, 500);
            }
            }, (index + 1) * 200 + ms);
        });          
    }

        
    
    
        removePageTurn(2100);

        profileRef.current!.onclick = () => {
            removePageTurn(100);
        };


  }, []);



  return (
    <div className='desktop-wrapper'>
      <motion.div 
      className="mobile-wrapper bg-amber-50"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}	 
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <Profile handleContactMeBtn={()=>handleContactPage()} />
      </motion.div>
      <div className="wrapper">
        <div className="cover cover-left"></div>
        <div className="cover cover-right" ref={coverRightRef}></div>

        <div className="book">
          <div className="book-page page-left">
            <Profile handleContactMeBtn={()=>handleContactMeBtn()} />
          </div>

          <div className="book-page page-right turn" id="turn-1" ref={(element: HTMLDivElement) => void (itemRefs.current[0] = element)}>
            {/* page 1 (work experience) */}
            <div className="page-front">
              <h1 className="title uppercase font-bold">Work Experience</h1>
              <div className="workeduc-box">
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
               

              </div>
              <span className="number-page">1</span>
              <span className="nextprev-btn" data-page="turn-1" onClick={() => handleNextPrevBtn("turn-1", 1)}>
                <i className="bx bx-chevron-right"></i>
              </span>
            </div>

            {/* page 2 (work experience) */}
            <div className="page-back">
              <h1 className="title uppercase font-bold">Work Experience Cont.</h1>
              <div className="workeduc-box">
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
              </div>
              <span className="number-page">2</span>
              <span className="nextprev-btn back" data-page="turn-1" onClick={() => handleNextPrevBtn("turn-1", 1)}>
                <i className="bx bx-chevron-left"></i>
              </span>
            </div>

          </div>

          {/* page 2 (education) */}
          <div className="book-page page-right turn" id="turn-2" ref={(element: HTMLDivElement) => void (itemRefs.current[1] = element)}>
            <div className="page-front">
              <Education onClick={() => handleNextPrevBtn("turn-2", 2)} />
            </div>

            {/* page 3 (short courses) */}
            <div className="page-back">
              <Course onClick={() => handleNextPrevBtn("turn-2", 2)} />
            </div>
          </div>

          {/* page 3 (skills) */}
          <div className="book-page page-right turn" id="turn-3" ref={(element: HTMLDivElement) => void (itemRefs.current[2] = element)}>
            <div className="page-front">
              <Skill onClick={() => handleNextPrevBtn("turn-3", 3)} />
            </div>

            {/* page 4 (contact me) */}
            <div className="page-back">
              <Contact onClick={() => handleNextPrevBtn("turn-3", 3)} ref={profileRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
