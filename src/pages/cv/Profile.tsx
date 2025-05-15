
import '../../assets/css/profile.css';
interface ProfileProps {
    handleContactMeBtn?: () => void;
}
function Profile({handleContactMeBtn}: ProfileProps) {
    return <>
        <div className="profile-page flex flex-col items-center justify-center h-screen md:h-auto">
            <img src="/my_profile.jpg" alt="My profile" className='max-w-[180px] rounded-full border-[0.25rem] border-[var(--main-color)] mb-[0.8rem]' />
            <h1 className='text-[2rem] leading-[1]'>CHEA Rasmey</h1>
            <h3 className='text-[1.5rem] text-[var(--main-color)]'>Web Development Manager</h3>

            <div className="mx-[.8rem] my-[.6rem] social-icon">
                <a href="https://www.facebook.com/chearasmey.yt" target="_blank"><i className="bx bxl-facebook"></i></a>
                <a href="https://t.me/chearasmey" target="_blank"><i className="bx bxl-telegram"></i></a>
                <a href="https://x.com/chearasmey" target="_blank"><i className="bx bxl-twitter"></i></a>
                <a href="https://linkedin.com/in/chearasmey" target="_blank"><i className="bx bxl-linkedin"></i></a>
                <a href="https://www.instagram.com/dr.chearasmey" target="_blank"><i className="bx bxl-instagram-alt"></i></a>
            </div>

            <p className="px-3 lg:px-0 text-justify">I have been developing systems since 2017, specializing in both backend and frontend development across various industries, including TV, solutions, and banking. My experience includes serving as a team lead and acting as a project manager. I hold a bachelor's degree and am currently pursuing a master's degree in computer science.</p>

            <div className="mt-[1.2rem] flex">
                <a href="/cv_11082024.pdf" className="btn">Download CV</a>
                <a href="#" className="btn contact-me" onClick={handleContactMeBtn}>Contact Me</a>
            </div>
        </div>
    </>
}

export default Profile;