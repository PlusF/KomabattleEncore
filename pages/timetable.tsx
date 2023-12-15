import Link from "next/link";
import { Heading, Container, HStack, Divider } from "@chakra-ui/react";
import { getTimeTable } from "../lib/spreadsheet";
import { Content } from "../lib/dancer";
import { TimeCard } from "../components/timecard";


export default function TimeTable({timetable}: {timetable: Content[]}) {
    return (
        <>
            <Heading>
                Time Table
            </Heading>
            <Container>
                {timetable.map((content, i) => (
                    <>
                        {i !== 0 && <Divider />}
                        <HStack key={i}>
                            <TimeCard content={content} />
                        </HStack>
                    </>
                ))}
            </Container>
            <Link href="/">&larr; Go Back</Link>
        </>
    )
}


export async function getStaticProps() {
    const timetable = await getTimeTable();
    return {
        props: timetable ? {timetable } : null,
        revalidate: 10,
    };
}