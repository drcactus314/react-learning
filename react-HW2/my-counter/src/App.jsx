import { MyListOfTasks } from "./MyListOfTasks";
import { MyClassComponent } from "./MyClassComponent";

function App() {
  const isMyList = false;
  return (
    <>
      <div>My TO DO List</div>
      {isMyList ? <MyClassComponent /> : <MyListOfTasks />}
    </>
  );
}

export default App;
