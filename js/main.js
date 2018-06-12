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
        new AppleCrate();
        new PineappleCrate();
        new GrapeCrate();
    }
    return CrateManager;
}());
var DraggableFruit = (function () {
    function DraggableFruit() {
    }
    DraggableFruit.prototype.createElement = function () {
        var _this = this;
        var tree = document.getElementsByTagName('tree')[0];
        this.element = document.createElement(this.type);
        tree.appendChild(this.element);
        this.x = Math.floor(Math.random() * tree.clientWidth);
        this.y = Math.floor(Math.random() * tree.clientHeight);
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
    };
    DraggableFruit.prototype.stopDragging = function (e) {
        window.removeEventListener("mousemove", this.moveBind);
        e.preventDefault();
    };
    return DraggableFruit;
}());
var FruitManager = (function () {
    function FruitManager() {
        new Apple();
        new Pineapple();
        new Grape();
    }
    return FruitManager;
}());
var Game = (function () {
    function Game() {
        this.startscreen = new StartScreen(this);
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    Game.prototype.startGame = function () {
        new StartGame();
        this.startscreen.removeButton();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var GameObject = (function () {
    function GameObject() {
    }
    GameObject.prototype.createElement = function () {
        this.element = document.createElement(this.type);
        document.body.appendChild(this.element);
        this.element.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObject;
}());
var StartGame = (function () {
    function StartGame() {
        new Tree();
        new CrateManager();
        new FruitManager();
    }
    return StartGame;
}());
var StartScreen = (function (_super) {
    __extends(StartScreen, _super);
    function StartScreen(game) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.element = document.createElement('button');
        document.body.appendChild(_this.element);
        _this.element.innerHTML = 'start';
        _this.x = (window.innerWidth - _this.element.offsetWidth) / 2;
        _this.y = (window.innerHeight - _this.element.offsetHeight) / 2;
        _this.element.style.transform = "translate(" + _this.x + "px," + _this.y + "px)";
        _this.element.addEventListener("click", function () { return _this.game.startGame(); });
        return _this;
    }
    StartScreen.prototype.removeButton = function () {
        this.element.remove();
    };
    return StartScreen;
}(GameObject));
var Tree = (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = _super.call(this) || this;
        _this.element = document.createElement('tree');
        document.body.appendChild(_this.element);
        _this.x = (window.innerWidth - _this.element.offsetWidth) / 2;
        _this.y = (window.innerHeight - _this.element.offsetHeight) / 2 - 80;
        _this.element.style.transform = "translate(" + _this.x + "px," + _this.y + "px)";
        return _this;
    }
    return Tree;
}(GameObject));
var AppleCrate = (function (_super) {
    __extends(AppleCrate, _super);
    function AppleCrate() {
        var _this = _super.call(this) || this;
        _this.type = 'applecrate';
        _this.x = (window.innerWidth - 140) / 2;
        _this.y = (window.innerHeight + 450) / 2;
        _this.createElement();
        return _this;
    }
    return AppleCrate;
}(GameObject));
var GrapeCrate = (function (_super) {
    __extends(GrapeCrate, _super);
    function GrapeCrate() {
        var _this = _super.call(this) || this;
        _this.type = 'applecrate';
        _this.x = (window.innerWidth - 140) / 2 - 200;
        _this.y = (window.innerHeight + 450) / 2;
        _this.createElement();
        return _this;
    }
    return GrapeCrate;
}(GameObject));
var PineappleCrate = (function (_super) {
    __extends(PineappleCrate, _super);
    function PineappleCrate() {
        var _this = _super.call(this) || this;
        _this.type = 'applecrate';
        _this.x = (window.innerWidth - 140) / 2 + 200;
        _this.y = (window.innerHeight + 450) / 2;
        _this.createElement();
        return _this;
    }
    return PineappleCrate;
}(GameObject));
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        var _this = _super.call(this) || this;
        _this.type = 'apple';
        _this.createElement();
        return _this;
    }
    return Apple;
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
var Pineapple = (function (_super) {
    __extends(Pineapple, _super);
    function Pineapple() {
        var _this = _super.call(this) || this;
        _this.type = 'pineapple';
        _this.createElement();
        return _this;
    }
    return Pineapple;
}(DraggableFruit));
//# sourceMappingURL=main.js.map