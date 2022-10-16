import type { NextApiRequest, NextApiResponse } from 'next'

export async function getPlatformData() {
    const response = await fetch(`https://api.rawg.io/api/platforms?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`);
    const jsonData = await response.json();
    return jsonData.results;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const jsonData = await getPlatformData();
    const jsonData = [{},{}];
    res.status(200).json(jsonData);

}

export default handler;