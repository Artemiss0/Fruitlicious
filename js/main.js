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
    };
    return GameObject;
}());
var StartGame = (function () {
    function StartGame() {
        console.log('lets gooo');
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
//# sourceMappingURL=main.js.map