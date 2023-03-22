const menu = document.getElementById('menu');
const timer = document.getElementById('timer');
const bw = document.getElementById('princess')
const date = new Date;
const sleep = () => {
    return new Promise(resolve => resolve(1000))
}
let start = false
let bottom = 50
let left = 50
const startGame = () => {
    bw.className = 'princess'
    bw.style.bottom = `${bottom}px`
    bw.style.left = `${left}px`
    setInterval(() => {
        start = true;
        addEventListener('keypress', (event) => {
            switch (event.key) {
                case 'w':
                    bw.style.rotate = '0deg'
                    bottom++
                    setPos()
                    break;
                case 's':
                    bw.style.rotate = '180deg'
                    bottom--
                    setPos()
                    break;
                case 'a':
                    bw.style.rotate = '-90deg'
                    left--
                    setPos()
                    break;
                case 'd':
                    bw.style.rotate = '90deg'
                    left++
                    setPos()
                    break;
                default:
                    break;
            }

            console.log(bottom)
        })
        const setPos = () => {
            bw.src = './asset/bswim.gif'
            bw.style.bottom = `${bottom}px`
            bw.style.left = `${left}px`
        }
        bw.src = './asset/bstoped.gif'
    }, 500)

}
const startHandler = () => {
    menu.className = 'gameStart'
    startGame()
}

i = 0



