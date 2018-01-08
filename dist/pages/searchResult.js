'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '查询结果'
    }, _this.components = {}, _this.data = {
      soundsrc: "http://www.gavo.t.u-tokyo.ac.jp/ojad/sound4/mp3/female/010/1053_1_1_female.mp3?20121005",
      id: 0,
      words: [],
      loading: true,
      types: ["原型", "〜ます形", "〜て形", "〜た形", "〜ない形", "〜なかった形", "〜ば形", "使役形", "被动式", "命令形", "可能形, ", "〜う形"]
    }, _this.computed = {}, _this.methods = {
      audioPlay: function audioPlay(e) {
        var id = e.currentTarget.dataset.index;
        var sex = e.currentTarget.dataset.sex;
        var sexname = sex == "1" ? "female" : "male";
        var hundert = ("00" + Math.floor(parseInt(this.id) / 100)).slice(-3);
        var src = 'http://www.gavo.t.u-tokyo.ac.jp/ojad/sound4/mp3/' + sexname + '/' + hundert + '/' + this.id + '_' + id + '_1_' + sexname + '.mp3?20121005';
        console.log(src);
        this.soundsrc = src;
        this.$apply();
        this.audioCtx.play();
      }

    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var self = this;
      this.audioCtx = wx.createAudioContext('myAudio');
      wx.request({
        url: 'http://192.168.31.233/dict?keyword=' + options.keyword, //仅为示例，并非真实的接口地址
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          console.log(res);
          self.words = res.data.words;
          self.loading = false;
          self.id = res.data.index;
          self.$apply();
        },
        fail: function fail() {}
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/searchResult'));
