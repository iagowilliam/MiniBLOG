import { getAuth, createUserWithEmailAndPassoword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth"

import { useState, useEffect } from "react"

export const useAuthentication = () => {
    
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak - lidar com vazamento de memória
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled) {
            return
        }
    }

    
}