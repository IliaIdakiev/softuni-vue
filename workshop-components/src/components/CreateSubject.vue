<template>
  <app-content>
    <template v-slot:nav>
      <ul>
        <li
          v-for="(item, index) in subjects"
          :key="index"
          :class="{ active: index === selectedSubjectIndex }"
          @click="selectSubjectHandler(index)"
        >
          <a>{{item.name}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:info>
      <div class="form-group">
        <input placeholder="Technology subject..." type="text" id="subject" v-model="subject" />
      </div>
      <vue-editor v-model="htmlContent" />
      <select name="technologies" id="technologies" v-model="technologyId">
        <option :value="null" selected>Select a technology...</option>
        <option v-for="item in technologies" :key="item.id" :value="item.id">{{item.name}}</option>
      </select>
      <button class="btn" @click="createSubjectHandler()">Create</button>
      <h3>Content preview</h3>
      {{$data}}
      <div class="content-preview"></div>
    </template>
  </app-content>
</template>

<script>
import AppContent from './shared/Content';
import { VueEditor } from "vue2-editor";

export default {
  components: {
    AppContent,
    VueEditor
  },
  props: {
    subjects: {
      type: Array,
      required: true
    },
    technologies: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedSubjectIndex: 0,
      htmlContent: '',
      technologyId: null,
      subject: ''
    };
  },
  methods: {
    selectSubjectHandler(idx) {
      this.selectedSubjectIndex = idx;
    },
    createSubjectHandler() {
      const { technologyId, subject, htmlContent } = this.$data;
      this.$emit('create', { technologyId, subject, htmlContent });
      this.technologyId = null;
      this.subject = '';
      this.htmlContent = '';
    }
  },
  computed: {
    selectedSubject() {
      return this.subjects[this.selectedSubjectIndex];
    }
  }
}
</script>

<style scoped>
</style>