import commonApi from "./commonApi";
export const addUser=async(data)=>{
 return await commonApi("post","registered",data)
}
export const getUser=async()=>{
    return await commonApi("get","registered","")
   }
   export const getVehicles = async () => {
    return await commonApi("get", "vehicle", "");
  };

  export const getcommonParts = async () => {
    return await commonApi("get", `CommonParts`, "");
  };
  