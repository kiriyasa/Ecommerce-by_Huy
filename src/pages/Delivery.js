import React from 'react'
import {fs} from '../firebase'
import { useState,useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore'

function Delivery() {

    const [buyerlist, setBuyerList] = useState([]);

    const CollectionRef = collection(fs, "Buyer-info");

    const getBuyerList = async () => {
      try {
        const data = await getDocs(CollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBuyerList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    useEffect(() => {
        getBuyerList();
    }, []);

    console.log(buyerlist)
    return (
        <div>
            {/* <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4"> */}
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full mt-20 max-w-2xl mx-auto mb-50 bg-white shadow-lg rounded-sm border border-gray-200 ">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800">Customers</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Cell</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Address</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Quantity</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Payment</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                    {buyerlist.map((item) => (
                                        <tr>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="flex items-center">                                            
                                                <div class="font-medium text-gray-800">{item.BuyerName}</div>
                                            </div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="text-left">{item.BuyerCell}</div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="text-left font-medium text-green-500">{item.BuyerAddress}</div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="text-left ml-7">{item.BuyerQuantity}</div>
                                        </td>
                                        <td class="p-2 whitespace-nowrap">
                                            <div class="text-lg text-left">{item.BuyerPayment}</div>
                                        </td>
                                    </tr>                
                                    ))}                                                                                                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </section> */}
        
        </div>
    )
}

export default Delivery