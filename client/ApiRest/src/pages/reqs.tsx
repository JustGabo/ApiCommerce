import { Link } from "react-router-dom";
import { Braces } from "lucide-react";
import PostForm from '../components/post'
import DeleteForm from '../components/delete'
import PatchForm from '../components/patch'

function Reqs() {
  return (
    <div className="pt-5">
      <Link to={"http://localhost:5173"}>
        <Braces />
      </Link>

      <main className="flex flex-col gap-20 my-32">
        <PostForm />
        <DeleteForm />
        <PatchForm />
      </main>
    </div>
  );
}

export default Reqs;
