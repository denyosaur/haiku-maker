'use client'

import React, { useState } from 'react';

import { sendToChatGPT } from '../../lib/sendToChatGPT';

const FormInputs = () => {
  const [inputValue, setInputValue] = useState(['', '', '']);
  const [topicNum, setTopicNum] = useState(1);

  const handleTopicAdd = () => {
    if (topicNum < 3) setTopicNum(topicNum + 1);
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const index: number = Number(evt.target.getAttribute("data-index"));
    let arr: string[] = [...inputValue];
    arr[index] = evt.target.value;
    setInputValue(arr);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    sendToChatGPT(inputValue);
  };

  return (
    <div className="flex">
      <form className="flex flex-col items-end h-96" onSubmit={handleSubmit}>
        {Array.from(Array(topicNum)).map((x: void, index: number) => {
          return (
            <label key={index}>
              <div className="leading-7">
                {`Enter Topic #${index + 1}`}
              </div>
              <input
                className="border border-slate-300 p-2 rounded-md shadow-sm focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300"
                id={'topic' + index}
                data-index={index}
                maxLength={20}
                onChange={handleInputChange}
                type="text"
                value={inputValue[index]}
              />
            </label>)
        })}
        {topicNum === 3 ?
          <></> :
          <div
            className="flex justify-center items-center cursor-pointer bg-blue-700 text-rose-50 h-10 w-full rounded-md mt-[1.875rem]"
            onClick={handleTopicAdd}
          >
            <span>Add more topics</span>
          </div>}
        <input
          className="bg-blue-700 text-rose-50 h-10 w-28 rounded-md mt-5 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div >
  )
}

export default FormInputs;
