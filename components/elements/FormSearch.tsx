"use client";

import { Form, Input, DatePicker, Button } from "antd";
import React from "react";

const FormSearch = () => {
  const { RangePicker } = DatePicker;
  return (
    <div>
      <div className="flex justify-center gap-24 mt-5">
        <div className="flex flex-col items-center">
          <div className="bg-indigo-500 rounded-full w-fit flex items-center p-2 cursor-pointer">
            <i className="bx bx-building-house text-3xl text-white" />
          </div>
          <p className="text-gray-500">Hotel</p>
        </div>
        <div className="flex flex-col items-center">
          <div className=" rounded-full w-fit flex items-center p-2 cursor-pointer">
            <i className="bx bxs-plane-alt text-3xl text-gray-500" />
          </div>
          <p className="text-gray-500">Flight</p>
        </div>
        <div className="flex flex-col items-center">
          <div className=" rounded-full w-fit flex items-center p-2 cursor-pointer">
            <i className="bx bx-car text-3xl text-gray-500" />
          </div>
          <p className="text-gray-500">Car</p>
        </div>
      </div>
      <div className="mt-5">
        <Form>
          <Form.Item>
            <Input
              prefix={<i className="bx bxs-map text-xl text-gray-500" />}
            />
          </Form.Item>
          <Form.Item>
            <RangePicker className="w-full" />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<i className="bx bxs-group text-xl text-gray-500" />}
            />
          </Form.Item>
          <div className="flex justify-center">
            <Button
              type="primary"
              className="w-1/3 p-5 flex items-center justify-center"
            >
              Search
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormSearch;
