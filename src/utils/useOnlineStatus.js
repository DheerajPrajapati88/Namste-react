import React, { useEffect, useState } from 'react'

function useOnlineStatus() {


    const [onlineStatus,SetOnlineStatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{




            SetOnlineStatus(false);

        })
        window.addEventListener("online",()=>{




            SetOnlineStatus(true);

        })
    },[])


  return onlineStatus
}

export default useOnlineStatus