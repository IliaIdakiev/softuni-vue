import Vue from 'vue';

Vue.directive('event', {
  bind(el, binding) {
    el.addEventListener(binding.arg, binding.value);
  },
  unbind(el, binding) {
    el.removeEventListener(binding.arg, binding.value);
  }
});
