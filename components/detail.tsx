import { Text, VStack } from "@chakra-ui/react"

const vstackStyle = {
    fontSize: '0.9rem',
    textAlign: 'center',
    padding: '1rem'
}

function Detail() {
    return (
        <VStack sx={vstackStyle}>
            <Text>
                12/16 16:30 ~ 20:30
            </Text>
            <Text>
                ノア学芸大学スタジオ 7st
            </Text>
            <Text>
                1on1 フルトーナメント
            </Text>
        </VStack>
    )
}

export { Detail }
