import Book from "@/models/Book";
import Image from "next/image";
import Russian from '@/assets/images/Russian.jpg';
import JustIm from '@/assets/images/justIm.jpg';
import Midnight from '@/assets/images/Midnight.jpg';
import Untamed from '@/assets/images/Untamed.jpg';
import Viscount from '@/assets/images/Viscount.jpg';
import VanishingHalf from '@/assets/images/VanishingHalf.jpg';


export default async function BooksData() {
    var bookList = await fetch('https://simple-books-api.glitch.me/books');
    var result = await bookList.json();
    const books: Book[] = result.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          type: item.type,
          available : item.available
        };
      });

  return (
    <div>
        {books.map((book: Book) => (
       <div key={book.id} className="bg-gray-600 flex items-end space-x-5 px-10 py- border-b p-2">

       <Image height={200} width={100} alt="" src={
        book.id== "1"? Russian:
        book.id== "2"? JustIm:
        book.id== "3"? VanishingHalf:
        book.id== "4"? Midnight:
        book.id== "5"? Untamed : Viscount}/>
    <div className="text-2xl text-white">
     <p className="flex space-x-5"> <span className="font-semibold">ID: </span> <span>{book.id} </span></p>
     <p className="flex space-x-5"> <span className="font-semibold">Name:</span> <span>{book.name} </span></p>
     <p className="flex space-x-5"> <span className="font-semibold">Type: </span> <span>{book.type} </span></p>
     <p className="flex space-x-5 truncate sm:max-w-xs"> <span className="font-semibold">Description: </span> <span>
    some data will be here..... </span></p>
   </div>
   </div>
      ))}
    </div>
  )
}
