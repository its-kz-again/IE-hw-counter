import React, {useState ,useEffect} from 'react';

export default function Counter({data, state}){
  const [value, setValue] = useState(data);

  useEffect(() => {
      if (state == "Reset"){
        setValue(0);
      }
      else if (state == "Start Up Counting"){
        const upCount = value >= 0 && setInterval(() => setValue(value + 1), 1000);
        return () => clearInterval(upCount);
      }
      else if (state == "Start Down Counting"){
        const upDown = value > 0 && setInterval(() => setValue(value - 1), 1000);
        return () => clearInterval(upDown);
      }

      else if (state == "Pause Up Counting"){
        console.log("Pause Up");
      }
      else if (state == "Pause Down Counting"){
        console.log("Pause Down");
      }
  }, [value, state]);


  return(
    <div>Counter: {value}</div>
  );
}
