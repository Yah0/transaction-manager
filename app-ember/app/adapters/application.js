import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://localhost:5000';
  namespace = '';

  shouldReloadAll() {
    return true;
  }

  pathForType(modelName) {
    const modelNameLower = modelName.toLowerCase();
    return `${modelNameLower}s`;
  }
}
