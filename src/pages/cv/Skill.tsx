import Chips from "../../components/Chips";
import {motion} from "framer-motion";
function Skill({onClick}: {onClick: (e: React.MouseEvent<HTMLSpanElement>) => void}) {
    const otherTools = ["Git", "SonarQube", "Linx", "Docker", "Nginx", "Jenkins", "Kubernetes", "Terraform", "Ansible", "Figma", "Webflow"];
    const projectManagementTools = ["Jira Software", "ClicUp Software", "Agile Scrum"];
    const programmingLanguages = ["HTML", "CSS", "SASS", "JavaScript", "TypeScript", "PHP", "Java", "Node", "Python", "Dart", ];
    const frameworks = ["Spring Boot", "Flutter", "ExpressJS", "NestJS", "Laravel", "Flask", "VueJS", "ReactJS", "AngularJS", "Bootstrap", "TailwindCSS", "MaterialUI", "Redis", "RabbitMQ",];	
    const databases = ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Firebase"];
    return <>
        <motion.div className="block md:hidden bg-amber-50 mb-[50px] pb-3 h-screen"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}	 
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            <h1 className="uppercase font-bold text-xl text-center py-3">Skill</h1>
            <div className="mx-3 md:mx-3">
                <Chips title="Project Management Tools" names={projectManagementTools} className="bg-blue-300" />
                <br />
                <Chips title="Programming" names={programmingLanguages} className="bg-blue-300" />
                <br />
                <Chips title="Frameworks" names={frameworks} className="bg-blue-300" />
                <br />
                <Chips title="Databases" names={databases} className="bg-blue-300" />

                <br />
                <Chips title="Others" names={otherTools} className="bg-blue-300" />
            </div>
        </motion.div>
        <div className="hidden md:block">
            <h1 className="title uppercase font-bold">Skills</h1>
            <div className="woreduc-box">
                <Chips title="Project Management Tools" names={projectManagementTools} className="bg-blue-300" />
                <br />
                <Chips title="Programming" names={programmingLanguages} className="bg-blue-300" />
                <br />
                <Chips title="Frameworks" names={frameworks} className="bg-blue-300" />
                <br />
                <Chips title="Databases" names={databases} className="bg-blue-300" />

                <br />
                <Chips title="Others" names={otherTools} className="bg-blue-300" />
            </div>
            <span className="number-page">5</span>
            <span className="nextprev-btn" data-page="turn-3" onClick={onClick}>
                <i className="bx bx-chevron-right"></i>
            </span>
        </div>
    </>
}

export default Skill;