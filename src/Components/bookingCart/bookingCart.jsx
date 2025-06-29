import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { Link } from "react-router-dom";
import { bookingCancle, bookingUser, bookTrip } from "../../store/booking/bookingslic";
import { createPaymentSession } from "../../store/payment/paymentslic";


export default function Cart() {
   
    const dispatch = useDispatch();
useEffect(()=>{

dispatch(bookingUser())

},[dispatch])
const {list}=useSelector((state)=>state.booking)
  const onCancell= async(id)=>{
 await    dispatch(bookingCancle({userid:id}))
    await dispatch(bookingUser())
  }

  const handlePay = async (bookingId) => {
    
    if (bookingId) {
      const result = await dispatch(createPaymentSession({ bookingId }));
      if (result.meta.requestStatus === 'fulfilled') {
        window.location.href = result.payload; // فتح صفحة الدفع
      }}}
    return (
        <>
            <div className="pt-5 " >
            </div>
            {list.length > 0 ? (
                <div className="mt-5 py-5 container mx-auto">
                    <table className="table-auto w-full border-separate border-spacing-2">
                        <thead>
                            <tr>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">#</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">image</th>
                                                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">name</th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">orderType</th>
                                 {/* <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">BookingDate</th> */}
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Total Price </th>

                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">payment </th>
                                <th className="text-left py-2 px-4 bg-gray-700 rounded text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((book,index) => (
                                <tr key={book.bookingId} className="hover:bg-gray-100">
                                    <td className="text-center py-2">{1+index}</td>
                                    <td className="py-2 px-4">
                                        <img src={book.orderCoverPhoto} alt={book.tripLabel} className="w-16 h-16 object-cover rounded-lg shadow-md" />
                                    </td>
                                      <td className="py-2 px-4 flex items-center justify-center space-x-2">
                                      
                                        <div className="text-center font-semibold max-w-[200px]">{book.orderName}</div>
                                       
                                    </td>
                                    <td className="py-2 px-4">{book.orderType}</td>
                                          {/* <td className="py-2 px-4">{book.createdAt}</td> */}
                                    <td className="py-2 px-4">{book.totalPrice} $</td>
                                  
                                    <td className="py-2 px-4">{ book.bookingStatus==="APPROVED" ?
                                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold  bg-green-100 text-green-700`}>
      <span className="mr-1">✅</span> conformed
    </span>

                       
: book.orderStatus==="PENDING" ?
            
           
                                      <span className={`inline-flex items-center px-3 py-2 rounded-xl text-sm font-semibold bg-gray-400 text-white`}>
      <span className="mr-1">⏳</span> pending
    </span>                 :              <span className={`inline-flex items-center px-3 py-2 rounded-xl text-sm font-semibold bg-red-700 text-white`}>
      <span className="mr-1">❌ </span> cancelled
    </span>                 
                                        
                                        }
                                        
                                        
                                        
                                         </td>
                                    <td className="py-2 px-4">
                                         <button 
                                          
                                            className={`${book.orderStatus ==="PENDING"? "bg-green-500 hover:bg-green-700":"bg-slate-400 hover:bg-green-700" } mx-1 text-white px-6 py-2 rounded-lg `}
                                        onClick={()=>handlePay(book.orderId)}
                                        >
                                            pay
                                        </button>
                                        {
                                            book.orderStatus==='CANCELLED'?
                                             <button 
                                             disabled
                                            className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                                          
                                        >
                                            canceled
                                        </button>:
                                         <button
                                            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                                            onClick={() =>onCancell(book.orderId)}
                                        >
                                            cancel
                                        </button>

                                        }
                                       
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            ) : (
                <div className="container mx-auto flex flex-col items-center justify-center py-10">
                    <div className="mb-4">
                    <h5 className="text-gray-600 text-4xl ">
                        No Product In Cart 
                    </h5>
                    </div>
                    <Link
                        to="/"
                        className="bg-sky-900 text-white px-6 py-2 rounded-lg hover:bg-sky-950 no-underline"
                    >
                        Go To Shopping
                    </Link>
                </div>
            )}
        </>
    );
}

