



export function OnClickBasicDetail(e, property,BasicDetail, SetBasicDetail) {
    
    SetBasicDetail({
        ...BasicDetail,
        [property]: e.target.value
    })
}

export function OnClickPropertyDetail(e, property,PropertyDetail, SetPropertyDetail) {
    SetPropertyDetail({
        ...PropertyDetail,
        [property]: e.target.value
    })
}

export function OnClickGeneral_info(e, property,General_info, SetGeneral_info) {
   
    SetGeneral_info({
        ...General_info,
        [property]: e.target.value
    })

}
export function OnClickLocation_info(e, property,Location_info,SetLocation_info, AddProperty, SetAddProperty) {
   
    SetLocation_info({
        ...Location_info,
        [property]: e.target.value
    })
    SetAddProperty({
        ...AddProperty,
        [property]: e.target.value
    })
}