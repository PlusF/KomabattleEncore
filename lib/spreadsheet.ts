import { GoogleApis, google } from 'googleapis';
import { Dancer, Battle, DancerName } from './dancer';

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
    try {
        const sheets = getSheets();
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'battle',
        });
        const rows = response.data.values;
        let first = [];
        let second = [];
        let third = [];
        let quarter = [];
        let semi = [];
        let final = [];
        let winner = [];
        if (rows) {
            rows.forEach((row, i) => {
                if (i === 0) {
                    return;
                }
                const dn: DancerName = { name: row[0] };
                if (i <= 1) {
                    winner.push(dn);
                }
                if (i <= 2) {
                    final.push(dn);
                }
                if (i <= 4) {
                    semi.push(dn);
                }
                if (i <= 8) {
                    quarter.push(dn);
                }
                if (i <= 16) {
                    third.push(dn);
                }
                if (i <= 32) {
                    second.push(dn);
                }
                if (i <= 64) {
                    first.push(dn);
                }
            });
            return {
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
        first: [],
        second: [],
        third: [],
        quarter: [],
        semi: [],
        final: [],
        winner: [],
    };
};
