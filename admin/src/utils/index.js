export const capitalize = (word) => {
    let path = String(word.split('/')[1])
    if(path === ''){
        return 'Dashboard'
    }
    path = path.charAt(0).toUpperCase() + path.slice(1)
    return path
}