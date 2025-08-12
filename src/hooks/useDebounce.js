export function useDebounce(callback, delay = 1500) {  
    let timerId; 
    return (...args) => { 
        clearTimeout(timerId)
        setTimeout(() => {
            callback(...args)
        },delay); 

    }

}