function findMatching (arrayDrivers, name) {
    return arrayDrivers.filter( driver => driver.toUpperCase() == name.toUpperCase())
}

function fuzzyMatch(drivers, name){
    return drivers.filter(driverName => {
        let match = name.length
        return driverName.slice(0, match) === name
    })
}   

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
}  