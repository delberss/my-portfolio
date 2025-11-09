import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const StyledExperience = styled("div")(({ theme }) => ({
    color: theme.palette.primary.contrastText,
}));


const projects: ProjectCardProps[] = [
    {
        title: "My Portfolio",
        srcImage: "/images/preview.png",
        description: "A modern and responsive portfolio built with React, TypeScript, and Material UI, showcasing my projects, skills, and contact information.",
        technologies: "React, TypeScript, Material UI",
        websiteURL: "https://delber-portfolio.vercel.app/",
        codeURL: "https://github.com/delberss/my-portfolio",
        hasLivePreview: true,
    },
    {
        title: "Cinema Cidade",
        srcImage: "/images/cinema.png",
        description: "A modern and responsive platform for selling movie tickets, developed with React, TypeScript, Zustand, and Material UI.",
        technologies: "React, TypeScript, Zustand, Material UI",
        websiteURL: "https://cinema-delberss.vercel.app/",
        codeURL: "https://github.com/delberss/cinema",
        hasLivePreview: true,
    },
    {
        title: "Marketplace - DSS Store",
        srcImage: "/images/dss-store.png",
        description: "A modern marketplace frontend built with React, featuring user registration, product listing, cart management with Zustand, and a seamless checkout process with contact, shipping details, and Stripe credit card payments.",
        technologies: "React, TypeScript, Node, Express, Stripe API, Zustand",
        websiteURL: "https://github.com/delberss/marketplace/blob/master/README.md",
        codeURL: "https://github.com/delberss/marketplace",
        hasLivePreview: false
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
                                    hasLivePreview={project.hasLivePreview}
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
