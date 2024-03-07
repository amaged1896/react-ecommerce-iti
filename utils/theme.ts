import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        // Use the system font over Roboto.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h5: {
            fontSize: '1.5rem',
            '@media (max-width:600px)': {
                fontSize: '1.2rem',
            },
        },
        // Add more custom responsive typography as needed
    },
});

export default theme;
