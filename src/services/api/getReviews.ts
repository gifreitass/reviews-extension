import axios from 'axios'
import adaptGetReviews from '../../shared/adapters/adaptGetReviews'

const getReviews = async (inputValue: string) => {
    const separatedUrlValues = inputValue.split('i.')[1].split('?')[0].split('.')
    const shopId = separatedUrlValues[0]
    const itemId = separatedUrlValues[1]

    const response = await axios.get(`https://shopee.com.br/api/v2/item/get_ratings?exclude_filter=0&filter=0&filter_size=0&flag=1&fold_filter=0&itemid=${itemId}&offset=0&relevant_reviews=false&request_source=1&shopid=${shopId}&tag_filter=&type=0&variation_filters=`)
    
    const adaptedResponse = adaptGetReviews(response.data)

    return adaptedResponse
}

export default getReviews