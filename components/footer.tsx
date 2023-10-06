import {
    Box,
    Text,
} from '@chakra-ui/react';

const boxStyle = {
    backgroundColor: '#111',
    color: '#fff',
    textAlign: 'center',
    fontSize: {
        base: '0.6rem',
        md: '1rem'
    },
    padding: '0.8rem',
    margin: '3rem 0 0 0 ',
}

export default function Footer() {
    return (
        <Box sx={boxStyle}>
            <Text>
                Contact:<a href='mailto: rkaneda896@gmail.com' style={{marginLeft: '0.25rem'}}>rkaneda896@gmail.com</a>
            </Text>
        </Box>
    );
}
