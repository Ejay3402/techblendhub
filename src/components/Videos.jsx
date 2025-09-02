import React from 'react'

const Videos = () => {
  return (
    <div>Videos</div>
  )
}

export default Videos

/* 

1 : <iframe width="560" height="315" src="https://www.youtube.com/embed/_j4rL96sSNs?si=BYIWK6ekPE5hVy5y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

2 : <iframe width="560" height="315" src="https://www.youtube.com/embed/PJM2WYAKJD4?si=PuiP0P7aEffMYWgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

3 : <iframe width="560" height="315" src="https://www.youtube.com/embed/ax060VxoYm8?si=ndWv4Xzolgvdcj7W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

4 : 




ioons for the payment method

    - copy : import { FaCopy } from "react-icons/fa6";

    dollar : import { FaDollarSign } from "react-icons/fa6";



    mport { useState } from "react";

export default function App() {
  const [copied, setCopied] = useState(false);

  const accountNumber = "1234567890"; // replace with your real account number
  const bankName = "First Bank Plc"; // replace with your real bank name

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000); // remove "Copied!" after 2s
  };

  return (
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
        <h1 className="text-xl font-bold mb-2">Send Money</h1>
        <p className="text-gray-700">{bankName}</p>
        <p className="text-2xl font-mono my-4">{accountNumber}</p>

        <button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Copy Account Number
        </button>

        {copied && (
          <p className="text-green-600 mt-3 text-sm font-medium">Copied!</p>
        )}
      </div>
    </div>
  );
}

*/