import URL from '@/utils/axios1'
//封装post
export const getPost1 = (data)=>{
    return URL.request({
        url: '/card_code/usiness/card/application',
        method: 'post',
        data,
        // headers: {
        //     'Content-Type': 'application/json;charset=UTF-8',
        // }
    })
}
//封装get
export const getGet1 = (data)=>{
    return URL.request({
        url: `/card_code/usiness/card/mealCode?userId=${data.userId}&startTime=${data.startTime}&endTime=${data.endTime}&cardNo=${data.cardNo}&type=${data.type}`,
        method: 'get',
    })
}
