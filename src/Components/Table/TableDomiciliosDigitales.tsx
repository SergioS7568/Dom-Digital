const TableDomiciliosDigitales = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <td>Apellido</td>
            <td>Nombre</td>
            <td>Perfil</td>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <th>1</th>
            <td>Test1</td>
            <td>Test1</td>
            <td>Test1</td>
          </tr>
          <tr className="hover">
            <th>2</th>
            <td>Test2</td>
            <td>Test2</td>
            <td>Test2</td>
          </tr>
          <tr className="hover">
            <th>3</th>
            <td>Test3</td>
            <td>Test3</td>
            <td>Test3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TableDomiciliosDigitales;
