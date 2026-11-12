function App() {
    function showMessage() {
        alert('Button Clicked!');
    }

    return (
        <div>
            <h1>Event Handling</h1>
            <button onClick={showMessage}>
                Click Me
            </button>
        </div>
    );
}

export default App;