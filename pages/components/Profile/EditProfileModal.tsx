/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { GetProfileUser } from "../Types";
import axios from "axios";
import { frontEndBaseUrl } from "../../utils/baseUrl";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type Props = {
  setToogleEditForm: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      id?: number;
    }>
  >;
  userData: GetProfileUser;
};

const EditProfileModal = ({ setToogleEditForm, userData }: Props) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    bio: userData.bio,
    category: userData.category,
    email: userData.email,
    fullname: userData.fullname,
    image: "",
    mobile: userData.mobile,
    id: userData.id,
  });

  function getExtension(filename: any) {
    return filename.split(".").pop();
  }

  const setFileToBase = (file: any) => {
    if (getExtension(file["name"]).toLowerCase() === "jpg") {
      clearErrors("image");
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setInputValues((prev: any) => ({
          ...prev,
          image: reader.result,
        }));
      };
    } else {
      setError("image", {
        type: "custom",
        message: "Please use jpeg image format....",
      });
    }
  };

  const handleInputValues = useCallback((e: any) => {
    setInputValues((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleEditSubmit = useCallback(() => {
    if (Object.keys(errors).length === 0) {
      axios
        .put(`${frontEndBaseUrl}/api/profile/updateprofile`, inputValues)
        .then((res) => {
          console.log(res);

          if (res.data.status === "Success") {
            setToogleEditForm({
              status: false,
              id: 0,
            });
            router.replace(`/profile/${userData.id}`);
          }
        });
    }
  }, [errors, inputValues, router, setToogleEditForm, userData.id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 10 }}
      transition={{ duration: 0.5 }}
      className="z-20 w-[90%] md:w-[60%] max-h-[600px] fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] overflow-auto h-auto md:p-10 p-7 bg-gray-200  rounded-lg shadow-2xl"
    >
      <div className="flex justify-end">
        <AiOutlineCloseCircle
          className="text-4xl cursor-pointer"
          onClick={() =>
            setToogleEditForm({
              status: false,
              id: 0,
            })
          }
        />
      </div>
      <h1 className="text-center font-semibold text-2xl">Edit Profile</h1>
      <div className="flex-col gap-4 border-b-2 py-7 border-black">
        <form onSubmit={handleSubmit(handleEditSubmit)}>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2">
              Name
            </label>
            <input
              name="fullname"
              onChange={handleInputValues}
              defaultValue={inputValues.fullname}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your name here..."
            ></input>
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2">
              Mobile
            </label>
            <input
              name="mobile"
              onChange={handleInputValues}
              defaultValue={inputValues.mobile}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your mobile here..."
            ></input>
            1{" "}
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2">
              Email
            </label>
            <input
              name="email"
              onChange={handleInputValues}
              defaultValue={inputValues.email}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your email here..."
            ></input>
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2">
              Category
            </label>
            <select
              name="category"
              onChange={handleInputValues}
              defaultValue={inputValues.category}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            >
              <option value="">{inputValues.category}</option>
              <option value="Travel">Travel</option>
              <option value="Tech">Tech</option>
              <option value="Entertainment">Entertainments</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Bio
            </label>
            <textarea
              name="bio"
              onChange={handleInputValues}
              defaultValue={inputValues.bio}
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your bio here..."
            ></textarea>
          </div>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ml-2">
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={(e) => {
                setFileToBase(e.target.files[0]);
              }}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your email here..."
            ></input>
            {errors.image && (
              <span className="text-red-600">{errors.image.message}</span>
            )}
          </div>
          <button
            className="mt-3 px-8 bg-green-500 py-2 rounded-md font-medium"
            onClick={handleEditSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default EditProfileModal;
