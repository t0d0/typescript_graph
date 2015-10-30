var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="d.ts/easeljs/easeljs.d.ts"/>
var ts_graph = (function (_super) {
    __extends(ts_graph, _super);
    function ts_graph() {
        _super.call(this);
        this._shape = new Array();
        this._data = new Array();
        this._canvas_size_height = 400;
        this._canvas_size_width = 600;
        this._range_min = 0;
        this._range_max = 100;
        // var shape1:createjs.Shape= new createjs.Shape();
        // shape1.graphics.beginFill("#666666").drawRect(100,100,100,100);
        // this.addChild(shape1);
    }
    ts_graph.prototype.setData = function (data) {
        this._data = data;
        for (var i = 0; i < data.length; i++)
            console.log(data[i]);
        this._data_length = data.length;
        console.log(this._data_length);
    };
    ts_graph.prototype.setSize = function (height, width) {
        this._canvas_size_height = height;
        this._canvas_size_width = width;
    };
    ts_graph.prototype.setRange = function (min, max) {
        this._range_max = max;
        this._range_min = min;
    };
    ts_graph.prototype.render = function () {
        for (var i = 0; i < this._data_length; i++) {
            this._shape[i] = new createjs.Shape();
            this._shape[i].graphics.beginFill("#555555").drawRect(this._canvas_size_height - this._canvas_size_height / 10, //画面下10%マージン
            (this._canvas_size_width / this._data_length) / 2 * (i + 1), //グラフを中心からずらす
            (this._canvas_size_width / this._data.length) / 2, //グラフの横幅,画面の50%を占める 
            -1 * (this._canvas_size_height / (this._range_max - this._range_min) * (this._data[i] - this._range_min))); //グラフの長さ
            this.addChild(this._shape[i]);
        }
    };
    return ts_graph;
})(createjs.Container);
;
/// <reference path="graph.ts"/>
window.onload = function () {
    var stage = new createjs.Stage("canvas");
    var data = [10, 20, 30, 20, 10];
    var g = new ts_graph();
    stage.addChild(g);
    g.setData(data); //データをセット
    g.setRange(0, 50); //グラフの範囲をセット（0 ~ 50）
    g.setSize(stage.canvas["height"], stage.canvas["width"]); //グラフの描画範囲をセット(width, height)
    g.render(); //グラフのレンダリング
    stage.update();
};
