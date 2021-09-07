import type {NextApiRequest, NextApiResponse} from 'next'

import {getFont} from '../../../lib/fonts'

type Query = {
    font: string,
    text: string
}
type Response = string

// Otherwise, any UTF-8 encoded plaintext will be displayed weird by browsers.
function setPlaintextResponse<T>(res: NextApiResponse<T>): NextApiResponse<T> {
    return res.setHeader('Content-Type', 'text/html; charset=UTF-8')
}

const LIST_API_URL = "https://icanhazfonts.vercel.app/list"

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
    const {font: fontName, text} = req.query as Query
    const font = getFont(fontName)

    if (font === undefined) {
        res.status(404).send(`No such font found: '${fontName}'. For a list of fonts, you can curl: '${LIST_API_URL}'.`)
        return
    }

    const convertedText = font.converter(text)
    setPlaintextResponse(res).status(200).send(convertedText)
}
