import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const StyledExperience = styled("div")(({ theme }) => ({
    color: theme.palette.primary.contrastText,
}));


const projects: ProjectCardProps[] = [
   {
        title: "Title",
        srcImage: "/images/project-default.png",
        description: "This project was created to provide a practical and efficient solution for a specific problem, using modern development practices and technologies. It offers key features that allow users to interact intuitively, ensuring a smooth and responsive experience. The project is also scalable and easy to maintain, serving as a solid base for future improvements.",
        technologies: "React, JavaScript",
        websiteURL: "https://react.dev/",
        codeURL: "https://github.com/facebook/react"
    },
    {
        title: "Title",
        srcImage: "/images/project-default.png",
        description: "This project was created to provide a practical and efficient solution for a specific problem, using modern development practices and technologies. It offers key features that allow users to interact intuitively, ensuring a smooth and responsive experience. The project is also scalable and easy to maintain, serving as a solid base for future improvements.",
        technologies: "React, JavaScript",
        websiteURL: "https://react.dev/",
        codeURL: "https://github.com/facebook/react"
    },
];



const ProjectsSection: React.FC = () => {
    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary">My Projects</Typography>
                </Box>
                <Grid container spacing={5} justifyContent="center" pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{ md: 6 }}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    srcImage={project.srcImage}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
};

export default ProjectsSection;
