import Link from "next/link";
import { 
    Box, 
    Heading 
} from "@chakra-ui/react";

const boxStyle = {
    backgroundColor: '#111',
    textAlign: 'center',
}

const logoStyle = {
    fontSize: '1.2rem',
    fontWeight: '400',
    color: '#fff',
    padding: '1.5rem',
}

function Header() {
    return (
        <Box sx={boxStyle}>
            <Link href='/'>
                <Heading sx={logoStyle}>KOMABATTLE Encore</Heading>
            </Link>
        </Box>
    )
}

export { Header }
