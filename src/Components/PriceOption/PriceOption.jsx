import React from "react";
import SinglePriceOption from "../SinglePriceOption/SinglePriceOption";

const PriceOption = () => {
  const membershipOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Access to weight lifting area",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Access to all gym equipment",
        "Unlimited fitness classes",
        "Personal trainer consultation",
        "Sauna and spa access",
        "Towel service",
      ],
    },
    {
      id: 3,
      name: "Student Membership",
      price: 19.99,
      features: [
        "Access to cardio equipment",
        "Access to weight lifting area",
        "Student ID required",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Price in The Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {membershipOptions.map((option) => (
          <SinglePriceOption
            key={option.id}
            option={option}
          ></SinglePriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
