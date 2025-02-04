export const variants = {
hidden:{x:-40,opacity:0},
visible:(i)=>({
    x:0,
    opacity:1,
    transition:{
        delay: i * 10, duration: 1, ease:"easeOut"
    }
})
}

export const variants1 = {
    hidden:{x:40,opacity:0},
    visible:(i)=>({
        x:0,
        opacity:1,
        transition:{
            delay: i * 10, duration: 1, ease:"easeOut"
        }
    })
}

export const variants2 = {
        hidden:{opacity:0},
        visible:(i)=>({
            
            opacity:1,
            transition:{
                delay: i * 10, duration: 1.5, ease:"easeOut"
            }
        })
}
export const variants3 = {
    hidden:{y:50,opacity:0},
    visible:(i)=>({
        y:0,
        opacity:1,
        transition:{
            delay: i * 10, duration: 1, ease:"easeOut"
        }
    })
}

export const variants40  = {
    hidden:{x:-25,opacity:0},
    visible:(i)=>({
        x:0,
        opacity:1,
        transition:{
            delay: 0.1, duration: 1, ease:"easeOut"
        }
    })
}
export const variants41  = {
    hidden:{x:-25,opacity:0},
    visible:(i)=>({
        x:0,
        opacity:1,
        transition:{
            delay: 0.2, duration: 1, ease:"easeOut"
        }
    })
}
export const variants42  = {
    hidden:{x:25,opacity:0},
    visible:(i)=>({
        x:0,
        opacity:1,
        transition:{
            delay: 0.3, duration: 1, ease:"easeOut"
        }
    })
}
export const variants43  = {
    hidden:{y:50,opacity:0},
    visible:(i)=>({
        y:0,
        opacity:1,
        transition:{
            delay: 0.4, duration: 1, ease:"easeOut"
        }
    })
}