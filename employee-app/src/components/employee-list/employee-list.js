import EmployeeListItem from "../employee-list-item/employee-list-item";
import "./employee-list.css";

const EmployeeList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {uniqueKey} = item;
        return <EmployeeListItem 
                key={item.uniqueKey} 
                name={item.name} 
                salary={item.salary} 
                increase={item.isEncrease}
                onDelete={() => {onDelete(uniqueKey)}}/>
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployeeList;