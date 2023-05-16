const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 1,
    mood: 1,
    // status: 'Winter Is Coming',
    getStatus: function(){
        if(this.meal === 0 || this.energy === 0 || this.mood === 0) {
            return 'умер :('
        }


        let isHungry = this.meal < 3 ? "Я голоден" : 'Я не голоден'
        let isEnerge = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать'
        let isMood = this.mood < 3 ? 'Мне скучно' : 'Мне весело'
        let isStatus = this.meal === 1 && this.energy === 1 && this.mood === 1 ? 'Зима Пришла' : 'Зима близка'
          return `, Имя: ${this.name}, Статус: ${isStatus}, Еда: ${isHungry} (${this.meal}), Энергия: ${isEnerge} (${this.energy}), Настроение: ${isMood} (${this.mood}).`
    },
    setName: function(name){
        return this.name = name
    },
    eat: function(){
        if(this.meal < 5){
            this.meal++
        }
        this.mood--
    },
    sleep: function(){
        if(this.energy < 5){
            this.energy++
        }
        this.meal--
    },
    play: function(){
        if(this.mood < 5){
            this.mood++
        }
        this.energy--
    }
  }

  tamogotchi.setName('John')
  console.log(tamogotchi.getStatus())
  