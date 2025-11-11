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
    background: `linear-gradient(60deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 40%, ${theme.palette.secondary.main} 120%)`,
    color: theme.palette.primary.contrastText,
    padding: "20px",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "450px",
    "&:hover": {
      transform: "translateY(-6px) scale(1.01)",
      boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
      borderColor: theme.palette.secondary.light,
    },
  }));

  const DescriptionBox = styled(Box)(({ theme }) => ({
    height: "70px",
    overflowY: "auto",
    marginTop: theme.spacing(1),
    paddingRight: "6px",
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

      <Typography fontWeight={600} mt={1}>
        Technologies: {technologies}
      </Typography>

      <Grid container spacing={1} pt={1}>
        <Grid size={{ xs: 6 }}>
          <StyledButton
            onClick={() => window.open(websiteURL, "_blank")}>
            {hasLivePreview ? "View Project" : "View Images"}
          </StyledButton>
        </Grid>
        <Grid size={{ xs: 6 }}>
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
