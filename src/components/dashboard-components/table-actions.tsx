import { ITableActions } from "../../types/table-actions";

const TableActionsComponent: React.FC<ITableActions> = ({ show }) => {
  return (
    <div>
      {show === true ? (
        <button className='btn'>
          <i className='bi bi-eye-fill text-success'></i>
        </button>
      ) : (
        ""
      )}
      <button className='btn'>
        <i className='bi bi-download text-info'></i>
      </button>

      <button className='btn'>
        <i className='bi bi-pencil-fill secondary-color'></i>
      </button>

      <button className='btn'>
        <i className='bi bi-trash-fill brandMain-color '></i>
      </button>
    </div>
  );
};

export default TableActionsComponent;
