let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 870,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload : preload,     
        create: create,     
        update : update   
    }
}; // syntaxe JSON (javascript object notation)


let game = new Phaser.Game(config); // instanciation
let snowflakesGroup;
let bellImage;
let christmasMusic;
let flake;
let snowflakeTimer;
let wintext;

function preload() {
    this.load.image('background', './assets/images/back_2.png');//les arguments: nom donné à l'image, et où le trouver.
    this.load.image('tree', './assets/images/tree_2.png');
    this.load.image('ribbon', './assets/images/ribbon.png');
    this.load.image('ribbonClear', './assets/images/ribbonClear.png');
    this.load.image('snowflake', './assets/images/snowflake.png');
    this.load.image('star', './assets/images/obj/star.png');
    this.load.image('cadeau19', './assets/images/obj/obj_19.png');
    this.load.image('cadeau16', './assets/images/obj/obj_16.png');
    this.load.image('cadeau15', './assets/images/obj/obj_15.png');
    this.load.image('cadeau14', './assets/images/obj/obj_14.png');
    this.load.image('cadeau13', './assets/images/obj/obj_13.png');
    this.load.image('cadeau12', './assets/images/obj/obj_12.png');
    this.load.image('cadeau09', './assets/images/obj/obj_09.png');
    this.load.image('boule23', './assets/images/obj/obj_23.png');
    this.load.image('boule22', './assets/images/obj/obj_22.png');
    this.load.image('boule21', './assets/images/obj/obj_21.png');
    this.load.image('boule08', './assets/images/obj/obj_08.png');
    this.load.image('treeBow', './assets/images/obj/obj_25.png');

    this.load.image('bear', './assets/images/obj/obj_05.png');
    this.load.image('bell', './assets/images/obj/obj_02.png');
    this.load.image('flake', './assets/images/obj/obj_10.png');

    this.load.audio('christmasMusic', './assets/audio/christmasMusic.mp3');
}



function create() {
    backImage = this.add.image(0, 0, 'background');
    backImage.setOrigin(0, 0);
    backImage.setScale(0.5);
    let treeImage = this.add.image(config.width/2, config.height/2, 'tree');
    treeImage.setScale(0.5);

    let ribbonImage = this.add.image(config.width/2-20, config.height/2+1, 'ribbon');
    ribbonImage.setScale(0.42);

    let ribbonClearImage = this.add.image(config.width/2-20, config.height/2+1, 'ribbonClear');
    ribbonClearImage.setScale(0.42);

    let cadeau19Image = this.add.image(+515, +735, 'cadeau19');
    cadeau19Image.setScale(0.3);
    let cadeau16Image = this.add.image(+400, +740, 'cadeau16');
    cadeau16Image.setScale(0.4);
    let cadeau15Image = this.add.image(+475, +750, 'cadeau15');
    cadeau15Image.setScale(0.3);
    let cadeau13Image = this.add.image(+260, +740, 'cadeau13');
    cadeau13Image.setScale(0.3);
    let cadeau09Image = this.add.image(+100, +750, 'cadeau09');
    cadeau09Image.setScale(0.7);
    let cadeau12Image = this.add.image(+183, +740, 'cadeau12');
    cadeau12Image.setScale(0.35);
    let cadeau14Image = this.add.image(+310, +760, 'cadeau14');
    cadeau14Image.setScale(0.45);

    let boule23Image = this.add.image(+320, +500, 'boule23');
    boule23Image.setScale(0.30);
    let boule22Image = this.add.image(+225, +430, 'boule22');
    boule22Image.setScale(0.25);
    let boule21Image = this.add.image(+200, +550, 'boule21');
    boule21Image.setScale(0.31);
    let boule08Image = this.add.image(+395, +580, 'boule08');
    boule08Image.setScale(0.31);
    let boule21bisImage = this.add.image(+325, +280, 'boule21');
    boule21bisImage.setScale(0.23);
    let boule23bisImage = this.add.image(+270, +215, 'boule23');
    boule23bisImage.setScale(0.20);
    let boule08bisImage = this.add.image(+250, +330, 'boule08');
    boule08bisImage.setScale(0.20);
    let boule22bisImage = this.add.image(+315, +630, 'boule22');
    boule22bisImage.setScale(0.27);
    let treeBowImage = this.add.image(+292, +140, 'treeBow');
    treeBowImage.setScale(0.65);
    let bearImage = this.add.image(+245, +785, 'bear').setInteractive();
    bearImage.on('pointerdown', bearImageMouseLeftClick);
    bearImage.setScale(0.43);
    
    bellImage = this.add.image(+50, +820, 'bell').setInteractive();
    bellImage.on('pointerdown', bellImageMouseLeftClick);
    bellImage.setScale(0.45);
    bellImage.alpha=0.4;


    christmasMusic = this.sound.add('christmasMusic');


    flakeImage = this.add.image(+340, 370, 'flake').setInteractive();
    flakeImage.on('pointerdown', flakeImageMouseLeftClick);
    flakeImage.setScale(0.25);
    flakeImage.alpha=0.8;

    wintext = this.add.text(160, 20, 'SEASONS GREETINGS!', {fontFamily: 'Arial', fontSize: 25, color: '#00ff00'});
    wintext.alpha=0;



    let tweenRibbon = this.tweens.add({
        targets: ribbonClearImage,
        alpha: 0,
        duration: 1000, //en milliseconds (donc en 2s)
        ease: 'Power2', 
        yoyo: true,
        loop: -1 // -1 = boucle à l'infinie
    });

    let starImage = this.add.image(+100, +70,'star');
    starImage.setScale(0.9);

    let tweenStar = this.tweens.add({
        targets: starImage,
        alpha:0.4,
        duration: 30,
        ease: 'Elastic',
        yoyo: true,
        loop: -1
    })


    snowflakesGroup = this.physics.add.group({
        defaultKey: 'snowflake',
        maxsize:50
    });


    snowflakeTimer = this.time.addEvent({
        delay: 200,
        callback: letItSnow,
        repeat: -1 //# de fois à repeter APRES le premier appel (donc 4 = 5)
    });

}



function update() {
    snowflakesGroup.getChildren().forEach(
        function(snowflake){
            if (snowflake.y>9000) snowflake.destroy();
        }, this);
}


function letItSnow(){
    let snowflake = snowflakesGroup.get();
    if(snowflake){
        snowflake.setPosition(Phaser.Math.Between(10, 590), -10);
        snowflake.setVelocity(0, 100);
    }
}

function bearImageMouseLeftClick(){
    if(wintext.alpha===0){
        wintext.alpha=1;
    }
    else{
        wintext.alpha=0;
    }
}

function bellImageMouseLeftClick(){
    if(bellImage.alpha === 0.4){
        bellImage.alpha=1;
        christmasMusic.play();
    }
    else{
        bellImage.alpha = 0.4;
        christmasMusic.pause();
    }
    
}

function flakeImageMouseLeftClick(){
    if (flakeImage.alpha === 0.5){
        flakeImage.alpha = 1;
        snowflakeTimer.paused = false;
    }
    else{
        flakeImage.alpha = 0.5;
        snowflakeTimer.paused = true;
    }
}