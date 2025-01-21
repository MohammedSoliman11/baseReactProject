import { ITableActions } from "../../../types/table-actions";
import InfoModalComponent from "./show-info-popup";
import ShowToastComponent from "./download-notification";
import DeleteModalComponent from "./delete-popup";
import routes from "../../../Routes/appRoutes";
import { useNavigate } from "react-router-dom";

const TableActionsComponent: React.FC<ITableActions> = (props) => {
  const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-center align-items-center'>
      {props.tableName !== "reinforcementBudget" && (
        <InfoModalComponent
          currentIndex={props.currentIndex}
          tableName={props.tableName}
        />
      )}
      <ShowToastComponent></ShowToastComponent>
      {props.tableName === "suggestedBudget" && (
        <button
          type='button'
          onClick={() => navigate(routes.ADDNEWITEM_BUDGET_ROUTE)}
          className='btn btn-light'
        >
          <i className='bi bi-pencil-fill secondary-color'></i>
        </button>
      )}
      {props.tableName === "reports" && (
        <button
          onClick={() => navigate(routes.ADDNEWITEM_REPORTS_ROUTE)}
          className='btn btn-light'
        >
          <i className='bi bi-pencil-fill secondary-color'></i>
        </button>
      )}
      {props.tableName === "annualBudget" && (
        <button
          onClick={() => navigate(routes.ADDNEWITEM_ANNUALBUDGET_ROUTE)}
          className='btn btn-light'
        >
          <i className='bi bi-pencil-fill secondary-color'></i>
        </button>
      )}
      {props.tableName === "reinforcementBudget" && (
        <button
          onClick={() => navigate(routes.ADDNEWITEM_REINFORCEMENTBUDGET_ROUTE)}
          className='btn btn-light'
        >
          <i className='bi bi-pencil-fill secondary-color'></i>
        </button>
      )}

      <DeleteModalComponent></DeleteModalComponent>
    </div>
  );
};

export default TableActionsComponent;
