const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      taskVisible: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.taskVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      console.log(this.tasks);
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleList() {
      this.taskVisible = !this.taskVisible;
    },
  },
});

app.mount("#assignment");
