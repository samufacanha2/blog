import "./styles.scss";
import Form from "../../components/Form";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";

export default function EditPost() {
  const loading = useSelector((state: Storage) => state.loading);

  return (
    <>
      {loading && <Loading />}
      <div className="container">
        <div className="content">
          <Form type="edit" />
        </div>
      </div>
    </>
  );
}
