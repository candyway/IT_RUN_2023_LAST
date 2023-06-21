import axios from "axios"


const getFood = async () => {
    const food = await axios('http://localhost:8000/food')

    return food.data
}

const foodService = {
    getFood
}

export default foodService