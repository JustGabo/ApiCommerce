
function Try() {
  return (
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-purple-400 lg:text-4xl">Try it</h2>

        <p className="text-base lg:text-base">Run this in your console or project to fetch the products</p>


        <div className="lg:w-[50%] w-[100%] h-[25%] border p-4 text-sm lg:text-base">
            <p>{`fetch("http://localhost:4000/api/products")`}</p>
            <p>{`.then((res) => res.json())`}</p>
            <p>{`.then((data) => console.log(data)`}</p>
        </div>
    </div>
  )
}

export default Try