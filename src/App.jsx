import Countercard from "./components/Countercard.jsx";

function App() {

    return (
        <div style={{
            height: "100vh",
            background: "linear-gradient(135deg, #EB5969, #f7a1ab, #6C63FF, #11998e, #f7971e)",
            backgroundSize: "400% 400%",
            animation: "gradientShift 10s ease infinite",
        }} className="flex justify-center items-center p-10 sm:p-16 bg-[#EB5969]">
            <div className="bg-white p-5 sm:p-10 rounded-md">
                <Countercard />
            </div>
        </div>)
}

export default App