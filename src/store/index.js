import Vue from "vue";
import Vuex from "vuex";
import Login from "./login";
import Chat from "./chat";
import FriendModule from "./friendModule";
import Group from "./group";
import Emedia from "./emedia";
import Tag from "./tagsView"
import Rou from "./permission"
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		login: Login,
		chat: Chat,
		friendModule: FriendModule,
		group: Group,
		emedia: Emedia,
		tag: Tag,
		rou: Rou
	}
});

// store;
