import { Title, SimpleGrid, Badge, Container } from '@mantine/core';
import classes from './SkillSection.module.css'; // Create this CSS file

const skills = {
  Languages: ['C#', 'JavaScript (TypeScript)', 'Python'],
  'Web Development': ['ASP.NET', 'HTML', 'CSS', 'MVC', 'React', 'Next.js', 'Bootstrap', 'jQuery', 'Tailwind CSS'],
  Databases: ['SQL (MSSQL, MySQL, PostgreSQL)', 'Progress Open Edge'],
  Tools: ['Git (version control)', 'Docker'],
  Infrastructure: ['Azure'],
  'CI/CD': ['Octopus', 'TeamCity', 'GitHub Actions'],
  'Soft Skills': ['Problem-Solving', 'Communication (Verbal & Written)', 'Team Collaboration', 'Adaptability (Agile Methodologies)'],
};

export function SkillsSection() {
  return (
    <Container size="xl" className={classes.skillsSection}>
      <Title order={2} className={classes.skillsTitle}>
        My Skills
      </Title>
      <SimpleGrid cols={2} spacing="xl" mt="xl">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <Title order={4} className={classes.skillsCategory}>
              {category}
            </Title>
            <div className={classes.skillsList}>
              {skillList.map((skill) => (
                <Badge key={skill} className={classes.skillsBadge}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
}