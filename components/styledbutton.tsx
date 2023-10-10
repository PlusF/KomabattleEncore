import { Button } from '@chakra-ui/react';

const style = {
    background: '#ffffff', 
    color: '#000000',
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Noto Sans JP', 
    fontWeight: 400, 
    fontSize: {
        base: '1rem',
        md: '1.5rem'
    },
    width: {
        base: '100%',
        md: '20rem'
    },
    height: {
        base: '3rem',
        md: '4rem'
    },
    margin: {
        base: '0.5rem 0',
        md: '0.5rem'
    },
}

function StyledButton(props) {
    return (
        <Button
            sx={style}
            {...props}
        >
            {props.children}
        </Button>
    )
}

export { StyledButton };
