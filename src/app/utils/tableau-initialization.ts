import '../../assets/js/tableauwdc-2.0.latest';

const tableauConnector = window['tableau'].makeConnector();

tableauConnector.getSchema = function (schemaCallback) {
  const schema = JSON.parse(window['tableau'].connectionData).schema;
  schemaCallback([schema]);
};

tableauConnector.getData = function (table, doneCallback) {
  const data = JSON.parse(window['tableau'].connectionData).data;
  table.appendRows(data);
  doneCallback();
};

window['tableau'].registerConnector(tableauConnector);