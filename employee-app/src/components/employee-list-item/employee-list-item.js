import "./employee-list-item.css";
import { Component } from "react";

class EmployeeListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            rise: false
        }
    }

    toIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    toRise = () => {
        this.setState(state => ({
            rise: !state.rise
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props;
        const {increase, rise} = this.state;
        let classNames = "list-group-item d-flex justify-content-between"
        if(increase) {
            classNames += " increase";
        }else if (rise) {
            classNames += " like";
        }
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.toRise}>{name}</span>
                <input type="text"
                    className="list-group-item-input" 
                    defaultValue={salary}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" 
                            className="btn-cookie btn-sm"
                            onClick={this.toIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button" 
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
        }
}

export default EmployeeListItem;