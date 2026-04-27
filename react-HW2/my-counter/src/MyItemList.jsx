export const MyItemList = (props) => {
  return (
   <li key={`${props.element.id}`}>
            {" "}
            {props.element.task} 
            <button type="button" onClick = {(e)=> props.deleteEl(props.element.id)}>Delete</button>
          </li>
  );
};
