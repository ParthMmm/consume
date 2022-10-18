import { useState } from "react";
import CreateModal from "./CreateModal";

function CreateButton({}) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((open) => !open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-24 w-24"
        >
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </button>
      <CreateModal open={open} setOpen={setOpen} isLoading={false} />
    </div>
  );
}

export default CreateButton;
