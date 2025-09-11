
const ColumnStructure = () => {
  return (
<div className="flex flex-col bg-yellow-200 w-[200px] h-[500px]">
          <div>
            <input type="text" />
          </div>
          <div className="flex w-full h-full">
            <div>
              <input type="checkbox" />
              <input type="text" />
            </div>
          </div>
          <div className="flex ">
            <button>+Add task</button>
          </div>
        </div>
        );
};

export default ColumnStructure;