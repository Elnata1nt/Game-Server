import platform from '../img/platform.png';
import background from '../img/backfinal.png';
import platformSmallTall from '../img/platformSmallTall.png';
import platformSmallTallm from '../img/SmallTall.png';

import spriteStandRigth from '../img/spriteStandRigth.png';


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024; // largura da pagina
canvas.height = 590; // altura da pagina

const gravity = 1.1; //Definiçao da altura do salto

class Player {
    constructor() {
      this.speed = 10// decide a velocidade do player
        this.position = {
            x: 100,
            y: 150
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.width = 60;
        this.height = 150;

        this.image = createImage(spriteStandRigth);
        this.frames = 0;
    }

    draw() {
      c.drawImage(
        this.image,
        165 * this.frames,
        0,
        165,
        402,
        this.position.x,
        this.position.y,
        this.width, 
        this.height 
        );
    }

    update() {
        this.draw();
        this.frames++;
        if (this.frames > 20) this.frames = 0;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height >= canvas.height) {
          this.position.y = canvas.height - this.height; // Define a posição no chão
          this.velocity.y = 0; // Zera a velocidade y
      } else {
          this.velocity.y += gravity; // Aplica a gravidade se não estiver no chão
      }
    }
    
}

class Platform {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        };

        this.image = image;
        this.width = image.width;
        this.height = image.height;

    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
        ;
    }
}

class GenericObject{
  constructor({x, y, image}) {
      this.position = {
          x,
          y
      };

      this.image = image;
      this.width = image.width;
      this.height = image.height;

  }

  draw() {
      c.drawImage(this.image, this.position.x, this.position.y)
      ;
  }
}

function createImage(imageSrc) {
  const image = new Image()
image.src = imageSrc
return image 
}

const platformImage = createImage(platform);

const player = new Player();
const platforms = [
  new Platform({x: platformImage.width * 4 + 100, y: 470, image: createImage(platformSmallTall)}),
  new Platform({
    x: platformImage.width * 1.6 + 100 + platformImage.width,
    y: 340, 
    image: createImage(platformSmallTall)}),
  new Platform({x: platformImage.width * 4 + 100, y: 470, image: createImage(platformSmallTallm)}),
  
  new Platform({x: platformImage.width * 5 + 100 + platformImage.width,y: 470, image: createImage(platformSmallTallm)}),
  new Platform({
    x: -1,
    y: 470,
    image: platformImage
}), 
new Platform({x: platformImage.width -3, y: 470, image: platformImage}), //criaçao da plataforma inferior
new Platform({x: platformImage.width * 2.1 + 100, y: 470, image: platformImage}),
new Platform({x: platformImage.width * 3.7 + 100, y: 465, image: platformImage}),
new Platform({x: platformImage.width * 4.69 + 100, y: 465, image: platformImage}),
new Platform({x: platformImage.width * 6.5 + 100, y: 470, image: platformImage}),
new Platform({x: platformImage.width * 7.491 + 100, y: 470, image: platformImage}),

];

const genericObject = [
  new GenericObject({
    x: -1,
    y: -1,
    image: createImage(background)

  }),
  // new GenericObject({
  //   x: -1,
  //   y: 218,
  //   image: createImage(hills)

  // })
]

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
};

let scroolloffset = 0

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    genericObject.forEach(genericObject => {
      genericObject.draw()
    })

    platforms.forEach((platform) => {
        platform.draw();
    })
    player.update();
    
// corrigir as limitaçoes do mapa

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed;
    } else if ((keys.left.pressed && player.position.x > 100) 
       || (keys.left.pressed && scroolloffset === 0 && player.position.x > 0)
       )  {
        player.velocity.x = -player.speed;
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scroolloffset += player.speed;
            platforms.forEach((platform) => {
                platform.position.x -= player.speed;
            });
            genericObject.forEach(genericObject => {
              genericObject.position.x -= player.speed * 0.66;
            })
        } else if (keys.left.pressed && scroolloffset > 0) {
            scroolloffset = player.speed;

            platforms.forEach((platform) => {
                platform.position.x += player.speed * 0.66;
            });
            genericObject.forEach(genericObject => {
              genericObject.position.x += player.speed * 0.66;
            })
        }
        
    
    }
// platform collision detection
platforms.forEach((platform) => {
    if ( 
        player.position.y + player.height <= platform.position.y && 
        player.position.y + player.height + player.velocity.y >= platform.position.y && 
        player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x +
        platform.width
    ) {
        player.velocity.y = 0;
    }
});
// win condition
if (scroolloffset > platformImage.width *  700 - 2) {
console.log('you win')
}
if (player.position.y > canvas.height) {
// location.reload()
console.log('cai e me lasquei!!')
}


}

animate();

document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 65:
            console.log("left");
            keys.left.pressed = true;
            break;
        case 83:
            console.log("down");
            break;
        case 68:
            console.log("right");
            keys.right.pressed = true;
            break;
        case 87:
            console.log("up");
            player.velocity.y -= 15;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.keyCode) {
        case 65:
            console.log("left");
            keys.left.pressed = false;
            break;
        case 83:
            console.log("down");
            break;
        case 68:
            console.log("right");
            keys.right.pressed = false;
            player.velocity.x = 0;
            break;
        case 87:
            console.log("up");
            player.velocity.y += 6.5;
            break;
    }
});