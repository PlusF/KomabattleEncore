import { 
    Text, 
    VStack 
} from "@chakra-ui/react";

const vstackStyle = {
    fontSize: {
        base: '0.8rem',
        md: '1.2rem',
    },
    textAlign: 'center',
    padding: '1.2rem'
}

function Description() {
    return (
        <VStack sx={vstackStyle} spacing='0.4rem'>
            <Text>
                毎年11月、駒場祭の季節に開催される「KOMABATTLE」。
            </Text>
            <Text>
                2023年はOBG Edition 「KOMABATTLE Encore」を開催します。
            </Text>
            <Text>
                現役からOBGまで、WISHかBOILEDに所属している/していた方なら誰でもエントリー可能。
            </Text>
            <Text>
                広い世代からのエントリーをお待ちしています。
            </Text>
        </VStack>
    )
}

export { Description }
