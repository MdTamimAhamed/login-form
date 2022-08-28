import styles from './InputHandler.module.css'
const InputHandler = ({state,setState,type,autoComplete,name,placeholder})=>{

    const userInput= (e)=>{
        setState(e.target.value);
    }
    return(
        <>
            <div className={styles.input_field}>
                <input 
                value={state}
                onChange={userInput}
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                />
            </div>
        </>
    );
}
export default InputHandler;