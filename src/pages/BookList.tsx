// import { useGetBooksQuery } from '@/app/api'
// import type { Book } from '@/types/book'
import React, { useEffect, useState }  from 'react';

interface Book {
  _id: string
  title: string
  author: string
  genre: string
  isbn: string
  description: string
  copies: number
  available: boolean
  createdAt: string
  updatedAt: string
}

const BookList = () => {
  // const [loading, setLoading] = useState<boolean>(true)
  // const [error, setError] = useState<string | null>(null)

  //   books = [
  //   {
  //     _id: '1',
  //     title: "I don't know anything",
  //     author: 'Humayun Ahmed',
  //     genre: 'SCIENCE',
  //     isbn: '6548972583',
  //     copies: 48,
  //     available: true,
  //   },
  //   {
  //     _id: '2',
  //     title: 'The Ordinary Guidence V3',
  //     author: 'Promi Hawking',
  //     genre: 'SCIENCE',
  //     isbn: '978034587834234',
  //     copies: 10,
  //     available: false,
  //   },
  // ];
  
  const [books, setBooks] = useState<Book[]>([])
  // setBooks(books);

  useEffect(() => {
  const dummyBooks = [
    {
      _id: '1',
      title: "I don't know anything",
      author: 'Humayun Ahmed',
      genre: 'SCIENCE',
      isbn: '6548972583',
      copies: 48,
      available: true,
    },
    {
      _id: '2',
      title: 'The Ordinary Guidence V3',
      author: 'Promi Hawking',
      genre: 'SCIENCE',
      isbn: '978034587834234',
      copies: 10,
      available: false,
    },
  ]

  setBooks(dummyBooks) // ✅ Use the setter function
}, [])


  // useEffect(() => {
  //   // fetch('https://ph-level2-b5-assignment-3-cxgy.vercel.app/api/books')
  //   fetch('http://localhost:5000/api/books')
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch books')
  //       }
  //       return res.json()
  //     })
  //     .then((data) => {
  //       setBooks(data.data) // API returns { success, message, data: [] }
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       setError(err.message)
  //       setLoading(false)
  //     })
  // }, [])

// if (loading) return <p className="text-center mt-4">Loading books...</p>
// if (error) return <p className="text-center text-danger mt-4">{error}</p>

  

// const BookList = () => {
  // const { data: books, isLoading, isError } = useGetBooksQuery();
//   const { data: books, error, isLoading, isSuccess } = useGetBooksQuery()

// console.log({ books, error, isLoading, isSuccess })
// console.log('🔍 BookList component rendered');
// return;

//   if (isLoading) return <p>Loading...</p>
//   if (isError) return <p>Failed to load books.</p>

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">📚 Book List</h2>
//       <table className="w-full border border-gray-300">
//         <thead className="bg-gray-100 text-left">
//           <tr>
//             <th className="p-2">Title</th>
//             <th className="p-2">Author</th>
//             <th className="p-2">Genre</th>
//             <th className="p-2">ISBN</th>
//             <th className="p-2">Copies</th>
//             <th className="p-2">Available</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books?.map((book: Book) => (
//             <tr key={book.id} className="border-t">
//               <td className="p-2">{book.title}</td>
//               <td className="p-2">{book.author}</td>
//               <td className="p-2">{book.genre}</td>
//               <td className="p-2">{book.isbn}</td>
//               <td className="p-2">{book.copies}</td>
//               <td className="p-2">{book.available ? '✅ Yes' : '❌ No'}</td>
//               <td className="p-2 space-x-2">
//                 <button className="text-blue-600">Edit</button>
//                 <button className="text-red-600">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default BookList

// const BookList = () => {

  // const books = [
  //   {
  //     _id: '1',
  //     title: "I don't know anything",
  //     author: 'Humayun Ahmed',
  //     genre: 'SCIENCE',
  //     isbn: '6548972583',
  //     copies: 48,
  //     available: true,
  //   },
  //   {
  //     _id: '2',
  //     title: 'The Ordinary Guidence V3',
  //     author: 'Promi Hawking',
  //     genre: 'SCIENCE',
  //     isbn: '978034587834234',
  //     copies: 10,
  //     available: false,
  //   },
  // ]

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📚 Book List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>ISBN</th>
              <th>Copies</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.isbn}</td>
                <td>{book.copies}</td>
                <td>
                  {book.available ? (
                    <span className="badge badge-success">Available</span>
                  ) : (
                    <span className="badge badge-danger">Out of Stock</span>
                  )}
                </td>
                <td>
                  <button className="btn btn-sm btn-primary mr-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookList;
