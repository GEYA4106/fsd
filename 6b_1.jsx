import './App.css';

function App() {
    const students = ['Ram', 'Sita', 'Geya'];

    return (
        <div className="box">
            <h1>Student List</h1>

            {students.map((name, index) => (
                <p key={index}>{name}</p>
            ))}
        </div>
    );
}

export default App;