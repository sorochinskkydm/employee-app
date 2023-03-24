import EmployeeListItem from "../employee-list-item/employee-list-item";
import "./employee-list.css";

const EmployeeList = ({data}) => {

    const elements = data.map(item => {
        return <EmployeeListItem key={item.uniqueKey} name={item.name} salary={item.salary} encrease={item.isEncrease}/>
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeeList;