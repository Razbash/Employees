import './app-info.css';

const AppInfo = ({employersCount, employersIncreased}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employersCount}</h2>
            <h2>Премию получат: {employersIncreased}</h2>
        </div>
    )
}

export default AppInfo;