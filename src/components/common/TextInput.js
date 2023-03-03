export const TextInput = (props) => {
    return (
      <div>
        <label htmlFor={props.id} className='d-block mb-1'>
          {props.id}
        </label>
        <input
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          className='d-inline-block w-50 mb-3 px-2 rounded border-secondary'
        />
      </div>
    );
  };