import fetch from '@/utils/axios'
//post
export function getPost(data){
    return fetch({
        url: `/card_code/usiness/card/application?userId=${data.userId}`,
        method: 'post'
    })
}
//get
export function getGet(data) {
    return fetch({
        url: `/card_code/usiness/card/mealCode?userId=${data.userId}&startTime=${data.startTime}&endTime=${data.endTime}&cardNo=${data.cardNo}&type=${data.type}`,
        method: 'get',
    })
}
