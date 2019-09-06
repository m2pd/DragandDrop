import React, { useState, useCallback } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import Dustbin from "../Dustbin";
import Box from "../Box";
import ItemTypes from "../ItemTypes";
import update from "immutability-helper";
const Container = () => {
  const [dustbins, setDustbins] = useState([
   
    {
      accepts: [
        ItemTypes.PAPER,
        ItemTypes.GLASS,
        NativeTypes.URL,
        ItemTypes.FNAME
      ],
      lastDroppedItem: null
    },
    {
      accepts: [
        ItemTypes.PAPER,
        NativeTypes.FILE,
        ItemTypes.NUM,
        ItemTypes.BIR
      ],
      lastDroppedItem: null
    }
  ]);
  const [boxes] = useState([
    { name: "Bottle", type: ItemTypes.GLASS },
    { name: "Banana", type: ItemTypes.FOOD },
    { name: "Magazine", type: ItemTypes.PAPER },
    { name: "Doan", type: ItemTypes.FNAME },
    { name: "Nguyen Van A", type: ItemTypes.FNAME },
    { name: 29, type: ItemTypes.NUM },
    { name: "13/03/1997", type: ItemTypes.BIR },
    { name: "13/03/1996", type: ItemTypes.BIR },

  ]);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item.name //Xét giá trị xuất value trên box tại đây
            }
          }
        })
      );
    },
    [droppedBoxNames, dustbins]
  );
  return (
    <div>
        <div className="mt-30">
                    
                <div style={{ 
                display:"flex",
                flexDirection:"column",
                 clear: "both",
                  textAlign:"center",
                  marginTop:"50px"
                   }}>
                    {boxes.map(({ name, type }, index) => (
                    <Box name={name} type={type} key={index} />
                    ))}
                </div>
            </div> 
    </div>
  );
};
export default Container;
