export const initBMap = (BMap) => ({
    type: "INIT_BMAP",
    BMap
})
export const setCustomerLng = (lng) => ({
    type: "CUSTOMER_LNG",
    lng
})
export const setCustomerLat = (lat) => ({
    type: "CUSTOMER_LAT",
    lat
})
export const setCustomerAddress = (customerAddress) => ({
    type: "CUSTOMER_ADDRESS",
    customerAddress
})
export const setDestination = (destination) => ({
    type: "DESTINATION",
    destination
})
export const setParkingLots = (parkingLots) => ({
    type: "SET_PARKINGLOTS",
    parkingLots
})
export const emptyParkingLots = () => ({
    type: "EMPTY_PARKINGLOTS"
})