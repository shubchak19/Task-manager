import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import withLazyLoad from "./hoc/withLazyLoad";
import { useAppDispatch } from "./redux/hooks";
import { fetchListsFromDB } from "./redux/slices/listSlice";
const DisplayPage = withLazyLoad(()=> import("@/pages/DisplayPage"));

function App() {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchListsFromDB());
  },[dispatch])

  return (
    <section className="w-[100dvw] h-[100dvh] flex relative">
      <Navbar />
      <DisplayPage/>
    </section>
  );
}

export default App;
