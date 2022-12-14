import { useEffect, useState } from "react";

const useAdmin = (email) =>{
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    
    useEffect(()=>{
            fetch(`https://boi-bazar-server-opal.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data =>{
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false)
            })
    }, [email])
    return[isAdmin, isAdminLoading]
}
export default useAdmin;