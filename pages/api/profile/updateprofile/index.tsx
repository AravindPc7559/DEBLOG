import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { baseUrl } from '../../../utils/baseUrl';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {    
    if(req.method === "PUT"){                
        console.log(req.body);
       
        const data = await axios.put(`${baseUrl}/profile/user/update`, req.body)

        res.json(data.data)
        
    }
}