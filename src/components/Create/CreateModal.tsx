import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
};

const validationSchema = z.object({
  comment: z.string({
    required_error: "required",
    invalid_type_error: " must be a string",
  }),
});

enum Category {
  Anime = "ANIME",
  Manga = "MANGA",
  Music = "MUSIC",
  Podcast = "PODCAST",
  Movie = "MOVIE",
  Book = "BOOK",
  Game = "GAME",
  TV = "TV",
}
type ValidationSchemaType = z.infer<typeof validationSchema>;

function CreateModal({ open, setOpen, isLoading }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async (data: ValidationSchemaType) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <Transition appear show={open} as={Fragment}>
          <Dialog
            onClose={() => setOpen(false)}
            as="div"
            className="relative z-10"
          >
            <div className="fixed inset-0 overflow-y-auto ">
              <div className="flex min-h-full items-center justify-center p-4 text-center ">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl  bg-black p-6 text-left align-middle text-green-500 shadow-xl transition-all">
                    <div className="flex flex-row justify-between">
                      <Dialog.Title className="text-lg font-light ">
                        new post
                      </Dialog.Title>
                      <button onClick={() => setOpen(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <Dialog.Description></Dialog.Description>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex w-full flex-col  p-4">
                        <div className="">
                          <textarea
                            {...(register("comment"), { required: true })}
                            placeholder="comment"
                            className="focus:ring-burp-500 w-full resize-none rounded-md bg-gray-500 p-4 text-white outline-none focus:placeholder-opacity-25 focus:ring "
                          />
                          {errors?.comment && (
                            <p role="alert" className="text-red-800">
                              {errors?.comment?.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <select>
                            {Object.values(Category).map((category) => (
                              <option value={category} key={category}>
                                {category}
                              </option>
                            ))}
                            {/* <option value={Category.Anime}>Anime</option>
                            <option value={Category.Manga}>Manga</option>
                            <option value={Category.Music}>Music</option>
                            <option value={Category.Podcast}>Podcast</option>
                            <option value={Category.Movie}>Movie</option>
                            <option value={Category.Book}>Book</option>
                            <option value={Category.Game}>Game</option>
                            <option value={Category.TV}>TV</option> */}
                          </select>
                        </div>
                        <div className="mt-2 flex  justify-end">
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-burp-500 hover:bg-burp-700 h-10 items-center rounded-md px-3 align-middle font-bold transition-colors "
                          >
                            submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

export default CreateModal;
