import './Radio.css'

const Radio = ({text, name, checked, onChange, colorVars}) => {
    return (
        <>
            <div className='Answer' style={colorVars}>
                <input 
                    type="radio"
                    id={`${name}+${text}`}
                    checked={checked}
                    name={name}
                    onChange={onChange} 
                />
                <label 
                    htmlFor={`${name}+${text}`}
                >
                    {text}
                </label>
            </div>
        </>

    );
};

export default Radio