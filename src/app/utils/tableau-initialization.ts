import '../../assets/js/tableauwdc-2.0.latest';

declare const tableau: any;

const tableauConnector = tableau.makeConnector();

tableauConnector.getSchema = function (schemaCallback) {
  const schema = JSON.parse(tableau.connectionData).schema;
  schemaCallback([schema]);
};

tableauConnector.getData = function (table, doneCallback) {
  const data = JSON.parse(tableau.connectionData).data;
  table.appendRows(data);
  doneCallback();
};

tableau.registerConnector(tableauConnector);
