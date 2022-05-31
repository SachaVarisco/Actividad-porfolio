var player;
var stars;
var bombs;
var cursors;
var score;
var gameOver;
var scoreText;

export class play extends Phaser.Scene {
    constructor(){
        super("play")
    }

    preload(){
        //precargar los tiles
    }
    create(){
        //crear mapa
    }
    
    update (){

        if (gameOver)
        {
            return;
        }
    
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        } 
    } 
    collectStar (player, star){
        star.disableBody(true, true);
        score += 15;
            scoreText.setText('Score: ' + score);
    
            if (stars.countActive(true) === 0)
            {
                //  A new batch of stars to collect
                stars.children.iterate(function (child) {
    
                    child.enableBody(true, child.x, 250, true, true);
    
                });
    
                var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
                var bomb = bombs.create(x, 16, 'bomb');
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
                bomb.allowGravity = false;
                
            }
    } 

    collectredStar (player, redstar){
        redstar.disableBody(true, true);
        score += 15;
     scoreText.setText('Score: ' + score);
    
     if (redstars.countActive(true) === 0)
        {
         //  A new batch of stars to collect
            redstars.children.iterate(function (child) {
           child.enableBody(true, child.x, 250, true, true);

        });
         var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
         var bomb = bombs.create(x, 16, 'bomb');
         bomb.setBounce(1);
         bomb.setCollideWorldBounds(true);
         bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
         bomb.allowGravity = false;        
        }
    }


    hitBomb (player, bomb)
    {
        this.physics.pause();

        player.setTint(0xff0000);

        player.anims.play('turn');

        gameOver = true;

        setTimeout (() => {
            this.scene.start(
                "Retry",
                {score:score}

            )

        }, 1000);
     } 
 }
