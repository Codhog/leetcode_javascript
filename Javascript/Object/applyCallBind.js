const cat = {
    'name': 'Tian',
    talk(...str){
        console.log(str);
        console.log(`${this.name} says ${str}`);
    }
}

// cat.talk('hi')

const dog = {
    'name': 'dog',
}
const catTalk = cat.talk
// catTalk('cao')  //undefined says cao

catTalk.call(dog, 'fuck')



const dogTalk = cat.talk.bind(dog, 'fucku2', 'sad')
// dogTalk()

catTalk.apply(dog, ['asd','das'])


