import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { baseUrl } from '../../../utils/baseUrl';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {    
    if(req.method === "GET"){                
        const {id} = req.query

        const data = await axios.get(`${baseUrl}/profile/user/${id}`)

        res.json(data.data)
        
    }
}