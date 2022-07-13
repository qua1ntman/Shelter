class Data {
    data = JSON.parse(JSON.stringify([
      {
        "name": "Jennifer",
        "img": "../../assets/images/jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Sophia",
        "img": "../../assets/images/sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Woody",
        "img": "../../assets/images/woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
      },
      {
        "name": "Scarlett",
        "img": "../../assets/images/scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Katrine",
        "img": "../../assets/images/katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Timmy",
        "img": "../../assets/images/timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
      },
      {
        "name": "Freddie",
        "img": "../../assets/images/freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
      {
        "name": "Charly",
        "img": "../../assets/images/charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
      },
    ]))
}

class Menu {
    burger = document.getElementById('menu-control')
    nav = document.getElementById('nav')
    startPage = document.getElementsByClassName('start-page-content')[0]
    undernav = document.getElementsByClassName('under-nav')[0]

    openMenu() {
        if (this.burger.checked) {
            this.nav.className = 'display-forehead'
            this.undernav.className =  'under-nav block-opacity'
            document.body.style.overflowY = 'hidden'
        } else {
            this.nav.className = 'display-back'
            this.undernav.className =  'under-nav'
            document.body.style.overflowY = 'auto'
        }
    }

    hideMenu(target) {
        if (target.className === 'under-nav block-opacity') return
        this.burger.checked = false
        this.nav.className = 'display-back'
        document.body.style.overflowY = 'auto'
    }
}

class Cards extends Data {

    petsContainer = document.getElementsByClassName('pet-blocks-container')[0]
    modal = document.getElementById('pet-description-wrapper')
    cardsIndexNow
    cardsIndex = []

    addPets(x = 0) {
      this.cardsIndexNow = Array.from(document.getElementsByClassName('pet-block')).map(item => item.id)
      const width = window.innerWidth
      if (width <= 767) {
        this.cardsIndex = [this.getRandomIndex(this.data.length)]
      } else if (width <= 1279) {
        this.cardsIndex = [this.getRandomIndex(this.data.length)]
        this.cardsIndex.push(this.getRandomIndex(this.data.length))
      } else {
        this.cardsIndex = [this.getRandomIndex(this.data.length)]
        this.cardsIndex.push(this.getRandomIndex(this.data.length))
        this.cardsIndex.push(this.getRandomIndex(this.data.length))
      }
      this.createPetCards(this.cardsIndex)
    }
    
    getRandomIndex(maxIndex) {
      let index = Math.round(Math.random()*(maxIndex - 1))
      if (
        this.cardsIndexNow.filter(item => item == index).length>0
        || this.cardsIndex.filter(item => item == index).length>0
      ) return this.getRandomIndex(maxIndex)
      return index
    }
    
    createPetCards(args) {
        let node = ''
        for (let index of args) {
          node += this.createOneCard(this.data[index], index)
        }
        this.petsContainer.style.opacity = 0

        setTimeout (() => {
          this.petsContainer.innerHTML = node
          this.petsContainer.style.opacity = 1
        }, 300)
        
    }

    createOneCard(dataInfo, index) {
        return `
        <div id=${index} class="pet-block">
            <div class="pet-pic-slider">
                <img src=${dataInfo.img} alt="katrine">
            </div>
            <div class="pet-name">${dataInfo.name}</div>
            <button>Learn more</button>
        </div>`
    }
  
    createModal(e) {
        let cardId = e.target.closest('.pet-block').id
        const petModalWrapper = document.getElementById('pet-description-wrapper')
        const petModalData = document.getElementById('pet-description')
        petModalWrapper.className = ''
        let info = this.data[cardId]
        petModalData.innerHTML = 
        `<img src=${info.img} alt="">
        <div class="pet-description-text">
            <h3>${info.name}</h3>
            <h5>${info.type} - ${info.breed}</h5>
            <p>${info.description}</p>
            <ul>
                <li><strong>Age:</strong> ${info.age}</li>
                <li><strong>Inoculations:</strong> ${info.inoculations.join(', ')}</li>
                <li><strong>Diseases:</strong> ${info.diseases.join(', ')}</li>
                <li><strong>Parasites:</strong> ${info.parasites.join(', ')}</li>
            </ul>
        </div>`
        document.body.style.overflowY = 'hidden'
    }
  
    hideModal(target) {
      if (target !== this.modal && !target.closest('#close-btn')) return;
      this.modal.className = 'hide-modal'
      document.body.style.overflowY = 'auto'
    }
}

class SliderBtns extends Data{
    left = document.getElementById('btn-left')
    right = document.getElementById('btn-right')
}

const menu = new Menu()
menu.burger.addEventListener('click', (e) => {
    e.stopPropagation()
    menu.openMenu()
})
menu.nav.addEventListener('click', (e) => {
    menu.hideMenu(e.target)
})

const card = new Cards()
document.onresize = card.addPets()
card.petsContainer.addEventListener('click', (e) => {
    card.createModal(e)
})
card.modal.addEventListener('click', (e) => {
    card.hideModal(e.target)
})

const slider = new SliderBtns()
slider.left.addEventListener('click', () => {
    card.addPets()
})
slider.right.addEventListener('click', () => {
    card.addPets()    
})

