const database = {
    orderBuilder:{
    },

    paints: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 965 },
        { id: 4, color: "Spring Green", price: 965 }
    ],
    interiors: [
        { id: 1, styles: "Beige Fabric", price: 405 },
        { id: 2, styles: "Charcoal Fabric", price: 782 },
        { id: 3, styles: "White Leather", price: 1470 },
        { id: 4, styles: "Black Leather", price: 1997 }
    ],
    technologies: [
        { id: 1, pack: "Basic Package (basic sound system)", price: 220.42 },
        { id: 2, pack: "Navigation Package (includes integrated navigation controls)", price: 736.4 },
        { id: 3, pack: "Visibility Package (includes side and rear cameras)", price: 1258.9 },
        { id: 4, pack: "Ultra Package (includes navigation and visibility packages)", price: 1795.45 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 420.42 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 436.4 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 458.9 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 495.45 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            techId: 3,
            wheelId: 3,
            timestamp: 1614659931693
        }
    ]

}


export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getOrders = () => {
    return database.customOrders
}

export const setTechnologies = (id) => {
    database.orderBuilder.techId = id
    console.log(database.orderBuilder)
}

export const setPaints = (id) => {
    database.orderBuilder.paintId = id
    console.log(database.orderBuilder)

}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
    console.log(database.orderBuilder)

}

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
    console.log(database.orderBuilder)

}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))

    // console.log(addCustomOrder)
    // console.log(addCustomOrder())
}