import { motion } from "framer-motion";
function Contact({onClick, ref}: {onClick: (e: React.MouseEvent<HTMLSpanElement>) => void, ref: React.RefObject<HTMLSpanElement|null>}) {
    return <>
        <motion.div className="block md:hidden bg-amber-50 mb-[50px] pb-3 h-screen"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}	 
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <h1 className="uppercase font-bold text-xl text-center py-3">Contact Me</h1>
            <div className="woreduc-box mt-6">
                <div className="workeduc-content w-[300px] m-auto">
                    <div className="flex gap-3 mb-3 border-dotted border-0 border-b-2 border-gray-500">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m18.02,14.73c-.4.64-.84,1.23-1.27,1.76,2.13.48,3.25,1.19,3.25,1.51,0,.51-2.75,2-8,2s-8-1.49-8-2c0-.32,1.12-1.03,3.25-1.51-.43-.53-.86-1.12-1.27-1.76-2.32.64-3.98,1.71-3.98,3.27,0,2.75,5.18,4,10,4s10-1.25,10-4c0-1.56-1.67-2.63-3.98-3.27Z"></path><path d="m6,8.44c-.02,5.1,5.17,9.18,5.39,9.35.18.14.4.21.61.21s.43-.07.61-.21c.22-.17,5.41-4.25,5.39-9.35,0-3.55-2.69-6.44-6-6.44s-6,2.89-6,6.44Zm8-.44c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Z"></path>
                            </svg>
                        </div>
                        <div>St. 45BTz, Sansam Kosal 6, Sangkat Beong Tumpun I, Khan Meanchey, Phnom Pen</div>
                    </div>
                    <div className="flex gap-3 mb-3 border-dotted border-0 border-b-2 border-gray-500">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M18.41 22h.37c.31-.01.6-.17.78-.43l2.27-3.27c.15-.22.21-.49.16-.76a1 1 0 0 0-.43-.65l-4.91-3.27c-.41-.27-.96-.21-1.29.15l-1.88 2.03c-.76-.45-2.03-1.26-3.03-2.26s-1.81-2.27-2.26-3.02l2.03-1.88c.36-.33.43-.88.15-1.29L7.1 2.44c-.15-.22-.38-.38-.64-.43-.27-.05-.54 0-.76.16L2.43 4.43c-.26.18-.42.47-.43.78-.03.71-.16 7.04 4.79 11.98 4.46 4.46 10.04 4.8 11.62 4.8Z"></path>
                            </svg>
                        </div>
                        <div>+855 963531310</div>
                    </div>
                    <div className="flex gap-3 mb-3 border-dotted border-0 border-b-2 border-gray-500">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m20,4H4c-1.1,0-2,.9-2,2v.25l10,7.5,10-7.5v-.25c0-1.1-.9-2-2-2Z"></path><path d="m21.93,18.51c.04-.16.07-.33.07-.51v-9.25l-5.62,4.22,5.55,5.55Z"></path><path d="m12.6,15.8c-.18.13-.39.2-.6.2s-.42-.07-.6-.2l-2.16-1.62-5.75,5.75c.16.04.33.07.51.07h16c.18,0,.35-.03.51-.07l-5.75-5.75-2.16,1.62Z"></path><path d="m2,8.75v9.25c0,.18.03.35.07.51l5.55-5.55-5.62-4.22Z"></path>
                            </svg>
                        </div>
                        <div>chearasmey@yahoo.com</div>
                    </div>
                    <div className="flex gap-3 mb-3 border-dotted border-0 border-b-2 border-gray-500">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M8.53 2.63C5.03 3.93 2.44 7.14 2.05 11h4.21c.11-3.01.89-5.89 2.26-8.37ZM15.97 11c-.19-4.14-1.97-7.25-3.25-8.96-.24-.02-.48-.04-.73-.04s-.47.02-.71.04C9.44 4.52 8.38 7.66 8.25 11h7.71ZM15.52 2.65A18.14 18.14 0 0 1 17.98 11h3.97c-.38-3.84-2.95-7.03-6.43-8.35M15.65 21.3c3.42-1.34 5.93-4.51 6.3-8.3h-3.99c-.18 3.12-.97 5.96-2.32 8.3ZM2.05 13c.38 3.81 2.91 6.99 6.35 8.32-1.26-2.27-1.97-5.09-2.13-8.32zM8.28 13c.19 3.74 1.21 6.8 2.99 8.96.24.02.49.04.74.04s.5-.02.75-.04c1.88-2.26 3-5.39 3.22-8.96H8.29Z"></path>
                            </svg>
                        </div>
                        <div>www.chearasmey.github.io</div>
                    </div>
                    
                    <div className="flex flex-col items-center mt-6">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"gray"} viewBox="0 0 24 24">
                                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                            </svg>
                        </div>
                        <h1 className="uppercase text-sky-400">Monday Through Friday</h1>
                        <p>From 9:00 PM to 7:00 PM</p>
                        <div className="w-[100px] h-[2px] bg-gray-400 mt-3"></div>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className="hidden md:block">
            <h1 className="title uppercase font-bold text-3xl">Contact Me</h1>
            <div className="woreduc-box mt-6">
                <div className="workeduc-content w-[300px] m-auto">
                    <div className="flex gap-3 mb-3 border-dotted border-0 border-b-2 border-gray-500">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m18.02,14.73c-.4.64-.84,1.23-1.27,1.76,2.13.48,3.25,1.19,3.25,1.51,0,.51-2.75,2-8,2s-8-1.49-8-2c0-.32,1.12-1.03,3.25-1.51-.43-.53-.86-1.12-1.27-1.76-2.32.64-3.98,1.71-3.98,3.27,0,2.75,5.18,4,10,4s10-1.25,10-4c0-1.56-1.67-2.63-3.98-3.27Z"></path><path d="m6,8.44c-.02,5.1,5.17,9.18,5.39,9.35.18.14.4.21.61.21s.43-.07.61-.21c.22-.17,5.41-4.25,5.39-9.35,0-3.55-2.69-6.44-6-6.44s-6,2.89-6,6.44Zm8-.44c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Z"></path>
                            </svg>
                        </div>
                        <div>St. 45BTz, Sansam Kosal 6, Sangkat Beong Tumpun I, Khan Meanchey, Phnom Pen</div>
                    </div>
                    <div className="flex gap-3 mb-3 border-dotted border-0 border-b-2 border-gray-500">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M18.41 22h.37c.31-.01.6-.17.78-.43l2.27-3.27c.15-.22.21-.49.16-.76a1 1 0 0 0-.43-.65l-4.91-3.27c-.41-.27-.96-.21-1.29.15l-1.88 2.03c-.76-.45-2.03-1.26-3.03-2.26s-1.81-2.27-2.26-3.02l2.03-1.88c.36-.33.43-.88.15-1.29L7.1 2.44c-.15-.22-.38-.38-.64-.43-.27-.05-.54 0-.76.16L2.43 4.43c-.26.18-.42.47-.43.78-.03.71-.16 7.04 4.79 11.98 4.46 4.46 10.04 4.8 11.62 4.8Z"></path>
                            </svg>
                        </div>
                        <div>+855 963531310</div>
                    </div>
                    <div className="flex gap-3 mb-3 border-dotted border-0 border-b-2 border-gray-500">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m20,4H4c-1.1,0-2,.9-2,2v.25l10,7.5,10-7.5v-.25c0-1.1-.9-2-2-2Z"></path><path d="m21.93,18.51c.04-.16.07-.33.07-.51v-9.25l-5.62,4.22,5.55,5.55Z"></path><path d="m12.6,15.8c-.18.13-.39.2-.6.2s-.42-.07-.6-.2l-2.16-1.62-5.75,5.75c.16.04.33.07.51.07h16c.18,0,.35-.03.51-.07l-5.75-5.75-2.16,1.62Z"></path><path d="m2,8.75v9.25c0,.18.03.35.07.51l5.55-5.55-5.62-4.22Z"></path>
                            </svg>
                        </div>
                        <div>chearasmey@yahoo.com</div>
                    </div>
                    <div className="flex gap-3 mb-3 border-dotted border-0 border-b-2 border-gray-500">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M8.53 2.63C5.03 3.93 2.44 7.14 2.05 11h4.21c.11-3.01.89-5.89 2.26-8.37ZM15.97 11c-.19-4.14-1.97-7.25-3.25-8.96-.24-.02-.48-.04-.73-.04s-.47.02-.71.04C9.44 4.52 8.38 7.66 8.25 11h7.71ZM15.52 2.65A18.14 18.14 0 0 1 17.98 11h3.97c-.38-3.84-2.95-7.03-6.43-8.35M15.65 21.3c3.42-1.34 5.93-4.51 6.3-8.3h-3.99c-.18 3.12-.97 5.96-2.32 8.3ZM2.05 13c.38 3.81 2.91 6.99 6.35 8.32-1.26-2.27-1.97-5.09-2.13-8.32zM8.28 13c.19 3.74 1.21 6.8 2.99 8.96.24.02.49.04.74.04s.5-.02.75-.04c1.88-2.26 3-5.39 3.22-8.96H8.29Z"></path>
                            </svg>
                        </div>
                        <div>www.chearasmey.github.io</div>
                    </div>
                    
                    <div className="flex flex-col items-center mt-6">
                        <div>
                            <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"gray"} viewBox="0 0 24 24">
                                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                            </svg>
                        </div>
                        <h1 className="uppercase text-sky-400">Monday Through Friday</h1>
                        <p>From 9:00 PM to 7:00 PM</p>
                        <div className="w-[100px] h-[2px] bg-gray-400 mt-3"></div>
                    </div>
                </div>
            </div>
            <span className="number-page">6</span>
            <span className="nextprev-btn back" data-page="turn-3" onClick={onClick}>
                <i className="bx bx-chevron-left"></i>
            </span>
            <span className="profile-back" ref={ref}>
                <i className="bx bxs-user-rectangle"></i>
            </span>
        </div>
    </>
}

export default Contact;