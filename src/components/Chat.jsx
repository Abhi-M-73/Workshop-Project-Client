import React from 'react';

const Chat = () => {
    return (
        <div className="bg-white w-full max-w-3xl mx-auto rounded-2xl shadow-md flex flex-col h-full">
            <div className="border-b border-gray-200 p-4">
                <h1 className="text-2xl font-bold text-center text-gray-800">Chat Section</h1>
            </div>

            <div className="flex-1 p-5 overflow-y-auto space-y-3">
                <div className="bg-gray-100 p-3 rounded-lg w-fit max-w-[75%]">
                    <p className="text-sm text-gray-800">Hello! How can I help you today?</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg w-fit max-w-[75%] self-end">
                    <p className="text-sm text-gray-800">I want to know more about your services.</p>
                </div>
            </div>

            <div className="border-t border-gray-300 p-4">
                <div className="flex gap-2 items-center">
                    <textarea
                        name="input"
                        placeholder="Type your message..."
                        className="border border-gray-300 rounded-lg w-full p-2 resize-none focus:outline-none focus:ring-1 focus:ring-[#005fc4]"
                        rows={1}
                    ></textarea>
                    <button className="button">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
