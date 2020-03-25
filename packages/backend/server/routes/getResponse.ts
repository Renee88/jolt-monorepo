import {APIResponse, Data} from "../../types";

export const getResponse = (data: Data | Data[]) => {
    let response: APIResponse<Data>
    try {
        if (data || typeof data === 'object') {
            response = {
                data: data,
                success: true
            }
        } else {
            throw new Error('cannot retrieve users')
        }
    } catch (error) {
        response = {
            data: data,
            success: false,
            error: error.message,
            errorCode: '404'
        }
    }

    return response
}
