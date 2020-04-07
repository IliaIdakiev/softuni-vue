<template>
  <app-content>
    <template v-slot:nav>
      <ul>
        <li
          v-for="(subjectName, index) in subjects"
          :key="index"
          :class="{ active: subjectName === selectedSubjectName }"
          @click="selectSubjectHandler(subjectName)"
        >
          <a>{{subjectName}}</a>
        </li>
      </ul>
    </template>
    <template v-slot:info>
      <div class="content" v-if="selectedSubject" v-html="selectedSubject.content"></div>
    </template>
  </app-content>
</template>

<script>
import AppContent from './shared/Content';
export default {
  components: {
    AppContent
  },
  data() {
    return {
      tutorials: null
    };
  },
  methods: {
    selectSubjectHandler(subjectName) {
      const technology = this.$route.params.technology;
      const redirectPath = `/${technology}/${subjectName}`;
      if (redirectPath === this.$route.fullPath) { return; }
      this.$router.push(redirectPath)
    }
  },
  computed: {
    subjects() {
      const { tutorials } = this;
      return (tutorials || []).map(t => t.name);
    },
    selectedSubjectName() {
      return this.$route.params.subject;
    },
    selectedSubject() {
      return (this.tutorials || []).find(i => i.name === this.selectedSubjectName);
    }
  },
  watch: {
    tutorials(tutorials) {
      if (!tutorials || tutorials.length === 0 || this.selectedSubjectName) { return; }
      const [firstTutorial] = tutorials;
      const technology = this.$route.params.technology;
      this.$router.replace(`/${technology}/${firstTutorial.name}`);
    }
  }
}
</script>

<style scoped>
.content {
  text-align: left;
}
</style>