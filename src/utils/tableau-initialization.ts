import '../assets/js/tableauwdc-2.0.latest.js';

declare const tableau: any;

const tableauConnector = tableau.makeConnector();

tableauConnector.getSchema = function (schemaCallback) {
  const schema = tableau.connectionData.schema;
  schemaCallback([schema]);
};

tableauConnector.getData = function (table, doneCallback) {
  const data = tableau.connectionData.data;
  table.appendRows(data);
  doneCallback();
};

tableau.registerConnector(tableauConnector);
