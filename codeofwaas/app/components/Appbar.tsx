
"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Primarybutton } from "./Primarybutton"

export const Appbar = () =>{
    const session = useSession()
    return <div className="border-b px-2 py-2 flex justify-between">
        <div>
            DCEX
        </div>
        <div>
            {session.data?.user ? <Primarybutton onclick={ () =>{
                  signOut()
            }
            }>Logout</Primarybutton> : <Primarybutton onclick={() =>{
                signIn()
            }
            }> Signin</Primarybutton>}
        </div>
    </div>
}