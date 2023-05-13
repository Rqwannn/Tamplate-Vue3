<template>
    <div>
      <goals-list :goals="filteredGoals"></goals-list>
      <add-goal @add-goal="addGoal"></add-goal>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';

  import GoalsList from "./GoalsList.vue";
  import AddGoal from "./AddGoal.vue";
  
  export default {
    components: {
      GoalsList,
      AddGoal,
    },
    setup() {
      const goals = ref([]);
      const route = useRoute();
      const routePath = route.fullPath;
  
      const filteredGoals = computed(function() {
        return goals.value.filter(
          (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
        );
      });
  
      function addGoal(text) {
        console.log(routePath);
        const newGoal = {
          id: new Date().toISOString(),
          text: text,
        };
        goals.value.push(newGoal);
      }
  
      return {
        filteredGoals: filteredGoals,
        addGoal: addGoal,
        routePath
      };
    }
    // data() {
    //   return {
    //     goals: [],
    //   };
    // },
    // computed: {
    //   filteredGoals() {
    //     return this.goals.filter(
    //       (goal) => !goal.text.includes("Angular") && !goal.text.includes("React")
    //     );
    //   },
    // },
    // methods: {
    //   addGoal(text) {
    //     const newGoal = {
    //       id: new Date().toISOString(),
    //       text: text,
    //     };
    //     this.goals.push(newGoal);
    //   },
    // },
  };
  </script>

  <style>
    /* Menghubungkan file CSS eksternal */
    @import url('http://127.0.0.1:5173/src/assets/style.css');

  </style>