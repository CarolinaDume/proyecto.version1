const {createAPP} = Vue 

createAPP({
    data() {
        return {
            url:`https://api.tutiempo.net/json/?lan=es&apid=z5G4zqqXzz4r3vS&lid=42833`,
            clima:{},
        }
    },
    methods: {
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.clima=data
                console.log(this.clima)
                })
        }
    },
    created(){

        this.fetchData(this.url) 
    }

    }).mount('#app')