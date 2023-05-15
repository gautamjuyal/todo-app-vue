import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find((t) => t.id === id);
    },
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    ADD_TODO(state, todo) {
      state.todos = [todo, ...state.todos];
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
    setTodos({ commit }, todos) {
      commit("SET_TODOS", todos);
    },
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
