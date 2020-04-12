var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../..");var _storybookState=require("@sambego/storybook-state");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _storiesOf=require("../../../storybook/helpers/storiesOf");var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Select/SelectOutlined/SelectOutlined.stories.js";var store=new _storybookState.Store({selectedItem:'',selectedItemTwo:''});var data=[{id:1,name:'Option 1'},{id:2,name:'Option 2'},{id:3,name:'Option 3'},{id:4,name:'Option 4'},{id:5,name:'Option 5'},{id:6,name:'Option 6'},{id:7,name:'Option 7'},{id:8,name:'Option 8'},{id:9,name:'Option 9'},{id:10,name:'Option 10'},{id:11,name:'Option 11'},{id:12,name:'Option 12'},{id:13,name:'Option 13'},{id:14,name:'Option 14'},{id:15,name:'Option 15'},{id:16,name:'Option 16'},{id:17,name:'Option 17'},{id:18,name:'Option 18'},{id:19,name:'Option 19'}];var _default=(0,_storiesOf.storiesOf)('Components|Select/Outlined',module).addParameters({jest:['SelectOutlined']}).add('simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:40}},_react.default.createElement(_Header.default,{title:'Outlined Select',__source:{fileName:_jsxFileName,lineNumber:41}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:43}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:45}},_react.default.createElement(_.Select,{type:'outlined',label:'Select',menuItems:data.slice(0,4),onSelect:function onSelect(value){return store.set({selectedItem:value.name});},selectedItem:state.selectedItem,__source:{fileName:_jsxFileName,lineNumber:46}}),_react.default.createElement(_.Select,{type:'outlined',label:'Select',menuItems:data,onSelect:function onSelect(value){return store.set({selectedItemTwo:value.name});},selectedItem:state.selectedItemTwo,textFieldProps:{error:true,helperText:'error',containerStyle:{marginTop:40}},__source:{fileName:_jsxFileName,lineNumber:53}}));}));}).add('dense',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:71}},_react.default.createElement(_Header.default,{title:'Outlined Select',__source:{fileName:_jsxFileName,lineNumber:72}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:74}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:76}},_react.default.createElement(_.Select,{type:'outlined',label:'Select',menuItems:data,onSelect:function onSelect(value){return store.set({selectedItem:value.name});},selectedItem:state.selectedItem,textFieldProps:{dense:true},__source:{fileName:_jsxFileName,lineNumber:77}}),_react.default.createElement(_.Select,{type:'outlined',label:'Select',menuItems:data,onSelect:function onSelect(value){return store.set({selectedItemTwo:value.name});},selectedItem:state.selectedItemTwo,textFieldProps:{error:true,dense:true},__source:{fileName:_jsxFileName,lineNumber:87}}));}));}).add('leading icon',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:104}},_react.default.createElement(_Header.default,{title:'Outlined Select',__source:{fileName:_jsxFileName,lineNumber:105}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:107}},function(state){return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:109}},_react.default.createElement(_.Select,{type:'outlined',label:'Select',menuItems:data,onSelect:function onSelect(value){return store.set({selectedItem:value.name});},selectedItem:state.selectedItem,textFieldProps:{leadingIcon:_react.default.createElement(_.Icon,{name:'date-range',size:24,color:'#6e6e6e',__source:{fileName:_jsxFileName,lineNumber:118}})},__source:{fileName:_jsxFileName,lineNumber:110}}));}));});exports.default=_default;