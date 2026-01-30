import styles from './resume.module.scss';

type BlockProps = {
  duration: string;
  responsibilities: string[];
  title: string;
};

const experiences: BlockProps[] = [
  {
    duration: 'Jan. 2024 - Present',
    title: 'Senior Software Engineer, Design System',
    responsibilities: [
      'Lead creation of React Storybook component library in collaboration with design team',
      'Create and maintain a series of reuseable components and tokens to be used across multiple consumer applications and product teams',
      'Utilize component library to refactor existing pages and components to improve web accessibility, performance, and design consistency',
      'Educate product teams on how to utilize the design system',
    ],
  },
  {
    duration: 'Aug. 2021 - Dec. 2023',
    title: 'Senior Software Engineer',
    responsibilities: [
      'Mentor junior and mid-level engineers daily through pair programming and code reviews to streamline internal workflow and foster team growth',
      'Lead feature breakdowns for new projects by defining technical requirements and generating time estimations to develop a robust backlog of work for sprints',
      'Guide and monitor the on-going implementation of Web Content Accessibility Guidelines (WCAG) in code base to guarantee accessible experiences for users',
    ],
  },
  {
    duration: 'Mar. 2019 - Aug. 2021',
    title: 'Software Engineer',
    responsibilities: [
      'Lead full lifecycle development of mobile-first client facing pages in Next.js application to serve users responsive and accessible experiences',
      'Collaborated across multiple teams including UI/UX, Product, QA, and Back-end engineers to plan, build and laucnh various client facing features',
      'Faciliatated the onboarding of new engineering staff by providing comprehensive walkthroughs, develoment environment and machine setup',
    ],
  },
  {
    duration: 'Jun. 2017 - Mar. 2019',
    title: 'Associate Software Engineer',
    responsibilities: [
      'Executed construction of mobile first responsive web pages using React with Redux',
      'Identified pain points in legacy Javascript codebase, and refacted code to be reusable, consistent and DRY',
      'Guided two interns every six months through pair programming, code reviews, and weekly check-ins',
    ],
  },
];

export function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <div className={styles.work}>
        <h2 className={styles.pageHeading}>Work Experience</h2>
        {experiences.map((experience, i) => (
          <Block key={i} {...experience} />
        ))}
        <h2 className={styles.pageHeading}>Skills</h2>
        <h3>Technical</h3>
        <ul>
          <li className={styles.item}>React</li>
          <li className={styles.item}>Typescript</li>
          <li className={styles.item}>Storybook</li>
        </ul>
        <h3>Non-Technical</h3>
        <ul>
          <li className={styles.item}>Project management</li>
          <li className={styles.item}>cross-team collaboration</li>
        </ul>
        <h2 className={styles.pageHeading}>Education</h2>
        <Block
          duration="May 2017"
          title="Northeastern University"
          responsibilities={['Bachelor of Science in Computer Science']}
        />
      </div>
    </>
  );
}

function Block({ duration, responsibilities, title }: BlockProps) {
  return (
    <div className={styles.test}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.duration}>{duration}</p>
      </div>
      <ul className={styles.list}>
        {responsibilities.map((responsibility, i) => (
          <li key={i} className={styles.item}>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}
