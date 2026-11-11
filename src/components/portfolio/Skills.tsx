import SpringBootIcon from '@/assets/icons/spring-boot.svg'
import LaravelIcon from '@/assets/icons/laravel.svg'
import ExpressIcon from '@/assets/icons/express.svg'
import NestjsIcon from '@/assets/icons/nestjs.svg'
import AnsibleIcon from '@/assets/icons/ansible.svg'
import TerraformIcon from '@/assets/icons/terraform.svg'
import ReactIcon from '@/assets/icons/react.svg'
import VueIcon from '@/assets/icons/vue.svg'
import RabbitmqIcon from '@/assets/icons/rabbitmq.svg'
import RedisIcon from '@/assets/icons/redis.svg'
import DockerIcon from '@/assets/icons/docker.svg'
import KubernetesIcon from '@/assets/icons/kubernetes.svg'
import JenkinsIcon from '@/assets/icons/jenkins.svg'
import SonatypeIcon from '@/assets/icons/sonatype.svg'
import GitlabIcon from '@/assets/icons/gitlab.svg'
import GitIcon from '@/assets/icons/git.svg'
import NginxIcon from '@/assets/icons/nginx.svg'
import HarborIcon from '@/assets/icons/harbor.svg'
import SonarqubeIcon from '@/assets/icons/sonarqube.svg'
import LinuxIcon from '@/assets/icons/linux.svg'
import OwaspIcon from '@/assets/icons/owasp.svg'
import ElasticsearchIcon from '@/assets/icons/elasticsearch.svg'

const groups = [
  { title: 'Backend & APIs', icon: 'bx-code-alt', tools: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'Node.js', 'ExpressJS', 'NestJS', 'Python', 'Flask'] },
  { title: 'Frontend & Mobile', icon: 'bx-desktop', tools: ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Angular', 'Tailwind CSS', 'Flutter', 'Dart'] },
  { title: 'DevOps & CI/CD', icon: 'bx-git-branch', tools: ['Git', 'GitLab', 'Jenkins', 'Docker', 'Harbor', 'Nexus', 'Kubernetes', 'Nginx'] },
  { title: 'Automation & Security', icon: 'bx-shield-quarter', tools: ['Ansible', 'Terraform', 'Linux', 'SonarQube'] },
  { title: 'Databases & Messaging', icon: 'bx-data', tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Firebase', 'Redis', 'RabbitMQ'] },
  { title: 'Delivery & Design', icon: 'bx-layer', tools: ['Agile Scrum', 'Jira', 'ClickUp', 'Figma', 'Webflow'] },
]

const snapshot = [
  { name: 'Spring Boot', src: SpringBootIcon },
  { name: 'Laravel', src: LaravelIcon },
  { name: 'ExpressJS', src: ExpressIcon },
  { name: 'NestJS', src: NestjsIcon },
  { name: 'Ansible', src: AnsibleIcon },
  { name: 'Terraform', src: TerraformIcon },
  { name: 'React', src: ReactIcon },
  { name: 'Vue.js', src: VueIcon },
  { name: 'RabbitMQ', src: RabbitmqIcon },
  { name: 'Redis', src: RedisIcon },
  { name: 'Docker', src: DockerIcon },
  { name: 'Kubernetes', src: KubernetesIcon },
  { name: 'Jenkins', src: JenkinsIcon },
  { name: 'Nexus', src: SonatypeIcon },
  { name: 'GitLab', src: GitlabIcon },
  { name: 'Git', src: GitIcon },
  { name: 'Nginx', src: NginxIcon },
  { name: 'Harbor', src: HarborIcon },
  { name: 'SonarQube', src: SonarqubeIcon },
  { name: 'OWASP', src: OwaspIcon },
  { name: 'Elasticsearch', src: ElasticsearchIcon },
  { name: 'Linux', src: LinuxIcon },
]

export default function Skills() {

  return (
    <section id="skills" className="portfolio-wrap portfolio-skills" aria-labelledby="skills-title">
      <p className="portfolio-kicker">Technical skills</p>
      <h2 className="portfolio-section-title" id="skills-title">Skills & technologies</h2>
      <div className="portfolio-skill-grid">
        {groups.map(({ title, icon, tools }) => (
          <article className="portfolio-skill-card" key={title}>
            <h3><i className={`bx ${icon}`} aria-hidden="true" /> {title}</h3>
            <ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </article>
        ))}
      </div>
      <h3 className="portfolio-kicker portfolio-snapshot-title">Technology Snapshot</h3>
      <ul className="portfolio-snapshot">
        {snapshot.map(({ name, src }) => (
          <li key={name}>
            <img src={src} className="snapshot-icon" aria-hidden="true" alt={name} />
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}