export const CustomForm = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <todo 
            className="todo"
            onSubmit={handleFormSubmit}
        >
            <div className="wrapper">
                   
            </div>            
        </todo>
    );
}

export default CustomForm;