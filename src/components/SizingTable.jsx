"use client";
import { useState } from "react";
import { Drawer } from "vaul";
import Icons from "./Icons";

function SizingTable() {
  const [isOpen, setIsOpen] = useState(false);

  // Static data for the size chart
  const sizeData = [
    { size: "S", chest: "28-31", waist: "44-56", hip: "34-38", height: "150-160", shoulder: "14-15" },
    { size: "M", chest: "32-35", waist: "46 - 58", hip: "36-40", height: "160-165", shoulder: "15-16" },
    { size: "L", chest: "36-39", waist: "48-60", hip: "38-42", height: "165-170", shoulder: "16-17" },
    { size: "34", chest: "40-43", waist: "50-62", hip: "40-44", height: "170-175", shoulder: "17-18" },
    { size: "32", chest: "44-47", waist: "52-64", hip: "42-46", height: "175-180", shoulder: "18-19" },
  ];

  return (
    <Drawer.Root dismissible={true} open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger className="cursor-pointer">
        <div className="flex items-center gap-2 text-textSecondary">
          <h2 className="text-[16px] font-normal">مشاهده جدول سایزبندی</h2>
          <Icons name="detail" />
        </div>
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Drawer.Title className="hidden" />

        <Drawer.Content className="bg-white p-4 z-50 flex flex-col font-font gap-6 fixed bottom-0 left-0 right-0 max-h-[100vh] rounded-t-[10px]">
          <Drawer.Handle />

          {/* Make Table Scrollable on X-Axis */}
          <div className="flex w-full h-full justify-center items-center">
          <div className="overflow-x-auto w-full border tablet:border-none tablet:flex tablet:justify-center tablet:items-center">
            <table className="w-max min-w-max rounded-lg tablet:border">
              <thead>
                <tr dir="rtl" className="bg-gray-100 font-medium">
                  <th className="w-[7rem] py-4 border whitespace-nowrap">سایز (cm)</th>
                  <th className="w-[7rem] py-4 border whitespace-nowrap">دور سینه (cm)</th>
                  <th className="w-[7rem] py-4 border whitespace-nowrap">دور کمر (cm)</th>
                  <th className="w-[7rem] py-4 border whitespace-nowrap">دور باسن (cm)</th>
                  <th className="w-[7rem] py-4 border whitespace-nowrap">قد (cm)</th>
                  <th className="w-[7rem] py-4 border whitespace-nowrap">شانه (cm)</th>
                </tr>
              </thead>
              <tbody>
                {sizeData.map((item, index) => (
                  <tr key={index} className={`font-light ${index % 2 === 0 ? "bg-gray-50" : ""}`}>
                    <td className="w-[7rem] py-4 border text-center">{item.size}</td>
                    <td className="w-[7rem] py-4 border text-center">{item.chest}</td>
                    <td className="w-[7rem] py-4 border text-center">{item.waist}</td>
                    <td className="w-[7rem] py-4 border text-center">{item.hip}</td>
                    <td className="w-[7rem] py-4 border text-center">{item.height}</td>
                    <td className="w-[7rem] py-4 border text-center">{item.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>

        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default SizingTable;
