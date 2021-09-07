import type {NextApiRequest, NextApiResponse} from 'next'

import {fontKeys} from '../../lib/fonts'

type Response = string

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
    res.status(200).send(fontKeys.join("\n"))
}
