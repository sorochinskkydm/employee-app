import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/seach-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';
import './app.css';
import { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++,
            rise: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, property) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => {
                return item.id === id
            });
            const old = data[index];
            const newItem = {...old, increase: !old.increase}
            const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }
    


    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length; 
        return (
            <div className="app">
                <AppInfo employees={employees}
                         increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                
                <EmployeeList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeeAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}


export default App;