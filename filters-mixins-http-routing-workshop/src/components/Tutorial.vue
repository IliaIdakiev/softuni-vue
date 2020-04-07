<template>
  <app-content>
    <template v-slot:info>
      <form @submit.prevent>
        <div class="form-group">
          <input placeholder="Technology subject..." type="text" id="subject" v-model="name" />
        </div>
        <vue-editor v-model="htmlContent" />
        <select name="technologies" id="technologies" v-model="technology">
          <option :value="null" selected>Select a technology...</option>
          <option
            v-for="item in technologies"
            :key="item.id"
            :value="item.name"
          >{{item.displayName}}</option>
        </select>
        <button class="btn" @click="createSubjectHandler()">{{ isEditMode ? 'Save' : 'Create' }}</button>
        <h3>Content preview</h3>
        <div class="content-preview"></div>
      </form>
    </template>
  </app-content>
</template>

<script>
import axios from 'axios';
import AppContent from './shared/Content';
import { VueEditor } from "vue2-editor";

export default {
  components: {
    AppContent,
    VueEditor
  },
  props: {
    technologies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tutorial: null,
      htmlContent: '',
      technology: null,
      name: ''
    };
  },
  methods: {
    createSubjectHandler() {
      const { technology, name, htmlContent: content } = this.$data;
      const id = this.$route.params.id;
      let tutorialData = { technology, name, content, id };

      const save = id ? axios.put(`tutorials/${id}`, tutorialData) : axios.post('tutorials', tutorialData)

      save.then(() => {
        this.technology = null;
        this.name = '';
        this.htmlContent = '';
      });
    }
  },
  computed: {
    isEditMode() { return this.$route.params.id }
  },
  watch: {
    tutorial(tutorial) {
      if (!tutorial || tutorial.length === 0) { return; }
      [tutorial] = tutorial;
      this.name = tutorial.name;
      this.htmlContent = tutorial.content;
      this.technology = tutorial.technology;
    }
  }
}
</script>

<style scoped>
</style>