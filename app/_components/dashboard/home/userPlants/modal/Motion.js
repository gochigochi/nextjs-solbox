export const softFadeIn = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .8,
            delay: .2,
        }
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: {
            duration: .8,
            delay: .2,
        }
    }
}

export const modalVariants = {
    initial: { opacity: 0 },
    animate: { 
        opacity: 1,
        transition: {
            delayChildren: .5,
        } 
    },
    exit: { opacity: 0 },
}