export const capitalize = (word) => {
    let path = String(word.split('/')[1])
    if(path === ''){
        return 'Dashboard'
    }
    path = path.charAt(0).toUpperCase() + path.slice(1)
    return path
}

export const dateAnalyzer = () => {
    const date = new Date();
    const currentDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    const week = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000)
    const currentWeek = `${week.getFullYear()}/${week.getMonth() + 1}/${week.getDate()}`
    const month = new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000)
    const currentMonth = `${month.getFullYear()}/${month.getMonth() + 1}/${month.getDate()}`
    return {
        today : currentDate,
        week: currentWeek,
        month: currentMonth
    }
}
