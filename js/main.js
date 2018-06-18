"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CrateManager = (function () {
    function CrateManager() {
        this.crates = [];
        this.crates.push(new CherryCrate(), new StrawberryCrate(), new GrapeCrate());
    }
    Object.defineProperty(CrateManager.prototype, "crate", {
        get: function () {
            return this.crates;
        },
        enumerable: true,
        configurable: true
    });
    return CrateManager;
}());
var GameObject = (function () {
    function GameObject() {
        this.canvas = document.getElementsByTagName('canvas')[0];
    }
    GameObject.prototype.createElement = function () {
        this.element = document.createElement(this.type);
        document.body.appendChild(this.element);
        this.element.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    GameObject.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return GameObject;
}());
var DraggableFruit = (function (_super) {
    __extends(DraggableFruit, _super);
    function DraggableFruit() {
        return _super.call(this) || this;
    }
    DraggableFruit.prototype.createElement = function () {
        var _this = this;
        var tree = document.getElementsByTagName('fruitscreen')[0];
        this.element = document.createElement(this.type);
        tree.appendChild(this.element);
        this.x = Math.floor(Math.random() * tree.clientWidth - this.element.offsetWidth);
        this.y = Math.floor(Math.random() * tree.clientHeight - this.element.offsetHeight);
        this.element.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.moveBind = function (e) { return _this.updatePosition(e); };
        this.element.addEventListener("mousedown", function (e) { return _this.startDragging(e); });
        this.element.addEventListener("mouseup", function (e) { return _this.stopDragging(e); });
    };
    DraggableFruit.prototype.startDragging = function (e) {
        e.preventDefault();
        this.offSetX = e.clientX - this.x;
        this.offSetY = e.clientY - this.y;
        window.addEventListener("mousemove", this.moveBind);
    };
    DraggableFruit.prototype.updatePosition = function (e) {
        e.preventDefault();
        this.x = e.clientX - this.offSetX;
        this.y = e.clientY - this.offSetY;
        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
        this.getRectangle();
    };
    DraggableFruit.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    DraggableFruit.prototype.RemoveFruit = function (array, element) {
        var i = array.indexOf(element);
        array.splice(i, 1);
        return this.element.remove();
    };
    DraggableFruit.prototype.stopDragging = function (e) {
        window.removeEventListener("mousemove", this.moveBind);
        e.preventDefault();
    };
    return DraggableFruit;
}(GameObject));
var FruitScreen = (function (_super) {
    __extends(FruitScreen, _super);
    function FruitScreen() {
        var _this = _super.call(this) || this;
        _this.element = document.createElement('fruitScreen');
        document.body.appendChild(_this.element);
        _this.x = (window.innerWidth - _this.element.offsetWidth) / 2;
        _this.y = (window.innerHeight - _this.element.offsetHeight) / 2 - 80;
        _this.element.style.transform = "translate(" + _this.x + "px," + _this.y + "px)";
        return _this;
    }
    FruitScreen.prototype.remove = function () {
        this.element.remove();
    };
    return FruitScreen;
}(GameObject));
var FruitManager = (function () {
    function FruitManager() {
        this.fruits = [];
        for (var i = 0; i < 10; i++) {
            this.addFruit();
        }
    }
    Object.defineProperty(FruitManager.prototype, "fruit", {
        get: function () {
            return this.fruits;
        },
        enumerable: true,
        configurable: true
    });
    FruitManager.prototype.addFruit = function () {
        var randomnumber = Math.floor(Math.random() * 3);
        switch (randomnumber) {
            case 0:
                this.fruits.push(new Strawberry());
                break;
            case 1:
                this.fruits.push(new Grape());
                break;
            case 2:
                this.fruits.push(new Cherry());
                break;
        }
    };
    return FruitManager;
}());
var Game = (function () {
    function Game() {
        this.startscreen = new StartScreen(this);
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        if (this.startGame) {
            this.startGame.update();
        }
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    Game.prototype.start = function () {
        this.startGame = new Start(this);
        this.startscreen.removeButton();
        this.gameOver.remove();
    };
    Game.prototype.stop = function (score) {
        this.gameOver = new Stop(this, score);
        this.startGame.deleteElements();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Start = (function () {
    function Start(game) {
        this.score = 0;
        this.table = document.createElement('table');
        document.body.appendChild(this.table);
        this.countdown = document.createElement('timer');
        document.body.appendChild(this.countdown);
        this.countdown.style.left = window.innerWidth / 2 + 320 + "px";
        this.scoreboard = document.createElement('score');
        document.body.appendChild(this.scoreboard);
        this.scoreboard.style.left = window.innerWidth / 2 + 320 + "px";
        this.scoreboard.innerHTML = "0";
        this.game = game;
        this.fruitscreen = new FruitScreen();
        this.createmanager = new CrateManager();
        this.fruitmanager = new FruitManager();
        this.timer(60);
    }
    Start.prototype.update = function () {
        for (var i = 0; i < this.fruitmanager.fruit.length; i++) {
            var fruit = this.fruitmanager.fruit[i];
            var hit = this.checkCollision(fruit.getRectangle(), this.createmanager.crate[0].getRectangle());
            var hit2 = this.checkCollision(fruit.getRectangle(), this.createmanager.crate[1].getRectangle());
            var hit3 = this.checkCollision(fruit.getRectangle(), this.createmanager.crate[2].getRectangle());
            if (hit && fruit.type == "cherry") {
                fruit.RemoveFruit(this.fruitmanager.fruit, fruit);
                this.score += 1;
                this.scoreboard.innerHTML = "" + this.score;
            }
            if (hit2 && fruit.type == "strawberry") {
                fruit.RemoveFruit(this.fruitmanager.fruit, fruit);
                this.score += 1;
                this.scoreboard.innerHTML = "" + this.score;
            }
            if (hit3 && fruit.type == "grape") {
                fruit.RemoveFruit(this.fruitmanager.fruit, fruit);
                this.score += 1;
                this.scoreboard.innerHTML = "" + this.score;
            }
        }
        if (this.fruitmanager.fruit.length < 10) {
            this.fruitmanager.addFruit();
        }
    };
    Start.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Start.prototype.timer = function (seconds) {
        var _this = this;
        var counter = seconds;
        var interval = setInterval(function () {
            _this.countdown.innerHTML = "0:" + counter;
            counter--;
            if (counter < 0) {
                _this.game.stop(_this.score);
                clearInterval(interval);
            }
        }, 1000);
    };
    Start.prototype.deleteElements = function () {
        this.scoreboard.remove();
        this.table.remove();
        this.countdown.remove();
        this.fruitscreen.remove();
    };
    return Start;
}());
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen(game) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.element = document.createElement('button');
        document.body.appendChild(_this.element);
        _this.x = (window.innerWidth - _this.element.offsetWidth) / 2;
        _this.y = (window.innerHeight - _this.element.offsetHeight) / 2;
        _this.element.style.transform = "translate(" + _this.x + "px," + _this.y + "px)";
        _this.element.addEventListener("click", function () { return _this.game.start(); });
        return _this;
    }
    StartScreen.prototype.removeButton = function () {
        this.element.remove();
    };
    return StartScreen;
}(GameObject));
var Stop = (function (_super) {
    __extends(Stop, _super);
    function Stop(game, score) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.background = document.createElement('gradientBK');
        document.body.appendChild(_this.background);
        _this.gameover = document.createElement('gameover');
        document.body.appendChild(_this.gameover);
        _this.gameover.innerHTML = 'Game Over';
        _this.scoreboard = document.createElement('endscore');
        document.body.appendChild(_this.scoreboard);
        _this.scoreboard.innerHTML = "score: " + score;
        _this.button = document.createElement('replaybtn');
        document.body.appendChild(_this.button);
        _this.y = (window.innerHeight - _this.button.offsetWidth) / 2 + 70;
        _this.button.style.transform = "translate(50px," + _this.y + "px)";
        _this.button.addEventListener("click", function () { return _this.replay(); });
        return _this;
    }
    Stop.prototype.replay = function () {
        this.game.start();
    };
    Stop.prototype.remove = function () {
        this.scoreboard.remove();
        this.background.remove();
        this.gameover.remove();
        this.button.remove();
    };
    return Stop;
}(GameObject));
var CherryCrate = (function (_super) {
    __extends(CherryCrate, _super);
    function CherryCrate() {
        var _this = _super.call(this) || this;
        _this.type = 'cherrycrate';
        _this.x = (window.innerWidth - 140) / 2 + 220;
        _this.y = window.innerHeight - 180;
        _this.createElement();
        return _this;
    }
    return CherryCrate;
}(GameObject));
var GrapeCrate = (function (_super) {
    __extends(GrapeCrate, _super);
    function GrapeCrate() {
        var _this = _super.call(this) || this;
        _this.type = 'grapecrate';
        _this.x = (window.innerWidth - 140) / 2 - 220;
        _this.y = window.innerHeight - 180;
        _this.createElement();
        return _this;
    }
    return GrapeCrate;
}(GameObject));
var StrawberryCrate = (function (_super) {
    __extends(StrawberryCrate, _super);
    function StrawberryCrate() {
        var _this = _super.call(this) || this;
        _this.type = 'strawberrycrate';
        _this.x = (window.innerWidth - 140) / 2;
        _this.y = window.innerHeight - 180;
        _this.createElement();
        return _this;
    }
    return StrawberryCrate;
}(GameObject));
var Cherry = (function (_super) {
    __extends(Cherry, _super);
    function Cherry() {
        var _this = _super.call(this) || this;
        _this.type = 'cherry';
        _this.createElement();
        return _this;
    }
    return Cherry;
}(DraggableFruit));
var Grape = (function (_super) {
    __extends(Grape, _super);
    function Grape() {
        var _this = _super.call(this) || this;
        _this.type = 'grape';
        _this.createElement();
        return _this;
    }
    return Grape;
}(DraggableFruit));
var Strawberry = (function (_super) {
    __extends(Strawberry, _super);
    function Strawberry() {
        var _this = _super.call(this) || this;
        _this.type = 'strawberry';
        _this.createElement();
        return _this;
    }
    return Strawberry;
}(DraggableFruit));
//# sourceMappingURL=main.js.map