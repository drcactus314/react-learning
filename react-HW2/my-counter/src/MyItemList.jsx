export const MyItemList = (props) => {
  return (
   <li key={`${props.element} ${props.index}`}>
            {" "}
            {props.element} {props.index+1}
          </li>
  );
};
