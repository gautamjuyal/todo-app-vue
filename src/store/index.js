import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "lakdsjfjkda",
        text: "akldsfj alskdjf aklsdjf laksdj flakjds fklaj sdfklalsdfklasdflkakdj flkaj dsklfj laksdflakd fsda fj dkf",
        isDone: true,
      },
      {
        id: 2,
        title: "lakdsjfjkda",
        text: "akldsfj alskdjf aklsdjf laksdj flakjds fklaj sdfklalsdfklasdflkakdj flkaj dsklfj laksdflakd fsda fj dkf",
        isDone: false,
      },
      {
        id: 3,
        title: "lakdsjfjkda",
        text: "akldsfj alskdjf aklsdjf laksdj flakjds fklaj sdfklalsdfklasdflkakdj flkaj dsklfj laksdflakd fsda fj dkf",
        isDone: false,
      },
      {
        id: 4,
        title: "lakdsjfjkda",
        text: "akldsfj alskdjf aklsdjf laksdj flakjds fklaj sdfklalsdfklasdflkakdj flkaj dsklfj laksdflakd fsda fj dkf ladsj flkadsj fkljaldskjfjalkdfjk aldsj lfkjakldj flkj askdlfj klasdj flkaj dfl;kjasdflkj adsklf lkadsj fklj asdlkfjlkadsj fiweroiewjr oiweu roiquwetowutis jfd;lkad sf;lkads ufoiwejflkasdf iasfoiweufklasdjf lkads foiwefkasdljflkas",
        isDone: false,
      },
    ],
  },
  getters: {},
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    UPDATE_TODO_DATA(state, todo) {
      let prevData = state.todos.find((t) => t.id === todo.id);
      prevData.title = todo.title;
      prevData.text = todo.text;
    },
    UPDATE_TODO_STATUS(state, todo) {
      let prevData = state.todos.find((t) => t.id === todo.id);
      prevData.isDone = todo.isDone;
    },
  },
  actions: {
    addData({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    updateData({ commit }, todo) {
      commit("UPDATE_TODO_DATA", todo);
    },
    updateStatus({ commit }, todo) {
      commit("UPDATE_TODO_STATUS", todo);
    },
  },
  modules: {},
});
