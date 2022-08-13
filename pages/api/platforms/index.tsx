import type { NextApiRequest, NextApiResponse } from 'next'

export async function getPlatformData() {
    const response = await fetch(`https://api.rawg.io/api/platforms?key=9abaeff8bd85491fb09a184b1aaf4ff4`);
    const jsonData = await response.json();
    return jsonData.results;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const jsonData = await getPlatformData();
    const jsonData = [{},{}];
    res.status(200).json(jsonData);

}

export default handler;