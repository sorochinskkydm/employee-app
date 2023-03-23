import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn-light btn"
                    type="button">
                    Все сотрудники
            </button>
            <button className="btn-outline-light btn"
                    type="button">
                    На повышение
            </button>
            <button className="btn-outline-light btn"
                    type="button">
                    З/п больше 1000$
            </button>
        </div>
    );
}

export default AppFilter;