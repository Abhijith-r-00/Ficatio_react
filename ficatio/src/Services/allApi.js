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
  export const getItem=async()=>{
    return await commonApi("get","item","")
  }
  export const addToCart=async(cartdata)=>{
    return await commonApi("post","cart",cartdata)
  }
  export const getAllAdded=async()=>{
    return await commonApi("get","cart","")
  }
  export const deleteCartItem=async(id)=>{
        return await commonApi("Delete",`cart/${id}`,{})
  }