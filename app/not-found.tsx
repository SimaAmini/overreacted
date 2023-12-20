import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <p className="font-bold text-lg text-center">Are you lost?</p>
      <Link className="btn btn-info" href={"/"}>
        Let me take you home
      </Link>
    </div>
  );
};

export default NotFound;
