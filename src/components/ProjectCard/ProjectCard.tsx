import { Box, Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
  title: string;
  srcImage: string;
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL: string;
  hasLivePreview?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  srcImage,
  description,
  technologies,
  websiteURL,
  codeURL,
  hasLivePreview,
}) => {
  const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    objectFit: "contain",
    height: "200px",
    padding: "10px 0",
    [theme.breakpoints.up("md")]: {
      height: "220px",
    },
  }));

  const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "12px",
    border: `1px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "20px",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "80vh",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      transform: "translateY(-4px)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
    },
  }));

  const DescriptionBox = styled(Box)(({ theme }) => ({
    maxHeight: "100px",
    overflowY: "auto",
    paddingRight: "5px",
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.palette.secondary.main} ${theme.palette.primary.main}`,
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "6px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  return (
    <StyledCard>
      <Box>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <StyledImg src={srcImage} />
        <DescriptionBox>
          <Typography variant="body2">{description}</Typography>
        </DescriptionBox>
      </Box>

      <Typography fontWeight={600} pt={1} pb={1}>
        Technologies: {technologies}
      </Typography>

      <Grid container spacing={1} pt={1}>
        <Grid size={{xs:6}}>
          <StyledButton 
              onClick={() => window.open(websiteURL, "_blank")}>
              {hasLivePreview ? "View Project" : "View Images"}
          </StyledButton>
        </Grid>
        <Grid size={{xs:6}}>
          <StyledButton
            onClick={() => window.open(codeURL)}
            backgroundColorButtonProject={"white"}
          >
            View Code
          </StyledButton>
        </Grid>
      </Grid>
    </StyledCard>
  );

};

export default ProjectCard;
