"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[885],{8875:function(t,n,e){e.d(n,{ZP:function(){return m}});var i=e(3366),r=e(4578),o=e(2791),a=e(4164),s=!1,u=e(5545),c=e(8852),l="unmounted",p="exited",d="entering",f="entered",h="exiting",E=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var r,o=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?o?(r=p,i.appearStatus=d):r=f:r=n.unmountOnExit||n.mountOnEnter?l:p,i.state={status:r},i.nextCallback=null,i}(0,r.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===l?{status:p}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==d&&e!==f&&(n=d):e!==d&&e!==f||(n=h)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!==typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===d){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this);e&&(0,c.Q)(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:l})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,r=this.props.nodeRef?[i]:[a.findDOMNode(this),i],o=r[0],u=r[1],c=this.getTimeouts(),l=i?c.appear:c.enter;!t&&!e||s?this.safeSetState({status:f},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,u),this.safeSetState({status:d},(function(){n.props.onEntering(o,u),n.onTransitionEnd(l,(function(){n.safeSetState({status:f},(function(){n.props.onEntered(o,u)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:a.findDOMNode(this);n&&!s?(this.props.onExit(i),this.safeSetState({status:h},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],o=r[0],s=r[1];this.props.addEndListener(o,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===l)return null;var n=this.props,e=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(u.Z.Provider,{value:null},"function"===typeof e?e(t,r):o.cloneElement(o.Children.only(e),r))},n}(o.Component);function x(){}E.contextType=u.Z,E.propTypes={},E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},E.UNMOUNTED=l,E.EXITED=p,E.ENTERING=d,E.ENTERED=f,E.EXITING=h;var m=E},802:function(t,n,e){e.d(n,{Z:function(){return h}});var i=e(3366),r=e(7462),o=e(7326),a=e(4578),s=e(2791),u=e(5545);function c(t,n){var e=Object.create(null);return t&&s.Children.map(t,(function(t){return t})).forEach((function(t){e[t.key]=function(t){return n&&(0,s.isValidElement)(t)?n(t):t}(t)})),e}function l(t,n,e){return null!=e[n]?e[n]:t.props[n]}function p(t,n,e){var i=c(t.children),r=function(t,n){function e(e){return e in n?n[e]:t[e]}t=t||{},n=n||{};var i,r=Object.create(null),o=[];for(var a in t)a in n?o.length&&(r[a]=o,o=[]):o.push(a);var s={};for(var u in n){if(r[u])for(i=0;i<r[u].length;i++){var c=r[u][i];s[r[u][i]]=e(c)}s[u]=e(u)}for(i=0;i<o.length;i++)s[o[i]]=e(o[i]);return s}(n,i);return Object.keys(r).forEach((function(o){var a=r[o];if((0,s.isValidElement)(a)){var u=o in n,c=o in i,p=n[o],d=(0,s.isValidElement)(p)&&!p.props.in;!c||u&&!d?c||!u||d?c&&u&&(0,s.isValidElement)(p)&&(r[o]=(0,s.cloneElement)(a,{onExited:e.bind(null,a),in:p.props.in,exit:l(a,"exit",t),enter:l(a,"enter",t)})):r[o]=(0,s.cloneElement)(a,{in:!1}):r[o]=(0,s.cloneElement)(a,{onExited:e.bind(null,a),in:!0,exit:l(a,"exit",t),enter:l(a,"enter",t)})}})),r}var d=Object.values||function(t){return Object.keys(t).map((function(n){return t[n]}))},f=function(t){function n(n,e){var i,r=(i=t.call(this,n,e)||this).handleExited.bind((0,o.Z)(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}(0,a.Z)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(t,n){var e,i,r=n.children,o=n.handleExited;return{children:n.firstRender?(e=t,i=o,c(e.children,(function(t){return(0,s.cloneElement)(t,{onExited:i.bind(null,t),in:!0,appear:l(t,"appear",e),enter:l(t,"enter",e),exit:l(t,"exit",e)})}))):p(t,r,o),firstRender:!1}},e.handleExited=function(t,n){var e=c(this.props.children);t.key in e||(t.props.onExited&&t.props.onExited(n),this.mounted&&this.setState((function(n){var e=(0,r.Z)({},n.children);return delete e[t.key],{children:e}})))},e.render=function(){var t=this.props,n=t.component,e=t.childFactory,r=(0,i.Z)(t,["component","childFactory"]),o=this.state.contextValue,a=d(this.state.children).map(e);return delete r.appear,delete r.enter,delete r.exit,null===n?s.createElement(u.Z.Provider,{value:o},a):s.createElement(u.Z.Provider,{value:o},s.createElement(n,r,a))},n}(s.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(t){return t}};var h=f},5545:function(t,n,e){var i=e(2791);n.Z=i.createContext(null)},8852:function(t,n,e){e.d(n,{Q:function(){return i}});var i=function(t){return t.scrollTop}},7462:function(t,n,e){function i(){return i=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},i.apply(this,arguments)}e.d(n,{Z:function(){return i}})},4578:function(t,n,e){e.d(n,{Z:function(){return r}});var i=e(9611);function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,(0,i.Z)(t,n)}},168:function(t,n,e){function i(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}e.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=885.ae1f425f.chunk.js.map