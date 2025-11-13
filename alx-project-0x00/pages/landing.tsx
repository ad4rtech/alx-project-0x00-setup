import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      <Card />

      {/* Button Variants */}
      <div className="flex flex-wrap gap-4 mt-6">
        {/* Small Buttons */}
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm px-3 py-1" />
        <Button title="Small Rounded-md" styles="text-sm rounded-md px-3 py-1" />
        <Button title="Small Rounded-full" styles="text-sm rounded-full px-3 py-1" />
        <Button title="Small Rounded-lg" styles="text-sm rounded-lg px-3 py-1" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded-sm" styles="text-base rounded-sm px-4 py-2" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md px-4 py-2" />
        <Button title="Medium Rounded-full" styles="text-base rounded-full px-4 py-2" />
        <Button title="Medium Rounded-lg" styles="text-base rounded-lg px-4 py-2" />

        {/* Large Buttons */}
        <Button title="Large Rounded-sm" styles="text-lg rounded-sm px-6 py-3" />
        <Button title="Large Rounded-md" styles="text-lg rounded-md px-6 py-3" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full px-6 py-3" />
        <Button title="Large Rounded-lg" styles="text-lg rounded-lg px-6 py-3" />
      </div>
    </div>
  );
};

export default Landing;
