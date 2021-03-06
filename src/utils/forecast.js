const request = require("request")

const forecast=(latitude,longitude,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=fed906ec9f550d21229d9391c863525e&query='+latitude + ',' + longitude +'&units=f'
    request({url, json:true },(error,{ body })=>{
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)

        }else {
            
            callback(undefined, 
                body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature +' degress out. The humidity is: '+
                body.current.humidity +' It feels like '+body.current.feelslike+ ' degress out.')
        }

    })
}

module.exports=forecast
