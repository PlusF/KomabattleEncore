import {
    Box,
    Text,
    IconButton,
} from '@chakra-ui/react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiInstagram } from 'react-icons/fi';
import { BsLine } from 'react-icons/bs';

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

function openInstagram() {
    window.open('https://www.instagram.com/rol_rlasic/?igshid=YTQwZjQ0Nml0OA==&utm_source=qr');
}

function openLine() {
    window.open('https://line.me/ti/p/GSEmxpF2tu');
}

function sendMail() {
    window.open('mailto:rkaneda896@gmail.com');
}

export default function Footer() {
    return (
        <Box sx={boxStyle}>
            <Text>
                Contact &rarr;
                <IconButton
                    colorScheme='black'
                    aria-label="Open Instagram"
                    icon={<FiInstagram />}
                    onClick={openInstagram}
                />
                <IconButton
                    colorScheme='black'
                    aria-label="Open Line"
                    icon={<BsLine />}
                    onClick={openLine}
                />
                <IconButton
                    colorScheme='black'
                    aria-label="Send mail"
                    icon={<HiOutlineMail />}
                    onClick={sendMail}
                />
            </Text>
        </Box>
    );
}
