import BooksData from "@/views/stock/BooksData";

export default async function page() {
  let data = await BooksData();
  return (
    <>
    {data}
    </>
  )
}
