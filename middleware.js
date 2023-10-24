import { NextResponse } from 'next/server'

export function middleware(request) {

    let token = request.cookies.has('token')
    
    if (!token && request.url.includes("/login")) return

    return NextResponse.redirect(new URL('/home', request.url))
}

export const config = {
    matcher: ["/", "/login"],
}