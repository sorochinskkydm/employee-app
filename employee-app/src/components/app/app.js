import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/seach-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';
import './app.css';


function App() {

    const data = [
        {name:"alex", salary: 10000, isEncrease: true, uniqueKey: 1},
        {name:"mary", salary: 800, isEncrease: false, uniqueKey: 2},
        {name:"ann", salary: 900, isEncrease: true, uniqueKey: 3}
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeeList data={data}/>
            <EmployeeAddForm/>
        </div>
    );
}

export default App;