import { Text } from '@chakra-ui/react'

const cancelStyle = {
    fontSize: {
        base: '2rem',
        md: '3rem',
    },
    color: '#ff000088',
    position: 'absolute',
    top: {
        base: '0.5rem',
        md: '0.2rem',
    },
    left: {
        base: '3rem',
        md: '5rem',
    }
}

function Canceled() {
    return (
        <Text sx={cancelStyle}>Canceled</Text>
    )
}

export { Canceled }