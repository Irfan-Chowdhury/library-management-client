import { useGetBooksQuery } from '@/app/api'
import type { Book } from '@/types/book'

const BookList = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Failed to load books.</p>

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">📚 Book List</h2>
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Author</th>
            <th className="p-2">Genre</th>
            <th className="p-2">ISBN</th>
            <th className="p-2">Copies</th>
            <th className="p-2">Available</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book: Book) => (
            <tr key={book._id} className="border-t">
              <td className="p-2">{book.title}</td>
              <td className="p-2">{book.author}</td>
              <td className="p-2">{book.genre}</td>
              <td className="p-2">{book.isbn}</td>
              <td className="p-2">{book.copies}</td>
              <td className="p-2">{book.available ? '✅ Yes' : '❌ No'}</td>
              <td className="p-2 space-x-2">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookList
