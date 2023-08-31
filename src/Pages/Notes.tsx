
import NoteCreate from '../components/ui/NoteCreate'
import { useQuery } from 'react-query'
import { fetchNotes } from '../services/api'
import NoteItem from '../components/ui/NoteItem';



const Notes = () => {


  const notesData = useQuery("notes", fetchNotes);
  // console.log(notesData, "notesdata")
  return (
    <>

      <div className="flex flex-col items-center pt-8">
        <div className="w-1/2">
          <NoteCreate />
        </div>
        {notesData.isLoading || notesData.data?.length == 0 ? (
          <div className="min-h-screen min-w-full flex items-center justify-center text-2xl opacity-75 font-black ">
            Your Notes will Appear here
          </div>
        ) : (
          <div className="w-full flex flex-row justify-center flex-wrap gap-2 p-2 mt-5 ">
            {
              notesData.data?.map((item) => {
                return (
                  <NoteItem key={item.note} value={item} />
                )
              })
            }
          </div>
        )}
      </div>

    </>
  )
}

export default Notes