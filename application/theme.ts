import theme from 'styled-theming';

const basicTheme = {
    text: '#919aaa',
    buttonText: '#FFFFFF',
    borderRadius: '25px',
    fontWeight: 'bold',
}

export const lightTheme = {
    background: '#FFFFFF',
    secondary: '#f9fafb',
    buttonBackground: '#2196F3',
    border: '3px solid #dcdfe4',
    ...basicTheme
};

export const darkTheme = {
    primary: '#181c23',
    secondary: '#212833',
    buttonBackground: '#1E90FF',
    border: '3px solid #959eae',
    ...basicTheme
};