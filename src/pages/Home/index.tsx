import "./styles.scss";
import AddButton from "../../components/AddButton";
import PostList from "../../components/PostList";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";
import EasterEgg from "../../components/EasterEgg";

export default function Home() {
  const loading = useSelector((state: Storage) => state.loading);
  return (
    <>
      {loading && <Loading />}
      <div className="container">
        <div id="Home" className="content">
          <PostList />
          <AddButton />
          <EasterEgg />
        </div>
      </div>
    </>
  );
}
