import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { doc, onSnapshot, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const Discord = () => {
  const { user } = UserAuth();
  const [ID, setID] = useState("");
  const [isActive, setIsActive] = useState();
  const [isdc_ID, setDC_ID] = useState();

  const [isCopy, setIsCopy] = useState("Copy");
  const discord_server_link = "https://discord.gg/H8TzVQHQ";

  useEffect(() => {
    const getData = async () => {
        const docRef = doc(db, "users", `${user?.email}`);
        const docSnap = await getDoc(docRef);
        let status = ['status']
        console.log("status: "+docSnap.data()?.status);
        setIsActive(docSnap.data()?.status);
        setDC_ID(docSnap.data()?.dc_id);
      };
      getData();
  }, [user]);

  const statusPath = doc(db, "users", `${user?.email}`);
  const handleStatus = async () => {
    try {
      await updateDoc(statusPath, {
        status: !isActive,
      });
    } catch (e) {
      console.log(e.message);
    }
    setIsActive(!isActive);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(statusPath, {
        dc_id: ID,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="my-12 py-8 rounded-div">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="text-2xl font-bold">Discord</h1>
            <div>
              <p>Turn on Discord noftication </p>
            </div>
          </div>

          <div>
            {console.log(isActive)}
            <button>
              <label
                for="green-toggle"
                class="inline-flex relative items-center mr-5 cursor-pointer"
              >
                <input
                  checked={isActive}
                  onClick={() => {
                    handleStatus();
                  }}
                  type="checkbox"
                  value=""
                  id="green-toggle"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 
                peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full 
                peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
                after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
                ></div>
              </label>
            </button>
          </div>
        </div>
        <div
          className={isActive ? "my-3" : "my-3 opacity-50  cursor-not-allowed"}
        >
          <div className="flex justify-between items-center ">
            <h1
              className={
                isActive
                  ? "flex text-sm font-bold "
                  : "flex text-sm font-bold opacity-50 hidden cursor-not-allowed"
              }
            >
              Copy discord server link!
            </h1>

            <h1
              className={
                isActive
                  ? "flex text-sm font-bold "
                  : "flex text-sm font-bold opacity-50 hidden cursor-not-allowed"
              }
            >
              {discord_server_link}
            </h1>

            <CopyToClipboard
              text={discord_server_link}
              onCopy={() => {
                setIsCopy("Copied");
                setInterval(() => setIsCopy("Copy"), 1000);
              }}
            >
              <button
                type="button"
                className={
                  isActive
                    ? "text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    : "opacity-50 hidden cursor-not-allowed text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 "
                }
              >
                {isCopy}
              </button>
            </CopyToClipboard>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={isActive ? "flex" : "hidden"}>
              <input
                onChange={(e) => setID(e.target.value)}
                type="tel"
                id="phone"
                class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-[43px] p-2.5 bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={isdc_ID ? isdc_ID : "Your ID"}
                required
              />
              <button
                type="submit"
                className={
                  isActive
                    ? "text-green-700 mx-[10px] hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    : "opacity-50 hidden cursor-not-allowed text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 "
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Discord;
