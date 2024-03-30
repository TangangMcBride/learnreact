import { useState } from "react";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [Multipleselect, setMultipleselect] = useState(false);
  const [multiselect, setMultiselect] = useState([]);

  const HandleSingleSelection = function Click(itemid) {
    setSelected(itemid === selected ? null : itemid);
  };

  const HandledMultipleSelection = function Click(itemid) {
    const multiselectCopy = [...multiselect];
    const IdIndex = multiselectCopy.indexOf(itemid);
    if (IdIndex === -1) multiselectCopy.push(itemid);
    else multiselectCopy.splice(IdIndex, 1);

    setMultiselect(multiselectCopy);

   
  };
  console.log(multiselect);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <button
        onClick={() => setMultipleselect(!Multipleselect)}
        className="gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Enable MultiSelection
      </button>
      <div className="Accordion gap-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              onClick={
                Multipleselect
                  ? () => HandledMultipleSelection(item.id)
                  : () => HandleSingleSelection(item.id)
              }
              className="dataitem gap-2"
            >
              <h3
                className="text-2xl font-bold tracking-tight text-white"
                key={item.id}
              >
                {item.question}
              </h3>

              {selected === item.id  || multiselect.indexOf(item.id) !== -1 ? (
                <div key={item.id}>{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <p>Data not Found</p>
        )}
      </div>
    </div>
  );
}
export default Accordion;
