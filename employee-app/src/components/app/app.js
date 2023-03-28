import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/seach-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';
import './app.css';
import { Component } from 'react';


class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[ {name:"alex", salary: 10000, isEncrease: false, uniqueKey: 1},
                   {name:"mary", salary: 800, isEncrease: false, uniqueKey: 2},
                   {name:"ann", salary: 900, isEncrease: false, uniqueKey: 3}
                 ]
        }
    }

    deleteItem = (uniqueKey) => {
        this.setState((state) => {
            const indexItem = state.data.find(item => {
                return item.uniqueKey === uniqueKey;
            });
            return {
                data: state.data.filter(item => item.uniqueKey !== uniqueKey)
            }
        });
    }


    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeeList data={data}
                              onDelete={this.deleteItem}/>
                <EmployeeAddForm/>
            </div>
        );
    }
}

export default App;