
import { getContents } from '../lib/spreadsheet';
import { Content } from '../lib/content';
import { FlexContainer, EntryCard } from '../components/entries';

export default function EntryList({ dancers }: { dancers: Content[] }) {
    return (
        <FlexContainer>
            {dancers.map((dancer) => (
                <EntryCard key={dancer.name} dancer={dancer} />
            ))}
        </FlexContainer>
    );
}

export async function getStaticProps() {
    const dancers = await getContents();
    return {
      props: { dancers },
      revalidate: 3600,
    };
}
