// api/password-protect.ts
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from 'cookie';
export default async function handler(req: NextApiRequest, res:NextApiResponse){
    if(req.method !== "POST"){
        res.status(405).send("Method Not Allowed")
    }
    const password = req.body.password;
    if(process.env.PASSWORD_PROTECT === password){
        const cookie = serialize('login', 'true', {
            path: '/',
            httpOnly: true
        })
        res.setHeader('Set-Cookie', cookie)
        res.redirect(302, '/AdminPanel')
    } else {
        const url = new URL("/AdminPanelLogin", req.headers["origin"])
        url.searchParams.append("error", "Incorrect Password")
        res.redirect(url.toString())
    }
}