import { GoogleApis, google } from 'googleapis';
import { Content } from './content';

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

export const getContents = async (): Promise<Content[]> => {
  const sheets = getSheets();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'entrylist',
  });
  const rows = response.data.values;
  if (rows) {
    return rows.slice(1).map((row): Content => {
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
  return [];
};
