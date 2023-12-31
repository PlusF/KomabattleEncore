import { GoogleApis, google } from 'googleapis';
import { Dancer, Battle, DancerName, Content } from './dancer';

const getSheets = () => {
    const googleapis = new GoogleApis();
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new googleapis.auth.JWT(
        process.env.EMAIL,
        undefined,
        (process.env.API_KEY || '').replace(/\\n/g, '\n'),
        scopes
    );
    return google.sheets({ version: 'v4', auth: jwt });
};

export const getEntryList = async (): Promise<Dancer[]> => {
    try {
        const sheets = getSheets();
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'entrylist',
        });
        const rows = response.data.values;
        if (rows) {
            return rows.slice(1).map((row): Dancer => {
                return {
                    circle: row[1],
                    grade: row[2],
                    genre: row[3],
                    name: row[4],
                    rep: row[5],
                    canceled: Boolean(row[6]),
                };
            });
        }
    } catch (err) {
        console.error(err);
    }
    return [];
};

export const getBattle = async (): Promise<Battle> => {
    let first = new Array<DancerName>(64).fill({ name: '' });
    let second = new Array<DancerName>(32).fill({ name: '' });
    let third = new Array<DancerName>(16).fill({ name: '' });
    let quarter = new Array<DancerName>(8).fill({ name: '' });
    let semi = new Array<DancerName>(4).fill({ name: '' });
    let final = new Array<DancerName>(2).fill({ name: '' });
    let winner = new Array<DancerName>(1).fill({ name: '' });
    try {
        const sheets = getSheets();
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'battle',
        });
        const rows = response.data.values;
        const mode = rows ? Number(rows[1][7]) : 64;
        if (rows) {
            rows.forEach((row, i) => {
                if (i === 0) {
                    return;
                }
                if (i <= 1) {
                    winner[i - 1] = { name: row[6] };
                }
                if (i <= 2) {
                    final[i - 1] = { name: row[5] };
                }
                if (i <= 4) {
                    semi[i - 1] = { name: row[4] };
                }
                if (i <= 8) {
                    quarter[i - 1] = { name: row[3] };
                }
                if (i <= 16) {
                    third[i - 1] = { name: row[2] };
                }
                if (i <= 32) {
                    second[i - 1] = { name: row[1] };
                }
                if (i <= 64) {
                    first[i - 1] = { name: row[0] };
                }
            });
            return {
                mode: mode,
                first: first,
                second: second,
                third: third,
                quarter: quarter,
                semi: semi,
                final: final,
                winner: winner,
            };
        } 
    } catch (err) {
        console.error(err);
    }
    return {
        mode: 64,
        first: first,
        second: second,
        third: third,
        quarter: quarter,
        semi: semi,
        final: final,
        winner: winner,
    };
};

export const getTimeTable = async (): Promise<Content[]> => {
    try {
        const sheets = getSheets();
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'timetable',
        });
        const rows = response.data.values;
        if (rows) {
            return rows.slice(1).map((row): Content => {
                return {
                    time: row[0],
                    name: row[1],
                    description: row[2],
                };
            });
        }
    } catch (err) {
        console.error(err);
    }
    return [];
};
