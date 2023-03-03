export const TextArea = (props) => {
    return (
      <>
        <label htmlFor={props.id} className='d-block mb-1'>
          {props.id}
        </label>
        <textarea
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className='d-inline-block w-100 mb-3 px-2 rounded border-secondary'
          rows={props.rows}
        />
      </>
    );
  };