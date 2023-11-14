//Wait til content loaded
//document.addEventListener("DOMContentLoaded", function() {

    function introScreen() {
        toggleScreen("game-intro-screen", true);
        toggleScreen("canvas", false)
    }

    function screen2() {
        toggleScreen("game-intro-screen", false);
        toggleScreen("game-story-screen2", true);
    }

    var scoreValue = 0;
    var score;
    var time = 0;
    var timerInterval;
    var timerDisplay;

    var timer = {
        start: function() {
            clearInterval(timerInterval);
            timerInterval = setInterval(function() {
                time++;
            }, 1000);
        },
        pause: function() {
            clearInterval(timerInterval);
        },
        resume: function() {
            timerInterval = setInterval(function() {
                time++;
            }, 1000);
        },
    };

    function startGame() {
        toggleScreen("game-story-screen2", false);
        toggleScreen("canvas", true);
        gameCanvas.start();
        player = new component(40, 50, "./images/mudlark/mudlarkCentre.png", 410, 382);
        dog = new component(40, 25, "./images/mudlark/dogLeft.png", 860, 300);
        dog.speedY = 0;
        dog.speedX = -3;

        hiddenItem1 = new component(20, 20, "./images/mudlark/hiddenItem.png", hiddenItemPositionX(), hiddenItemPositionY())
        hiddenItem2 = new component(20, 20, "./images/mudlark/hiddenItem.png", hiddenItemPositionX(), hiddenItemPositionY())
        hiddenItem3 = new component(20, 20, "./images/mudlark/hiddenItem.png", hiddenItemPositionX(), hiddenItemPositionY())
        hiddenItem4 = new component(20, 20, "./images/mudlark/hiddenItem.png", hiddenItemPositionX(), hiddenItemPositionY())
        hiddenItem5 = new component(20, 20, "./images/mudlark/hiddenItem.png", hiddenItemPositionX(), hiddenItemPositionY())
        hiddenItem6 = new component(20, 20, "./images/mudlark/hiddenItem.png", hiddenItemPositionX(), hiddenItemPositionY())

        hiddenItemType();

        score = new textbox(145, 45, "white", "slateblue", gameCanvas.canvas.width-200, 10, gameCanvas.canvas.width-193, 22, "Items found: 0/4", "14px Courier New");
        scoreValue = 0;
        //console.log(scoreValue, score.text);
        time = 0;
        timerDisplay = new textbox(145, 45, "white", "darkcyan", 55, 10, 62, 22, "Time: 0 seconds", "14px Courier New");
        timer.start();
    }

    function hiddenItemPositionX() {
        let randomXPosition = Math.floor(Math.random()*((gameCanvas.canvas.width-20)-20)+20);
        return randomXPosition;
    }

    function hiddenItemPositionY() {
        let randomYPosition = Math.floor(Math.random()*((gameCanvas.canvas.height-30)-270)+270);
        return randomYPosition;
    }

    function hiddenItemType() {
        //TODO store as object with properties!
        const hiddenItemsArray = [
            "oldPot",
            "sodaCan",
            "crab",
            "seaglass",
            "rock",
            "seaweed"
        ];
        const hiddenItemImageLinks = [
            "./images/mudlark/oldPot.png",
            "./images/mudlark/sodaCan.png",
            "./images/mudlark/crab.png",
            "./images/mudlark/seaglass.png",
            "./images/mudlark/rock.png",
            "./images/mudlark/seaweed.png"
        ];
        const hiddenItemText = [
            "Perfect! This old pot can be her something old. I wonder what it used to store...",
            "Okay, I guess this drinks can is pretty new? Looks unopened. Probably pretty shaken up though...",
            "Oh hey little guy! We'd better return you to the water... but actually, maybe you could be her something borrowed first...",
            "Wow, a perfect, sky-blue piece of sea glass, worn by the tide. You'll make a great something blue!",
            "...this is just a rock.",
            "Seaweed! I'd love to just kelp myself (get it?), but I don't need this right now."
        ];
        //TODO assign in a loop to avoid below repetition
        hiddenItem1.typeSelector = Math.floor(Math.random() * 6);
        hiddenItem1.type = hiddenItemsArray[hiddenItem1.typeSelector];
        hiddenItem1.imageLink = hiddenItemImageLinks[hiddenItem1.typeSelector];
        hiddenItem1.itemText = hiddenItemText[hiddenItem1.typeSelector];

        hiddenItem2.typeSelector = selectorFunction(hiddenItem2);
        hiddenItem2.type = hiddenItemsArray[hiddenItem2.typeSelector];
        hiddenItem2.imageLink = hiddenItemImageLinks[hiddenItem2.typeSelector];
        hiddenItem2.itemText = hiddenItemText[hiddenItem2.typeSelector];

        hiddenItem3.typeSelector = selectorFunction(hiddenItem3);
        hiddenItem3.type = hiddenItemsArray[hiddenItem3.typeSelector];
        hiddenItem3.imageLink = hiddenItemImageLinks[hiddenItem3.typeSelector];
        hiddenItem3.itemText = hiddenItemText[hiddenItem3.typeSelector];

        hiddenItem4.typeSelector = selectorFunction(hiddenItem4);
        hiddenItem4.type = hiddenItemsArray[hiddenItem4.typeSelector];
        hiddenItem4.imageLink = hiddenItemImageLinks[hiddenItem4.typeSelector];
        hiddenItem4.itemText = hiddenItemText[hiddenItem4.typeSelector];

        hiddenItem5.typeSelector = selectorFunction(hiddenItem5);
        hiddenItem5.type = hiddenItemsArray[hiddenItem5.typeSelector];
        hiddenItem5.imageLink = hiddenItemImageLinks[hiddenItem5.typeSelector];
        hiddenItem5.itemText = hiddenItemText[hiddenItem5.typeSelector];

        hiddenItem6.typeSelector = selectorFunction(hiddenItem6);
        hiddenItem6.type = hiddenItemsArray[hiddenItem6.typeSelector];
        hiddenItem6.imageLink = hiddenItemImageLinks[hiddenItem6.typeSelector];
        hiddenItem6.itemText = hiddenItemText[hiddenItem6.typeSelector];

        //console.log(hiddenItem1.typeSelector, hiddenItem2.typeSelector, hiddenItem3.type, hiddenItem4.type, hiddenItem5.type, hiddenItem6.type);

    }

    function toggleScreen(id, toggle) {
        let element = document.getElementById(id);
        let display = (toggle) ? "block" : "none";
        element.style.display = display;
    }

    var gameCanvas = {
        canvas: document.getElementById("canvas"),
        start: function () {
            this.canvas.width = 900;
            this.canvas.height = 433;
            this.context = this.canvas.getContext("2d");
            //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateCanvas, 20);
            window.addEventListener("keydown", function(e) {
                gameCanvas.key = e.keyCode;
            });
            window.addEventListener("keyup", function(e) {
                gameCanvas.key = false;
            })
        },
        clear: function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        stop: function() {
            clearInterval(this.interval);
        },
    }

    function component(width, height, source, x, y) {
        this.image = new Image();
        this.image.src = source;

        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = x;
        this.y = y;

        this.update = function() {
            ctx = gameCanvas.context;
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }

        this.newPosition = function() {
            this.x += this.speedX;
            this.y += this.speedY;
        }

        this.remove = function() {
            ctx = gameCanvas.context;
            ctx.clearRect(this.x, this.y, this.width, this.height);
        }

        this.replace = function(imgsrc) {
            ctx = gameCanvas.context;
            ctx.clearRect(this.x, this.y, this.width, this.height);
            this.image = new Image();
            this.image.src = imgsrc;
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }

    function textbox(width, height, color, background, fillX, fillY, textX, textY, text, font) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;
        this.x = fillX;
        this.y = fillY;
        this.color = color;
        this.background = background;
        this.text = text;
        this.font = font;
        this.textX = textX;
        this.textY = textY;
        
        this.update = function() {
            ctx = gameCanvas.context;
            ctx.fillStyle = background;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.font = font;
            ctx.textBaseline = 'top';
            ctx.fillStyle = this.color;
            if (width == gameCanvas.canvas.width) {
                ctx.fillText(this.text, gameCanvas.canvas.width/2-(ctx.measureText(text).width/2), gameCanvas.canvas.height/2, ctx.measureText(text).width);
            }
            else {
                ctx.fillText(this.text, this.textX, this.textY, ctx.measureText(text).width);
        
            }
        }
        this.close = function() {
            ctx = gameCanvas.context;
            ctx.clearRect(this.x, this.y, gameCanvas.canvas.width, gameCanvas.canvas.height);
        }
    }

    function playerMovement(dir) {
        player.image.src = "./images/mudlark/mudlarkCentre.png";
        if (dir == "up") {
            player.image.src = "./images/mudlark/mudlarkBack.png";
            if (player.x > 350) {           
                if (player.y - player.speedY > 150) {
                    player.speedY = -2;
                }
            }
            else if (player.x > 150) {
                if (player.y - player.speedY > 220) {
                    player.speedY = -2;
                }
            }
            else if (player.x >= 0) {
                if (player.y - player.speedY > 265) {
                    player.speedY = -2;
                }
            }
        }
        if (dir == "down") {
            player.image.src = "./images/mudlark/mudlarkCentre.png";
            if (player.y - player.speedY < gameCanvas.canvas.height) {
                player.speedY = 2;
            }
        }        
        if (dir == "left") {
            player.image.src = "./images/mudlark/mudlarkLeft.png";
            if (player.x > 350) {           
                if (player.y - player.speedY > 148) {
                    player.speedX = -2;
                }
            }
            else if (player.x > 150) {
                if (player.y - player.speedY > 218) {
                    player.speedX = -2;
                }
            }
            else if (player.x >= 0) {
                if (player.y - player.speedY > 263) {
                    player.speedX = -2;
                }
            }
        }
        if (dir == "right") {
            player.image.src = "./images/mudlark/mudlarkRight.png";    
            if (player.x - player.speedX < gameCanvas.canvas.width) {
                player.speedX = 2;
            }
        }    
    }

    function dogMovement() {
        if (dog.x <= -20 || dog.x >= gameCanvas.canvas.width) {
            dog.y +=10;
            dog.speedX = dog.speedX * -1;
        }
        if (dog.y >= gameCanvas.canvas.height - 20) {
            dog.y = 300;
            dog.speedX = -3;
        }
        dog.image.src = "./images/mudlark/dogLeft.png";
        if (dog.speedX < 0) {
            dog.image.src = "./images/mudlark/dogLeft.png";
        }
        if (dog.speedX > 0) {
            dog.image.src = "./images/mudlark/dogRight.png";
        }
    }


    /*function createPlayer(width, height) {
        this.width = width;
        this.height = height;
        this.x = playerXPosition;
        this.y = playerYPosition;

        this.draw = function () {
            ctx = gameCanvas.context;
            var playerIcon = new Image();
            playerIcon.src="./images/mudlark/mudlarkCentre.png";
            playerIcon.onload = function() {
            ctx.drawImage(playerIcon,this.x,this.y);
            }            
        }
    }*/
    
    function updateCanvas() {
        //console.log(scoreValue, score.text);
        gameCanvas.clear();
        player.speedX = 0;
        player.speedY = 0;
        //Player movement
        if (gameCanvas.key && gameCanvas.key == 37) {
            playerMovement("left");
        }
        if (gameCanvas.key && gameCanvas.key == 39) {
            playerMovement("right");
        }
        if (gameCanvas.key && gameCanvas.key == 38) {
            playerMovement("up");
        }
        if (gameCanvas.key && gameCanvas.key == 40) {
            playerMovement("down");
        }
        hiddenItem1.update();
        hiddenItem2.update();
        hiddenItem3.update();
        hiddenItem4.update();
        hiddenItem5.update();
        hiddenItem6.update();
        player.update();
        player.newPosition();
        dog.update();
        dog.newPosition();
        dogMovement();
        detectCollision(player, dog);
        detectCollision(player, hiddenItem1);
        detectCollision(player, hiddenItem2);
        detectCollision(player, hiddenItem3);
        detectCollision(player, hiddenItem4);
        detectCollision(player, hiddenItem5);
        detectCollision(player, hiddenItem6);
        score.text = "Items found: "+scoreValue+"/4";
        score.update();
        timerDisplay.text = "Time: "+time+" seconds";
        timerDisplay.update();
    }
    


    function detectCollision(objectOne, objectTwo) {
        var objectOneLeft = objectOne.x
        var objectOneRight = objectOne.x + objectOne.width;
        var objectTwoLeft = objectTwo.x;
        //var dogRight = dog.x + dog.width;
        
        var objectOneBottom = objectOne.y + objectOne.height;
        var objectOneTop = objectOne.y;
        //var dogBottom = dog.y + dog.height;
        var objectTwoTop = objectTwo.y;
        
        if (objectOneRight > objectTwoLeft && objectOneLeft < objectTwoLeft && 
            objectOneBottom > objectTwoTop && objectOneTop < objectTwoTop) {
            
            if (objectOne == player && objectTwo == dog) {
                gameCanvas.stop();
                gameOver = new textbox(gameCanvas.canvas.width, gameCanvas.canvas.height, "black", "white", 0, 0, 0, 0, "Oh no! I got knocked over by a dog...", "30px Courier New");
                gameOver.update();
                let restartButton = document.getElementById("restart-button");
                restartButton.classList.remove("hidden-button");
            }

            if (objectOne == player && (objectTwo == hiddenItem1 || objectTwo == hiddenItem2 || objectTwo == hiddenItem3 ||objectTwo == hiddenItem4 ||objectTwo == hiddenItem5 ||objectTwo == hiddenItem6)) {
                //console.log(objectTwo);
                if (objectTwo.status !== "discovered") {
                    itemDiscovery(objectTwo);
                }
            }
        }
    } 
    
    function restartGame() {
        if (gameOver !== 0) {    
            gameOver.close();
        }
        if (displayingScreen("game-complete-screen") || displayingScreen("game-epilogue")) {
            toggleScreen("game-complete-screen", false);
            toggleScreen("game-epilogue", false);
        }
        let restartButton = document.getElementById("restart-button");
        restartButton.classList.add("hidden-button");
        startGame();
    }

    function selectorFunction(itemName) {
        let selector = hiddenItem1.typeSelector;
        if (itemName == hiddenItem2) {
            while (selector == hiddenItem1.typeSelector) {
                selector = Math.floor(Math.random() * 6);
            }
        };
        if (itemName == hiddenItem3) {
            while (selector == hiddenItem1.typeSelector || selector == hiddenItem2.typeSelector) {
                selector = Math.floor(Math.random() * 6);
            }
        };
        if (itemName == hiddenItem4) {
            while (selector == hiddenItem1.typeSelector || selector === hiddenItem2.typeSelector || selector === hiddenItem3.typeSelector) {
                selector = Math.floor(Math.random() * 6);
            }
        }
        if (itemName == hiddenItem5) {
            while (selector == hiddenItem1.typeSelector || selector == hiddenItem2.typeSelector || selector == hiddenItem3.typeSelector || selector== hiddenItem4.typeSelector) {
                selector = Math.floor(Math.random() * 6);
            }
        }
        if (itemName == hiddenItem6) {
            while (selector == hiddenItem1.typeSelector || selector == hiddenItem2.typeSelector || selector == hiddenItem3.typeSelector || selector == hiddenItem4.typeSelector || selector == hiddenItem5.typeSelector) {
                selector = Math.floor(Math.random() * 6);
            }
        }
        return selector;
    };

    function displayingScreen(id) {
        let element = document.getElementById(id);
        let displaying = element.style.display == "block" ? true : false;
        return displaying;
    }

    function resumeGame() {
        if (displayingScreen("game-wrong-item-screen")){
            toggleScreen("game-wrong-item-screen", false);
        };
        if (displayingScreen("game-found-item-screen")) {
            toggleScreen("game-found-item-screen", false);
        };
        toggleScreen("canvas", true);
        dog.speedX = -3;
        gameWon();
        timer.resume();
    }
    
    function itemDiscovery(itemName) {
        timer.pause();
        let itemType = itemName.type;
        let itemImageLink = itemName.imageLink; 
        let itemText = itemName.itemText;
        if (itemType == "rock" || itemType == "seaweed") {
            itemName.replace("./images/mudlark/sand.png");
            toggleScreen("game-wrong-item-screen", true);
            wrongItemImage = document.getElementById("wrong-item-display");
            wrongItemImage.src = itemImageLink;
            wrongItemTextElement = document.getElementById("wrong-item-text");
            wrongItemTextElement.textContent = itemText;
            //TODO tidy up function
            //TODO add wrong item text
            itemName.status = "discovered";
            toggleScreen("canvas", false);
            dog.speedX = 0;
        }
        else if (itemType == "oldPot" || itemType == "sodaCan" || itemType == "crab" || itemType == "seaglass") {
            itemName.replace("./images/mudlark/sand.png");
            toggleScreen("game-found-item-screen", true);
            foundItemImage = document.getElementById("found-item-display");
            foundItemImage.src = itemImageLink;
            foundItemTextElement = document.getElementById("found-item-text");
            foundItemTextElement.textContent = itemText;
            itemName.status = "discovered";
            scoreValue ++;
            toggleScreen("canvas", false);
            dog.speedX = 0;
        }        
    }

    function gameWon() {
        if (scoreValue == 4) {
            gameCanvas.stop();
            gameWonTextElement = document.getElementById("game-complete-text");
            gameWonTextElement.textContent = "And I did it all in "+time+" seconds!"
            toggleScreen("canvas", false);
            toggleScreen("game-complete-screen", true);
            let restartButton = document.getElementById("restart-button");
            restartButton.classList.remove("hidden-button");
            scoreValue = 0;
            gameOver = 0;
            timer.pause();
        }
    }
    
    function epilogue() {
        toggleScreen("game-complete-screen", false);
        toggleScreen("game-epilogue", true);
    }
    

//});