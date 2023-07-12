import axios from "axios"


const getFood = async () => {
    const food = await axios('http://localhost:8000/food')

    return food.data
}

const createFood = async (foodData) => {
    const food = await axios.post('http://localhost:8000/food', foodData)
    return food.data
}

const updateFood = async (id,updateData) => {
    const food = await axios.patch(`http://localhost:8000/food/${id}`,updateData)
    return food.data
}

const foodService = {
    getFood,createFood,updateFood
}

export default foodService