import { AppBar, IconButton, MenuItem, Toolbar, Box, Menu, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function NavBar() {

    const StyledToolBar = styled(Toolbar)(({ }) => ({
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }))

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = ["About", "Skills", "Projects"];
    return (
        <AppBar position="absolute" >
            <StyledToolBar variant="dense">
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        PaperProps={{
                            sx: {
                                left: 'unset !important',
                                right: '16px',
                            },
                        }}
                    >
                        {menuItems.map((item) => (
                            <MenuItem key={item} onClick={handleMenuClose}>
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>

                </Box>

            </StyledToolBar>
        </AppBar>
    );
}
