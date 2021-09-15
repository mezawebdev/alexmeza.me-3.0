import { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const path: any = req.query.path;
    
    fs.readFile(path, (err, data) => {
        if (!data) return res.status(404).end();
        return res.status(200).send(data);
    }); 
}