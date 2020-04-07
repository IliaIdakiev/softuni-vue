import axios from 'axios';
import locals from '../../locals.json';
import { LOCAL_RESOURCE } from '../../constants';

export function hasResources(to) {
  return to.meta && to.meta.resources;
}

// resources: { <component_property_name>: <api_url> }
// {
//   resources: {
//     tutorials: 'tutorials'
//   }
// }

function handleResources(resources, next, params) {
  const resourcesArray = Object.entries(resources);
  const resourcesCalls = resourcesArray.map(([key, value]) => {
    if (typeof value !== 'string') {
      const { queryParamsStringFn, urlModifierFn } = value;
      value = value.url;
      value = urlModifierFn ? urlModifierFn(value, params) : value;
      let query = queryParamsStringFn ? `?${queryParamsStringFn(params)}` : '';
      value = value + query;
    }

    if (value === LOCAL_RESOURCE) {
      return Promise.resolve([key, locals[key]]);
    }
    return axios.get(value).then(res => [key, res.data]).catch(error => [key, error])
  });

  next(vm => Promise.all(resourcesCalls).then(data => {
    data.forEach(([key, value]) => { vm[key] = value; });
  }));
}

function isSubjectRedirect(to, from) {
  return to && to.fullPath && from && from.fullPath && from.path !== '/' && to.fullPath.includes(from.fullPath);
}

const resourcesHandler = {
  data: () => ({ isFetching: false }),
  beforeRouteEnter(to, from, next) {

    if (!hasResources(to) || isSubjectRedirect(to, from)) { next(); return; }

    const resources = to.meta.resources;
    handleResources(resources, cb => {

      next(vm => {
        vm.isFetching = true;
        cb(vm).then(() => vm.isFetching = false);
      });
    }, to.params);
  }
}

export default resourcesHandler;