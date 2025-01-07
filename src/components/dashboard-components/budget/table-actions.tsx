import { ITableActions } from "../../../types/table-actions";
import InfoModalComponent from "./show-info-popup";
import ShowToastComponent from "./download-notification";
import DeleteModalComponent from "./delete-popup";
const TableActionsComponent: React.FC<ITableActions> = (props) => {
  // console.log(pros.currentIndex);
  // show={tableName === "reinforcementBudget" ? false : true}
  // console.log(props.tableName);
  return (
    <div className='d-flex justify-content-center align-items-center'>
      {props.tableName !== "reinforcementBudget" ? (
        <InfoModalComponent
          currentIndex={props.currentIndex}
          tableName={props.tableName}
        />
      ) : (
        ""
      )}
      <ShowToastComponent></ShowToastComponent>
      <button className='btn btn-light'>
        <i className='bi bi-pencil-fill secondary-color'></i>
      </button>

      <DeleteModalComponent></DeleteModalComponent>
    </div>
  );
};

export default TableActionsComponent;
