import { Button } from 'antd';

function App() {
    const handleClick = () => {
        alert('Test click!');
    };

    return (
        <div>
            <Button
                className='text-3xl font-bold text-red-500'
                type='primary'
                onClick={handleClick}
            >
                Click me!
            </Button>
        </div>
    );
}

export default App;
